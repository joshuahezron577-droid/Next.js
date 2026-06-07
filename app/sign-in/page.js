"use client";

import { useState } from "react";
import Link from "next/link"; // Hii ni muhimu sana

export default function SignInPage() {
  return (
    <div className="min-h-screen overflow-y-auto bg-[#050505]">
      <main className="flex min-h-screen items-center justify-center px-6 py-12">
      <div className="w-full max-w-md bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 p-8 rounded-3xl shadow-2xl">
        
        <div className="text-center mb-8">
          <h1 className="text-2xl font-black text-white uppercase tracking-tight">Sign In</h1>
          <p className="text-zinc-400 text-sm mt-2">Welcome back to Yakwetu Gym</p>
        </div>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-xs font-semibold text-zinc-500 uppercase mb-2">Email Address</label>
            <input 
              type="email" 
              placeholder="name@company.com" 
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-4 text-white focus:ring-2 focus:ring-red-600 outline-none transition-all" 
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-zinc-500 uppercase mb-2">Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-4 text-white focus:ring-2 focus:ring-red-600 outline-none transition-all" 
            />
          </div>

          <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl transition-all mt-2">
            Login
          </button>
        </form>

        {/* Hapa ndipo kwenye marekebisho ya Join Now */}
        <div className="text-center mt-6">
          <p className="text-zinc-500 text-sm">
            Don't have an account?{" "}
            <Link href="/join-now" className="text-red-500 hover:underline font-semibold">
              Join Now
            </Link>
          </p>
        </div>

      </div>
      </main>
    </div>
  );
}