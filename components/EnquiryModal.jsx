"use client";
import { useState } from "react";

const domainOptions = [
  "Data Science", "Artificial Intelligence", "Machine Learning", "Business Analytics",
  "Product Management", "Digital Transformation", "Cybersecurity", "Cloud Computing",
  "DevOps", "Full Stack Development", "Leadership", "Finance", "Other",
];
const deliveryModes = ["Online", "Offline", "Hybrid"];

export default function EnquiryModal({ open, onClose }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", domain: "", candidates: "", delivery: "", location: "" });
  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});

  if (!open) return null;

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email required";
    if (!form.phone.trim() || form.phone.replace(/\D/g, "").length < 10) e.phone = "Valid phone required";
    if (!form.company.trim()) e.company = "Company is required";
    if (!form.domain) e.domain = "Select a domain";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/leads", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...form, submittedAt: new Date().toISOString() }) });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setTimeout(() => { onClose(); setStatus("idle"); setForm({ name: "", email: "", phone: "", company: "", domain: "", candidates: "", delivery: "", location: "" }); }, 2500);
    } catch { setStatus("error"); }
  };

  const set = (field) => (e) => setForm((p) => ({ ...p, [field]: e.target.value }));

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4 modal-backdrop bg-black/40" onClick={onClose}>
      <div className="bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl w-full sm:max-w-lg max-h-[92vh] sm:max-h-[90vh] overflow-y-auto animate-scale-in" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-t-3xl p-5 sm:p-6 flex items-center justify-between sticky top-0 z-10">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-white">Get in Touch</h2>
            <p className="text-white/75 text-xs sm:text-sm">Fill the form and our team will reach out</p>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center text-white hover:bg-white/25 transition-colors cursor-pointer backdrop-blur-sm" aria-label="Close">✕</button>
        </div>

        {status === "success" ? (
          <div className="p-10 sm:p-12 text-center">
            <div className="w-20 h-20 mx-auto mb-5 bg-gradient-to-br from-green-400 to-emerald-500 rounded-3xl flex items-center justify-center text-white text-4xl shadow-xl shadow-green-500/25 animate-scale-in">✓</div>
            <h3 className="text-xl font-bold text-[var(--color-text)] mb-2">Thank You!</h3>
            <p className="text-[var(--color-text-secondary)]">Our team will contact you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4">
            <Field label="Full Name" required error={errors.name}>
              <input type="text" value={form.name} onChange={set("name")} placeholder="John Doe" className="modal-input" />
            </Field>
            <Field label="Email Address" required error={errors.email}>
              <input type="email" value={form.email} onChange={set("email")} placeholder="john@company.com" className="modal-input" />
            </Field>
            <Field label="Phone Number" required error={errors.phone}>
              <input type="tel" value={form.phone} onChange={set("phone")} placeholder="+91 98765 43210" className="modal-input" />
            </Field>
            <Field label="Company Name" required error={errors.company}>
              <input type="text" value={form.company} onChange={set("company")} placeholder="Your Company" className="modal-input" />
            </Field>
            <Field label="Domain of Interest" required error={errors.domain}>
              <select value={form.domain} onChange={set("domain")} className="modal-input">
                <option value="">Select Domain</option>
                {domainOptions.map((d) => <option key={d} value={d}>{d}</option>)}
              </select>
            </Field>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <Field label="No. of Candidates">
                <input type="number" value={form.candidates} onChange={set("candidates")} placeholder="e.g. 50" min="1" className="modal-input" />
              </Field>
              <Field label="Delivery Mode">
                <select value={form.delivery} onChange={set("delivery")} className="modal-input">
                  <option value="">Select</option>
                  {deliveryModes.map((m) => <option key={m} value={m}>{m}</option>)}
                </select>
              </Field>
            </div>
            <Field label="Location">
              <input type="text" value={form.location} onChange={set("location")} placeholder="City, Country" className="modal-input" />
            </Field>
            {status === "error" && <p className="text-red-500 text-sm bg-red-50 p-3 rounded-xl">Something went wrong. Please try again.</p>}
            <button type="submit" disabled={status === "loading"} className="w-full py-3.5 sm:py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl font-semibold text-base hover:opacity-90 transition-all duration-300 disabled:opacity-60 cursor-pointer shadow-lg shadow-blue-500/20 mt-2">
              {status === "loading" ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
                  Submitting...
                </span>
              ) : "Submit Enquiry →"}
            </button>
          </form>
        )}
      </div>

      <style jsx>{`
        .modal-input {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1.5px solid #E0E6ED;
          border-radius: 0.875rem;
          font-size: 0.875rem;
          outline: none;
          transition: all 0.3s;
          background: #F9FAFB;
        }
        .modal-input:focus {
          border-color: var(--color-primary);
          box-shadow: 0 0 0 4px rgba(26, 115, 232, 0.08);
          background: #fff;
        }
      `}</style>
    </div>
  );
}

function Field({ label, required, error, children }) {
  return (
    <div>
      <label className="block text-sm font-medium text-[var(--color-text)] mb-1.5">
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      {children}
      {error && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><span>⚠</span> {error}</p>}
    </div>
  );
}
