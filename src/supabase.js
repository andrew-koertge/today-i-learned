import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://yajfxmtqjfzlrfmfokwz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlhamZ4bXRxamZ6bHJmbWZva3d6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ3ODA0NDYsImV4cCI6MTk5MDM1NjQ0Nn0.ttdvkLw2jBWWRFuLhPVf-k6KkkgjeOMjrQGq8V-JFcg';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase