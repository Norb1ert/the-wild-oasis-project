// All this can be found on supabase

import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://cgpwasllrjpmxqmdblek.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNncHdhc2xscmpwbXhxbWRibGVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTcyMTEwNzksImV4cCI6MjAxMjc4NzA3OX0.EB8ex9SqOcxSnP9Mb40L4OVpuyxueOSSnQRZk4DUlj0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
