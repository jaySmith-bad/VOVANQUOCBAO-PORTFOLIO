'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MessageSquare, ArrowRight } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="text-[#61dafb]" size={24} />,
      label: "EMAIL",
      value: "jaysmofficial@gmail.com",
      link: "mailto:jaysmofficial@gmail.com",
      description: "Send feedback or collaboration invitations."
    },
    {
      icon: <Phone className="text-[#61dafb]" size={24} />,
      label: "PHONE / ZALO",
      value: "0338008284",
      link: "https://zalo.me/0338008284",
      description: "Contact directly or via Zalo for the fastest response."
    }
  ];

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-sm font-mono tracking-[0.3em] text-[#61dafb] mb-4 uppercase font-bold">The Connection</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Let's Build Something Great</h3>
          <p className="text-gray-300 font-normal max-w-2xl mx-auto italic text-lg leading-relaxed">
            The best journey is one with like-minded companions. Let's connect to create new values together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, borderColor: 'rgba(97, 218, 251, 0.3)' }}
              className="group p-8 bg-[#0a0a0a] border border-gray-900 rounded-2xl transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="p-4 bg-white/5 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                {info.icon}
              </div>
              <span className="text-[10px] font-mono text-gray-400 tracking-[0.2em] mb-2 font-bold">{info.label}</span>
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-[#61dafb] transition-colors">{info.value}</h4>
              <p className="text-gray-300 text-sm font-normal leading-relaxed mb-6">
                {info.description}
              </p>
              <div className="flex items-center gap-2 text-[11px] font-mono text-[#61dafb] opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                CONNECT NOW <ArrowRight size={14} />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Floating background element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#61dafb]/5 blur-[120px] rounded-full pointer-events-none -z-10" />
      </div>
    </section>
  );
}
