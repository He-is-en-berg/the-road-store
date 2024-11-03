import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://lfangmppnowruujdynrw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxmYW5nbXBwbm93cnV1amR5bnJ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg4MzY5OTMsImV4cCI6MjA0NDQxMjk5M30.a3Cl0thRmkY_Kgl3qDGu7kd178F3m2R2nhXBtGkYJn4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
