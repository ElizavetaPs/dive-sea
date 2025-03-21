import { Inter, Poppins } from 'next/font/google';
import '@/styles/global.scss';

const inter = Inter({ 
  variable: '--font-inter',
  style: ['normal'],
  subsets: ['latin'],
});

const poppins = Poppins({ 
  variable: '--font-poppins',
  style: ['normal'],
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

const bodyStyles = {
  '--font-inter': inter.style.fontFamily,
  '--font-poppins': poppins.style.fontFamily,
};

export const metadata = {
  title: 'Discover And Create NFTs',
  description: 'Discover And Create NFTs',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={bodyStyles}>
        {children}
      </body>
    </html>
  );
}
