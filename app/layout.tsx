import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

const inter = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shear Insights",
  description:
    "Shear Insights is a inventory management system, task tracker, and much more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
