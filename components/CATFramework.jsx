"use client";
import { useEffect, useRef } from "react";

const phases = [
  { letter: "C", word: "Concept", desc: "Deep theoretical understanding of core concepts through expert-led sessions and curated content", gradient: "from-blue-500 to-indigo-600", bg: "bg-blue-50" },
  { letter: "A", word: "Application", desc: "Hands-on application through real-world case studies, group projects, and business simulations", gradient: "from-purple-500 to-violet-600", bg: "bg-purple-50" },
  { letter: "T", word: "Tools", desc: "Mastery of industry-standard tools and platforms — Python, SQL, Tableau, AWS, and more", gradient: "from-cyan-500 to-blue-500", bg: "bg-cyan-50" },
];

export default function CATFramework() {
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
    <section id="cat" ref={ref} className="py-16 sm:py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-blue-50 to-transparent rounded-full translate-y-1/2 -translate-x-1/3" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16 reveal">
          <span className="inline-block px-4 py-1.5 bg-[var(--color-primary)]/8 text-[var(--color-primary)] text-xs font-bold rounded-full mb-4 uppercase tracking-wider">Methodology</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--color-text)] mb-4">
            The <span className="gradient-text">C.A.T. Framework</span>
          </h2>
          <p className="text-[var(--color-text-secondary)] text-base sm:text-lg max-w-2xl mx-auto">Our proven pedagogy ensures comprehensive skill building through three interconnected pillars</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {phases.map((p, i) => (
            <div key={i} className="reveal-scale relative" style={{ transitionDelay: `${i * 0.15}s` }}>
              <div className={`card-3d ${p.bg} rounded-3xl p-6 sm:p-8 text-center h-full border border-gray-100/50 group relative overflow-hidden`}>
                {/* Decorative ring */}
                <div className={`absolute -top-8 -right-8 w-32 h-32 rounded-full border-4 border-current opacity-5 bg-gradient-to-br ${p.gradient}`} />

                <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl mx-auto mb-5 sm:mb-6 flex items-center justify-center text-white text-2xl sm:text-3xl font-extrabold shadow-xl bg-gradient-to-br ${p.gradient} group-hover:scale-110 group-hover:rounded-3xl transition-all duration-500 relative`}>
                  {p.letter}
                  <div className={`absolute inset-0 rounded-2xl group-hover:rounded-3xl bg-gradient-to-br ${p.gradient} transition-all duration-500`} style={{ animation: "pulse-ring 3s ease-out infinite" }} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-text)] mb-3">{p.word}</h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm sm:text-base">{p.desc}</p>
              </div>
              {/* Arrow connector */}
              {i < 2 && (
                <div className="hidden sm:flex absolute top-1/2 -right-5 sm:-right-6 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white shadow-lg flex items-center justify-center">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--color-primary)]" fill="currentColor" viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Flow summary */}
        <div className="reveal mt-10 sm:mt-14 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 glass rounded-full px-6 sm:px-8 py-3 sm:py-4 shadow-lg">
            {phases.map((p, i) => (
              <span key={i} className="flex items-center gap-2 sm:gap-3">
                <span className={`w-8 h-8 rounded-lg bg-gradient-to-br ${p.gradient} flex items-center justify-center text-white font-bold text-xs shadow-md`}>{p.letter}</span>
                <span className="text-[var(--color-text)] font-semibold text-sm sm:text-base">{p.word}</span>
                {i < 2 && <svg className="w-4 h-4 text-[var(--color-text-light)]" fill="currentColor" viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>}
              </span>
            ))}
            <span className="flex items-center gap-2 ml-1">
              <svg className="w-4 h-4 text-[var(--color-text-light)]" fill="currentColor" viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>
              <span className="text-[var(--color-primary)] font-bold text-sm sm:text-base">🔄 Repeat</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
