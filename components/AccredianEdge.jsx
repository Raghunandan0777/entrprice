"use client";
import { useEffect, useRef } from "react";

const edges = [
  { title: "Customized Curriculum", desc: "Programs tailored to your organization's specific needs, industry challenges, and business goals.", icon: "📋", gradient: "from-blue-500 to-cyan-400" },
  { title: "Expert Faculty", desc: "Learn from IIT/IIM alumni, industry leaders, and domain experts with 15+ years of experience.", icon: "🎓", gradient: "from-purple-500 to-pink-400" },
  { title: "Hands-On Learning", desc: "Real-world projects, case studies, and capstone projects using your company's actual datasets.", icon: "🔧", gradient: "from-orange-500 to-amber-400" },
  { title: "Flexible Delivery", desc: "Choose from online, offline, or hybrid modes of training delivery that suit your team.", icon: "🌐", gradient: "from-green-500 to-emerald-400" },
  { title: "Certification", desc: "Accredited certifications recognized across the industry to validate your team's new skills.", icon: "📜", gradient: "from-indigo-500 to-blue-400" },
  { title: "Post-Training Support", desc: "Ongoing mentorship, doubt resolution, and access to learning resources after program completion.", icon: "🤝", gradient: "from-pink-500 to-rose-400" },
  { title: "Measurable Outcomes", desc: "Track progress with detailed analytics, assessments, and ROI measurement dashboards.", icon: "📊", gradient: "from-teal-500 to-cyan-400" },
];

export default function AccredianEdge() {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.05 }
    );
    ref.current?.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="edge" ref={ref} className="py-16 sm:py-20 lg:py-28 relative">
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16 reveal">
          <span className="inline-block px-4 py-1.5 bg-[var(--color-primary)]/8 text-[var(--color-primary)] text-xs font-bold rounded-full mb-4 uppercase tracking-wider">Why Choose Us</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--color-text)] mb-4">
            The <span className="gradient-text">Accredian Edge</span>
          </h2>
          <p className="text-[var(--color-text-secondary)] text-base sm:text-lg max-w-2xl mx-auto">What makes our corporate training programs stand apart from the rest</p>
        </div>

        <div className="relative">
          {/* Vertical line — desktop only */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--color-primary)]/30 to-transparent hidden lg:block" />

          <div className="space-y-6 sm:space-y-8 lg:space-y-12">
            {edges.map((edge, i) => {
              const isLeft = i % 2 === 0;
              const revealClass = isLeft ? "reveal-left" : "reveal-right";
              return (
                <div
                  key={i}
                  className={`flex flex-col lg:flex-row items-center gap-4 sm:gap-6 lg:gap-8 ${isLeft ? "" : "lg:flex-row-reverse"}`}
                >
                  {/* Card */}
                  <div className={`w-full lg:w-5/12 ${isLeft ? "lg:text-right" : "lg:text-left"} ${revealClass}`} style={{ transitionDelay: `${i * 0.08}s` }}>
                    <div className={`card-3d bg-white rounded-2xl p-5 sm:p-6 border border-gray-100/80 ${isLeft ? "lg:ml-auto" : "lg:mr-auto"} max-w-md relative overflow-hidden group`}>
                      {/* Gradient accent line */}
                      <div className={`absolute top-0 ${isLeft ? "right-0" : "left-0"} h-full w-1 bg-gradient-to-b ${edge.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`w-11 h-11 rounded-xl bg-gradient-to-br ${edge.gradient} flex items-center justify-center text-xl shadow-md`}>{edge.icon}</span>
                        <h3 className="text-lg font-bold text-[var(--color-text)]">{edge.title}</h3>
                      </div>
                      <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">{edge.desc}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="reveal-scale w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-blue-500/25 z-10 shrink-0 relative" style={{ transitionDelay: `${i * 0.08}s` }}>
                    {i + 1}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)]" style={{ animation: "pulse-ring 3s ease-out infinite" }} />
                  </div>

                  <div className="w-full lg:w-5/12 hidden lg:block" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
