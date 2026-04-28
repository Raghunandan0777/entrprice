"use client";
import { useEffect, useRef } from "react";

const clients = [
  { name: "Reliance", color: "#1A3C7B" }, { name: "HCL", color: "#0072C6" },
  { name: "IBM", color: "#1F70C1" }, { name: "CRIF", color: "#E31837" },
  { name: "ADP", color: "#D0271D" }, { name: "Bayer", color: "#10857F" },
  { name: "Wipro", color: "#401B60" }, { name: "TCS", color: "#0066B3" },
  { name: "Infosys", color: "#007CC3" }, { name: "Accenture", color: "#A100FF" },
  { name: "Deloitte", color: "#86BC25" }, { name: "Cognizant", color: "#1A4F8B" },
];

export default function Clients() {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.2 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="clients" ref={ref} className="py-14 sm:py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 reveal">
          <span className="inline-block px-4 py-1.5 bg-[var(--color-primary)]/8 text-[var(--color-primary)] text-xs font-bold rounded-full mb-4 uppercase tracking-wider">Trusted Partners</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--color-text)] mb-3">
            Trusted by <span className="gradient-text">Leading Enterprises</span>
          </h2>
          <p className="text-[var(--color-text-secondary)] text-base sm:text-lg">Over 200+ companies trust Accredian for their workforce transformation</p>
        </div>
        <div className="reveal overflow-hidden relative py-4">
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-white to-transparent z-10" />
          <div className="flex animate-scroll-logos items-center">
            {[...clients, ...clients, ...clients].map((c, i) => (
              <div key={i} className="flex items-center justify-center px-6 sm:px-10 py-3 min-w-[140px] sm:min-w-[180px] group">
                <div
                  className="text-xl sm:text-2xl font-bold tracking-tight opacity-40 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110 cursor-default select-none"
                  style={{ color: c.color }}
                >
                  {c.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
