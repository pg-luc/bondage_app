import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bondage",
  description: "Buy our latest Bondage equipment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
