import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Red Carpet Awards",
  description: "The Red Carpet Awards is a celebration of the best in film.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body>
        {/* <SignedOut>
          <SignInButton forceRedirectUrl="/signup"/>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn> */}
        {children}
      </body>
    </html>
  </ClerkProvider>
  );
}
