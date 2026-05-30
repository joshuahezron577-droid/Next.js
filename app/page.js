    "use client"
   import Script from 'next/script';
    import { motion } from "motion/react"
    import { Card, Button } from "flowbite-react";
    import { useState, useEffect } from 'react';
  export default function Home() {
     

  return (
    <>
   <main className="bg-black min-h-screen text-white">
      
      {/* NAVBAR */}
<nav className="fixed w-full z-50 flex justify-between items-center px-10 py-6 bg-black/80 backdrop-blur-md">
  <div className="text-2xl font-bold tracking-tighter">YA KWETU</div>
  
  <div className="hidden md:flex space-x-6 font-medium text-sm">
    <a href="#about" className="hover:text-red-500 transition">About</a>
    <a href="#services" className="hover:text-red-500 transition">Services</a>
    <a href="#programs" className="hover:text-red-500 transition">Programs</a>
    <a href="#team" className="hover:text-red-500 transition">Team</a>
    <a href="#testimonials" className="hover:text-red-500 transition">Reviews</a>
    <a href="#faq" className="hover:text-red-500 transition">FAQ</a>
    <a href="#contact" className="hover:text-red-500 transition">Contact</a>
  </div>

  <a href="/sign-in" className="bg-red-600 px-6 py-2 rounded-full font-bold text-sm hover:bg-red-700 transition">
    Sign In
  </a>
</nav>

      {/* HERO SECTION */}
      <section id="hero" className="relative h-screen flex flex-col justify-center items-center text-center">
        <div className="absolute inset-0 z-0">
          <img src="/Images/Image-A.jpg" alt="Gym" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-10 px-4">
          <p className="text-red-500 uppercase tracking-widest text-sm mb-4 font-bold">● Premium Fitness Center</p>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            FORGE YOUR <span className="text-red-600">LEGACY</span>
          </h1>
          <p className="max-w-xl mx-auto text-lg mb-8 text-gray-300">
            Where champions are made. World-class equipment and elite trainers pushing you to your limits.
          </p>
          
          <div className="flex gap-4 justify-center">
            <a href="#programs" className="border border-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-black transition">
              Join now
            </a>
            <a href="#programs" className="border border-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-black transition">
              Explore Programs
            </a>
          </div>
        </div>
      </section>
      {/* ABOUT US SECTION */}
      <section id="about" className="py-24 px-10 bg-black text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          
          {/* Picha ya About Us */}
          <div className="w-full md:w-1/2">
            <img 
              src="/Images/Image-B.jpg" 
              alt="About Ya Kwetu Gym" 
              className="rounded-3xl w-full h-500px object-cover shadow-2xl" 
            />
          </div>          {/* Maelezo ya About Us */}
          <div className="w-full md:w-1/2">
            <p className="text-red-500 font-bold uppercase tracking-widest text-sm mb-2">● Who We Are</p>
            <h2 className="text-5xl font-bold mb-6 leading-tight">MORE THAN JUST A GYM</h2>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              Ya Kwetu Gym ni zaidi ya vifaa vya mazoezi. Sisi ni jamii ya watu wanaojituma, tunaoamini katika nidhamu, nguvu, na mabadiliko. 
            </p>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Tuna vifaa vya kisasa na wakufunzi waliobobea kuhakikisha unakamilisha malengo yako ya kiafya na kimwili kwa haraka na usalama.
            </p>
            <button className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-red-600 hover:text-white transition">
              Learn Our Story
            </button>
          </div>
        </div>
      </section>
    </main>

    </>
  )
}