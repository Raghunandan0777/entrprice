"use client";
import { useEffect, useRef } from "react";

const steps = [
  { num: "01", title: "Discovery & Needs Assessment", desc: "We conduct a detailed Training Needs Analysis (TNA) to understand your team's skill gaps, business objectives, and learning outcomes.", icon: "🔍", gradient: "from-blue-500 to-indigo-500" },
  { num: "02", title: "Custom Program Design", desc: "Our curriculum team designs a tailored program with industry-relevant content, hands-on labs, and assessments aligned to your goals.", icon: "✏️", gradient: "from-purple-500 to-pink-500" },
  { num: "03", title: "Expert-Led Delivery", desc: "Programs are delivered by IIT/IIM faculty and industry practitioners through interactive, engaging sessions with real-world examples.", icon: "🎓", gradient: "from-orange-500 to-amber-500" },
  { num: "04", title: "Assessment & Certification", desc: "Participants complete capstone projects and assessments, earning industry-recognized certifications upon successful completion.", icon: "📜", gradient: "from-green-500 to-emerald-500" },
  { num: "05", title: "Post-Training Support", desc: "Continuous learning through mentorship, doubt resolution, and access to updated content and resources for 6 months.", icon: "🤝", gradient: "from-cyan-500 to-blue-500" },
];

export default function HowItWorks() {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.05 }
    );
    ref.current?.querySelectorAll(".reveal, .reveal-left").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" ref={ref} className="py-16 sm:py-20 lg:py-28 relative">
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16 reveal">
          <span className="inline-block px-4 py-1.5 bg-[var(--color-primary)]/8 text-[var(--color-primary)] text-xs font-bold rounded-full mb-4 uppercase tracking-wider">Process</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--color-text)] mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-[var(--color-text-secondary)] text-base sm:text-lg max-w-2xl mx-auto">A streamlined process from inquiry to impact</p>
        </div>
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical gradient line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--color-primary)] via-purple-500 to-cyan-500 hidden sm:block" />

          <div className="space-y-6 sm:space-y-8">
            {steps.map((step, i) => (
              <div key={i} className="reveal-left flex gap-4 sm:gap-6 items-start" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white font-extrabold text-sm sm:text-lg shrink-0 shadow-xl z-10 relative`}>
                  {step.num}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.gradient}`} style={{ animation: "pulse-ring 4s ease-out infinite", animationDelay: `${i * 0.5}s` }} />
                </div>
                <div className="card-3d bg-white rounded-2xl p-5 sm:p-6 flex-1 border border-gray-100/80 group">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2">
                    <span className="text-xl sm:text-2xl group-hover:scale-125 transition-transform duration-300">{step.icon}</span>
                    <h3 className="text-base sm:text-lg font-bold text-[var(--color-text)]">{step.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
