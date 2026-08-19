import type {Metadata} from "next";
import {Geist, Geist_Mono, Bodoni_Moda_SC, Gowun_Batang, Noto_Sans_KR, Nanum_Myeongjo, Cormorant_Garamond} from "next/font/google";
import "../styles/globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const bodoniSC = Bodoni_Moda_SC({
    variable: "--font-bodoni-sc",
    subsets: ["latin"],
});

const gowunBatang = Gowun_Batang({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-gowun-batang",
});

const notoSansKr = Noto_Sans_KR({
    variable: "--font-noto-sans-kr",
});

const nanumMyeongjo = Nanum_Myeongjo({
    subsets: ["latin"],
    weight: ["400", "700", "800"], // Regular / Bold / ExtraBold
    variable: "--font-nanum-myeongjo",
});

const cormorantGaramond = Cormorant_Garamond({
    subsets: ["latin"],
    variable: "--font-cormorant-garamond",
});

export const metadata: Metadata = {
    metadataBase: new URL("https://honghyang.leeflowdesign.com"),

    title: "주홍❤️미향 결혼합니다",
    description: "10월 17일 (토요일) 오전 11시",

    openGraph: {
        title: "주홍❤️미향 결혼합니다",
        description: "10월 17일 (토요일) 오전 11시",
        siteName: "10월 17일 (토요일) 오전 11시",
        images: [
            {
                url: "/images/thum_img.jpg",
                width: 1200,
                height: 630,
                alt: "주홍 미향 결혼식",
            },
        ],
        locale: "ko_KR",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "주홍❤️미향 결혼합니다",
        description: "10월 17일 (토요일) 오전 11시",
        images: ["/images/thum_img.jpg"],
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="ko">
        <body
            className={`
          ${geistSans.variable}
          ${geistMono.variable}
          ${bodoniSC.variable}
          ${gowunBatang.variable}
          ${notoSansKr.variable}
          ${nanumMyeongjo.variable}
          ${cormorantGaramond.variable}
          antialiased
        `}
        >
        {children}
        </body>
        </html>
    );
}