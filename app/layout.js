import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  metadataBase: new URL('https://providenceanglican.id'), // Replace with actual domain if known
  title: {
    default: 'Providence Anglican Church | Catholic, Evangelical & Reformed',
    template: '%s | Providence Anglican Church'
  },
  description: 'Providence Anglican Church - A warm and welcoming center of orthodoxy in Jakarta, Indonesia. Part of the Anglican Diocese of Singapore.',
  keywords: ['Anglican Church', 'Jakarta', 'Indonesia', 'Christian', 'Reformed', 'Evangelical', 'Catholic', 'Diocese of Singapore', 'Pluit', 'North Jakarta'],
  authors: [{ name: 'Providence Anglican Church' }],
  creator: 'Providence Anglican Church',
  openGraph: {
    title: 'Providence Anglican Church',
    description: 'A warm and welcoming center of orthodoxy in Jakarta, Indonesia',
    url: 'https://providenceanglican.id',
    siteName: 'Providence Anglican Church',
    images: [
      {
        url: '/logo.jpg',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Providence Anglican Church',
    description: 'A warm and welcoming center of orthodoxy in Jakarta, Indonesia',
    images: ['/logo.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Church',
    name: 'Providence Anglican Church',
    url: 'https://providenceanglican.id',
    logo: 'https://providenceanglican.id/logo.jpg',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Greenbay Apartment Tower D (Coastview A Community Room), Jalan Pluit Karang Ayu 1 No.B1, Pluit',
      addressLocality: 'Jakarta',
      postalCode: '14450',
      addressCountry: 'ID',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -6.101, // Approximate
      longitude: 106.791, // Approximate
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Sunday',
      opens: '10:00',
      closes: '11:30',
    },
    telephone: '+6281288103714',
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
