import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";



export const metadata: Metadata = {
  title: "Meeraj Mathin | Full Stack Developer",
  description: "Full Stack Developer portfolio",
  icons: {
    icon: "/Meeraj.svg",
    shortcut: "/Meeraj.svg",
    apple: "/Meeraj.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/*  RIGHT: Everything visible goes inside the <body> */}
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
