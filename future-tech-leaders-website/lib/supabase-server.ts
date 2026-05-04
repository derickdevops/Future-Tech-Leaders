import { createClient } from "@supabase/supabase-js";

export function getSupabaseServerClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error("Supabase environment variables are missing.");
  }

  if (supabaseUrl.includes("/rest/v1")) {
    throw new Error(
      "NEXT_PUBLIC_SUPABASE_URL must be the project URL, for example https://your-project-id.supabase.co, not the /rest/v1 endpoint."
    );
  }

  return createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false
    }
  });
}

export type EnrollmentRecord = {
  id: number;
  created_at: string;
  parent_name: string;
  email: string;
  phone: string;
  child_name: string;
  child_age: number;
  interests: string | null;
  notes: string | null;
};

export async function listEnrollments() {
  const supabase = getSupabaseServerClient();
  const { data, error } = await supabase
    .from("enrollments")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return (data ?? []) as EnrollmentRecord[];
}
