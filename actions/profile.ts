'use server'

import { createClient } from '../utils/supabase/server'
import { db } from '../src/prisma/db'
import { revalidatePath } from 'next/cache'

export async function getProfile() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) return null

  const profile = await db.orm.public.User.where({ id: user.id }).first()

  return profile
}

export async function updateProfileSettings(prevState: any, formData: FormData) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) return { error: 'Not authenticated', success: '' }

  const timezone = formData.get('timezone') as string
  const deliveryWindowsStr = formData.getAll('deliveryWindows') as string[]
  const deliveryWindows = deliveryWindowsStr.map(Number)

  if (!timezone) return { error: 'Timezone is required', success: '' }

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
