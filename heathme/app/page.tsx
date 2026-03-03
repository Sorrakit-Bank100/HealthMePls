"use client";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {

  // section 2 
  const company_info = [
    { label: "Founded", value: "[Year]" },
    { label: "Team Size", value: "[Number]" },
    { label: "Location", value: "[City]" },
    { label: "Projects", value: "[Count]" },]

  // section 3 architecture / platform 
  const platforms = [
    { icon: "🖥️", name: "[Platform 1]", desc: "[e.g., Windows Desktop]" },
    { icon: "🌐", name: "[Platform 2]", desc: "[e.g., Web Browser]" },
    { icon: "📱", name: "[Platform 3]", desc: "[e.g., iOS / Android]" },
    { icon: "☁️", name: "[Platform 4]", desc: "[e.g., Cloud / Server]" },]

  // section 4 features 
  const features = [
    { icon: "🔍", title: "[Feature 1]", desc: "[Briefly describe what this feature does and its benefit to the user.]" },
    { icon: "💊", title: "[Feature 2]", desc: "[Briefly describe what this feature does and its benefit to the user.]" },
    { icon: "💬", title: "[Feature 3]", desc: "[Briefly describe what this feature does and its benefit to the user.]" },
    { icon: "📋", title: "[Feature 4]", desc: "[Briefly describe what this feature does and its benefit to the user.]" },
    { icon: "🚑", title: "[Feature 5]", desc: "[Briefly describe what this feature does and its benefit to the user.]" },
    { icon: "📚", title: "[Feature 6]", desc: "[Briefly describe what this feature does and its benefit to the user.]" },
  ]

  return (
    <>
      <Navbar />

      {/**************** Section 1: Software Name ********************/}
      <section
        id="software-name"
        className="min-h-screen gradient-hero flex items-center relative overflow-hidden pt-[120px] pb-20 px-6"
      >
        {/* Decorative blobs */}
        <div className="blob bg-accent w-[400px] h-[400px] -top-[100px] -right-[100px]" />
        <div className="blob bg-primary w-[300px] h-[300px] -bottom-[50px] -left-[80px] opacity-15" />

        <div className="max-w-[1200px] mx-auto relative z-[2] grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
          {/* Text Content */}
          <div className="animate-fade-in-up">
            <p className="text-white/80 font-semibold text-[0.95rem] mb-3 tracking-widest uppercase">
              Welcome to
            </p>
            <h1 className="text-[clamp(2.5rem,6vw,4rem)] font-extrabold text-white leading-[1.1] mb-5 tracking-tight">
              [Your Software
              <br />
              Name Here]
            </h1>
            <p className="text-lg text-white/85 leading-relaxed max-w-[520px] mb-8">
              [Write a brief tagline or description about your software here. Explain what it does and why it matters.]
            </p>
            <div className="flex gap-4 flex-wrap">
              <a
                href="#functionalities"
                className="inline-flex items-center gap-2 py-3.5 px-8 bg-white text-primary font-bold text-base rounded-full no-underline shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 transition-transform duration-300"
              >
                Explore Features ↓
              </a>
              <a
                href="#company"
                className="inline-flex items-center gap-2 py-3.5 px-8 bg-transparent text-white font-semibold text-base rounded-full border-2 border-white/40 no-underline hover:bg-white/10 transition-all duration-300"
              >
                About Us
              </a>
            </div>
          </div>

          {/*  Illustration Image  */}
          <div className="animate-float bg-white/12 rounded-3xl p-10 backdrop-blur-sm border border-white/20 flex items-center justify-center min-h-[320px] text-white/70 font-semibold text-base text-center">
            <div>
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" className="mb-4">
                <rect x="3" y="3" width="18" height="18" rx="3" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="M21 15l-5-5L5 21" />
              </svg>
              <p>[Place your hero image or illustration here]</p>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <svg
          className="absolute -bottom-px left-0 right-0 w-full"
          viewBox="0 0 1440 100"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C360,100 1080,0 1440,60 L1440,100 L0,100 Z"
            fill="#ffffff"
          />
        </svg>
      </section>

      {/* ============================================
          Section 2: Company  
          ============================================ */}
      <section id="company" className="py-20 px-6 md:py-24 lg:py-28 bg-white relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto relative z-[2]">
          <h2 className="text-3xl md:text-[2.5rem] font-extrabold text-foreground text-center mb-3 tracking-tight">
            Company & Developer
          </h2>
          <div className="w-[60px] h-1 gradient-divider rounded-full mx-auto mt-4 mb-6" />
          <p className="text-[1.05rem] text-muted text-center max-w-[600px] mx-auto mb-12 leading-relaxed">
            [Briefly describe your company, organization, or development team here.]
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Company Logo / Image */}
            <div className="bg-gradient-to-br from-bg-section to-[#E0ECFF] rounded-2xl flex items-center justify-center text-primary font-semibold text-[0.95rem] border-2 border-dashed border-primary/25 min-h-[280px] text-center p-5">
              <div>
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#4A90E2" strokeWidth="1.5" strokeLinecap="round" className="mb-3">
                  <path d="M3 21h18M9 8h1M9 12h1M9 16h1M14 8h1M14 12h1M14 16h1M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16" />
                </svg>
                <p>[Place your company logo or team photo here]</p>
              </div>
            </div>

            {/* Company Info */}
            <div>
              <h3 className="text-[1.6rem] font-bold text-foreground mb-4">
                [Company / Organization Name]
              </h3>
              <p className="text-muted leading-relaxed text-base mb-5">
                [Describe the company background, mission, and vision here. Who are the developers? What drives the team? Include relevant history or notable achievements.]
              </p>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-4">
                {company_info.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-bg-soft rounded-xl py-4 px-5 text-center"
                  >
                    <p className="font-extrabold text-[1.3rem] text-primary mb-1">
                      {stat.value}
                    </p>
                    <p className="text-[0.82rem] text-muted font-medium">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          Section 3: Architecture & Platforms
          ============================================ */}
      <section
        id="architecture"
        className="py-20 px-6 md:py-24 lg:py-28 bg-bg-soft relative overflow-hidden"
      >
        <div className="blob bg-primary w-[350px] h-[350px] -top-[100px] -left-[150px]" />
        <div className="blob bg-accent w-[250px] h-[250px] -bottom-[80px] -right-[100px]" />

        <div className="max-w-[1200px] mx-auto relative z-[2]">
          <h2 className="text-3xl md:text-[2.5rem] font-extrabold text-foreground text-center mb-3 tracking-tight">
            Architecture & Platforms
          </h2>
          <div className="w-[60px] h-1 gradient-divider rounded-full mx-auto mt-4 mb-6" />
          <p className="text-[1.05rem] text-muted text-center max-w-[600px] mx-auto mb-12 leading-relaxed">
            [Describe the overall software architecture and the platforms it supports.]
          </p>

          {/* Architecture Diagram Placeholder */}
          <div className="bg-gradient-to-br from-bg-section to-[#E0ECFF] rounded-2xl flex items-center justify-center text-primary font-semibold text-[0.95rem] border-2 border-dashed border-primary/25 min-h-[240px] mb-12 max-w-[800px] mx-auto text-center p-5">
            <div>
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#4A90E2" strokeWidth="1.5" strokeLinecap="round" className="mb-3">
                <rect x="2" y="2" width="6" height="6" rx="1" />
                <rect x="16" y="2" width="6" height="6" rx="1" />
                <rect x="9" y="16" width="6" height="6" rx="1" />
                <path d="M5 8v2a4 4 0 004 4h6a4 4 0 004-4V8" />
                <path d="M12 14v2" />
              </svg>
              <p>[Place your architecture diagram here]</p>
            </div>
          </div>

          {/* Platform Cards */}
          <h3 className="text-xl font-bold text-center mb-6 text-foreground">
            Supported Platforms
          </h3>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-5">
            {platforms.map((platform) => (
              <div
                key={platform.name}
                className="bg-white rounded-2xl py-8 px-7 shadow-card border border-primary/[0.06] text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover"
              >
                <div className="text-[40px] mb-3">{platform.icon}</div>
                <p className="text-[1.15rem] font-bold text-foreground mb-2">
                  {platform.name}
                </p>
                <p className="text-[0.92rem] text-muted leading-relaxed">
                  {platform.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          Section 4: Functionalities
          ============================================ */}
      <section id="functionalities" className="py-20 px-6 md:py-24 lg:py-28 bg-white relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto relative z-[2]">
          <h2 className="text-3xl md:text-[2.5rem] font-extrabold text-foreground text-center mb-3 tracking-tight">
            Functionalities
          </h2>
          <div className="w-[60px] h-1 gradient-divider rounded-full mx-auto mt-4 mb-6" />
          <p className="text-[1.05rem] text-muted text-center max-w-[600px] mx-auto mb-12 leading-relaxed">
            [Describe the core features and functionalities of your software.]
          </p>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-2xl py-8 px-7 shadow-card border border-primary/[0.06] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover"
              >
                <div className="w-14 h-14 rounded-[14px] gradient-primary flex items-center justify-center mb-5 text-2xl text-white">
                  {feature.icon}
                </div>
                <h3 className="text-[1.15rem] font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-[0.92rem] text-muted leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="#user-interfaces"
              className="inline-flex items-center gap-2 py-3.5 px-8 bg-transparent text-primary font-semibold text-base rounded-full border-2 border-primary no-underline hover:bg-primary hover:text-white hover:-translate-y-0.5 transition-all duration-300"
            >
              See User Interfaces →
            </a>
          </div>
        </div>
      </section>

      {/* ============================================
          Section 5: User Interfaces
          ============================================ */}
      <section
        id="user-interfaces"
        className="py-20 px-6 md:py-24 lg:py-28 bg-bg-section relative overflow-hidden"
      >
        <div className="blob bg-accent w-[300px] h-[300px] -top-[80px] -right-[100px]" />

        <div className="max-w-[1200px] mx-auto relative z-[2]">
          <h2 className="text-3xl md:text-[2.5rem] font-extrabold text-foreground text-center mb-3 tracking-tight">
            User Interfaces
          </h2>
          <div className="w-[60px] h-1 gradient-divider rounded-full mx-auto mt-4 mb-6" />
          <p className="text-[1.05rem] text-muted text-center max-w-[600px] mx-auto mb-12 leading-relaxed">
            [Describe the types of user interfaces your software supports.]
          </p>

          {/* UI Item 1 — Image Left, Text Right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-14">
            <div className="bg-gradient-to-br from-bg-section to-[#E0ECFF] rounded-2xl flex items-center justify-center text-primary font-semibold text-[0.95rem] border-2 border-dashed border-primary/25 min-h-[260px] text-center p-5">
              <div>
                <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#4A90E2" strokeWidth="1.5" strokeLinecap="round" className="mb-3">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <path d="M8 21h8M12 17v4" />
                </svg>
                <p>[Screenshot of UI 1]</p>
              </div>
            </div>
            <div>
              <h3 className="text-[1.4rem] font-bold text-foreground mb-3">
                [Interface Type 1 — e.g., Web Dashboard]
              </h3>
              <p className="text-muted leading-relaxed text-[0.98rem] mb-4">
                [Describe this user interface: what it looks like, who uses it, and what functionality it provides. Include details about the design approach and user experience.]
              </p>
              <a
                href="#screen-results"
                className="inline-flex items-center gap-2 py-2.5 px-6 gradient-primary text-white font-semibold text-[0.9rem] rounded-full no-underline shadow-btn hover:-translate-y-0.5 transition-transform duration-300"
              >
                View Screenshots
              </a>
            </div>
          </div>

          {/* UI Item 2 — Text Left, Image Right (reversed) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-14">
            <div className="md:order-2">
              <h3 className="text-[1.4rem] font-bold text-foreground mb-3">
                [Interface Type 2 — e.g., Mobile App]
              </h3>
              <p className="text-muted leading-relaxed text-[0.98rem]">
                [Describe this user interface: what it looks like, who uses it, and what functionality it provides. Include details about responsiveness and mobile-specific features.]
              </p>
            </div>
            <div className="bg-gradient-to-br from-bg-section to-[#E0ECFF] rounded-2xl flex items-center justify-center text-primary font-semibold text-[0.95rem] border-2 border-dashed border-primary/25 min-h-[260px] text-center p-5 md:order-1">
              <div>
                <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#4A90E2" strokeWidth="1.5" strokeLinecap="round" className="mb-3">
                  <rect x="5" y="2" width="14" height="20" rx="2" />
                  <path d="M12 18h.01" />
                </svg>
                <p>[Screenshot of UI 2]</p>
              </div>
            </div>
          </div>

          {/* UI Item 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="bg-gradient-to-br from-bg-section to-[#E0ECFF] rounded-2xl flex items-center justify-center text-primary font-semibold text-[0.95rem] border-2 border-dashed border-primary/25 min-h-[260px] text-center p-5">
              <div>
                <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#4A90E2" strokeWidth="1.5" strokeLinecap="round" className="mb-3">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                <p>[Screenshot of UI 3]</p>
              </div>
            </div>
            <div>
              <h3 className="text-[1.4rem] font-bold text-foreground mb-3">
                [Interface Type 3 — e.g., API / CLI]
              </h3>
              <p className="text-muted leading-relaxed text-[0.98rem]">
                [Describe this user interface: what it looks like, who uses it, and what functionality it provides. This could be an API, command-line interface, or another type of interface.]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          Section 6: Screen Results
          ============================================ */}
      <section id="screen-results" className="py-20 px-6 md:py-24 lg:py-28 bg-white relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto relative z-[2]">
          <h2 className="text-3xl md:text-[2.5rem] font-extrabold text-foreground text-center mb-3 tracking-tight">
            Screen Results
          </h2>
          <div className="w-[60px] h-1 gradient-divider rounded-full mx-auto mt-4 mb-6" />
          <p className="text-[1.05rem] text-muted text-center max-w-[600px] mx-auto mb-12 leading-relaxed">
            [Screenshots showcasing your software with real data and results.]
          </p>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div
                key={num}
                className="bg-white rounded-2xl overflow-hidden shadow-card border border-primary/[0.06] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover"
              >
                <div className="bg-gradient-to-br from-bg-section to-[#E0ECFF] flex items-center justify-center text-primary font-semibold border-b-2 border-dashed border-primary/25 min-h-[200px] text-center p-5">
                  <div>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#4A90E2" strokeWidth="1.5" strokeLinecap="round" className="mb-2">
                      <rect x="3" y="3" width="18" height="18" rx="3" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <path d="M21 15l-5-5L5 21" />
                    </svg>
                    <p className="text-[0.85rem]">[Screenshot {num}]</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="font-semibold text-foreground text-[0.95rem] mb-1">
                    [Screen Title {num}]
                  </p>
                  <p className="text-muted text-[0.85rem] leading-normal">
                    [Brief caption describing what this screen shows]
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
