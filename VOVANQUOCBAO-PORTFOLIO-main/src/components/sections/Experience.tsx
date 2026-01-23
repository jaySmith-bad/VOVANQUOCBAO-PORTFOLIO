'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Calendar, MapPin, Trophy } from 'lucide-react';

const experiences = [
  {
    id: 1,
    title: "Sui Learning Tour x VHU",
    subtitle: "Blockchain Technology Workshop & Hackathon",
    date: "12/2025 - 01/2026",
    location: "Van Hien University",
    description: "Participated in in-depth training on SUI Blockchain architecture and Move language directly from SUI Foundation representatives. Connected with the Web3 Developer community and updated on the latest technology trends (DeFi, NFT). Notably, the project achieved Top 5 Finalist at the Hackathon within the event series.",
    images: [
      "/assets/experience/exp-1.jpg", 
      "/assets/experience/exp-2.jpg",
      "/assets/experience/exp-3.jpg",
      "/assets/experience/exp-4.jpg",
      "/assets/experience/exp-5.jpg"
    ],
    tags: ["Sui Network", "Move", "Hackathon", "Top 5 Finalist"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-sm font-mono tracking-[0.3em] text-[#61dafb] mb-4 uppercase font-bold">The Discovery</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Journey & Story</h3>
          <p className="text-gray-300 font-normal max-w-2xl italic text-lg leading-relaxed">
            Every project starts with curiosity. This is where I document key milestones, from my first steps into the Web3 world to real-world achievements.
          </p>
        </motion.div>

        <div className="space-y-20">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="space-y-12">
              {/* Info Side */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-4xl space-y-8"
              >
                <div className="space-y-6">
                  <div className="flex flex-wrap items-center gap-4 text-[#61dafb] font-sans text-[10px] uppercase tracking-[0.1em] font-bold">
                    <span className="flex items-center gap-2 px-4 py-1.5 bg-[#61dafb]/5 rounded-full border border-[#61dafb]/10 text-gray-300">
                      <Calendar size={12} className="text-[#61dafb]" /> {exp.date}
                    </span>
                    <span className="flex items-center gap-2 px-4 py-1.5 bg-white/5 rounded-full border border-white/5 text-gray-200">
                      <MapPin size={12} className="text-white" /> {exp.location}
                    </span>
                    <span className="flex items-center gap-2 px-4 py-1.5 bg-yellow-500/5 text-yellow-500 rounded-full border border-yellow-500/10">
                      <Trophy size={12} className="text-yellow-500" /> TOP 5 FINALIST
                    </span>
                  </div>
                  <div>
                    <h4 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-2 tracking-tight">{exp.title}</h4>
                    <p className="text-xl text-[#61dafb]/80 font-mono text-sm uppercase tracking-widest font-bold">{exp.subtitle}</p>
                  </div>
                </div>

                <p className="text-gray-300 text-base md:text-lg font-normal leading-relaxed max-w-3xl">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-4">
                  {exp.tags.map(tag => (
                    <span key={tag} className="px-4 py-1.5 bg-gray-900/50 border border-gray-800 text-gray-400 text-[10px] rounded-md uppercase tracking-widest font-mono font-bold">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Images Bento Grid - Final Polish */}
              <div className="grid grid-cols-2 md:grid-cols-12 gap-4 h-[700px] md:h-[550px]">
                {/* Image 1: Main Focus (Vertical) */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative col-span-2 md:col-span-4 row-span-2 rounded-3xl overflow-hidden border border-white/10 group shadow-2xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                  <Image
                    src={exp.images[0]}
                    alt="Developer at work"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute bottom-6 left-6 z-20">
                    <p className="text-[#61dafb] font-mono text-[10px] uppercase tracking-[0.2em] mb-1">Highlight</p>
                    <h5 className="text-white font-bold text-xl">Sui Learning Tour</h5>
                  </div>
                </motion.div>

                {/* Image 2: Team (Wide) */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="relative col-span-2 md:col-span-8 row-span-1 rounded-3xl overflow-hidden border border-white/10 group"
                >
                  <Image
                    src={exp.images[1]}
                    alt="Team work"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                </motion.div>

                {/* Image 3: Presenting (Square-ish) */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="relative col-span-1 md:col-span-3 row-span-1 rounded-3xl overflow-hidden border border-white/10 group"
                >
                  <Image
                    src={exp.images[2]}
                    alt="Presentation"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                </motion.div>

                {/* Image 5: Classroom (The one that had black gaps - now Fixed) */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="relative col-span-1 md:col-span-3 row-span-1 rounded-3xl overflow-hidden border border-white/10 group"
                >
                  <Image
                    src={exp.images[4]}
                    alt="Workshop"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                </motion.div>

                {/* Image 4: Poster (Blue theme) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="relative col-span-2 md:col-span-2 row-span-1 rounded-3xl overflow-hidden border border-[#0052ff]/30 group bg-[#0052ff]"
                >
                  <Image
                    src={exp.images[3]}
                    alt="Event Poster"
                    fill
                    className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
