'use server'

import { createClient } from '../utils/supabase/server'
import { redirect } from 'next/navigation'
import { hasSupabase } from '../lib/backend'

export async function signInWithEmail(prevState: any, formData: FormData) {
  const email = String(formData.get('email') ?? '').trim()

  if (!email) {
    return { success: '', error: 'Email is required' }
  }
  if (!hasSupabase()) {
    return { success: '', error: 'Sign-in is not open yet. Join the early list and we will email you.' }
  }

  const supabase = await createClient()

  // Redirect to a callback route that we will create to handle the auth session
  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/auth/callback?next=/home`,
    },
  })

  if (error) {
    return { success: '', error: error.message }
  }

  return { success: 'Check your email for the login link!', error: '' }
}

export async function signOut() {
  if (hasSupabase()) {
    const supabase = await createClient()
    await supabase.auth.signOut()
  }
  redirect('/')
}
