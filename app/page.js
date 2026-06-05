"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HeartPulse, MapPin, ShieldCheck, Activity, Award, Calendar } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef(null);
  
  // Page 1 & 2 ke liye 3 Surgeons Group Ref
  const mainGroupRef = useRef(null);
  const mainScalpelRef = useRef(null);
  
  // Page 3 ke liye Single Surgeon aur About points Refs
  const singleDoctorRef = useRef(null);
  const singleInstrumentRef = useRef(null);
  const aboutPoint1Ref = useRef(null);
  const aboutPoint2Ref = useRef(null);
  const aboutPoint3Ref = useRef(null);

  useEffect(() => {
    // --- 1. HERO & PAGE 2: JAISA PEHLE THA WAISA HI CENTER ZOOM MOTION ---
    gsap.fromTo(mainGroupRef.current, 
      { scale: 0.75, opacity: 0.95 },
      {
        scale: 1.15,
        opacity: 1,
        scrollTrigger: {
          trigger: ".hero-trigger-zone",
          start: "top top",
          end: "bottom center",
          scrub: 2,
        }
      }
    );

    gsap.fromTo(mainScalpelRef.current,
      { rotate: -10, scale: 0.85 },
      {
        rotate: 8,
        scale: 1.05,
        scrollTrigger: {
          trigger: ".hero-trigger-zone",
          start: "top top",
          end: "bottom center",
          scrub: 1.8,
        }
      }
    );

    // --- 2. PAGE 3: SINGLE DOCTOR SIDE-SHIFT & ABOUT US REVEAL ---
    // Jab user Page 3 (About Section) me scroll karega, tab ye single doctor smoothly side hoga
    gsap.timeline({
      scrollTrigger: {
        trigger: ".about-section-trigger",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
        pin: true, // Is page ko thodi der screen par rokega taaki animation smooth dikhe
      }
    })
    .to(singleDoctorRef.current, {
      x: window.innerWidth > 768 ? "-25%" : "-5%", // Smoothly side me shift ho jayega
      scale: 0.9,
    })
    .to(singleInstrumentRef.current, {
      rotate: -15, // Instrument position holding stance me chala jayega
    }, 0);

    // About Us points 1-1 karke khulna start honge
    const points = [aboutPoint1Ref.current, aboutPoint2Ref.current, aboutPoint3Ref.current];
    points.forEach((point) => {
      gsap.fromTo(point,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: point,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
          }
        }
      );
    });

  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-[#e5e7eb] text-gray-900 overflow-x-hidden">
      
      {/* ================= LAYER A: PAGE 1 & 2 KA SURGEONS GROUP (CENTER ZOOM) ================= */}
      <div className="hero-trigger-zone absolute top-0 left-0 w-full h-[180vh] pointer-events-none z-10">
        <div className="sticky top-0 w-full h-screen flex items-center justify-center overflow-hidden">
          <div ref={mainGroupRef} className="w-[320px] h-[320px] md:w-[550px] md:h-[550px] will-change-transform flex items-center justify-center">
            <svg className="w-full h-full drop-shadow-[0_20px_45px_rgba(0,0,0,0.14)]" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="surgeonGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.12" />
                  <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0.0" />
                </linearGradient>
                <linearGradient id="suitGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#334155" />
                  <stop offset="100%" stopColor="#0f172a" />
                </linearGradient>
                <linearGradient id="scalpelGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#cbd5e1" />
                  <stop offset="50%" stopColor="#ffffff" />
                  <stop offset="100%" stopColor="#64748b" />
                </linearGradient>
              </defs>

              <circle cx="300" cy="300" r="220" fill="url(#surgeonGlow)" />
              
              {/* LEFT SURGEON */}
              <g opacity="0.85" transform="translate(-55, 25) scale(0.88)">
                <path d="M220 500 C220 380, 340 380, 340 500" fill="url(#suitGrad)" />
                <circle cx="280" cy="350" r="45" fill="#e2e8f0" stroke="#475569" strokeWidth="2.5" />
                <path d="M250 320 C250 300, 310 300, 310 320 Z" fill="#3b82f6" />
                <path d="M255 350 C255 375, 305 375, 305 350 Z" fill="#64748b" />
              </g>

              {/* RIGHT SURGEON */}
              <g opacity="0.85" transform="translate(55, 25) scale(0.88)">
                <path d="M260 500 C260 380, 380 380, 380 500" fill="url(#suitGrad)" />
                <circle cx="320" cy="350" r="45" fill="#e2e8f0" stroke="#475569" strokeWidth="2.5" />
                <path d="M290 320 C290 300, 350 300, 350 320 Z" fill="#3b82f6" />
                <path d="M295 350 C295 375, 345 375, 345 350 Z" fill="#64748b" />
              </g>

              {/* CENTER LEAD SURGEON */}
              <g>
                <path d="M180 550 C180 400, 420 400, 420 550" fill="url(#suitGrad)" stroke="#1e293b" strokeWidth="1.5" />
                <circle cx="300" cy="340" r="55" fill="#f1f5f9" stroke="#334155" strokeWidth="3.5" />
                <path d="M250 305 C250 270, 350 270, 350 305 Z" fill="#1d4ed8" />
                <path d="M265 345 C265 385, 335 385, 335 345 Z" fill="#38bdf8" />
                <path d="M275 325 Q300 320 325 325" stroke="#0f172a" strokeWidth="2.5" fill="none" />
              </g>

              {/* INSTRUMENT */}
              <g ref={mainScalpelRef} transform="translate(300, 420)">
                <circle cx="0" cy="0" r="18" fill="#38bdf8" stroke="#0284c7" strokeWidth="1.5" />
                <path d="M-5 -5 L-40 -120 L-30 -125 L5 -10 Z" fill="url(#scalpelGrad)" stroke="#475569" strokeWidth="1" />
                <path d="M-40 -120 C-50 -150, -35 -170, -35 -170" stroke="#94a3b8" strokeWidth="1" />
              </g>
            </svg>
          </div>
        </div>
      </div>

      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-6">
        <div className="flex items-center gap-2 font-medium text-xl tracking-tight text-gray-900">
          <HeartPulse className="w-6 h-6 text-blue-600" />
          <span>surgeon clinic</span>
        </div>
        <div className="flex items-center gap-4 md:gap-6">
          <div className="flex items-center gap-1.5 text-xs md:text-sm font-medium text-gray-700 bg-white/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-sm">
            <MapPin className="w-4 h-4 text-gray-600" />
            <span>Begusarai, India</span>
          </div>
          <button className="bg-gray-900 text-white text-xs md:text-sm font-medium px-5 py-2.5 rounded-xl">Menu</button>
        </div>
      </header>

      {/* ================= PAGE 1: ORIGINAL HERO SECTION ================= */}
      <section className="relative min-h-screen pt-36 px-6 md:px-12 flex flex-col justify-between z-20 max-w-7xl mx-auto">
        <div className="max-w-4xl mt-6 md:mt-12">
          {/* PURANA HOORAY TEXT RESTORED */}
          <h1 className="text-5xl md:text-8xl font-light tracking-tight leading-[1.05] text-gray-900 uppercase">
            innovative <br />
            <span className="font-outline font-normal">surgical technology</span> <br />
            for a healthy <br />
            <span className="font-normal normal-case italic">and confident life</span>
          </h1>
          <button className="mt-10 bg-gray-900 text-white font-medium px-8 py-4 rounded-full shadow-lg text-sm">
            Book a Consultation
          </button>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10 border-t border-gray-400/30 mt-16 bg-white/10 backdrop-blur-sm rounded-2xl px-6 md:px-10 mb-8">
          <div>
            <h3 className="text-5xl font-light text-gray-900 tracking-tight">+ 1350+</h3>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold mt-2">Successful Operations</p>
          </div>
          <div>
            <h3 className="text-5xl font-light text-gray-900 tracking-tight">12</h3>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold mt-2">Years of Medical Excellence</p>
          </div>
          <div>
            <h3 className="text-5xl font-light text-gray-900 tracking-tight">04</h3>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold mt-2">Advanced Clinics in Bihar</p>
          </div>
        </div>
      </section>

      {/* ================= PAGE 2: SERVICES QUICK VIEW ================= */}
      <section className="relative min-h-screen py-24 px-6 md:px-12 z-20 bg-gray-100/95 backdrop-blur-md border-t border-gray-300">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Services</span>
            <h2 className="text-4xl md:text-6xl font-light text-gray-900 mt-4 leading-tight">
              Expert care <br /><span className="font-normal italic text-slate-700">for every patient</span>
            </h2>
          </div>
          <div className="flex flex-col divide-y divide-gray-300/80">
            <div className="py-8">
              <h4 className="text-2xl font-medium text-gray-900">Advanced Laparoscopic Surgery</h4>
              <p className="text-xs text-gray-500 mt-1">Est. Costing: ₹25,000 - ₹60,000</p>
            </div>
            <div className="py-8">
              <h4 className="text-2xl font-medium text-gray-900">General & Trauma Surgery</h4>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PAGE 3: ABOUT US PAR EK SINGLE DOCTOR BICH ME KHRA HO ================= */}
      {/* Is section me scroll karne par doctor dheere-dheere left side jayega aur right side text points khulenge */}
      <section className="about-section-trigger relative min-h-[180vh] z-30 bg-gray-50 border-t border-gray-300">
        
        {/* FIXED SINGLE DOCTOR WITH INSTRUMENTS IN THE CENTER INITIALLY */}
        <div className="sticky top-0 w-full h-screen flex items-center justify-center pointer-events-none overflow-hidden">
          <div ref={singleDoctorRef} className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] flex items-center justify-center will-change-transform">
            <svg className="w-full h-full drop-shadow-[0_25px_50px_rgba(0,0,0,0.15)]" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="300" cy="300" r="200" fill="#3b82f6" fillOpacity="0.08" />
              
              {/* SINGLE DOCTOR ELEMENT */}
              <g>
                <path d="M180 550 C180 390, 420 390, 420 550" fill="url(#suitGrad)" stroke="#1e293b" strokeWidth="1.5" />
                <circle cx="300" cy="340" r="55" fill="#f1f5f9" stroke="#334155" strokeWidth="3.5" />
                <path d="M250 305 C250 270, 350 270, 350 305 Z" fill="#1d4ed8" />
                <path d="M265 345 C265 385, 335 385, 335 345 Z" fill="#0ea5e9" />
              </g>

              {/* SURGERY INSTRUMENTS IN HAND */}
              <g ref={singleInstrumentRef} transform="translate(300, 420)">
                <circle cx="0" cy="0" r="18" fill="#0ea5e9" stroke="#0284c7" strokeWidth="1.5" />
                {/* Long Surgical Forceps / Knife Clamp Tool */}
                <path d="M-3 -5 L-20 -130 L-10 -135 L5 -5 Z" fill="url(#scalpelGrad)" stroke="#475569" strokeWidth="1" />
                <circle cx="-15" cy="-132" r="6" stroke="#64748b" strokeWidth="1.5" fill="none" />
                <path d="M-20 -130 Q-35 -165 -25 -180" stroke="#cbd5e1" strokeWidth="1.5" fill="none" />
                <path d="M-10 -135 Q5 -165 -5 -180" stroke="#cbd5e1" strokeWidth="1.5" fill="none" />
              </g>
            </svg>
          </div>
        </div>

        {/* OVERLAY CONTENT FOR ABOUT US DETAILS */}
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 px-6 md:px-12 -mt-[100vh] pointer-events-none">
          <div className="hidden lg:block" /> {/* Left Side spacing for shifting doctor */}
          
          <div className="flex flex-col justify-center space-y-32 py-24 lg:pl-12 pointer-events-auto">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">01 / Profile Brief</span>
              <h2 className="text-4xl md:text-6xl font-light text-gray-900 mt-2 leading-tight">About Our Clinic</h2>
            </div>

            {/* Point 1 */}
            <div ref={aboutPoint1Ref} className="bg-white/90 backdrop-blur-md border border-white p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900">Highly Specialized Surgical Panel</h4>
              <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                Led by premier clinicians holding deep domain expertise in advanced laparoscopic and complex trauma care models.
              </p>
            </div>

            {/* Point 2 */}
            <div ref={aboutPoint2Ref} className="bg-white/90 backdrop-blur-md border border-white p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900">Patient Sterilization Protocols</h4>
              <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                Zero compromise healthcare environments with ultra-modern laminar airflow theatres adhering to clinical standards.
              </p>
            </div>

            {/* Point 3 */}
            <div ref={aboutPoint3Ref} className="bg-white/90 backdrop-blur-md border border-white p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                <Activity className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900">Advanced Post-Op Recoveries</h4>
              <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                Utilizing state-of-the-art diagnostic sensors and minimal tissue trauma techniques to guarantee drastically fast recovery.
              </p>
            </div>
          </div>
        </div>

      </section>

      {/* ================= PAGE 4: DETAILED MEDICAL SERVICES GRID ================= */}
      <section className="relative min-h-screen py-28 px-6 md:px-12 z-40 bg-gray-900 text-white border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end pb-12 border-b border-gray-800">
            <div>
              <span className="text-xs font-mono tracking-widest text-blue-400 uppercase">Clinical Focus</span>
              <h2 className="text-4xl md:text-6xl font-light tracking-tight mt-2">Expert Operative Solutions</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/[0.05]">
              <span className="text-xs font-mono text-blue-400">01</span>
              <h4 className="text-2xl font-medium mt-3">Advanced Laparoscopic Surgery</h4>
              <p className="text-sm text-gray-400 mt-2">Minimally invasive keyhole setups for rapid structural diagnostic repairs.</p>
              <div className="mt-6 pt-6 border-t border-white/[0.05] flex justify-between items-center">
                <span className="text-xs text-gray-500">Est Package Cost</span>
                <span className="text-lg font-mono text-emerald-400">₹25,000 - ₹60,000</span>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/[0.05]">
              <span className="text-xs font-mono text-blue-400">02</span>
              <h4 className="text-2xl font-medium mt-3">General & Trauma Care</h4>
              <p className="text-sm text-gray-400 mt-2">Emergency crisis surgery setups with 24/7 round-the-clock modules.</p>
              <div className="mt-6 pt-6 border-t border-white/[0.05] flex justify-between items-center">
                <span className="text-xs text-gray-500">Est Package Cost</span>
                <span className="text-lg font-mono text-emerald-400">On Evaluation Matrix</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PAGE 5: REGIONS & APPOINTMENT FORM ================= */}
      <section className="relative min-h-screen py-24 px-6 md:px-12 z-40 bg-[#f3f4f6] border-t border-gray-300">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Regional Network</span>
            <h2 className="text-4xl md:text-6xl font-light text-gray-900 mt-2 tracking-tight">Our Center Location</h2>
            
            <div className="mt-10 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl"><MapPin className="w-6 h-6" /></div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">Begusarai Central Surgical Wing</h4>
                  <p className="text-sm text-gray-500 mt-1">Main Bypass Road, Near Medical Zone, Begusarai, Bihar</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-200 shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="w-5 h-5 text-blue-600" />
              <h3 className="text-2xl font-medium text-gray-900">Request Consultation</h3>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              <div>
                <label className="text-xs font-medium text-gray-500 block mb-2">Patient Full Name</label>
                <input type="text" placeholder="e.g. Himanshu Raj" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none" />
              </div>
              <button className="w-full bg-blue-600 text-white font-medium py-4 rounded-xl text-sm">
                Submit Consultation Request
              </button>
            </form>
          </div>
        </div>

        <footer className="max-w-7xl mx-auto mt-24 pt-8 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2026 Surgeon Clinic Wing. All Rights Reserved.</p>
        </footer>
      </section>

    </div>
  );
}