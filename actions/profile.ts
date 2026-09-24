'use server'

import { getCurrentUser } from '@/utils/supabase/server'
import { db } from '../src/prisma/db'
import { revalidatePath } from 'next/cache'
import { hasDatabase } from '@/lib/backend'

export async function getProfile() {
  const user = await getCurrentUser()

  if (!user || !hasDatabase()) return null

  try {
    return await db.orm.public.User.where({ id: user.id }).first()
  } catch {
    return null
  }
}

export async function updateProfileSettings(prevState: any, formData: FormData) {
  const user = await getCurrentUser()

  if (!user) return { error: 'Not authenticated', success: '' }

  const timezone = formData.get('timezone') as string
  const deliveryWindowsStr = formData.getAll('deliveryWindows') as string[]
  const deliveryWindows = deliveryWindowsStr.map(Number)

  if (!timezone) return { error: 'Timezone is required', success: '' }
  if (!deliveryWindows.length || deliveryWindows.some(h => !Number.isInteger(h) || h < 0 || h > 23)) {
    return { error: 'Choose at least one delivery window', success: '' }
  }
  try {
    new Intl.DateTimeFormat('en-US', { timeZone: timezone })
  } catch {
    return { error: 'That time zone is not recognised (try Asia/Kolkata)', success: '' }
  }
  if (!hasDatabase()) return { error: 'Settings cannot be saved right now', success: '' }

  try {
    await db.orm.public.User.where({ id: user.id }).update({
      timezone,
      deliveryWindows,
    })
    
    revalidatePath('/')
    return { success: 'Settings updated', error: '' }
  } catch (error: any) {
    return { error: error.message, success: '' }
  }
}
