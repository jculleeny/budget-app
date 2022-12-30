import { createClient } from '@supabase/supabase-js'

export default createClient (
  process.env.NEXT_PUBLIC_DB_URL,
  process.env.NEXT_PUBLIC_DB_KEY
)