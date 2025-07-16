import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  // Usa as "etiquetas secretas" que configuramos na Vercel
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}