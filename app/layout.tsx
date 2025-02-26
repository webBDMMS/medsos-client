import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { auth } from "@/auth";
import Providers from "@/components/custom/layouts/providers";

// Subsets are really important. CHECK BELOW FOR MORE INFO
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Providers session={session}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
