import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
// import SideNav from '@/app/ui/dashboard/sidenav';

import { Metadata } from 'next';
 

export const metadata: Metadata = {
  title: {
    template: '%s | One One',
    default: 'One One',
  },
  description:
    '每一杯奶昔都是調皮的小精靈，帶著獨特風味和趣味，準備驚喜你味蕾。萬萬不僅僅是一個名字，而是一種生活態度。每個細節都灑滿美學追求，從店內設計到產品包裝，每一吋都展現我們對生活的熱愛。',
  metadataBase: new URL('https://www.oneone.global'),
  applicationName: 'One One',
  openGraph: {
    type: 'website',
    siteName: 'www.oneone.global',
    url: 'https://www.oneone.global/',
    images: [
      {
        url: 'https://www.oneone.global/link-thumbnail.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'zh_TW',
  },
  icons: {
    icon: 'https://www.oneone.global/thumbnail-one-one.png',
    apple: 'https://www.oneone.global/thumbnail-one-one.png',
  }
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased flow md:overflow-hidden`}>
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
          <div className="flex-grow md:overflow-y-auto">{children}</div>
        </div>
      </body>
    </html>
  );
}




