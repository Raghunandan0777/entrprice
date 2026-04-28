"use client";
import { useEffect, useRef } from "react";

export default function Hero({ onEnquire }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center pt-16 sm:pt-20 overflow-hidden"
    >
      {/* Animated mesh background */}
      <div className="absolute inset-0 mesh-gradient" />

      {/* Animated blobs */}
      <div className="absolute top-20 -right-20 w-[500px] h-[500px] bg-gradient-to-br from-blue-400/20 to-purple-400/10 rounded-full blur-3xl animate-blob" />
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-gradient-to-tr from-cyan-400/15 to-blue-400/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-400/5 to-transparent rounded-full blur-3xl animate-blob" style={{ animationDelay: "4s" }} />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #1A73E8 1px, transparent 1px)", backgroundSize: "30px 30px" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="space-y-6 sm:space-y-8">
            <div className="reveal-left">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm text-[var(--color-primary)] text-sm font-semibold rounded-full mb-5 shadow-sm border border-blue-100">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Enterprise Training Solutions
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-[var(--color-text)] leading-[1.15] tracking-tight">
                Empowering Teams With{" "}
                <span className="gradient-text relative">
                  Industry-Ready Skills
                </span>
              </h1>
            </div>

            <p className="reveal-left text-base sm:text-lg text-[var(--color-text-secondary)] leading-relaxed max-w-lg" style={{ transitionDelay: "0.1s" }}>
              Accredian delivers customized corporate training programs in Data
              Science, AI/ML, Product Management, and more — designed to
              up-skill your workforce and drive business outcomes.
            </p>

            <ul className="reveal-left space-y-3" style={{ transitionDelay: "0.2s" }}>
              {[
                "Customized programs tailored to your team's needs",
                "Learn from IIT/IIM alumni & industry experts",
                "Hands-on projects with real business datasets",
                "Flexible delivery — Online, Offline, or Hybrid",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[var(--color-text-secondary)] group">
                  <span className="mt-0.5 w-6 h-6 rounded-lg bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20 group-hover:scale-110 transition-transform">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm sm:text-base">{item}</span>
                </li>
              ))}
            </ul>

            <div className="reveal-left flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2" style={{ transitionDelay: "0.3s" }}>
              <button
                onClick={onEnquire}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl font-semibold text-base shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1 cursor-pointer flex items-center justify-center gap-2"
              >
                Get Started
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
              </button>
              <a
                href="#how-it-works"
                className="px-8 py-4 bg-white border-2 border-gray-200 text-[var(--color-text)] rounded-2xl font-semibold text-base hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all duration-300 hover:shadow-lg text-center"
              >
                Learn More
              </a>
            </div>

            {/* Trust badges */}
            <div className="reveal-left flex items-center gap-6 pt-4" style={{ transitionDelay: "0.4s" }}>
              <div className="flex -space-x-2">
                {["RK", "PS", "AP", "VS"].map((initials, i) => (
                  <div key={i} className="w-9 h-9 rounded-full border-2 border-white bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-xs font-bold shadow-md" style={{ zIndex: 4 - i }}>
                    {initials}
                  </div>
                ))}
              </div>
              <div className="text-sm text-[var(--color-text-secondary)]">
                <span className="font-bold text-[var(--color-text)]">10,000+</span> professionals trained
              </div>
            </div>
          </div>

          {/* Right — Visual card */}
          <div className="reveal-right relative flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Glowing ring behind card */}
              <div className="absolute inset-0 m-auto w-[85%] h-[85%] rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/15 to-cyan-500/20 blur-2xl animate-blob" />

              {/* Main card */}
              <div className="relative bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl shadow-blue-500/10 p-6 sm:p-8 border border-white/50">
                <div className="w-full aspect-[4/3] rounded-2xl flex items-center justify-center mb-6 relative overflow-hidden bg-gray-100 group">
                  <img src="/hero.png" alt="Corporate Training" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                </div>
                <h3 className="text-xl font-bold text-[var(--color-text)] mb-1.5">Corporate Training</h3>
                <p className="text-sm text-[var(--color-text-secondary)]">Programs designed for enterprise teams across 15+ domains</p>

                {/* Mini stats row */}
                <div className="grid grid-cols-3 gap-3 mt-5 pt-5 border-t border-gray-100">
                  {[{ val: "15+", label: "Domains" }, { val: "200+", label: "Clients" }, { val: "98%", label: "Satisfaction" }].map((s, i) => (
                    <div key={i} className="text-center">
                      <div className="text-lg font-bold gradient-text">{s.val}</div>
                      <div className="text-[11px] text-[var(--color-text-light)]">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-2 sm:-right-6 glass rounded-2xl px-4 py-3 z-20 animate-float shadow-xl shadow-blue-500/10">
                <span className="text-2xl font-extrabold gradient-text">200+</span>
                <span className="block text-[11px] text-[var(--color-text-secondary)] font-medium">Corporate Clients</span>
              </div>
              <div className="absolute -bottom-4 -left-2 sm:-left-6 glass rounded-2xl px-4 py-3 z-20 animate-float-reverse shadow-xl shadow-purple-500/10">
                <span className="text-2xl font-extrabold gradient-text">10K+</span>
                <span className="block text-[11px] text-[var(--color-text-secondary)] font-medium">Professionals Trained</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
