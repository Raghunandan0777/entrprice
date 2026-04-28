"use client";
import { useEffect, useRef } from "react";

const segments = [
  { title: "Foundational Programs", desc: "Build core competencies in data literacy, analytics basics, and digital tools for teams starting their upskilling journey.", gradient: "from-emerald-400 to-green-600", icon: "🌱", tag: "Beginner" },
  { title: "Advanced Technical", desc: "Deep-dive into ML, AI, cloud architecture, and advanced analytics for experienced technical professionals.", gradient: "from-blue-400 to-indigo-600", icon: "⚡", tag: "Advanced" },
  { title: "Leadership & Strategy", desc: "Executive programs focused on data-driven decision making, digital strategy, and innovation leadership.", gradient: "from-purple-400 to-violet-600", icon: "👑", tag: "Executive" },
  { title: "Domain-Specific", desc: "Industry-tailored programs for BFSI, Healthcare, Manufacturing, Retail, and Telecom sectors.", gradient: "from-orange-400 to-red-500", icon: "🏢", tag: "Specialized" },
];

export default function CourseSegmentation() {
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
    <section ref={ref} className="py-16 sm:py-20 lg:py-28 relative">
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16 reveal">
          <span className="inline-block px-4 py-1.5 bg-[var(--color-primary)]/8 text-[var(--color-primary)] text-xs font-bold rounded-full mb-4 uppercase tracking-wider">Programs</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--color-text)] mb-4">
            Program <span className="gradient-text">Categories</span>
          </h2>
          <p className="text-[var(--color-text-secondary)] text-base sm:text-lg max-w-2xl mx-auto">Structured learning paths for every level of your organization</p>
        </div>
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-5 reveal-left h-full hidden lg:block">
            <div className="relative h-full min-h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl shadow-indigo-500/10 border border-gray-100 group">
              <img src="/programs.png" alt="Program Categories" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="glass rounded-2xl p-5 backdrop-blur-md border border-white/20">
                  <h4 className="text-white font-bold text-xl mb-2">Continuous Learning</h4>
                  <p className="text-white/80 text-sm">Flexible pathways designed to help your team grow from foundational knowledge to executive mastery.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {segments.map((s, i) => (
                <div key={i} className="reveal-scale card-3d group relative bg-white rounded-2xl overflow-hidden border border-gray-100/80" style={{ transitionDelay: `${i * 0.1}s` }}>
                  {/* Gradient header */}
                  <div className={`h-2 bg-gradient-to-r ${s.gradient} transition-all duration-500 group-hover:h-3`} />
                  <div className="p-5 sm:p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-4xl sm:text-5xl group-hover:scale-110 transition-transform duration-500">{s.icon}</span>
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-gradient-to-r ${s.gradient} text-white shadow-md`}>{s.tag}</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[var(--color-text)] mb-2 sm:mb-3">{s.title}</h3>
                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
