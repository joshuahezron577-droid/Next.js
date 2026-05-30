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
<footer className="bg-black border-t border-gray-800 py-12 px-10">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
    {/* Branding */}
    <div className="text-white">
      <h2 className="text-xl font-bold tracking-tighter">YA KWETU GYM</h2>
      <p className="text-gray-400 text-sm mt-1">Transforming lives, one rep at a time.</p>
    </div>
    <div className="text-center md:text-right">
      <p className="text-gray-500 text-sm">
        © 2026 Ya Kwetu Gym. All rights reserved.
      </p>
      <p className="text-gray-600 text-xs mt-1">
        Published by <span className="text-red-500 font-semibold">Gs Codestar</span>
      </p>
    </div>
  </div>
</footer>
{/* Third party scripts */}
      </body>
    </html>
  );
}