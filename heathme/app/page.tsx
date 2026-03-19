"use client";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import mammographyImg from "./Image_HeathMe/mammography.png";
import Image from "next/image";
import architechtureImg from "./Image_HeathMe/thairis30-workflow.jpg";
import architechtureMultiImg from "./Image_HeathMe/thairis30-workflow-tele.jpg";
import heah_dash from "./Image_HeathMe/heah_dashboard.png";
import regist from "./Image_HeathMe/regist.png";
import seach_p from "./Image_HeathMe/search_patient.png";
import create_order from "./Image_HeathMe/create_order.png";
import a from "./Image_HeathMe/1.png";
import b from "./Image_HeathMe/2.png";
import c from "./Image_HeathMe/3.png";
import d from "./Image_HeathMe/4.png";
import e from "./Image_HeathMe/5.png";
import f from "./Image_HeathMe/6.png";
import g from "./Image_HeathMe/7.png";
import h from "./Image_HeathMe/8.png";
import i from "./Image_HeathMe/9.png";
import k from "./Image_HeathMe/10.png";
import a1 from "./Image_HeathMe/11.png";
import a2 from "./Image_HeathMe/12.png";
import a3 from "./Image_HeathMe/13.png";
import a4 from  "./Image_HeathMe/15.png";
import a5 from "./Image_HeathMe/16.png";
import a6 from "./Image_HeathMe/17.png";
import a7 from "./Image_HeathMe/18.png";
import a8 from "./Image_HeathMe/19.png";
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
          <div className="animate-float bg-white/12 rounded-3xl p-10 backdrop-blur-sm border border-white/20 flex items-center justify-center min-h-[320px] text-white/70 font-semibold text-base text-center">
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
            <div className="bg-linear-to-br from-bg-section to-[#E0ECFF] rounded-2xl flex items-center justify-center text-primary font-semibold text-[0.95rem] border-2 border-dashed border-primary/25 min-h-[280px] text-center p-5">
              <div>
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#4A90E2" strokeWidth="1.5" strokeLinecap="round" className="mb-3">
                  <path d="M3 21h18M9 8h1M9 12h1M9 16h1M14 8h1M14 12h1M14 16h1M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16" />
                </svg>
                <p>[Place your company logo or team photo here]</p>
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
                  <p className="font-bold text-foreground text-[0.95rem] mb-1">Objective</p>
                  <p className="text-muted text-[0.88rem] leading-relaxed">
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
                  <p className="font-bold text-foreground text-[0.95rem] mb-1">Development</p>
                  <p className="text-muted text-[0.88rem] leading-relaxed">
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
                  <p className="font-bold text-foreground text-[0.95rem] mb-1">Contact</p>
                  <a
                    href="mailto:info.xraythai@gmail.com"
                    className="text-[0.88rem] text-orange-600 font-semibold hover:underline"
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
              <p><Image src={architechtureImg} alt="architechtureImg" width={800} height={800} /></p>
              <p><Image src={architechtureMultiImg} alt="architechtureImg" width={800} height={800} /></p>
            </div>
          </div>

          {/* Platform Cards */}
          <h3 className="text-xl font-bold text-center mb-6 text-foreground">
            Supported Integrations & Viewers
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
                <p><Image src={heah_dash} alt="heah_dash" width={800} height={800} /></p>
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

         


        </div>
      </section>

      {/* ============================================
          Section 6: Screen Results
          ============================================ */}
      <section id="screen-results" className="py-20 px-6 md:py-24 lg:py-28 bg-white relative overflow-hidden">
