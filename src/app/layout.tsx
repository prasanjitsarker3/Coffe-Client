import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ProviderRedux from "@/Components/Redux/Provider/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Daily Cup",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProviderRedux>{children}</ProviderRedux>
      </body>
    </html>
  );
}
