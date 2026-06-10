import "./globals.css";
  import Script from 'next/script';
import { Inter } from 'next/font/google';
import { FaWhatsappSquare } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";  


const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: "Ya Kwetu Gym",
  description: "Karibu Mystringry",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen">
  {/* Header/nav */} 
        {children}
        
{/* Footer */}
  <footer className="bg-black text-white border-t border-zinc-900 py-10 px-6 font-sans">
  <div className="container mx-auto grid gap-8 md:grid-cols-2 md:items-start">
   <div className="md:pt-1">
  <p className="text-lg font-semibold text-white">
    Crafted with care by <span className="text-red-500">GS Codestar</span>
  </p>
  <p className="mt-2 text-sm text-zinc-400">© 2026 Yakwetu Gym. All rights reserved.</p>
  <a href="tel:+255696408701" className="mt-2 flex items-center gap-2 text-sm text-zinc-300 hover:text-white transition-colors">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.18a2 2 0 011.97 1.63l.57 2.74a2 2 0 01-.44 1.88L8.6 10.6a16 16 0 006.8 6.8l1.35-1.35a2 2 0 011.88-.44l2.74.57A2 2 0 0121 17.82V20a2 2 0 01-2 2h-1C8.82 22 2 15.18 2 7V6a2 2 0 011-1z" />
    </svg>
    +255 696 408 701
  </a>
  <a href="https://wa.me/255696408701" target="_blank" rel="noopener noreferrer" className="mt-2 flex items-center gap-2 text-sm text-zinc-300 hover:text-green-500 transition-colors">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.549 4.142 1.594 5.945L.057 24l6.398-1.678a11.88 11.88 0 005.6 1.425h.005c6.556 0 11.892-5.335 11.895-11.893a11.821 11.821 0 00-3.498-8.432z"/>
    </svg>
    069 640 8701
  </a>
</div> 
   
    <div>
      <h2 className="text-xl font-bold uppercase tracking-[0.25em] text-white">About Yakwetu Gym</h2>
      <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-300">
        A modern fitness space in Nairobi focused on strength, wellness, and consistent progress.
        We combine expert coaching, quality equipment, and a motivating community to help every member reach their goals.
      </p>
    </div>
  </div>
</footer>
{/* Third party scripts */}
 <Script id="tawk-script" strategy="afterInteractive">
    {`
      var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
      (function(){
      var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
      s1.async=true;
      s1.src='https://embed.tawk.to/693347b229e54f197c444fba/1jbo504ou';
      s1.charset='UTF-8';
      s1.setAttribute('crossorigin','*');
      s0.parentNode.insertBefore(s1,s0);
      })();
    `}
  </Script>

      </body>
    </html>
  );
}