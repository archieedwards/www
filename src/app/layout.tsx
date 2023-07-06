import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Archie Edwards",
  description: "Engineer at Veed.io",
};

export const runtime = "edge";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} max-w-2xl p-4 sm:pt-64 mx-auto`}>
        {children}
      </body>
    </html>
  );
}
