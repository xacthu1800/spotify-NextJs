
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import SuperbaseProvider from "@/providers/SuperbaseProvider";

const font = Figtree({
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Spotify",
  description: "Listen to music",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body
        className={font.className}
      >
        <SuperbaseProvider>
          <Sidebar>
            {children}
          </Sidebar>
        </SuperbaseProvider>
       
      </body>
    </html>
  );
}
