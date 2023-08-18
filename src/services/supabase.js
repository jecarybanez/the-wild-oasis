import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://whllsxhllsiqxkmvkddu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndobGxzeGhsbHNpcXhrbXZrZGR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTExMjg3NDIsImV4cCI6MjAwNjcwNDc0Mn0.uqB1UHTp32cuV00MMiFkH6jG4P0tPeZEpC1Y6UrYPeg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
