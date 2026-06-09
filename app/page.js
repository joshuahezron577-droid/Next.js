    "use client"
   import Script from 'next/script';
   import Link from 'next/link';
    import { motion, AnimatePresence } from "framer-motion";
    import { useState, useEffect } from 'react';
     const sentences = [
  "Transforming your physique,",
  "Building sustainable strength,",
  "Reaching your peak fitness potential."
]; 

const reviews = [
  {
    quote: "The coaching feels personal and motivating. I have seen real progress in just a few weeks.",
    name: "Sarah M.",
    since: "Member since 2023",
  },
  {
    quote: "This gym gives me structure, energy, and the push I needed to stay consistent.",
    name: "Daniel K.",
    since: "Member since 2021",
  },
  {
    quote: "Every session is focused, professional, and helps me feel stronger every day.",
    name: "Aisha T.",
    since: "Member since 2003",
  },
];

  export default function Home() {
   const [index, setIndex] = useState(0);
   const [reviewIndex, setReviewIndex] = useState(0);

  const nextReview = () => {
    setReviewIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setReviewIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % sentences.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setReviewIndex((prev) => (prev + 1) % reviews.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
   <main className="bg-base-300 min-h-screen text-white">
      
      {/* NAVBAR */}
<nav className="fixed left-0 right-0 top-0 z-50 mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-4 py-6 md:px-8 lg:px-10 bg-black/70 backdrop-blur-md rounded-b-2xl border border-white/5 shadow-lg">
  <div className="text-2xl font-bold tracking-tighter"></div>

  <div className="hidden md:flex flex-1 items-center justify-center gap-4 lg:gap-6 font-medium text-xs lg:text-sm">
    <a href="#home" className="hover:text-red-500 transition">Home</a>
    <a href="#programs" className="hover:text-red-500 transition">Our Programs</a>
    <a href="#team" className="hover:text-red-500 transition">Our Team</a>
    <a href="#benefits" className="hover:text-red-500 transition">Why choose us</a>
    <a href="#reviews" className="hover:text-red-500 transition">Reviews</a>
    <a href="#faq" className="hover:text-red-500 transition">FAQ</a>
    <a href="#contact" className="hover:text-red-500 transition">Contact us</a>
  </div>
 {/*  */}
 <div className="flex items-center gap-2 md:gap-3">
        {/* Link ya Sign In */}
        <Link 
          href="/sign-in" 
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-1.5 px-3 md:px-4 rounded-md transition-all hover:scale-105 text-xs md:text-sm"
        >
          Sign In
        </Link>

        {/* Link ya Join Now */}
        <Link 
          href="/join-now" 
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-1.5 px-3 md:px-4 rounded-md transition-all hover:scale-105 text-xs md:text-sm"
        >
          Join Now
        </Link>
      </div>
 
 </nav>
  
      {/* HOME */}
      <section id="home" className="relative h-screen flex flex-col justify-center items-center text-center" >
        <div className="absolute inset-0 z-0">
          <img src="/Images/Image-A.jpg" alt="Gym" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/15"></div>
        </div>

        <div className="relative z-10 px-4 mt-30">
          <p className="text-red-500 uppercase tracking-widest text-2xl mb-4 font-bold">Welcome to ya kwetu fitness gyme</p>
          <h1 className="text-2xl md:text-5xl font-bold mb-6 tracking-tight">
            Train hard. Stay strong. Become unstoppable.
          </h1>
          <p className="max-w-xl mx-auto text-2xl mb-6 text-white">
            Where champions are made. We help you in<span className='text-white-300 text-3xl'>;</span>
          </p>
          <div className="flex justify-center items-center h-5 overflow-hidden text-red-600">
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="text-2xl text-red-600"
        >
          {sentences[index]}
        </motion.p>
      </AnimatePresence>
    </div>

<div className="flex gap-4 justify-center mt-5">
  <a href="#contact" className="border border-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-black transition">
    Get into touch
  </a>
  <a href="#programs" className="border border-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-black transition">
    Explore programs
  </a>
</div>

<div className="mt-6 flex flex-wrap justify-center gap-4 text-center text-white border border-white/5">
  <div className="w-44 rounded-3xl bg-zinc-900/80 p-4 ">
    <div className="p-4">
      <p className="text-3xl font-black text-red-400">500+</p>
      <p className="mt-1 text-[11px] uppercase tracking-[0.28em] text-white/90">Active members</p>
    </div>
  </div>

  <div className="w-44 rounded-3xl bg-zinc-900/80 p-4">
    <div className="p-4">
      <p className="text-3xl font-black text-red-400">20</p>
      <p className="mt-1 text-[11px] uppercase tracking-[0.28em] text-white/90">Expert trainers</p>
    </div>
  </div>

  <div className="w-44 rounded-3xl bg-zinc-900/80 p-4">
    <div className="p-4">
      <p className="text-3xl font-black text-red-400">24/7</p>
      <p className="mt-1 text-[11px] uppercase tracking-[0.28em] text-white/90">Support & access</p>
    </div>
  </div>
</div>
        </div>
      </section>
{/* Our programs */}
 <section id="programs" className="relative overflow-hidden bg-zinc-950/95 py-20 px-6 text-white">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-red-400">Our programs</p>
          <h2 className="mt-3 text-3xl font-black md:text-5xl text-white">What we offer</h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-200">Simple, powerful fitness services built to help you train stronger, recover better, and stay consistent.</p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              ['⚡', 'Strength Training', 'Build muscle, improve posture, and become stronger every week.'],
              ['🏃', 'Cardio Burn', 'Boost stamina and endurance with focused heart-pumping sessions.'],
              ['🧠', 'Recovery Flow', 'Recharge with guided recovery routines and mobility support.'],
              ['🍎', 'Wellness Coaching', 'Stay consistent with expert advice, nutrition tips, and progress tracking.'],
              ['🏋️', 'Power Lift', 'Develop explosive strength with disciplined lifting plans and coaching.'],
              ['🧘', 'Mobility Flow', 'Improve flexibility, posture, and recovery through guided movement sessions.'],
              ['💧', 'Hydration & Fuel', 'Track your energy, hydration, and nutrition habits for better performance.'],
              ['📈', 'Progress Tracking', 'Follow your weekly improvements with clear goals and measurable results.'],
            ].map(([icon, title, text]) => (
              <article
                key={title}
                className="group h-full rounded-3xl border border-white/10 bg-zinc-900 p-3 shadow-[0_16px_30px_rgba(0,0,0,0.35)] transition duration-300 hover:-translate-y-1 hover:border-red-400/40 hover:shadow-[0_20px_35px_rgba(255,0,0,0.14)]"
              >
                <div className="flex h-full flex-col rounded-2xl bg-zinc-800/90 p-5 text-left transition duration-300 group-hover:bg-zinc-800">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-xl text-red-300 shadow-inner">{icon}</div>
                  <h3 className="text-xl font-bold text-white">{title}</h3>
                  <p className="mt-2 flex-1 text-sm text-zinc-200">{text}</p>
                  <span className="mt-4 text-xs uppercase tracking-[0.25em] text-red-300">Included</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

{/* Our trainers */}
 <section id="team" className="relative overflow-hidden bg-zinc-950/95 py-20 px-6 text-white">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-red-400">Our team</p>
          <h2 className="mt-3 text-3xl font-black md:text-5xl text-white">Meet the experts trainers</h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-200">Dedicated trainers, coaches, and wellness experts ready to guide you every step of the way.</p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              ['Image-B.jpg', 'Coach Jay', 'Strength Coach'],
              ['Image-C.jpg', 'Sauti ya zege', 'Cardio Specialist'],
              ['Image-D.jpg', 'Coach Leo', 'Recovery Expert'],
            ].map(([image, name, role]) => (
              <article
                key={name}
                className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 shadow-[0_18px_35px_rgba(0,0,0,0.35)] transition duration-300 hover:-translate-y-1 hover:border-red-400/40"
              >
                <img src={`/Images/${image}`} alt={name} className="h-[792px] w-full object-cover" />
                <div className="p-5 text-left">
                  <h3 className="text-xl font-bold text-white">{name}</h3>
                  <p className="mt-1 text-sm uppercase tracking-[0.25em] text-red-300">{role}</p>
                  <p className="mt-3 text-sm text-zinc-200">Professional trainer focused on results, discipline, and strong coaching.</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Extra programs section */}
      <section id="benefits" className="relative overflow-hidden bg-zinc-950/95 py-20 px-6 text-white">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-red-400">Why choose us</p>
          <h2 className="mt-3 text-3xl font-black md:text-5xl text-white">Built for real progress</h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-200">A simple, balanced fitness experience with expert coaching, structure, and motivation to help you stay consistent.</p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              ['🔥', 'Focused Training', 'Clear routines and smart guidance to keep every session effective.'],
              ['💪', 'Strength & Conditioning', 'Build power, stability, and confidence through disciplined workouts.'],
              ['🌟', 'Long-Term Results', 'Stay motivated with progress-focused coaching and sustainable habits.'],
            ].map(([icon, title, text]) => (
              <article key={title} className="rounded-3xl border border-white/10 bg-zinc-900 p-6 text-left shadow-[0_18px_35px_rgba(0,0,0,0.35)]">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-red-500/10 text-xl text-red-300">{icon}</div>
                <h3 className="text-xl font-bold text-white">{title}</h3>
                <p className="mt-2 text-sm text-zinc-200">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Review */}
      <section id="reviews" className="relative overflow-hidden bg-zinc-950/95 py-20 px-6 text-white">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-red-400">Reviews</p>
          <h2 className="mt-3 text-3xl font-black md:text-5xl text-white">What our members say</h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-200">Real feedback from people who trust our training, support, and results-driven approach.</p>

          <div className="mt-10 flex flex-col items-center justify-center rounded-3xl bg-neutral-950 p-6 font-sans shadow-[0_18px_35px_rgba(0,0,0,0.35)]">
            <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-neutral-800 bg-[#1a1a1a] p-8 shadow-2xl md:p-12">
              <motion.div
                className="flex"
                animate={{ x: `-${reviewIndex * 100}%` }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
              >
                {reviews.map((item) => (
                  <article key={item.name} className="min-w-full text-center">
                    <div className="mb-6 flex justify-center gap-1 text-xl text-amber-400">★★★★★</div>
                    <blockquote className="mb-10">
                      <p className="text-lg italic leading-relaxed text-neutral-400 md:text-xl">“{item.quote}”</p>
                    </blockquote>
                    <div className="flex flex-col items-center">
                      <div className="mb-4 flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border border-red-500 bg-red-600">
                        <img src="/Images/Image-E.jpg" alt={item.name} className="h-full w-full object-cover" />
                      </div>
                      <h3 className="text-lg font-bold tracking-wide text-white">{item.name}</h3>
                      <p className="text-sm text-neutral-500">{item.since}</p>
                    </div>
                  </article>
                ))}
              </motion.div>
            </div>

            <div className="mt-8 flex items-center gap-6">
              <button onClick={prevReview} className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-800 text-white transition-colors hover:bg-neutral-800 cursor-pointer">←</button>
              <div className="flex gap-2">
                {reviews.map((item, index) => (
                  <button
                    key={item.name}
                    onClick={() => setReviewIndex(index)}
                    className={`h-2.5 w-2.5 rounded-full ${reviewIndex === index ? 'bg-red-500' : 'bg-neutral-700'}`}
                    aria-label={`Go to review ${index + 1}`}
                  />
                ))}
              </div>
              <button onClick={nextReview} className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-800 text-white transition-colors hover:bg-neutral-800 cursor-pointer">→</button>
            </div>
          </div>
        </div>
      </section>
  {/* FAQ */}
  <section id="faq" className="relative overflow-hidden bg-zinc-950/95 py-20 px-6 text-white">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-red-400">FAQ</p>
          <h2 className="mt-3 text-3xl font-black md:text-5xl text-white">Frequently asked questions</h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-200">Short answers about our gym, training, and support.</p>

          <div className="mx-auto mt-10 max-w-3xl space-y-4 text-left">
            <div className="collapse collapse-plus rounded-2xl border border-white/10 bg-zinc-900 text-white shadow-[0_18px_35px_rgba(0,0,0,0.35)]">
              <input type="radio" name="faq-accordion" defaultChecked />
              <div className="collapse-title text-base font-semibold text-white">Do you offer 24/7 gym access?</div>
              <div className="collapse-content text-sm text-zinc-200">Yes, members can train whenever it suits them with flexible access and support.</div>
            </div>

            <div className="collapse collapse-plus rounded-2xl border border-white/10 bg-zinc-900 text-white shadow-[0_18px_35px_rgba(0,0,0,0.35)]">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-base font-semibold text-white">Do you have expert trainers?</div>
              <div className="collapse-content text-sm text-zinc-200">Yes, our coaches guide every session with simple, effective fitness support.</div>
            </div>

            <div className="collapse collapse-plus rounded-2xl border border-white/10 bg-zinc-900 text-white shadow-[0_18px_35px_rgba(0,0,0,0.35)]">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-base font-semibold text-white">Is the gym good for beginners?</div>
              <div className="collapse-content text-sm text-zinc-200">Absolutely, our programs are easy to follow and built for steady progress.</div>
            </div>
          </div>
        </div>
</section>
{/* Contact us */}
<section id="contact" className="relative overflow-hidden bg-zinc-950/95 py-20 px-6 text-white">
  <div className="mx-auto max-w-6xl text-center">
    <p className="text-sm uppercase tracking-[0.35em] text-red-400">Contact us</p>
    <h2 className="mt-3 text-3xl font-black md:text-5xl text-white">Get in touch</h2>
    <p className="mx-auto mt-4 max-w-2xl text-zinc-200">Reach out for support, membership, or training questions.</p>
    
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 text-left">
  
  {/* Upande wa Kushoto Contact Info */}
  <div className="flex flex-col gap-8">
    
    
    <div className="flex items-center gap-5">
      <div className="w-12 h-12 shrink-0 rounded-xl bg-red-500/10 flex items-center justify-center border border-red-500/20">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
      </div>
      <div>
        <h4 className="text-white font-bold text-lg">Location</h4>
        <p className="text-zinc-400">Westlands, Nairobi, Kenya</p>
      </div>
    </div>

  
    <div className="flex items-center gap-5">
      <div className="w-12 h-12 shrink-0 rounded-xl bg-red-500/10 flex items-center justify-center border border-red-500/20">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
      </div>
      <div>
        <h4 className="text-white font-bold text-lg">Phone</h4>
        <p className="text-zinc-400">+254 700 123 456</p>
      </div>
    </div>

    <div className="flex items-center gap-5">
      <div className="w-12 h-12 shrink-0 rounded-xl bg-red-500/10 flex items-center justify-center border border-red-500/20">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
      </div>
      <div>
        <h4 className="text-white font-bold text-lg">Email</h4>
        <p className="text-zinc-400">info@yakwetugym.com</p>
      </div>
    </div>

    <div className="flex items-center gap-5">
      <div className="w-12 h-12 shrink-0 rounded-xl bg-red-500/10 flex items-center justify-center border border-red-500/20">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      </div>
      <div>
        <h4 className="text-white font-bold text-lg">Hours</h4>
        <p className="text-zinc-400 text-sm">Mon–Fri: 5AM–11PM | Sat–Sun: 6AM–10PM</p>
      </div>
    </div>

    {/* Social Links */}
    <div className="flex gap-4 mt-4">
       {[1,2,3,4,5].map((i) => (
         <div key={i} className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-red-600 transition-all cursor-pointer">
           <div className="w-2 h-2 bg-white rounded-full"></div> {/* Placeholder kwa icons */}
         </div>
       ))}
    </div>
  </div>

  {/* Upande wa Kulia Form */}
  <div className="bg-zinc-900/50 p-8 rounded-3xl border border-zinc-800 shadow-xl font-bold">
    <form className="space-y-6">
      <div className="space-y-2 font-bold ">
        <label className="text-sm font-medium text-zinc-400">Name</label>
        <input type="text" placeholder="Your name" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-4 text-white focus:ring-2 focus:ring-red-600 outline-none transition-all" />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium text-zinc-400">Email</label>
        <input type="email" placeholder="Your email" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-4 text-white focus:ring-2 focus:ring-red-600 outline-none transition-all" />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium text-zinc-400">Message</label>
        <textarea rows="4" placeholder="Your message" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-4 text-white focus:ring-2 focus:ring-red-600 outline-none transition-all resize-none"></textarea>
      </div>
      <button className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-4 rounded-xl shadow-lg shadow-red-900/20 transition-all transform hover:scale-[1.02] active:scale-95 uppercase tracking-widest text-sm">
        Send Message
      </button>
    </form>
  </div>

</div>
  
  </div>
</section>


</main>

    </>
  )
}