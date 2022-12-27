import { createClient } from '@supabase/supabase-js'

export default createClient (
  process.env.DB_URL,
  process.env.DB_KEY
)