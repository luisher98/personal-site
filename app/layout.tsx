import "./styles/styles.scss";
import type { Metadata } from "next";
import Navigation from "./components/Navigation";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <div className="dark:bg-slate-900 dark:text-white p-16">
          <div className="container mx-auto py-6">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
