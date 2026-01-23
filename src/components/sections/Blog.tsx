'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, Clock, BookOpen, Share2 } from 'lucide-react';
import { useState } from 'react';

const posts = [
  {
    title: "Ngôn ngữ Move & Sui Network",
    category: "TECHNICAL",
    excerpt: "Phân tích kiến trúc Object-centric và cách Move bảo vệ tài sản người dùng ở cấp độ ngôn ngữ.",
    readTime: "5 min read",
    content: `
      <p>Move không chỉ là một ngôn ngữ lập trình Smart Contract mới; nó là một sự thay đổi tư duy hoàn toàn trong việc quản lý tài sản số. Khác với mô hình Account-based của Ethereum, Move trên Sui sử dụng mô hình <strong>Object-centric</strong>.</p>
      
      <h4>1. Tại sao Object-centric lại quan trọng?</h4>
      <p>Trong mô hình này, mỗi tài sản (NFT, Token, Coin) là một đối tượng độc lập có ID duy nhất. Điều này cho phép Sui thực thi các giao dịch song song (Parallel Execution), giúp tốc độ xử lý nhanh hơn hàng trăm lần so với các blockchain truyền thống.</p>
      
      <h4>2. Tính an toàn tuyệt đối</h4>
      <p>Move được thiết kế với triết lý <strong>Resource Oriented Programming</strong>. Tài sản trong Move không thể bị sao chép hoặc xóa bỏ một cách vô tình. Nó chỉ có thể được di chuyển hoặc mượn (borrow), điều này loại bỏ hoàn toàn các lỗi bảo mật nghiêm trọng như Re-entrancy attack.</p>
      
      <h4>3. Góc nhìn lập trình viên</h4>
      <p>Xây dựng trên Sui mang lại cảm giác giống như đang lập trình các vật thể thực tế trong đời thực. Bạn định nghĩa cấu trúc của vật thể, ai sở hữu nó và ai có quyền thay đổi nó. Đây chính là tương lai của bảo mật Web3.</p>
    `
  },
  {
    title: "Sui Learning Tour 2025",
    category: "EXPERIENCE",
    excerpt: "Góc nhìn từ sự kiện: Cách hệ sinh thái Sui đang hỗ trợ các nhà phát triển trẻ tại Việt Nam.",
    readTime: "4 min read",
    content: `
      <p>Tham gia Sui Learning Tour 2025 là một bước ngoặt trong hành trình phát triển Web3 của mình. Đây không chỉ là một chuỗi workshop kỹ thuật, mà là nơi những ý tưởng đột phá được hình thành.</p>
      
      <h4>Sự kết nối trực tiếp</h4>
      <p>Mình đã có cơ hội thảo luận trực tiếp với các kỹ sư từ Mysten Labs về cách tối ưu hóa Smart Contract trên Move. Những câu hỏi về cơ chế đồng thuận Bullshark & Narwhal đã được giải đáp một cách cực kỳ sâu sắc.</p>
      
      <h4>Cộng đồng Builder Việt Nam</h4>
      <p>Thật bất ngờ khi thấy cộng đồng nhà phát triển tại Việt Nam cực kỳ sôi nổi và am hiểu về công nghệ mới. Sự hỗ trợ từ Sui Foundation thông qua các chương trình Grant và Mentorship đang tạo điều kiện rất lớn cho các dự án khởi nghiệp.</p>
      
      <h4>Bài học lớn nhất</h4>
      <p>Công nghệ dù có tốt đến đâu, nếu không giải quyết được vấn đề thực tế của người dùng thì cũng vô nghĩa. "User Experience First" là thông điệp xuyên suốt mà mình nhận được từ sự kiện này.</p>
    `
  },
  {
    title: "Tương lai của DeFi & Move",
    category: "INSIGHT",
    excerpt: "Tại sao Move sẽ là tiêu chuẩn mới cho các giao thức tài chính phi tập trung thế hệ tiếp theo.",
    readTime: "6 min read",
    content: `
      <p>DeFi (Tài chính phi tập trung) đang bước vào kỷ nguyên mới, nơi hiệu suất và tính an toàn được đặt lên hàng đầu. Move chính là chìa khóa để mở ra cánh cửa này.</p>
      
      <h4>Tốc độ giao dịch thời gian thực</h4>
      <p>Với khả năng xử lý song song, các sàn DEX trên Sui có thể đạt tới tốc độ của các sàn tập trung (CEX). Điều này loại bỏ hoàn toàn rào cản về độ trễ và phí gas đắt đỏ, giúp DeFi trở nên phổ cập hơn với mọi người.</p>
      
      <h4>Khả năng lắp ghép (Composability)</h4>
      <p>Move cho phép các giao thức "mượn" tài sản của nhau một cách an toàn thông qua cơ chế <strong>Flash Loans</strong> được tích hợp sẵn ở cấp độ ngôn ngữ. Điều này tạo ra một hệ sinh thái tài chính cực kỳ linh hoạt nhưng vẫn đảm bảo tính minh bạch.</p>
      
      <h4>Token hóa tài sản thực (RWA)</h4>
      <p>Mình tin rằng trong 2 năm tới, chúng ta sẽ thấy sự bùng nổ của các loại tài sản thực như bất động sản, trái phiếu được đưa lên on-chain thông qua Move. Sự minh bạch và khả năng kiểm soát chặt chẽ của Move là lựa chọn hoàn hảo cho các tổ chức tài chính lớn.</p>
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
              Không chỉ là code, mà là tư duy. Nơi đúc kết những góc nhìn về tương lai của Web3.
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
                      <span className="text-sm text-gray-400 italic">Cảm ơn bạn đã dành thời gian đọc bài viết này.</span>
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
