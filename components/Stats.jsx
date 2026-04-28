"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: 10000, suffix: "+", label: "Professionals Trained",
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>,
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    value: 200, suffix: "+", label: "Corporate Clients",
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" /></svg>,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    value: 5000, suffix: "+", label: "Hours of Training Delivered",
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    gradient: "from-cyan-500 to-blue-500",
  },
];

function useCountUp(target, isVisible, duration = 2000) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, target, duration]);
  return count;
}

function StatCard({ stat, isVisible, index }) {
  const count = useCountUp(stat.value, isVisible);
  return (
    <div
      className="reveal-scale card-3d bg-white rounded-2xl p-6 sm:p-8 text-center border border-gray-100/80 relative overflow-hidden group"
      style={{ transitionDelay: `${index * 0.12}s` }}
    >
      {/* Hover glow */}
      <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-500`} />

      <div className={`w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg relative`}>
        {stat.icon}
        {/* Pulse ring */}
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-100`} style={{ animation: "pulse-ring 2s ease-out infinite" }} />
      </div>
      <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold gradient-text mb-2">
        {count.toLocaleString()}{stat.suffix}
      </div>
      <p className="text-[var(--color-text-secondary)] font-medium text-sm sm:text-base">{stat.label}</p>
    </div>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          ref.current?.querySelectorAll(".reveal, .reveal-scale").forEach((el) => el.classList.add("visible"));
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats" ref={ref} className="py-16 sm:py-20 lg:py-28 relative">
      <div className="absolute inset-0 mesh-gradient opacity-50" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16 reveal">
          <span className="inline-block px-4 py-1.5 bg-[var(--color-primary)]/8 text-[var(--color-primary)] text-xs font-bold rounded-full mb-4 uppercase tracking-wider">Impact</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--color-text)] mb-4">
            Our Impact in <span className="gradient-text">Numbers</span>
          </h2>
          <p className="text-[var(--color-text-secondary)] text-base sm:text-lg max-w-2xl mx-auto">Trusted by leading enterprises to deliver world-class corporate training programs</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} isVisible={isVisible} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
