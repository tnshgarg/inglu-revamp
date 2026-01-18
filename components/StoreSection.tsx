import React from 'react';
import { ShoppingBag, Star, Download, Bookmark, BookOpen, FileText, Filter } from 'lucide-react';
import FadeIn from './FadeIn';

const StoreSection = () => {
  const [activeFilter, setActiveFilter] = React.useState('All');
  
  const allProducts = [
    {
       title: "Business Mathematics",
       type: "PYQ + Solutions",
       university: "Delhi University",
       course: "B.Com (Hons)",
       price: "₹49",
       originalPrice: "₹99",
       rating: "4.9",
       sales: "2.1k",
       imageColor: "bg-blue/10",
       accentColor: "text-blue",
       tags: ["Sem 1", "Solved"],
       category: "PYQs"
    },
    {
       title: "Data Structures (C++)",
       type: "Handwritten Notes",
       university: "Engineering",
       course: "B.Tech (CSE)",
       price: "₹99",
       originalPrice: "₹199",
       rating: "5.0",
       sales: "1.5k",
       imageColor: "bg-purple/10",
       accentColor: "text-purple",
       tags: ["DSA", "Interview"],
       category: "Notes"
    },
    {
       title: "Microeconomics I",
       type: "Exam Guide",
       university: "Delhi University",
       course: "BA Eco (Hons)",
       price: "₹69",
       originalPrice: "₹149",
       rating: "4.8",
       sales: "800+",
       imageColor: "bg-purple/10",
       accentColor: "text-purple",
       tags: ["Sem 1", "Summary"],
       category: "Notes"
    },
     {
       title: "Corporate Law",
       type: "Case Studies",
       university: "Delhi University",
       course: "B.Com (prog)",
       price: "₹59",
       originalPrice: "₹129",
       rating: "4.7",
       sales: "1.2k",
       imageColor: "bg-blue/10",
       accentColor: "text-blue",
       tags: ["Sem 2", "Law"],
       category: "Notes"
    }
  ];

  const filteredProducts = activeFilter === 'All' 
    ? allProducts 
    : allProducts.filter(p => p.category === activeFilter || p.type.includes(activeFilter));

  return (
    <section className="container mx-auto px-4 py-32 bg-white font-dm">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div>
           <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-[2px] bg-inglu-black"></span>
              <span className="font-bold text-sm uppercase tracking-widest text-gray-500">Academic Resources</span>
           </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-inglu-black tracking-wide leading-[0.9] pb-4 uppercase">
            Top-Tier <span className="text-gray-300">Notes</span> & <br className="hidden md:block"/> 
            <span className="text-blue">Past Year Papers</span>
          </h2>
        </div>
        
        <div className="flex items-center gap-4">
           {/* Filter Tabs Visual */}
           <div className="hidden md:flex bg-gray-100 p-1 rounded-full text-sm font-medium">
              {['All', 'PYQs', 'Notes'].map((filter) => (
                <button 
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2 rounded-full transition-all ${
                    activeFilter === filter 
                      ? "bg-white text-inglu-black shadow-sm" 
                      : "text-gray-500 hover:text-inglu-black"
                  }`}
                >
                  {filter}
                </button>
              ))}
           </div>
           <button className="flex items-center gap-2 px-6 py-3 bg-inglu-black text-white font-bold rounded-full hover:bg-gray-900 transition-all shadow-xl">
             View Store
           </button>
        </div>
      </div>

       {/* Grid */}
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, i) => (
             <FadeIn key={i} delay={i * 0.1}>
                 <div className="group bg-white rounded-3xl p-4 border border-gray-100 hover:border-gray-200 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-300 cursor-pointer flex flex-col h-full">
                    
                    {/* Visual Header */}
                    <div className={`aspect-[1/1] rounded-2xl ${product.imageColor} relative overflow-hidden mb-5 p-6 flex flex-col justify-between`}>
                        <div className="flex justify-between items-start">
                           <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-bold shadow-sm flex items-center gap-1">
                              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" /> {product.rating}
                           </span>
                           <button className="w-8 h-8 rounded-full bg-white/50 hover:bg-white flex items-center justify-center transition-colors">
                              <Bookmark className="w-4 h-4 text-gray-600" />
                           </button>
                        </div>
    
                        <div className="self-center transform group-hover:scale-110 transition-transform duration-500">
                           {i % 2 === 0 ? 
                              <FileText className={`w-20 h-20 ${product.accentColor} opacity-80`} /> : 
                              <BookOpen className={`w-20 h-20 ${product.accentColor} opacity-80`} />
                           }
                        </div>
    
                        <div className="flex gap-2 flex-wrap">
                           {product.tags.map((tag, idx) => (
                              <span key={idx} className="bg-white/60 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-gray-700">
                                 {tag}
                              </span>
                           ))}
                        </div>
                    </div>
    
                    {/* Content */}
                    <div className="flex-grow flex flex-col">
                       <div className="mb-1 flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-wide">
                          {product.university} • {product.course}
                       </div>
                       <h3 className="font-bold text-lg text-inglu-black leading-tight mb-2 group-hover:text-blue transition-colors">
                          {product.title}
                       </h3>
                       <div className="text-sm text-gray-500 font-medium mb-4">{product.type}</div>
                       
                       <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                          <div className="flex flex-col">
                             <span className="text-gray-400 text-xs line-through font-medium">{product.originalPrice}</span>
                             <span className="text-xl font-bold text-inglu-black">{product.price}</span>
                          </div>
                          <button className="h-10 px-4 rounded-xl bg-gray-50 text-inglu-black font-bold text-xs uppercase tracking-wide hover:bg-inglu-black hover:text-white transition-all flex items-center gap-2 group-hover:bg-blue group-hover:text-white">
                             Add <ShoppingBag className="w-3 h-3" />
                          </button>
                       </div>
                    </div>
                 </div>
             </FadeIn>
          ))}
       </div>
       
       <div className="mt-16 text-center">
          <p className="text-gray-400 text-sm font-medium">Trusted by 50,000+ Students across India</p>
       </div>
    </section>
  );
};

export default StoreSection;
