    "use client"
   import Script from 'next/script';
    import { motion } from "motion/react"
    import { Card, Button } from "flowbite-react";
    import { useState, useEffect } from 'react';
  export default function Home() {
     

  return (
    <>
   <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-50">
      
      {/* Animation container */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Card className="max-w-md text-center shadow-xl">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Karibu Mystringry!
          </h1>
          <p className="text-gray-600 mb-6">
            Hii ni tovuti iliyosanidiwa kwa teknolojia za kisasa: Next.js, Flowbite, na Framer Motion.
          </p>
          
          <div className="flex justify-center gap-4">
            <Button color="blue">
              Soma Zaidi
            </Button>
            <Button color="gray">
              Wasiliana Nasi
            </Button>
          </div>
        </Card>
      </motion.div>

    </main>



    </>
  )
}