<div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ,12, 13, 14, 15, 16, 17, 18, 19 ,20, 21].map((num) => {
    
    // 2. สร้างตัวแปรเก็บข้อมูลตามเลข num
    let currentImg = null;
    let title = `[Screen Title ${num}]`;
    let description = "[Brief caption describing what this screen shows]";

    // 3. ใช้ switch เช็คว่า num ไหนใช้รูป/ข้อความอะไร
    switch(num) {
      case 1:
        currentImg = regist.src;
        title = "Registration Screen";
        description = "User sign-up and profile creation flow.";
        break;
      case 2:
        currentImg = seach_p.src; // ใส่รูปที่ import มา
        title = "seach pat";
        description = "Secure access to user accounts.";
        break;
      case 3:
        currentImg = create_order.src;
        title = "create order";
        description = "Overview of health statistics.";
        break;
      case 4:
        currentImg = a.src;
        title = "Main Dashboard";
        description = "Overview of health statistics.";
        break;       
      case 5:
        currentImg = b.src;
        title = "Main Dashboard";
        description = "Overview of health statistics.";
        break;
      case 6:
        currentImg = c.src;
        title = "Main Dashboard";
        description = "Overview of health statistics.";
        break;
      case 7:
        currentImg = d.src;
        title = "Main Dashboard";
        description = "Overview of health statistics.";
        break;
      case 8:
        currentImg = e.src;
        title = "Main Dashboard";
        description = "Overview of health statistics.";
        break;
      case 9:
        currentImg = f.src;
        title = "Main Dashboard";
        description = "Overview of health statistics.";
        break;
      case 10:
        currentImg = g.src;
        title = "Main Dashboard";
        description = "Overview of health statistics.";
        break;
      case 11:
        currentImg = h.src;
        title = "Main Dashboard";
        description = "Overview of health statistics.";
        break;
      case 12:
        currentImg = i.src;
        title = "Main Dashboard";
        description = "Overview of health statistics.";
        break;
      case 13:
        currentImg = k.src;
        title = "Main Dashboard";
        description = "Overview of health statistics.";
        break; 
      case 14:
        currentImg = a1.src;
        title = "Main Dashboard";
        description = "Overview of health statistics.";
        break; 
      case 15:
        currentImg = a2.src;
        title = "Main Dashboard";
        description = "Overview of health statistics.";
        break;
      case 16:
        currentImg = a3.src;
        title = "Main Dashboard";
        description = "Overview of health statistics.";
        break; 
      case 17:
        currentImg = a4.src;
        title = "Main Dashboard";
        description = "Overview of health statistics.";
        break;  
      case 18:
        currentImg = a5.src;
        title = "Main Dashboard";
        description = "Overview of health statistics.";
        break;
      case 19:
        currentImg = a6.src;
        title = "Main Dashboard";
        description = "Overview of health statistics.";
        break;
      case 20:
        currentImg = a7.src;
        title = "Main Dashboard";
        description = "Overview of health statistics.";
        break;  
      case 21:
        currentImg = a8.src;
        title = "Main Dashboard";
        description = "Overview of health statistics.";
        break;                                                                     
        // เพิ่ม case 4, 5, 6 ได้ที่นี่
    }

    return (
      <div
        key={num}
        className="bg-white rounded-2xl overflow-hidden shadow-card border border-primary/[0.06] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover"
      >
        <div className="bg-gradient-to-br from-bg-section to-[#E0ECFF] flex items-center justify-center text-primary font-semibold border-b-2 border-dashed border-primary/25 min-h-[200px] text-center p-5">
          {currentImg ? (
            <img 
              src={currentImg} 
              alt={title} 
              className="w-full h-[200px] object-cover" 
            />
          ) : (
            <div>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#4A90E2" strokeWidth="1.5" strokeLinecap="round" className="mb-2 mx-auto">
                <rect x="3" y="3" width="18" height="18" rx="3" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="M21 15l-5-5L5 21" />
              </svg>
              <p className="text-[0.85rem]">[Screenshot {num}]</p>
            </div>
          )}
        </div>
        
        <div className="p-6">
          <p className="font-semibold text-foreground text-[0.95rem] mb-1">
            {title}
          </p>
          <p className="text-muted text-[0.85rem] leading-normal">
            {description}
          </p>
        </div>
      </div>
    );
  })}
</div>
      </section>

      <Footer />
    </>
  );
}
