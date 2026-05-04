import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Future Tech Leaders Program",
  description:
    "A 12-month hands-on tech program for children ages 8 to 16 focused on digital literacy, AI, coding, creativity, and confidence."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
