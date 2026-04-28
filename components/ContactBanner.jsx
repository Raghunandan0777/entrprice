"use client";
import { useEffect, useRef } from "react";

export default function ContactBanner({ onEnquire }) {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.15 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-6 sm:p-8 lg:p-12 flex flex-col sm:flex-row items-center gap-5 sm:gap-8 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/5 rounded-full animate-blob" />
          <div className="absolute -left-8 -bottom-8 w-32 h-32 bg-white/5 rounded-full animate-blob" style={{ animationDelay: "3s" }} />
          <div className="absolute top-1/2 right-1/3 w-20 h-20 border border-white/5 rounded-full animate-spin-slow" />

          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/15 backdrop-blur-sm rounded-2xl flex items-center justify-center shrink-0 relative">
            <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            <div className="absolute inset-0 rounded-2xl bg-white/10" style={{ animation: "pulse-ring 2.5s ease-out infinite" }} />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1.5 sm:mb-2">Want to Learn More About Our Training Solutions?</h3>
            <p className="text-white/75 text-sm sm:text-base">Get Expert Guidance for Your Team&apos;s Success!</p>
          </div>
          <button onClick={onEnquire} className="bg-white text-[var(--color-primary)] hover:bg-gray-50 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold text-sm sm:text-base transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5 shrink-0 cursor-pointer group flex items-center gap-2">
            Contact Us
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
