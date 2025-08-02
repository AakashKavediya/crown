import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "CROWN - Club for Radio Operations and Wireless Network",
  description: "Official website of CROWN (Club for Radio Operations and Wireless Network) - Amateur Radio Club",
  keywords: "amateur radio, ham radio, CROWN, radio operations, wireless network",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#6899e1",
  icons: {
    icon: '/crown_logo.jpg',
    shortcut: '/crown_logo.jpg',
    apple: '/crown_logo.jpg',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: "CROWN - Club for Radio Operations and Wireless Network",
    description: "Official website of CROWN (Club for Radio Operations and Wireless Network) - Amateur Radio Club",
    images: ['/crown_logo.jpg'],
  },
  twitter: {
    card: 'summary',
    title: "CROWN - Club for Radio Operations and Wireless Network",
    description: "Official website of CROWN (Club for Radio Operations and Wireless Network) - Amateur Radio Club",
    images: ['/crown_logo.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
