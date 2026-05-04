# Future Tech Leaders Website

Marketing website scaffold for the Future Tech Leaders Program.

## Stack

- Next.js
- TypeScript
- Tailwind CSS
- Supabase

## Run locally

```bash
npm install
npm run dev
```

## Supabase setup

1. Create a Supabase project.
2. Run the SQL in `supabase/schema.sql`.
3. Copy `.env.example` to `.env.local`.
4. Set `NEXT_PUBLIC_SUPABASE_URL`.
5. Set `SUPABASE_SERVICE_ROLE_KEY`.
6. Set `ADMIN_USERNAME` and `ADMIN_PASSWORD` for `/admin`.

The enrollment form submits to `POST /api/enroll`, and that route writes to the `enrollments` table using the server-side Supabase client.

## Current pages

- `/` homepage
- `/about`
- `/program`
- `/parents`
- `/showcase`
- `/enroll`
- `/admin/login`
- `/admin/enrollments`

## Next recommended steps

1. Add your real contact details and media assets.
2. Protect `/admin/enrollments` with authentication.
3. Add email notifications for new applications.
