import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppin = Poppins(
  { subsets: ["latin"],
  weight: ["500", "600", "700", "800"]
 });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio as a self-taught programmer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppin.className}>{children}</body>
    </html>
  );
}
