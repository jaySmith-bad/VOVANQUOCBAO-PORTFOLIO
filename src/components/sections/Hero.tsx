'use client';

import { motion } from 'framer-motion';
import { Mail, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <h2 className="text-[#61dafb] font-mono tracking-[0.3em] text-sm mb-4 font-bold">
            BLOCKCHAIN ARCHITECT
          </h2>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
            VO VAN <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              QUOC BAO
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-lg mb-10 leading-relaxed font-light">
            Kiến tạo hạ tầng tài chính trên các khối chuỗi. <br className="hidden md:block" />
            Chuyên sâu <span className="text-white font-medium border-b border-[#61dafb]/30">Sui Network (Move)</span> & <span className="text-white font-medium border-b border-purple-500/30">EVM (Solidity)</span>.
          </p>
          
          <div className="flex items-center gap-8">
            <motion.a
              href="https://sui-charity-auction-v2.vercel.app/"
              target="_blank"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="relative group overflow-hidden bg-white text-black px-10 py-4 rounded-full font-bold flex items-center gap-3 transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)]"
            >
              <span className="relative z-10">Xem Dự Án Live</span>
              <ExternalLink size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.1, rotate: 5, backgroundColor: "rgba(255,255,255,0.1)" }}
              className="p-4 border border-white/10 rounded-full text-white hover:border-[#61dafb] hover:text-[#61dafb] transition-all bg-white/5 backdrop-blur-sm"
            >
              <Mail size={24} />
            </motion.a>
          </div>
        </motion.div>

        {/* Right Content - Orbital Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative flex justify-center items-center lg:justify-end"
        >
          <div className="relative w-[450px] h-[450px] md:w-[650px] md:h-[650px]">
            {/* Ambient Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#61dafb]/10 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-purple-500/5 rounded-full blur-[100px] animate-pulse delay-1000" />

            {/* Outer Orbit Path */}
            <div className="absolute inset-0 border border-white/[0.03] rounded-full" />
            
            {/* Inner Orbit with Tags */}
            <div className="absolute inset-[10%] border border-white/[0.05] rounded-full flex items-center justify-center">
              {/* Location Tag */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-md border border-white/10 px-6 py-2 rounded-xl text-[11px] text-gray-400 font-mono z-40 shadow-2xl tracking-[0.2em] font-bold"
              >
                LOCATION: <span className="text-white">TPHCM</span>
              </motion.div>
              {/* Core Tag */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute top-[-15px] right-[5%] bg-black/80 backdrop-blur-md border border-white/10 px-6 py-2 rounded-xl text-[11px] text-gray-400 font-mono z-40 shadow-2xl tracking-[0.2em] font-bold"
              >
                CORE: <span className="text-[#61dafb]">MOVE</span> / <span className="text-purple-400">EVM</span>
              </motion.div>
            </div>

            {/* Avatar Container */}
            <div className="absolute inset-[20%] rounded-full overflow-hidden border border-white/10 z-20 shadow-[0_0_100px_rgba(0,0,0,0.8)] ring-1 ring-white/20">
              <div className="relative w-full h-full bg-black flex items-center justify-center">
                <Image 
                  src="/avatar.png" 
                  alt="Vo Van Quoc Bao" 
                  fill
                  priority
                  className="object-cover scale-105 hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </div>

            {/* Rotating Orbits Elements (2 hành tinh xoay quanh) */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 z-30 pointer-events-none"
            >
              {/* Planet 1 - White Star */}
              <div className="absolute top-[15%] left-0 w-4 h-4 bg-white rounded-full blur-[1px] shadow-[0_0_25px_rgba(255,255,255,1)]" />
              {/* Orbital Path Trail (Visual only) */}
              <div className="absolute inset-0 rounded-full border border-dashed border-white/5" />
            </motion.div>

            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[5%] z-30 pointer-events-none"
            >
              {/* Planet 2 - Cyan Planet */}
              <div className="absolute bottom-[10%] right-0 w-5 h-5 bg-[#61dafb] rounded-full blur-[1px] shadow-[0_0_20px_rgba(97,218,251,0.6)]">
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent rounded-full" />
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-mono text-gray-500 tracking-[0.3em] uppercase">Scroll to Discover</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#61dafb] to-transparent" />
      </motion.div>
    </section>
  );
}
