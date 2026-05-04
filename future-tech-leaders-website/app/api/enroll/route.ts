import { NextResponse } from "next/server";
import { validateEnrollmentPayload, type EnrollmentPayload } from "@/lib/enrollment";
import { getSupabaseServerClient } from "@/lib/supabase-server";

export async function POST(request: Request) {
  let payload: EnrollmentPayload;

  try {
    payload = (await request.json()) as EnrollmentPayload;
  } catch {
    return NextResponse.json(
      { message: "Invalid request body." },
      { status: 400 }
    );
  }

  const validation = validateEnrollmentPayload(payload);

  if (!validation.isValid) {
    return NextResponse.json(
      { message: "Validation failed.", errors: validation.errors },
      { status: 400 }
    );
  }

  try {
    const supabase = getSupabaseServerClient();
    const { error } = await supabase.from("enrollments").insert({
      parent_name: payload.parentName.trim(),
      email: payload.email.trim(),
      phone: payload.phone.trim(),
      child_name: payload.childName.trim(),
      child_age: payload.childAge,
      interests: payload.interests.trim() || null,
      notes: payload.notes.trim() || null
    });

    if (error) {
      return NextResponse.json(
        { message: "Failed to store enrollment.", errors: [error.message] },
        { status: 500 }
      );
    }

    return NextResponse.json({
      message: "Enrollment submitted successfully."
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unexpected server error.";

    return NextResponse.json({ message }, { status: 500 });
  }
}
