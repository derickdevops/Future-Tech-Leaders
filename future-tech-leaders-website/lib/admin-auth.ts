const ADMIN_AUTH_COOKIE = "ftl_admin_auth";

export function getAdminAuthCookieName() {
  return ADMIN_AUTH_COOKIE;
}

export function getAdminCredentials() {
  const username = process.env.ADMIN_USERNAME;
  const password = process.env.ADMIN_PASSWORD;

  if (!username || !password) {
    throw new Error(
      "ADMIN_USERNAME and ADMIN_PASSWORD must be set for admin access."
    );
  }

  return { username, password };
}
