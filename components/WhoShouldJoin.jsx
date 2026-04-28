"use client";
import { useEffect, useRef } from "react";

const audiences = [
  { title: "Tech Teams", desc: "Engineers, developers, and analysts looking to upskill in AI/ML and data science", icon: "💻" },
  { title: "Business Leaders", desc: "C-suite executives and VPs wanting to drive data-driven transformation", icon: "📈" },
  { title: "HR & L&D Teams", desc: "Learning leaders seeking scalable, measurable training solutions", icon: "🎯" },
  { title: "Cross-Functional Teams", desc: "Marketing, sales, and ops teams needing analytics and digital skills", icon: "🔄" },
];

export default function WhoShouldJoin() {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal, .reveal-scale").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-28 bg-gradient-to-r from-blue-600 to-indigo-600 relative overflow-hidden">
      {/* Animated decorative circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 sm:w-48 h-32 sm:h-48 border border-white/10 rounded-full animate-spin-slow" />
        <div className="absolute bottom-10 right-10 w-48 sm:w-72 h-48 sm:h-72 border border-white/8 rounded-full animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "30s" }} />
        <div className="absolute top-1/3 right-1/4 w-24 h-24 border border-white/5 rounded-full animate-float" />
        <div className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-white/5 rounded-full animate-float-reverse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <div className="mb-10 sm:mb-14 reveal-left">
              <span className="inline-block px-4 py-1.5 bg-white/15 text-white text-xs font-bold rounded-full mb-4 uppercase tracking-wider backdrop-blur-sm">Target Audience</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">Who Should Join?</h2>
              <p className="text-white/75 text-base sm:text-lg max-w-xl">Our enterprise programs are designed for diverse teams across your organization</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {audiences.map((a, i) => (
                <div
                  key={i}
                  className="reveal-scale glass-dark rounded-2xl p-5 sm:p-6 hover:bg-white/15 transition-all duration-500 hover:-translate-y-2 text-left group"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className="text-4xl sm:text-5xl mb-3 sm:mb-4 group-hover:scale-125 transition-transform duration-500 group-hover:drop-shadow-2xl origin-left">{a.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{a.title}</h3>
                  <p className="text-white/65 text-sm leading-relaxed">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="reveal-right hidden lg:block relative h-full min-h-[500px]">
             <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl shadow-black/20 border border-white/20 group">
               <img src="/training.png" alt="Training Session" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
               <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent mix-blend-multiply"></div>
               <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-4 flex items-center justify-between border border-white/30 backdrop-blur-md">
                 <div>
                    <h4 className="text-white font-bold text-lg mb-1">Interactive Sessions</h4>
                    <p className="text-white/80 text-sm">Led by industry veterans</p>
                 </div>
                 <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                 </div>
               </div>
             </div>
             {/* Floating elements */}
             <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse"></div>
             <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
