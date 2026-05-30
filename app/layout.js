import "./globals.css";
import { Inter } from 'next/font/google';
import { Flowbite } from 'flowbite-react'


const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: "Mystringry",
  description: "Karibu Mystringry",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
  {/* Header */} 
        {children}
        
{/* Footer */}
{/* Third party scripts */}
      </body>
    </html>
  );
}