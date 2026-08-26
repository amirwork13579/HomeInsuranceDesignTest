import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Home Insurance Design Test",
  description:
    "A responsive Home Claims Assist homepage design replica for insurance claim management services.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
