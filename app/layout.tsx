import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider,SignedIn, SignedOut} from '@clerk/nextjs'
import { Footer, Navbar } from "@/components";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Car <Rent></Rent> App",
  description: "Discover world's best car showcase application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Navbar/>
            {children}
          <Footer/>
        </body>
      </html>
    </ClerkProvider>

  );
}
