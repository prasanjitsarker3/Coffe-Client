import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ProviderRedux from "@/components/Redux/Provider/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Daily Cup",
  description: "Tea and Coffee",
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
