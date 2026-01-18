'use client';

import SpaceBackground from "@/components/3d/SpaceBackground";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Blog from "@/components/sections/Blog";
import Contact from "@/components/sections/Contact";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Force scroll to top on page load/refresh
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="relative min-h-screen">
      {/* 3D Background */}
      <SpaceBackground />

      {/* Main Content */}
      <div className="relative z-10 pointer-events-none">
        <div className="pointer-events-auto">
          <Hero />
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="pointer-events-auto"
        >
          <Experience />
          <Projects />
          <Blog />
          <Contact />
          
          {/* Simple Footer */}
          <footer className="py-12 px-6 border-t border-gray-900 text-center">
            <p className="text-gray-600 text-[10px] font-mono tracking-widest uppercase">
              © 2026 VO VAN QUOC BAO. ALL RIGHTS RESERVED.
            </p>
          </footer>
        </motion.div>
      </div>
    </main>
  );
}
