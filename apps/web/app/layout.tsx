import LayoutProvider from '@/providers/LayoutProvider';
import '../styles/globals.css';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trezo - Tailwind NextJS Admin Dashboard Template",
  description: "Tailwind NextJS Admin Dashboard Template",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" dir="ltr">
      <body>
        <LayoutProvider>{children}</LayoutProvider>
      </body>
    </html>
  );
}
