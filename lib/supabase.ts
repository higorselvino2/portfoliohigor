import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Create a single supabase client for interacting with your database
// Fallback to dummy values to prevent build errors when env vars are missing
export const supabase = createClient(
  supabaseUrl || 'https://dummy.supabase.co', 
  supabaseKey || 'dummy-key'
);
