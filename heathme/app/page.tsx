"use client";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import mammographyImg from "./Image_HeathMe/mammography.png";
import Image from "next/image";
import architechtureImg from "./Image_HeathMe/thairis30-workflow.jpg";
import architechtureMultiImg from "./Image_HeathMe/thairis30-workflow-tele.jpg";
import realarchitechtureImg from "./Image_HeathMe/HL7-Flow.jpg";
import Logo from './Image_HeathMe/dlss_1.png'
import radi from './Image_HeathMe/RadiAnt.png'
import weasis from './Image_HeathMe/Weasis.png'
import dcm4chee from './Image_HeathMe/dcm4chee.png'
import ohi from './Image_HeathMe/Ohi.png'


export default function Home() {

  // section 2 
  // section 3 architecture / platform 
  const platforms = [
    { icon: "🖥️", name: "Windows/MacOS", desc: "[e.g., Windows Desktop]" },
    { icon: "🌐", name: "Web-based", desc: "[e.g., Web Browser]" }]


  const integrations = [
    { icon: <Image src={weasis} alt="Weasis" width={100} height={100} />, name: "Weasis" },
    { icon: <Image src={dcm4chee} alt="dcm4chee" width={300} height={300} />, name: "-" },
    { icon: <Image src={radi} alt="RadiAnt" width={100} height={100} />, name: "RadiAnt" },
    { icon: <Image src={ohi} alt="OHIF" width={100} height={100} />, name: "Open Health Imaging Foundation" }
  ]

  // section 4 features
  const features = [
    {
      icon: "📋",
      color: "bg-blue-100 text-blue-600",
      title: "Smart Workflow",
      items: [
        "Patient Registration (Manual & MWL)",
        "Scheduling & Appointment",
        "Radiologist Worklist & Assignment",
        "Multi-Site & Tele-Radiology Support",
        "CD/Film Usage Tracking",
      ],
    },
    {
      icon: "✏️",
      color: "bg-emerald-100 text-emerald-600",
      title: "Professional Reporting",
      items: [
        "Customizable Report Templates",
        "Digital Signature Support",
        "Add Key Images to Reports",
        "Mammography BIRADs Tracking",
        "Addendum & Preliminary Reports",
      ],
    },
    {
      icon: "🔗",
      color: "bg-violet-100 text-violet-600",
      title: "Seamless Integration",
      items: [
        "HL7 Interface (ADT, ORM, ORU)",
        "Connects with DCM4CHEE & Orthanc",
        "Integrated Viewers (Weasis, OHIF, RadiAnt)",
        "API for Exam Creation (JSON)",
        "Lab Result Integration",
      ],
    },
    {
      icon: "📊",
      color: "bg-orange-100 text-orange-600",
      title: "Analytics & Stats",
      items: [
        "Turn Around Time (TAT) Reports",
        "Radiologist Workload Statistics",
        "Referrer & Modality Analytics",
        "Export Data to Excel/PDF",
        "Procedure Statistics",
      ],
    },
    {
      icon: "🔒",
      color: "bg-red-100 text-red-500",
      title: "Admin & Security",
      items: [
        "Comprehensive User Management",
        "2-Factor Authentication (2FA)",
        "Detailed Audit Logging",
        "Procedure & Staff Management",
        "Multi-Language Support",
      ],
    },
    {
      icon: "🧪",
      color: "bg-purple-100 text-purple-600",
      title: "Advanced Tools",
      items: [
        "Internal Webboard / Messaging",
        "Teaching Files System",
        "Transcriptionist Workflow",
        "Document & Scan Uploads",
        "100% Web-Based (Zero Footprint)",
      ],
    },
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
            <h1 className="text-[clamp(2.5rem,6vw,4rem)] font-extrabold text-white leading-[1.1] mb-5 tracking-tight">
              ThaiRDS
            </h1>
            <p className="text-lg text-white/85 leading-relaxed max-w-[520px] mb-8">
              ThaiRIS is especially useful for tracking radiology imaging orders and billing information, and is often used in conjunction with Picture Archiving and Communication Systems (PACS) and VNAs to manage record-keeping, billing, and workflow.
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
          <div className="animate-float rounded-3xl p-10   flex items-center justify-center min-h-[320px]  text-center">
            <div>
              <p><Image src={mammographyImg} alt="Mammography" width={800} height={800} /></p>
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
            ThaiRIS
            เป็น Software Open Source
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Company Logo / Image */}
            <div className="animate-float   ">
              <div>
                <p> <Image src={Logo} alt="Logo" width={700} height={700} /></p>
              </div>
            </div>

            {/* Company Info */}
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="text-[1.8rem] font-extrabold text-foreground mb-1 tracking-tight">
                  ThaiRIS
                </h3>
                <p className="text-primary font-semibold text-[1rem] mb-6 tracking-wide uppercase">
                  Thai Radiology Information System
                </p>
              </div>

              {/* Objective Card */}
              <div className="flex gap-4 bg-linear-to-br from-[#F0F6FF] to-[#E8F0FE] rounded-2xl p-5 border border-primary/10 shadow-sm">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-xl">
                  🎯
                </div>
                <div>
                  <p className="font-bold text-foreground text-2xl mb-1">Objective</p>
                  <p className="text-muted text-[1.00rem] leading-relaxed">
                    พัฒนาโดยเน้นที่ Software RIS (Radiology Information System) ซึ่งสามารถ Download ใช้ <span className="font-semibold text-primary">Free Version</span>
                  </p>
                </div>
              </div>

              {/* Develop Card */}
              <div className="flex gap-4 bg-linear-to-br from-[#F0FFF8] to-[#E6F7EE] rounded-2xl p-5 border border-emerald-200/60 shadow-sm">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-xl">
                  💻
                </div>
                <div>
                  <p className="font-bold text-foreground text-2xl  mb-1">Development</p>
                  <p className="text-muted text-[1.00rem] leading-relaxed">
                    พัฒนาโดยใช้ <span className="font-semibold text-emerald-700">PHP, JavaScript</span> และเชื่อมต่อ Database ด้วย <span className="font-semibold text-emerald-700">MySQL</span> — เป็น Web Application ที่ใช้มาตรฐาน <span className="font-semibold text-emerald-700">HL7, HIPAA & IHE</span>
                  </p>
                </div>
              </div>

              {/* Contact Card */}
              <div className="flex gap-4 bg-linear-to-br from-[#FFF8F0] to-[#FEF0E6] rounded-2xl p-5 border border-orange-200/60 shadow-sm">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-xl">
                  📧
                </div>
                <div>
                  <p className="font-bold text-foreground text-2xl  mb-1">Contact</p>
                  <a
                    href="mailto:info.xraythai@gmail.com"
                    className="text-[1.00rem] text-blue-700 font-semibold hover:underline"
                  >
                    info.xraythai@gmail.com
                  </a>
                </div>
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
            Optimized processes for Hospital and Tele-Radiology environments
          </p>

          {/* Architecture Diagram Placeholder */}
          <div className="bg-gradient-to-br from-bg-section to-[#E0ECFF] rounded-2xl flex items-center justify-center text-primary font-semibold text-[0.95rem] border-2 border-dashed border-primary/25 min-h-[240px] mb-12 max-w-[800px] mx-auto text-center p-5">
            <div className="flex flex-col items-center justify-center gap-14">
              <p className="text-xl font-bold text-center mb-6 text-foreground"> Data Flow Architecture
                <Image src={realarchitechtureImg} alt="realarchitechtureImg" width={800} height={800} /></p>

              <p className="text-xl font-bold text-center mb-6 text-foreground"> RIS Simple Workflow
                <Image src={architechtureImg} alt="architechtureImg" width={800} height={800} /></p>

              <p className="text-xl font-bold text-center mb-6 text-foreground"> RIS Tele-Radiology Workflow
                <Image src={architechtureMultiImg} alt="architechtureImg" width={800} height={800} /></p>
            </div>
          </div>

          {/* Platform Cards */}
          <h3 className="text-xl font-bold text-center mb-6 text-foreground">
            Platform Support
          </h3>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-5 mb-12">
            {platforms.map((platform) => (
              <div
                key={platform.name}
                className="bg-white rounded-2xl py-8 px-7 shadow-card border border-primary/[0.06] text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover"
              >
                <div className="text-[40px] mb-3">{platform.icon}</div>
                <p className="text-[1.15rem] font-bold text-foreground mb-2">
                  {platform.name}
                </p>

              </div>
            ))}
          </div>

          <h3 className="text-xl font-bold text-center mb-6 text-foreground">
            Supported Integrations & Viewers
          </h3>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-5 mb-12">
            {integrations.map((integration) => (
              <div
                key={integration.name}
                className="bg-white rounded-2xl py-8 px-7 shadow-card border border-primary/[0.06] text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover"
              >
                <div className="flex flex-col items-center justify-center ">
                  <div className="mb-3">{integration.icon}</div>
                  <p className="text-[1.15rem] font-bold text-foreground mb-2">
                    {integration.name}
                  </p>
                </div>


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
          {/* <p className="text-[1.05rem] text-muted text-center max-w-[600px] mx-auto mb-12 leading-relaxed">
            [Describe the core features and functionalities of your software.]
          </p> */}

          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-2xl py-8 px-7 shadow-card border border-primary/[0.06] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover group"
              >
                {/* Icon Badge */}
                <div className={`w-14 h-14 rounded-[14px] flex items-center justify-center mb-5 text-2xl ${feature.color}`}>
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="text-[1.1rem] font-bold text-foreground mb-4">
                  {feature.title}
                </h3>

                {/* Checklist */}
                <ul className="flex flex-col gap-2">
                  {feature.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[0.88rem] text-muted leading-snug">
                      <span className="mt-[2px] text-emerald-500 font-bold shrink-0">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
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
