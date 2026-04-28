"use client";
import { useEffect, useRef, useState } from "react";

const tabs = ["General", "Programs", "Delivery", "Certification"];
const faqData = {
  General: [
    { q: "What is Accredian Enterprise?", a: "Accredian Enterprise is the corporate training division of Accredian that offers customized upskilling programs for organizations. We design and deliver training solutions in Data Science, AI/ML, Product Management, and more." },
    { q: "Who are the trainers?", a: "Our trainers are IIT/IIM alumni, industry practitioners, and domain experts with 15+ years of experience in their respective fields." },
    { q: "What industries do you serve?", a: "We serve across BFSI, IT/ITES, Healthcare, Manufacturing, Retail, Telecom, and more. Our programs are customized for each industry's unique needs." },
    { q: "How many employees can be trained at once?", a: "We can train batches of any size — from 10 to 1000+ professionals. Our delivery model scales to accommodate your organizational needs." },
  ],
  Programs: [
    { q: "What programs do you offer?", a: "We offer programs in Data Science, AI/ML, Business Analytics, Product Management, Digital Transformation, Cybersecurity, Cloud Computing, and Leadership Development." },
    { q: "Can programs be customized?", a: "Absolutely! Every program is customized based on your team's skill level, industry context, and business objectives through our detailed Training Needs Analysis." },
    { q: "How long are the programs?", a: "Program duration varies from 2-week intensive bootcamps to 6-month comprehensive programs, depending on the depth and breadth of coverage required." },
  ],
  Delivery: [
    { q: "What delivery modes are available?", a: "We offer Online (live instructor-led), Offline (in-person at your premises or our centers), and Hybrid models combining both approaches." },
    { q: "Do you provide hands-on projects?", a: "Yes! Hands-on learning is core to our C.A.T framework. Participants work on real-world projects, case studies, and capstone projects." },
    { q: "Is there post-training support?", a: "We provide 6 months of post-training support including mentorship, doubt resolution, and access to updated learning resources." },
  ],
  Certification: [
    { q: "Are certifications provided?", a: "Yes, participants receive industry-recognized certifications upon successful completion of the program and assessments." },
    { q: "What is the assessment process?", a: "Assessment includes quizzes, assignments, hands-on project evaluations, and a final capstone project presentation." },
    { q: "Are certifications recognized?", a: "Our certifications are recognized across the industry and backed by partnerships with leading academic institutions." },
  ],
};

export default function FAQs() {
  const ref = useRef(null);
  const [activeTab, setActiveTab] = useState("General");
  const [openIdx, setOpenIdx] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.05 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="faqs" ref={ref} className="py-16 sm:py-20 lg:py-28 relative">
      <div className="absolute inset-0 mesh-gradient opacity-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 sm:mb-14 reveal">
          <span className="inline-block px-4 py-1.5 bg-[var(--color-primary)]/8 text-[var(--color-primary)] text-xs font-bold rounded-full mb-4 uppercase tracking-wider">FAQ</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--color-text)] mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
        </div>
        <div className="reveal grid lg:grid-cols-[220px_1fr] gap-6 sm:gap-8 max-w-4xl mx-auto">
          {/* Tabs */}
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 scrollbar-hide">
            {tabs.map((tab) => (
              <button key={tab} onClick={() => { setActiveTab(tab); setOpenIdx(0); }} className={`px-4 sm:px-5 py-3 rounded-xl text-sm font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer ${activeTab === tab ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20" : "bg-white text-[var(--color-text-secondary)] hover:bg-[var(--color-primary-lighter)] border border-gray-100"}`}>
                {tab}
              </button>
            ))}
          </div>
          {/* Accordion */}
          <div className="space-y-3">
            {faqData[activeTab].map((faq, i) => (
              <div key={`${activeTab}-${i}`} className="bg-white rounded-2xl border border-gray-100/80 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
                <button onClick={() => setOpenIdx(openIdx === i ? -1 : i)} className="w-full flex items-center justify-between p-4 sm:p-5 text-left cursor-pointer gap-3">
                  <span className="font-semibold text-[var(--color-text)] text-sm sm:text-base pr-2">{faq.q}</span>
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${openIdx === i ? "bg-[var(--color-primary)] rotate-180" : "bg-[var(--color-primary-lighter)]"}`}>
                    <svg className={`w-4 h-4 transition-colors duration-300 ${openIdx === i ? "text-white" : "text-[var(--color-primary)]"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-500 ease-out ${openIdx === i ? "max-h-64 pb-4 sm:pb-5 px-4 sm:px-5" : "max-h-0"}`}>
                  <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed border-t border-gray-100 pt-4">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
