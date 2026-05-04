export type EnrollmentPayload = {
  parentName: string;
  email: string;
  phone: string;
  childName: string;
  childAge: number;
  interests: string;
  notes: string;
};

export function validateEnrollmentPayload(payload: EnrollmentPayload) {
  const errors: string[] = [];

  if (!payload.parentName.trim()) errors.push("Parent or guardian name is required.");
  if (!payload.email.trim()) errors.push("Email address is required.");
  if (!payload.phone.trim()) errors.push("Phone number is required.");
  if (!payload.childName.trim()) errors.push("Child name is required.");
  if (!Number.isInteger(payload.childAge) || payload.childAge < 8 || payload.childAge > 16) {
    errors.push("Child age must be between 8 and 16.");
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}
