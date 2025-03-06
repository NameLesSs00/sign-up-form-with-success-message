import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sign-Up-Form",
  description: "Trying my best",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="sm:bg-[hsl(235,18%,26%)] sm:flex sm:justify-center sm:items-center sm:h-screen"
      >
        {children}
      </body>
    </html>
  );
}
