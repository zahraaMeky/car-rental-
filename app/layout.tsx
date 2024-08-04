import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider} from '@clerk/nextjs'


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
        <body className="relative">
            {children}
        </body>
      </html>
    </ClerkProvider>

  );
}
