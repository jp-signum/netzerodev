import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NetZeroDev",
  description:
    "NetZeroDev — climate-tech systems, open environmental data workflows, and a retro learning center for resilient infrastructure.",
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
