import { Inter } from "@next/font/google";

import Navigation from "@/app/components/Navigation";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={inter.className}>
        <div className="bg-gray-100 min-h-screen w-screen">
          <div className="max-w-screen-2xl m-auto bg-white">
            <Navigation />
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
