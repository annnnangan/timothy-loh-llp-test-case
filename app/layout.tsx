import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { ToastContainer } from "react-toastify";
import { SessionProvider } from "next-auth/react";
import QueryClientProvider from "@/components/QueryClientProvider";

const dmSerifDisplay = localFont({
  src: [
    {
      path: "../public/fonts/dm-serif-display/DMSerifDisplay-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/dm-serif-display/DMSerifDisplay-Italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-dmSerifDisplay",
  display: "swap",
});

const futura = localFont({
  src: [
    {
      path: "../public/fonts/futura/Futura-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/futura/Futura-ThinItalic.ttf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../public/fonts/futura/Futura-ThinRegular.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/futura/Futura-L.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/futura/Futura-BookBT.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/futura/Futura-M.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/futura/Futura-B.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-futura",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Timothy Loh LLP",
    default: "Timothy Loh LLP | Leading Independent Hong Kong Law Firm",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSerifDisplay.variable} ${futura.variable} antialiased min-w-xs`}>
        <SessionProvider>
          <QueryClientProvider>
            {children} <ToastContainer />
          </QueryClientProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
