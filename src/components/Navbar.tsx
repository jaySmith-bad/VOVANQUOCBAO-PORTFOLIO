'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import Link from 'next/link';

const navLinks = [
  { name: 'JOURNEY', href: '#experience' },
  { name: 'WORKS', href: '#projects' },
  { name: 'INSIGHTS', href: '#blog' },
  { name: 'CONTACT', href: '#contact' },
];

function useScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return scaleX;
}

export default function Navbar() {
  const scrollX = useScrollProgress();
  
  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-8 bg-transparent backdrop-blur-sm"
      >
        <Link href="/" className="text-xl font-bold text-white tracking-tighter">
          JAY SMITH
        </Link>
        
        <div className="flex gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-[11px] font-bold text-gray-400 hover:text-white transition-colors tracking-[0.2em]"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </motion.nav>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#61dafb] origin-left z-[60]"
        style={{ scaleX: scrollX }}
      />
    </>
  );
}
