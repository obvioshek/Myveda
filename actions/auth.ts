'use server'

import { createClient } from '../utils/supabase/server'
import { redirect } from 'next/navigation'

export async function signInWithEmail(prevState: any, formData: FormData) {
  const email = formData.get('email') as string
  const supabase = await createClient()

  if (!email) {
    return { success: '', error: 'Email is required' }
  }

  // Redirect to a callback route that we will create to handle the auth session
  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/auth/callback`,
    },
  })

  if (error) {
    return { success: '', error: error.message }
  }

  return { success: 'Check your email for the login link!', error: '' }
}

export async function signOut() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  redirect('/')
}
