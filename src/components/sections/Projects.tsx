'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Sui Charity (3HUB)",
    role: "Lead Blockchain Developer",
    description: "Nền tảng đấu giá NFT thiện nguyện minh bạch trên Sui Network. Dự án giúp ghi lại mọi khoản đóng góp trên chuỗi và chuyển trực tiếp đến những người cần hỗ trợ như: Bước Chân Hy Vọng, Quà Tết cho bệnh nhân nghèo, và Hỗ trợ nước sạch.",
    fullStory: "Trong quá trình phát triển dự án này, thách thức lớn nhất là làm sao để đảm bảo tính minh bạch tuyệt đối của dòng tiền từ nhà tài trợ đến người nhận. Tôi đã áp dụng mô hình 'Direct-to-Receiver' thông qua Smart Contract của Move, giúp loại bỏ các khâu trung gian và giảm thiểu rủi ro thất thoát. Bài học lớn nhất rút ra là việc tối ưu hóa cấu trúc Object trong Move giúp tiết kiệm Gas fee đáng kể cho người dùng khi thực hiện các giao dịch đấu giá hàng loạt.",
    tech: ["Move", "Sui SDK", "Next.js", "Tailwind", "Smart Contract Security"],
    link: "https://sui-charity-auction-v2.vercel.app/",
    github: "https://github.com/jaySmith-bad",
    achievement: "Top 5 Finalist - Sui Learning Tour 2025 (12/2025 - 01/2026)"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-sm font-mono tracking-[0.3em] text-[#61dafb] mb-4 uppercase font-bold">The Manifestation</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Project Deep Dive</h3>
          <p className="text-gray-300 font-normal max-w-2xl italic text-lg leading-relaxed">
            Từ những kiến thức tích lũy được, tôi hiện thực hóa chúng thành những giải pháp công nghệ có giá trị thực tiễn cho cộng đồng.
          </p>
        </motion.div>

        <div className="w-full">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group bg-[#0a0a0a] border border-gray-900 p-8 md:p-12 rounded-3xl hover:border-[#61dafb]/30 transition-all duration-500 relative overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row gap-12 relative z-10">
                {/* Left Side: Basic Info */}
                <div className="lg:w-1/3 space-y-8">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-3xl md:text-4xl font-bold text-white mb-3 group-hover:text-[#61dafb] transition-colors tracking-tight">{project.title}</h4>
                      <p className="text-[#61dafb] text-xs font-mono uppercase tracking-[0.2em] font-bold">{project.role}</p>
                    </div>
                    <div className="flex gap-4">
                      <a href={project.github} className="text-gray-400 hover:text-white transition-colors p-3 bg-white/5 rounded-xl border border-white/5">
                        <Github size={20} />
                      </a>
                      <a href={project.link} className="text-gray-400 hover:text-white transition-colors p-3 bg-white/5 rounded-xl border border-white/5">
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>

                  <p className="text-gray-300 text-lg font-normal leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="px-3 py-1 bg-gray-900/50 border border-gray-800 text-gray-400 text-[10px] rounded-md uppercase tracking-widest font-mono font-bold">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Side: Deep Dive Story */}
                <div className="lg:w-2/3 lg:border-l lg:border-gray-900 lg:pl-12 space-y-8">
                  <div>
                    <h5 className="text-[#61dafb] text-[10px] font-mono uppercase tracking-[0.3em] font-bold mb-4">Technical Solution & Lessons</h5>
                    <p className="text-gray-400 text-base md:text-lg font-normal leading-relaxed italic border-l-2 border-[#61dafb]/30 pl-6 py-2">
                      {project.fullStory}
                    </p>
                  </div>

                  {project.achievement && (
                    <div className="pt-8 border-t border-gray-900/50">
                      <p className="text-[10px] text-gray-500 font-mono uppercase tracking-[0.2em] mb-3 font-bold">Key Achievement</p>
                      <div className="inline-flex items-center gap-4 px-6 py-3 bg-[#61dafb]/5 rounded-2xl border border-[#61dafb]/10">
                        <span className="w-2 h-2 bg-[#61dafb] rounded-full animate-pulse" />
                        <p className="text-white text-sm md:text-base font-bold tracking-tight">
                          {project.achievement}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#61dafb]/5 blur-[100px] rounded-full -z-10 translate-x-1/2 -translate-y-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
