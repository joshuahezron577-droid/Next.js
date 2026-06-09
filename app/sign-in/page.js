"use client";

import { useState } from "react";
import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center p-6 py-20">
      <div className="w-full max-w-md bg-zinc-900/40 backdrop-blur-xl border border-zinc-800 p-8 md:p-12 rounded-[2.5rem] shadow-2xl">
        <Link href="/" className="inline-block text-zinc-400 hover:text-white transition mb-6 text-sm">← Back to Home</Link>
        
        <div className="text-center mb-10">
          <h1 className="text-3xl font-black text-white uppercase tracking-tight">Sign In</h1>
          <p className="text-zinc-400 text-sm mt-2">Welcome back to Yakwetu Gym</p>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-xs font-bold text-zinc-500 uppercase mb-3 tracking-widest">Email Address</label>
            <input 
              type="email" 
              placeholder="name@company.com" 
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-4 text-white focus:ring-2 focus:ring-red-600 outline-none transition-all placeholder:text-zinc-700" 
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-zinc-500 uppercase mb-3 tracking-widest">Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-4 text-white focus:ring-2 focus:ring-red-600 outline-none transition-all placeholder:text-zinc-700" 
            />
          </div>

          <button className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-5 rounded-2xl transition-all shadow-lg shadow-red-900/20 uppercase tracking-widest">
            Login
          </button>
        </form>

        <div className="text-center mt-8">
          <p className="text-zinc-500 text-sm">
            Don't have an account?{" "}
            <Link href="/join-now" className="text-white hover:text-red-500 transition-colors font-bold">
              Join Now
            </Link>
          </p>
        </div>
    
      </div>
    </div>
  );
}