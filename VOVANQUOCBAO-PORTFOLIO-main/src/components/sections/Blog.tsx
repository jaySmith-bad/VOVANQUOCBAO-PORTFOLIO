'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, Clock, BookOpen, Share2 } from 'lucide-react';
import { useState } from 'react';

const posts = [
  {
    title: "Move Language & Sui Network",
    category: "TECHNICAL",
    excerpt: "Analyzing Object-centric architecture and how Move protects user assets at the language level.",
    readTime: "5 min read",
    content: `
      <p>Move is not just a new Smart Contract programming language; it is a complete paradigm shift in digital asset management. Unlike Ethereum's Account-based model, Move on Sui uses an <strong>Object-centric</strong> model.</p>
      
      <h4>1. Why is Object-centric important?</h4>
      <p>In this model, each asset (NFT, Token, Coin) is an independent object with a unique ID. This allows Sui to execute transactions in parallel (Parallel Execution), making processing speeds hundreds of times faster than traditional blockchains.</p>
      
      <h4>2. Absolute Safety</h4>
      <p>Move is designed with the philosophy of <strong>Resource Oriented Programming</strong>. Assets in Move cannot be accidentally copied or deleted. They can only be moved or borrowed, which completely eliminates serious security vulnerabilities like Re-entrancy attacks.</p>
      
      <h4>3. Developer Perspective</h4>
      <p>Building on Sui feels like programming real-world objects. You define the structure of the object, who owns it, and who has the right to modify it. This is the future of Web3 security.</p>
    `
  },
  {
    title: "Sui Learning Tour 2025",
    category: "EXPERIENCE",
    excerpt: "Insights from the event: How the Sui ecosystem is supporting young developers in Vietnam.",
    readTime: "4 min read",
    content: `
      <p>Participating in the Sui Learning Tour 2025 was a turning point in my Web3 development journey. It was not just a series of technical workshops, but a place where breakthrough ideas were formed.</p>
      
      <h4>Direct Connection</h4>
      <p>I had the opportunity to discuss directly with engineers from Mysten Labs about optimizing Smart Contracts on Move. Questions about the Bullshark & Narwhal consensus mechanisms were answered in great depth.</p>
      
      <h4>Vietnam Builder Community</h4>
      <p>It was surprising to see the developer community in Vietnam being extremely vibrant and knowledgeable about new technologies. Support from the Sui Foundation through Grant and Mentorship programs is creating great conditions for startup projects.</p>
      
      <h4>Biggest Lesson</h4>
      <p>Technology, no matter how good, is meaningless if it doesn't solve real user problems. "User Experience First" was the consistent message I received from this event.</p>
    `
  },
  {
    title: "The Future of DeFi & Move",
    category: "INSIGHT",
    excerpt: "Why Move will be the new standard for next-generation decentralized finance protocols.",
    readTime: "6 min read",
    content: `
      <p>DeFi (Decentralized Finance) is entering a new era where performance and security are paramount. Move is the key to opening this door.</p>
      
      <h4>Real-time Transaction Speed</h4>
      <p>With parallel processing capabilities, DEXs on Sui can reach the speed of centralized exchanges (CEX). This completely eliminates barriers of latency and expensive gas fees, helping DeFi become more accessible to everyone.</p>
      
      <h4>Composability</h4>
      <p>Move allows protocols to safely "borrow" assets from each other through the <strong>Flash Loans</strong> mechanism built into the language level. This creates an extremely flexible financial ecosystem while still ensuring transparency.</p>
      
      <h4>Real World Asset Tokenization (RWA)</h4>
      <p>I believe that in the next 2 years, we will see an explosion of real-world assets such as real estate and bonds being brought on-chain through Move. The transparency and strict control capabilities of Move are the perfect choice for large financial institutions.</p>
    `
  }
];

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<typeof posts[0] | null>(null);

  return (
    <section id="blog" className="py-24 px-6 relative border-t border-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-sm font-mono tracking-[0.3em] text-[#61dafb] mb-4 uppercase font-bold">The Vision</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Blog & Technical Sharing</h3>
            <p className="text-gray-400 font-normal italic text-lg leading-relaxed">
              Not just code, but mindset. A place to distill perspectives on the future of Web3.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#61dafb]/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="relative h-full bg-[#050505] border border-white/10 p-8 rounded-2xl flex flex-col justify-between hover:border-[#61dafb]/50 transition-colors duration-300 overflow-hidden">
                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-24 h-24 bg-[#61dafb]/5 rounded-full blur-2xl group-hover:bg-[#61dafb]/10 transition-colors" />
                
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[10px] font-mono text-[#61dafb] px-2.5 py-1 bg-[#61dafb]/5 border border-[#61dafb]/20 rounded uppercase tracking-widest font-bold">
                      {post.category}
                    </span>
                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                      {post.readTime}
                    </span>
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-4 group-hover:text-[#61dafb] transition-colors leading-tight">
                    {post.title}
                  </h4>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-8">
                    {post.excerpt}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-[11px] font-mono tracking-widest text-gray-500 group-hover:text-white transition-colors">
                  READ ARTICLE <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 text-[11px] font-mono tracking-[0.2em] text-gray-500 hover:text-[#61dafb] transition-colors uppercase"
          >
            Explore all thoughts <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>

      {/* Deep Dive Modal */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPost(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
            >
              {/* Modal Header */}
              <div className="sticky top-0 z-10 flex items-center justify-between p-6 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-mono text-[#61dafb] px-2.5 py-1 bg-[#61dafb]/5 border border-[#61dafb]/20 rounded uppercase tracking-widest font-bold">
                    {selectedPost.category}
                  </span>
                  <div className="flex items-center gap-2 text-gray-500 text-[10px] font-mono uppercase tracking-widest">
                    <Clock size={12} /> {selectedPost.readTime}
                  </div>
                </div>
                <button
                  onClick={() => setSelectedPost(null)}
                  className="p-2 hover:bg-white/5 rounded-full text-gray-400 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-8 md:p-12 overflow-y-auto max-h-[calc(90vh-80px)] custom-scrollbar">
                <div className="max-w-2xl mx-auto">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
                    {selectedPost.title}
                  </h3>
                  
                  <div 
                    className="prose prose-invert prose-blue max-w-none 
                    prose-p:text-gray-400 prose-p:leading-relaxed prose-p:text-lg
                    prose-h4:text-white prose-h4:text-xl prose-h4:font-bold prose-h4:mt-12 prose-h4:mb-6
                    prose-strong:text-[#61dafb] prose-strong:font-bold"
                    dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                  />

                  {/* Footer Action */}
                  <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#61dafb]/10 flex items-center justify-center">
                        <BookOpen size={18} className="text-[#61dafb]" />
                      </div>
                      <span className="text-sm text-gray-400 italic">Thank you for taking the time to read this article.</span>
                    </div>
                    <div className="flex gap-4">
                      <button className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full text-[11px] font-mono tracking-widest text-gray-400 hover:text-white transition-all">
                        <Share2 size={14} /> SHARE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}