import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import YandexMetric from "./(home)/ui/YandexMetric";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Такси Межгород | RusTransfer",
  description: "Такси по России 24/7, комфортные машинв, доступные тарифы!",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <AntdRegistry>{children}</AntdRegistry>
      <YandexMetric />
      </body>
    </html>
  );
}
