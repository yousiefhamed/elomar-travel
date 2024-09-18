import type { Metadata, Viewport } from "next";
import "./globals.css";

import { Tajawal } from "next/font/google";
import Nav from "./components/Nav";

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "العمر ترافيل - رحلات مخصصة لك بأمان وراحة.",
  description:
    "معنا، ستتعرف على أفضل الوجهات السياحية في مصر، من الآثار القديمة إلى الشواطئ الساحرة، في رحلات مليئة بالمغامرة والأمان. نقدم لك تجارب سياحية لا تُنسى تلبي احتياجات كل المسافرين.",
  keywords: "رحلات داخلية, سياحة في مصر, رحلات عائلية, سياحة آمنة, حجز رحلات",
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://elomar-travel.vercel.app",
    title: "اكتشف جمال مصر مع رحلات آمنة ومريحة - El-Omar Travel",
    description:
      "استمتع بأفضل الرحلات داخل مصر مع El-Omar Travel. اكتشف معالم مصر السياحية من الأهرامات إلى البحر الأحمر. حجز سهل وخدمة موثوقة.",
    images: "/seo/seo.png",
    locale: "ar_AR",
  },
  twitter: {
    card: "summary_large_image",
    site: "@elomartravel",
    title: "اكتشف جمال مصر مع رحلات آمنة ومريحة - El-Omar Travel",
    description:
      "رحلات مريحة وآمنة في مصر. احجز الآن مع El-Omar Travel لزيارة أفضل الأماكن السياحية!",
    images: "/seo/seo.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  minimumScale: 1.0,
  maximumScale: 1.0,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${tajawal.className} w-full max-w-[1536px] mx-auto md:px-10 px-5`}
      >
        <Nav />
        <main className="w-full mt-10">{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
