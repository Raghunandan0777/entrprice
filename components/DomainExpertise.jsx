"use client";
import { useEffect, useRef } from "react";

const domains = [
  { title: "Data Science", icon: "📈", desc: "Machine Learning, Deep Learning, NLP, Computer Vision", gradient: "from-blue-500 to-indigo-600" },
  { title: "Artificial Intelligence", icon: "🤖", desc: "Generative AI, LLMs, AI Strategy, MLOps", gradient: "from-purple-500 to-violet-600" },
  { title: "Product Management", icon: "🎯", desc: "Product Strategy, Analytics, Growth, Agile", gradient: "from-orange-500 to-red-500" },
  { title: "Business Analytics", icon: "📊", desc: "SQL, Power BI, Tableau, Statistical Analysis", gradient: "from-cyan-500 to-blue-500" },
  { title: "Digital Transformation", icon: "💡", desc: "Cloud Computing, DevOps, Automation", gradient: "from-yellow-500 to-orange-500" },
  { title: "Leadership", icon: "👥", desc: "Executive Programs, Strategy, Change Management", gradient: "from-emerald-500 to-teal-500" },
  { title: "Cybersecurity", icon: "🔒", desc: "Network Security, Ethical Hacking, Compliance", gradient: "from-red-500 to-pink-500" },
];

export default function DomainExpertise() {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.05 }
    );
    ref.current?.querySelectorAll(".reveal, .reveal-scale").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-blue-50 to-transparent rounded-full -translate-y-1/2 translate-x-1/3" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16 reveal">
          <span className="inline-block px-4 py-1.5 bg-[var(--color-primary)]/8 text-[var(--color-primary)] text-xs font-bold rounded-full mb-4 uppercase tracking-wider">Expertise</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--color-text)] mb-4">
            Our <span className="gradient-text">Domain Expertise</span>
          </h2>
          <p className="text-[var(--color-text-secondary)] text-base sm:text-lg max-w-2xl mx-auto">Training programs spanning across the most in-demand tech and business domains</p>
        </div>
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 xl:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
              {domains.map((d, i) => (
                <div
                  key={i}
                  className="reveal-scale group relative bg-[var(--color-background)] rounded-2xl p-5 transition-all duration-500 cursor-default border border-gray-100/80 overflow-hidden"
                  style={{ transitionDelay: `${i * 0.06}s` }}
                >
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${d.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <div className="relative z-10">
                    <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 group-hover:scale-125 transition-transform duration-500 group-hover:drop-shadow-lg">{d.icon}</div>
                    <h3 className="text-base sm:text-lg font-bold text-[var(--color-text)] group-hover:text-white mb-1.5 sm:mb-2 transition-colors duration-500">{d.title}</h3>
                    <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] group-hover:text-white/80 transition-colors duration-500 leading-relaxed">{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-5 xl:col-span-4 reveal-right h-full hidden lg:block">
            <div className="relative h-full min-h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/10 border border-gray-100 group">
              <img src="/domain.png" alt="Domain Expertise" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="glass rounded-2xl p-5 backdrop-blur-md border border-white/20">
                  <h4 className="text-white font-bold text-xl mb-2">Industry Leaders</h4>
                  <p className="text-white/80 text-sm">Our curriculum is designed by top 1% industry experts to ensure you learn what matters.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
