import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Otunba (Hon.) Bisi Oyedele | Citiside",
  description:
    "Official portfolio of Otunba (Hon.) Bisi Oyedele, Member Representing Ipokia/Idiroko State Constituency at the Ogun State House of Assembly.",
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