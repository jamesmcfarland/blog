import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "James's Blog",
  description: "James' thoughts on software development and random things.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
