"use client";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  { name: "Rajesh Kumar", role: "VP Engineering, Reliance", text: "Accredian's Data Science program transformed our analytics team. The hands-on approach with real datasets made the learning immediately applicable to our business challenges.", avatar: "RK", gradient: "from-blue-500 to-indigo-500" },
  { name: "Priya Sharma", role: "L&D Head, HCL Technologies", text: "The customized AI/ML program was exactly what our team needed. The faculty quality and post-training support exceeded our expectations.", avatar: "PS", gradient: "from-purple-500 to-pink-500" },
  { name: "Amit Patel", role: "CTO, CRIF India", text: "We've trained over 200 professionals through Accredian. The ROI in terms of project delivery speed and innovation has been remarkable.", avatar: "AP", gradient: "from-orange-500 to-red-500" },
  { name: "Sneha Reddy", role: "HR Director, ADP", text: "The flexible delivery model allowed our distributed teams to learn together effectively. Certification recognition boosted team morale significantly.", avatar: "SR", gradient: "from-green-500 to-emerald-500" },
  { name: "Vikram Singh", role: "Director Analytics, Wipro", text: "Accredian's C.A.T framework ensured our team didn't just learn theory but could apply it with the right tools from day one.", avatar: "VS", gradient: "from-cyan-500 to-blue-500" },
];

export default function Testimonials() {
  const ref = useRef(null);
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setActive((p) => (p + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goTo = (i) => { setDirection(i > active ? 1 : -1); setActive(i); };

  return (
    <section id="testimonials" ref={ref} className="py-16 sm:py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-gradient-to-br from-purple-50 to-transparent rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 sm:mb-14 reveal">
          <span className="inline-block px-4 py-1.5 bg-[var(--color-primary)]/8 text-[var(--color-primary)] text-xs font-bold rounded-full mb-4 uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--color-text)] mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-[var(--color-text-secondary)] text-base sm:text-lg">Hear from enterprises that transformed their teams with Accredian</p>
        </div>
        <div className="reveal max-w-3xl mx-auto">
          <div className="relative bg-[var(--color-background)] rounded-3xl p-6 sm:p-8 lg:p-12 overflow-hidden border border-gray-100/50">
            {/* Large quote */}
            <svg className="absolute top-4 sm:top-6 left-4 sm:left-8 w-10 h-10 sm:w-16 sm:h-16 text-[var(--color-primary)] opacity-10" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z"/></svg>

            {/* Content with transition */}
            <div className="relative z-10 min-h-[160px] sm:min-h-[140px]">
              <p className="text-base sm:text-lg lg:text-xl text-[var(--color-text)] leading-relaxed mb-6 sm:mb-8 italic">&ldquo;{testimonials[active].text}&rdquo;</p>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className={`w-11 h-11 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${testimonials[active].gradient} flex items-center justify-center text-white font-bold text-sm sm:text-base shadow-lg`}>
                  {testimonials[active].avatar}
                </div>
                <div>
                  <div className="font-bold text-[var(--color-text)] text-sm sm:text-base">{testimonials[active].name}</div>
                  <div className="text-xs sm:text-sm text-[var(--color-text-secondary)]">{testimonials[active].role}</div>
                </div>
              </div>
            </div>

            {/* Star rating */}
            <div className="absolute top-4 sm:top-8 right-4 sm:right-8 flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6 sm:mt-8">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => goTo(i)} className={`h-2.5 rounded-full transition-all duration-500 cursor-pointer ${i === active ? "bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] w-8" : "bg-gray-300 hover:bg-gray-400 w-2.5"}`} aria-label={`Testimonial ${i + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
