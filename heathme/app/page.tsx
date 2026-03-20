"use client";

import { useState } from "react";

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
import heah_dash from "./Image_HeathMe/heah_dashboard.png";
import regist from "./Image_HeathMe/re1.png";
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
import login from "./Image_HeathMe/login.png";

export default function Home() {

  const [selectedImage, setSelectedImage] = useState<{ img: string; title: string; description: string } | null>(null);
  const handleImageClick = (img: string, title: string, description: string) => {
    if (!img) return;
    setSelectedImage({ img, title, description });
  };
  const closeLightbox = () => setSelectedImage(null);

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
          

          {/* UI Item 1 — Image Left, Text Right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-14">
            <div className="bg-gradient-to-br from-bg-section to-[#E0ECFF] rounded-2xl flex items-center justify-center text-primary font-semibold text-[0.95rem] border-2 border-dashed border-primary/25 min-h-[260px] text-center p-5">
              <div>
                
                <p><Image src={login} alt="heah_dash" width={800} height={800} /></p>
              </div>
            </div>
            <div>
              <h3 className="text-[1.4rem] font-bold text-foreground mb-3">
                 Radiology ThaiRIS Version 1.8 demo online
              </h3>
              <div className="text-muted text-[0.98rem] leading-relaxed mb-4 flex flex-col gap-3">
  
  <p className="font-bold text-foreground text-lg">ThaiRIS Version 1.8 (2021)</p>

  <p>
    ThaiRIS is a software developed for Radiology departments. Designed as a web-based application 
    with high flexibility and ease of use. ThaiRIS can be customized for any style of workflow, 
    following HL7, HIPAA and IHE protocol standards.
  </p>

  

  <div className="flex flex-col gap-1 text-[0.9rem] text-muted">
    <p> <span className="font-semibold">By:</span> ThaiRIS</p>
    <p> <span className="font-semibold">Contact:</span>{" "}
      <a href="mailto:info.xraythai@gmail.com" className="text-blue-600 hover:underline">
        info.xraythai@gmail.com
      </a>
    </p>
    <p> <span className="font-semibold">Website:</span>{" "}
      <a href="https://www.thairis.net" target="_blank" className="text-blue-600 hover:underline">
        www.thairis.net
      </a>
    </p>
  </div>

</div>
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
  {[0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ,12, 13].map((num) => {
    
    // 2. สร้างตัวแปรเก็บข้อมูลตามเลข num
    let currentImg = null;
    let title = `[Screen Title ${num}]`;
    let description = "[Brief caption describing what this screen shows]";

    // 3. ใช้ switch เช็คว่า num ไหนใช้รูป/ข้อความอะไร
    switch(num) {
      case 0:
        currentImg = heah_dash.src;
        title = "Home Screen";
        description = "Dashboard สรุปยอดงานในแต่ละวันว่ามีคิวค้างอยู่ที่ขั้นตอนไหนบ้าง เพื่อให้บริหารจัดการคนไข้ได้อย่างรวดเร็ว";
        break;
      case 1:
        currentImg = regist.src;
        title = "Registration Screen";
        description = "Search Patient ใช้สำหรับตรวจสอบว่าคนไข้ ค้นหาได้จาก MRN, ชื่อ-นามสกุล และ Create new patient บันทึกข้อมูลพื้นฐานของคนไข้ใหม่";
        break;
      case 2:
        currentImg = create_order.src;
        title = "Create order Screen";
        description = "Create Order (การสร้างใบสั่งตรวจรังสี) ขั้นตอนต่อจากการลงทะเบียนโดยมีข้อมูลพื้นฐานด้านซ้าย , รายการตรวจส่วนกลาง , สรุปรายการสั่งตรวจด้านขวาสีเหลือง";
        break;
      case 3:
        currentImg = b.src;
        title = "Search Order Xray Screen";
        description = "ใช้สำหรับฃตรวจสอบ รายการ Order ที่เคยถูกสร้างขึ้นในระบบ";
        break;
      case 4:
        currentImg = c.src;
        title = "Exam Room Screen";
        description = "รายการงานที่ต้องทำจริง (Worklist) สำหรับนักรังสีเทคนิค";
        break;       
      case 5:
        currentImg = d.src;
        title = "Radiologist Worklist Screen";
        description = "รายการงานของรังสีแพทย์ ซึ่งเป็นจุดรวมเคสที่ตรวจเสร็จแล้วและรอการ Reporting";
        break;
      case 6:
        currentImg = g.src;
        title = "Radiologist Reporting Screen";
        description = "หมอจะพิมพ์รายละเอียดคำวินิจฉัยลงในช่องนี้ โดยปกติจะมีการดึง Template จากด้านขวาล่างมาวางเพื่อความรวดเร็ว";
        break;
      case 7:
        currentImg = h.src;
        title = "Radiological Addendum Screen";
        description = "หน้าจอฟังก์ชันการแก้ไขหรือเพิ่มเติมข้อมูลในรายงานที่ถูกส่งผลไปเรียบร้อยแล้ว เมื่อกด Search จะปรากฏรายชื่อผู้ป่วยด้านล่างเพื่อคลิกเข้าไปทำการเพิ่มบันทึกเพิ่มเติมในรายงานฉบับนั้น";
        break;
      case 8:
        currentImg = a1.src;
        title = "Radiological Search Reported Patient Screen";
        description = "เรียกดูรายงานผลการตรวจที่เสร็จสมบูรณ์แล้ว";
        break;
      case 9:
        currentImg = a2.src;
        title = "Search Screen";
        description = "เมนู Search หลักของระบบโดยแบ่งออกเป็น 2 รูปแบบการค้นหา 1.Search Patient เน้นการหาข้อมูลโดยใช้ข้อมูลประจำตัวของคนไข้เป็นหลัก 2.Search Study เน้นการหาข้อมูลตามเงื่อนไข";
        break;
      case 10:
        currentImg = a4.src;
        title = "Tool My User Setting Screen";
        description = "User Setting ภายใต้เมนู Tools ซึ่งใช้สำหรับจัดการข้อมูลส่วนตัวและปรับแต่งการใช้งานของเจ้าหน้าที่แต่ละคน";
        break;
      case 11:
        currentImg = a6.src;
        title = "Tool Procedure CODE Screen";
        description = "Procedure ภายใต้เมนู Tools ซึ่งทำหน้าที่เป็น ฐานข้อมูลกลาง ของรายการตรวจทั้งหมดในระบบ RIS เพื่อให้ Admin ตั้งค่าว่า ที่นี่ตรวจท่าไหนได้บ้าง และแต่ละท่าราคาเท่าไหร่";
        break;
      case 12:
        currentImg = a7.src;
        title = " Tool Re-assign Screen";
        description = "การมอบหมายงานใหม่ ภายใต้เมนู Tools ซึ่งใช้สำหรับจัดการเปลี่ยนตัวรังสีแพทย์ผู้รับผิดชอบเคสนั้นๆ";
        break;
      case 13:
        currentImg = a8.src;
        title = "Tools Administrator Screen";
        description = "หน้ารวมการ edits และเพิ่มหรือลบ ในหน้าต่างๆที่ admin มีสิทธิ์ที่จะแก้ไข , ลบ , เพิ่มข้อมูล ";
        break; 
      
    }

    return (
      <div
        key={num}
        className="bg-white rounded-2xl overflow-hidden shadow-card border border-primary/[0.06] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover"
        onClick={() => handleImageClick(currentImg ?? "", title, description)}
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

    {/* ✅ Lightbox Overlay — วางก่อน <Footer /> */}
{selectedImage && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
    onClick={closeLightbox}
  >
    <div
      className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={closeLightbox}
        className="absolute top-3 right-3 z-10 bg-black/50 text-white rounded-full w-9 h-9 flex items-center justify-center hover:bg-black/70 transition-colors text-sm font-medium"
      >
        ✕
      </button>
      <div className="flex items-center justify-center bg-gray-100 max-h-[75vh] overflow-hidden">
        <img
          src={selectedImage.img}
          alt={selectedImage.title}
          className="w-full h-full object-contain max-h-[75vh]"
        />
      </div>
      <div className="p-5">
        <p className="font-semibold text-foreground text-base mb-1">{selectedImage.title}</p>
        <p className="text-muted text-sm">{selectedImage.description}</p>
      </div>
    </div>
  </div>
)}
      <Footer />
    </>
  );
}
