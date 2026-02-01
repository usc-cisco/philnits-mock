import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import HeaderLink from "./components/HeaderLink";
import Footer from "./components/Footer";
import ClientLayout from "./components/ClientLayout";
import ThemeToggle from "./components/ThemeToggle";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PhilNITS Mock Exam",
  description: "An online PhilNITS FE AM Mock Exam",
  icons: {
    icon: "/cisco-logo-white.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <ClientLayout>
          <>
            <header className="bg-primary text-primary-foreground px-6 py-4">
              <div className="container mx-auto flex items-center justify-between">
                <HeaderLink />
                <ThemeToggle />
              </div>
            </header>
            <main className="flex-1 p-4 md:px-6">
              {children}
            </main>
            <Footer />
          </>
        </ClientLayout>
      </body>
    </html>
  );
}
