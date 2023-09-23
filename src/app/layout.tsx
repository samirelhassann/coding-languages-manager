import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { DialogProvider } from "./providers/DialogContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Languages Manager",
  description: "Languages Manager",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="antialiased">
      <body className={inter.className}>
        <DialogProvider>{children}</DialogProvider>
      </body>
    </html>
  );
}
