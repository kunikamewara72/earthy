import './globals.css';
import { Inter } from 'next/font/google';
import data from '../data/content.json';
const inter = Inter({ subsets: ['latin'], display: 'swap' });
const s = data.site, h = data.pages.home;
export const metadata = {
  metadataBase: new URL(s.url), title: h.title, description: h.desc,
  keywords: ['architecture studio', 'interior design', 'sustainable architecture', 'villa design', 'resort architects', 'earthy design', 'Grihum Earthy Studio'],
  openGraph: { title: h.title, description: h.desc, url: s.url, siteName: s.name, images: ['/logo.png'], type: 'website' },
  twitter: { card: 'summary_large_image' }, icons: { icon: '/logo.png' },
};
export default function RootLayout({ children }) {
  const ld = { '@context': 'https://schema.org', '@type': 'ProfessionalService', name: s.name, url: s.url, logo: s.url + '/logo.png', email: s.email, telephone: s.phone, description: h.desc, serviceType: ['Architecture', 'Interior Design', 'Landscape Design'] };
  return (<html lang="en"><head><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&display=swap" /></head><body className={inter.className}><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />{children}</body></html>);
}
