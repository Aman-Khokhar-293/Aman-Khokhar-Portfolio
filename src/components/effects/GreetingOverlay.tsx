"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function GreetingOverlay() {
  const [showGreeting, setShowGreeting] = useState(true);
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    // Get time-based greeting
    const hour = new Date().getHours();
    const timeGreeting = 
      hour < 12 ? "Good morning" :
      hour < 18 ? "Good afternoon" :
      "Good evening";
    
    setGreeting(timeGreeting);

    // Hide greeting after 2.5 seconds
    const timer = setTimeout(() => setShowGreeting(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showGreeting && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-50"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-bold text-primary"
          >
            {greeting}, welcome!
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}