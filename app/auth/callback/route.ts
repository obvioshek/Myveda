import { NextResponse } from 'next/server'
import { createClient } from '../../../utils/supabase/server'
import { db } from '@/src/prisma/db'
import { hasDatabase, hasSupabase } from '@/lib/backend'

// Only same-site paths are allowed as the post-sign-in destination.
function safeNext(next: string | null) {
  return next && next.startsWith('/') && !next.startsWith('//') ? next : '/'
}

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  // if "next" is in param, use it as the redirect URL
  const next = safeNext(searchParams.get('next'))

  if (code && hasSupabase()) {
    const supabase = await createClient()
    const { data, error } = await supabase.auth.exchangeCodeForSession(code)
    if (!error) {
      const user = data.user
      // Every member gets a profile row the first time they sign in.
      if (user && hasDatabase()) {
        try {
          const existing = await db.orm.public.User.where({ id: user.id }).first()
          if (!existing) {
            await db.orm.public.User.create({
              id: user.id,
              name: user.email?.split('@')[0] || 'Member',
              timezone: 'Asia/Kolkata',
              deliveryWindows: [9, 13, 18],
            })
          }
        } catch (err) {
          console.error('[auth] could not create profile:', err)
        }
      }
      return NextResponse.redirect(`${origin}${next}`)
    }
  }

  // return the user to an error page with instructions
  return NextResponse.redirect(`${origin}/?error=AuthFailed`)
}
