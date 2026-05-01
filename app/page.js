"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { 
  Terminal, Globe, Cpu, Shield, Database, Activity, 
  Zap, Server, Award, Monitor, ChevronRight, ChevronLeft,
  Layers, BookOpen, CheckCircle2, X, 
  Box, Cloud, Lock, Settings, Code2, ArrowUpRight, Signal, GraduationCap, Microscope, FolderDot, Sun, Moon, Mail, Phone
} from 'lucide-react';

// --- CUSTOM COMPONENTS ---

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const ToolIcon = ({ name }) => {
  const map = {
    "Check MK": <Activity size={12} />,
    "Solar Winds": <Zap size={12} />,
    "Sangfor": <Shield size={12} />,
    "Proxmox VE": <Server size={12} />,
    "VMware ESXi": <Box size={12} />,
    "F5 Load Balancer": <Activity size={12} />,
    "Nginx": <Globe size={12} />,
    "Linux": <Terminal size={12} />,
    "Windows Server": <Monitor size={12} />,
    "OPNsense": <Lock size={12} />,
    "Laravel": <Layers size={12} />,
    "MySQL": <Database size={12} />,
    "PHP": <Code2 size={12} />,
    "HTML/CSS": <Code2 size={12} />,
    "WinSCP": <Cloud size={12} />,
  };
  return map[name] || <Settings size={12} />;
};

// --- NEW COMPONENT: IMAGE SLIDER (FIXED FOR FULL VIEW) ---
const ImageSlider = ({ images, darkMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  if (!images || images.length === 0) return null;

  return (
    <div className={`relative w-full h-full group overflow-hidden ${darkMode ? 'bg-black/40' : 'bg-slate-200/50'}`}>
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.4 }}
          // MENGGUNAKAN object-contain AGAR GAMBAR TERLIHAT FULL
          className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-700 p-2"
          alt="work-image"
        />
      </AnimatePresence>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button 
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:bg-[#39ff14] hover:text-black"
          >
            <ChevronLeft size={16} />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:bg-[#39ff14] hover:text-black"
          >
            <ChevronRight size={16} />
          </button>
          
          {/* Dots Indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {images.map((_, i) => (
              <div 
                key={i} 
                className={`w-1.5 h-1.5 rounded-full transition-all ${i === currentIndex ? 'bg-[#39ff14] w-4' : 'bg-white/30'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState('NOC');
  const [selectedDetail, setSelectedDetail] = useState(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className={darkMode ? "bg-[#010409]" : "bg-white"}></div>;

  const cvData = {
    name: "RAFI MUHAMMAD SHIDQI",
    summary: "NOC Engineer with approximately one year of experience managing critical networks and applications for government services. Responsible for monitoring, maintenance, and troubleshooting to ensure optimal server performance and system security. I focus on rapid incident response and regular reporting to guarantee the reliability and transparency of government technology systems.",
    linkedin: "https://www.linkedin.com/in/rafimuhammadshidqi",
    
    stats: [
      { label: "Real-Time Monitoring", value: "24/7" },
      { label: "Managed Servers", value: "100+" },
      { label: "Critical Data loss", value: "Zero" },
    ],

    education: {
      campus: "University Computer Indonesia",
      major: "Bachelor of Informatics Engineering",
      period: "2018 - 2023",
      gpa: "2.91/4.00"
    },

    experience: [
      {
        id: "NOC",
        company: "PT. Saras Multitech",
        role: "Network Operation Center (Full-Time)",
        points: [
          { 
            txt: "Monitoring Data Center (Data Center Health Monitoring)", 
            tools: ["Check MK", "Solar Winds", "Sangfor"], 
            imgs: [
              "monitoring1.jpg",
              "monitoring2.jpg",
              "monitoring3.jpg"
            ],
            detail: "Monitoring the health of the Ministry of Transportation (Kemenhub) Data Center infrastructure in real-time using Check MK & SolarWinds." 
          },
          { 
            txt: "Virtual Machine (VM Lifecycle)", 
            tools: ["Proxmox VE", "VMware ESXi", "Server"], 
            imgs: [
              "proxmox1.jpg",
              "proxmox2.jpg",
              "vmware.jpg",
              "rack.jpg"
            ], 
            detail: "Optimization of cloud-on-premise infrastructure through Virtual Machine on Proxmox VE and VMware ESXi clusters for server resource efficiency." 
          },
          { 
            txt: "Load Balancing (High-Availability Traffic Control)", 
            tools: ["F5 Load Balancer", "HAproxy", "Nginx"], 
            imgs: ["lbf5.jpg",
                   "haproxy.jpg"
            ], 
            detail: "Managing network traffic and the availability of ministry application services through F5 & HAProxy Load Balancer configuration." 
          },
          { 
            txt: "Security & Back Up (Secure Connectivity & Data Integrity)", 
            tools: ["OPNsense", "WinSCP", "Firewall/WAF"], 
            imgs: ["opnsense.jpg",
                  "waf.jpg",
                  "backup1.jpg",
                  "backup2.jpg"
            ], 
            detail: "Ensuring access security through VPN management (OPNsense) and performing routine database backups for data integrity." 
          }
        ]
      },
      {
        id: "WEB",
        company: "PT. Geoff Maksimal Jaya",
        role: "Web Developer (Internship)",
        points: [
          { 
            txt: "Inventory Information System Development.", 
            tools: ["PHP", "MySQL", "HTML/CSS", "JavaScript"], 
            imgs: [
              "logingmx.jpg",
              "simgmx.jpg"
            ], 
            detail: "Designing the website requirements for an inventory management system capable of handling warehouse data processing at PT. GEOFF MAKSIMAL JAYA" 
          }
        ]
      }
    ],

    projects: [
      { 
        title: "", 
        category: "Dev Ops", 
        desc: "", 
        situation: "",
        action: "",
        result: "",
        imgs: [
          "soon.jpg",
        ], 
        tech: [""] 
      },
      { 
        title: "", 
        category: "", 
        desc: "", 
        situation: "",
        action: "",
        result: "",
        imgs: ["soon.jpg"], 
        tech: [""] 
      }
    ],

    skills: {
      hard: ["Basic Network", "Basic Linux", "Virtual Machine", "OpenVPN", "Load Balancer", "CheckMK", "HTML/CSS", "PHP","Basic SQL", "Microsoft Office"],
      certs: ["CISCO ( CCNAv7 )", "BNSP ( Junior Website Programming )", "Talenta AI ( Microsoft Security )", "Exodus Expert ( Power BI )"],
      soft: ["Teamwork", "Problem Solving", "Creative", "Responsible", "Adaptability", "Public Speaking"]
    }
  };

  const marqueeWords = ["NETWORK OPERATION CENTER","ERROR", "SUCCESS"];

  return (
    <div className={`${darkMode ? "bg-[#010409] text-white" : "bg-slate-50 text-slate-900"} min-h-screen transition-colors duration-700 font-sans selection:bg-[#39ff14] overflow-x-hidden`}>
      
      {/* SCROLL PROGRESS */}
      <motion.div className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#00d4ff] to-[#39ff14] z-[100] origin-left" style={{ scaleX }} />

      {/* --- BACKGROUND --- */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className={`absolute inset-0 ${darkMode ? "bg-[radial-gradient(circle_at_50%_10%,#001a3d,transparent)]" : "bg-[radial-gradient(circle_at_50%_10%,#e0f2fe,transparent)]"} opacity-50`}></div>
        <div className={`absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,${darkMode ? '#00d4ff' : '#0ea5e9'}_1px,transparent_1px),linear-gradient(to_bottom,${darkMode ? '#39ff14' : '#10b981'}_1px,transparent_1px)] bg-[size:80px_80px]`}></div>
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: i % 2 === 0 ? -100 : 1200, x: Math.random() * 2000, opacity: 0 }}
            animate={{ y: i % 2 === 0 ? 1200 : -100, opacity: [0, 0.3, 0] }}
            transition={{ duration: Math.random() * 10 + 5, repeat: Infinity, ease: "linear" }}
            className={`absolute w-[2px] h-64 bg-gradient-to-b ${i % 2 === 0 ? 'from-[#39ff14] to-transparent' : 'from-[#00d4ff] to-transparent'}`}
          />
        ))}
      </div>

      {/* --- HUD NAVBAR --- */}
      <nav className={`fixed top-6 left-1/2 -translate-x-1/2 w-[92%] max-w-6xl z-50 rounded-3xl border ${darkMode ? "border-white/10 bg-black/20" : "border-black/5 bg-white/40"} backdrop-blur-2xl px-10 py-5 flex justify-between items-center shadow-2xl`}>
        <div className="flex items-center gap-6">
           <span className="text-xl font-black italic tracking-tighter uppercase">NOC<span className={darkMode ? "text-[#39ff14]" : "text-emerald-600"}> ENGINEER</span></span>
           <div className="hidden lg:flex gap-8 text-[9px] font-black uppercase tracking-[0.4em] opacity-40">
              <a href="#about" className="hover:opacity-100 transition-opacity">About Me</a>
              <a href="#experience" className="hover:opacity-100 transition-opacity">Experience</a>
              <a href="#projects" className="hover:opacity-100 transition-opacity">Projects</a>
              <a href="#matrix" className="hover:opacity-100 transition-opacity">Skills</a>
              <a href="#contact" className="hover:opacity-100 transition-opacity">Contact</a>
           </div>
        </div>
        <div className="flex items-center gap-6">
           <button onClick={() => setDarkMode(!darkMode)} className={`p-2 rounded-xl transition-all ${darkMode ? "bg-white/5 hover:bg-white/10" : "bg-black/5 hover:bg-black/10"}`}>
              {darkMode ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-indigo-600" />}
           </button>
           <motion.a whileHover={{ scale: 1.1 }} href={cvData.linkedin} target="_blank" className={darkMode ? "text-[#00d4ff]" : "text-blue-600"}><LinkedinIcon /></motion.a>
        </div>
      </nav>

      <main className="relative z-10 container mx-auto px-6 max-w-6xl pt-20">
        
        {/* --- HERO SECTION --- */}
        <section id="about" className="min-h-screen flex flex-col justify-center">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="lg:col-span-7 space-y-8">
                 <div className={`inline-flex items-center gap-3 px-4 py-1.5 rounded-full border ${darkMode ? "border-[#39ff14]/30 bg-[#39ff14]/5 text-[#39ff14]" : "border-emerald-500/30 bg-emerald-500/5 text-emerald-700"} text-[10px] font-black uppercase tracking-widest`}>
                    <Signal size={14} className="animate-pulse" /> Signal Authorized Success
                 </div>
                 <h1 className="text-6xl md:text-[110px] font-black tracking-tighter leading-none uppercase italic">
                    RAFI <br /> <span className={`text-transparent bg-clip-text bg-gradient-to-r ${darkMode ? "from-[#00d4ff] to-[#39ff14]" : "from-blue-600 to-emerald-600"}`}>MUHAMMAD SHIDQI</span>
                 </h1>
                 <p className={`text-xl leading-relaxed font-medium italic border-l-4 ${darkMode ? "border-[#39ff14] text-white/60" : "border-emerald-600 text-slate-500"} pl-8 max-w-2xl`}>"{cvData.summary}"</p>
                 
                 {/* STATS HUD */}
                 <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10">
                    {cvData.stats.map((s, i) => (
                      <div key={i} className="space-y-1">
                         <p className={`text-4xl font-black italic ${darkMode ? "text-white" : "text-slate-900"}`}>{s.value}</p>
                         <p className={`text-[9px] font-bold uppercase tracking-widest ${darkMode ? "text-[#00d4ff]/60" : "text-blue-600/60"}`}>{s.label}</p>
                      </div>
                    ))}
                 </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} className="lg:col-span-5 flex justify-center">
                 <div className="relative group">
                    <div className={`absolute -inset-4 bg-gradient-to-r ${darkMode ? "from-[#00d4ff] to-[#39ff14]" : "from-blue-400 to-emerald-400"} rounded-[4rem] blur-[60px] opacity-20`}></div>
                    <div className={`relative w-72 md:w-80 rounded-[4rem] overflow-hidden border-2 ${darkMode ? "border-white/10" : "border-black/10"} bg-slate-900 shadow-2xl`}>
                       <img src="/rafi.jpg" alt="Rafi" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                 </div>
              </motion.div>
           </div>
        </section>

        {/* --- EXPERIENCE --- */}
        <section id="experience" className="py-40">
           <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <h3 className="text-6xl font-black tracking-tighter uppercase italic underline decoration-[#39ff14]/30 decoration-8 underline-offset-8">Work Experience</h3>
              <div className={`flex ${darkMode ? "bg-white/5" : "bg-black/5"} p-1.5 rounded-2xl`}>
                 {cvData.experience.map(exp => (
                   <button key={exp.id} onClick={() => setActiveTab(exp.id)} className={`px-10 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === exp.id ? (darkMode ? 'bg-[#39ff14] text-black shadow-[0_10px_30px_rgba(57,255,20,0.3)]' : 'bg-emerald-600 text-white') : 'opacity-40'}`}>{exp.id}</button>
                 ))}
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {cvData.experience.find(e => e.id === activeTab).points.map((p, idx) => (
                <motion.div 
                  key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} 
                  onClick={() => setSelectedDetail({ title: p.txt, desc: p.detail, tools: p.tools, company: cvData.experience.find(e => e.id === activeTab).company })}
                  className={`group relative ${darkMode ? "bg-white/[0.03]" : "bg-white"} backdrop-blur-3xl border ${darkMode ? "border-white/10" : "border-black/5"} rounded-[3.5rem] overflow-hidden cursor-pointer shadow-xl transition-all duration-500 hover:-translate-y-4`}
                >
                   <div className="h-56 overflow-hidden relative">
                      {/* Integrated Slider set to FULL view */}
                      <ImageSlider images={p.imgs} darkMode={darkMode} />
                      <div className={`absolute inset-0 bg-gradient-to-t ${darkMode ? "from-[#010409]/60" : "from-white/60"} via-transparent to-transparent pointer-events-none`}></div>
                   </div>
                   <div className="p-12 space-y-6">
                      <span className={`text-[10px] font-black uppercase tracking-widest ${darkMode ? "text-[#39ff14]" : "text-emerald-700"}`}>{cvData.experience.find(e => e.id === activeTab).company}</span>
                      <h4 className="text-2xl font-black italic uppercase leading-none italic">"{p.txt}"</h4>
                      <div className="flex flex-wrap gap-2 pt-4">
                         {p.tools.map(tool => (
                           <div key={tool} className={`flex items-center gap-2 px-3 py-1.5 ${darkMode ? "bg-white/5 border-white/10" : "bg-slate-100 border-black/5"} border rounded-lg shadow-sm`}>
                             <ToolIcon name={tool} />
                             <span className={`text-[8px] font-black uppercase ${darkMode ? "text-white/60" : "text-slate-600"}`}>{tool}</span>
                           </div>
                         ))}
                      </div>
                   </div>
                </motion.div>
              ))}
           </div>
        </section>

        {/* --- PROJECTS --- */}
        <section id="projects" className="py-20 mb-40">
           <h4 className={`text-[25px] font-black text-center mb-20 uppercase tracking-[1em] ${darkMode ? "text-[#00d4ff]" : "text-blue-600"}`}>PROJECTS</h4>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {cvData.projects.map((proj, i) => (
                <div key={i} className={`group relative p-1 rounded-[4rem] bg-gradient-to-br ${darkMode ? "from-white/10 to-transparent" : "from-black/10 to-transparent"}`}>
                   <div className={`${darkMode ? "bg-[#010409]" : "bg-white"} rounded-[3.9rem] p-12 space-y-10 shadow-2xl`}>
                      <div className="h-80 rounded-[3rem] overflow-hidden relative">
                         {/* Integrated Slider set to FULL view */}
                         <ImageSlider images={proj.imgs} darkMode={darkMode} />
                      </div>
                      <div className="space-y-4">
                         <span className={`text-[10px] font-black uppercase tracking-widest ${darkMode ? "text-[#39ff14]" : "text-emerald-600"}`}>{proj.category}</span>
                         <h4 className="text-4xl font-black uppercase italic italic">{proj.title}</h4>
                         <p className="opacity-60 text-lg font-medium italic">"{proj.desc}"</p>
                      </div>
                      <div className="space-y-6 pt-6 border-t border-white/5">
                         <div className="flex gap-4">
                            <span className={`text-[10px] font-black ${darkMode ? "text-[#00d4ff]" : "text-blue-600"}`}>[SITUATION]</span>
                            <p className="text-xs opacity-50 italic uppercase">{proj.situation}</p>
                         </div>
                         <div className="flex gap-4">
                            <span className={`text-[10px] font-black ${darkMode ? "text-[#39ff14]" : "text-emerald-600"}`}>[RESULT]</span>
                            <p className="text-xs font-bold uppercase">{proj.result}</p>
                         </div>
                      </div>
                      <button onClick={() => setSelectedDetail({ title: proj.title, desc: proj.action, tools: proj.tech, company: "" })} className={`w-full py-5 rounded-2xl text-[10px] font-black uppercase tracking-[0.5em] transition-all ${darkMode ? "bg-white/5 hover:bg-[#39ff14] hover:text-black" : "bg-black/5 hover:bg-emerald-600 hover:text-white"}`}>Explore Report</button>
                   </div>
                </div>
              ))}
           </div>
        </section>

        {/* --- MATRIX HUB (SKILLS & CERTS) --- */}
        <section id="matrix" className="py-40 border-t border-white/5">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
              <div className="lg:col-span-8 space-y-20">
                 <div>
                    <h4 className={`text-[25px] font-black uppercase tracking-[1em] mb-12 ${darkMode ? "text-[#39ff14]" : "text-emerald-700"}`}>SKILLS</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                       {cvData.skills.hard.map(s => (
                         <motion.div key={s} whileHover={{ scale: 1.05 }} className={`${darkMode ? "bg-white/5 border-white/5" : "bg-white border-black/5 shadow-sm"} border p-6 rounded-2xl flex flex-col items-center justify-center text-center group`}>
                            <Cpu size={18} className={`${darkMode ? "text-white/20 group-hover:text-[#39ff14]" : "text-slate-300 group-hover:text-emerald-600"} mb-4 transition-colors`} />
                            <span className="text-[10px] font-black uppercase tracking-tighter italic">{s}</span>
                         </motion.div>
                       ))}
                    </div>
                 </div>
                 <div>
                    <h4 className="text-[25px] font-black text-white/30 uppercase tracking-[0.5em] mb-10 italic">Certificate</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                       {cvData.skills.certs.map((c, i) => (
                         <div key={i} className={`flex items-center gap-6 p-6 rounded-2xl border ${darkMode ? "bg-white/[0.02] border-white/5" : "bg-white border-black/5 shadow-sm"}`}>
                            <Award size={24} className={darkMode ? "text-[#39ff14]" : "text-emerald-600"} />
                            <span className="text-[11px] font-bold uppercase tracking-tight opacity-70 italic">{c}</span>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>

              <div className="lg:col-span-4">
                 <div className={`${darkMode ? "bg-[#39ff14]/5 border-[#39ff14]/20" : "bg-emerald-600/5 border-emerald-600/10"} border p-12 rounded-[4rem] sticky top-40 space-y-10 overflow-hidden shadow-2xl`}>
                    <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#39ff14]/10 blur-[100px]"></div>
                    <GraduationCap size={40} className={darkMode ? "text-[#39ff14]" : "text-emerald-600"} />
                    <div className="space-y-4">
                       <p className={`text-[10px] font-black uppercase tracking-[0.6em] ${darkMode ? "text-white/40" : "text-slate-400"}`}>Academic</p>
                       <h4 className="text-3xl font-black uppercase tracking-tighter leading-tight italic">{cvData.education.campus}</h4>
                       <p className="text-sm font-medium opacity-60 uppercase italic">{cvData.education.major}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 pt-10 border-t border-white/10">
                       {cvData.skills.soft.slice(0,4).map(s => <p key={s} className="text-[9px] font-black uppercase opacity-40">/ {s}</p>)}
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* --- CONTACT --- */}
        <section id="contact" className="py-40 text-center">
           <div className={`inline-flex items-center gap-4 px-8 py-4 rounded-full border ${darkMode ? "border-[#00d4ff]/30 bg-[#00d4ff]/5" : "border-blue-500/10 bg-blue-50/50"} mb-12`}>
              <Mail size={16} className={darkMode ? "text-[#00d4ff]" : "text-blue-600"} />
              <span className="text-xs font-black uppercase tracking-[0.5em] italic">CONTACT</span>
           </div>
           <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter italic mb-20 leading-none">Let's build a more reliable project<br /> <span className={darkMode ? "text-[#39ff14]" : "text-emerald-600"}>together?</span></h2>
           <div className="flex flex-col md:flex-row justify-center gap-6">
              <a href={`mailto:rafimuhammadshidqi@gmail.com`} className={`px-12 py-6 rounded-3xl text-xs font-black uppercase tracking-[0.5em] transition-all shadow-xl ${darkMode ? "bg-[#39ff14] text-black hover:shadow-[#39ff14]/40" : "bg-emerald-600 text-white hover:bg-emerald-700"}`}>Start Collaboration</a>
              <a href={cvData.linkedin} target="_blank" className={`px-12 py-6 rounded-3xl text-xs font-black uppercase tracking-[0.5em] border transition-all ${darkMode ? "border-white/10 bg-white/5 hover:bg-white/10" : "border-black/5 bg-white shadow-lg hover:bg-slate-50"}`}>LinkedIn</a>
           </div>
        </section>

        {/* --- MARQUEE SCROLL --- */}
        <section className="py-24 border-y border-white/5 overflow-hidden font-black uppercase italic text-7xl md:text-[150px] opacity-[0.03]">
           <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }} className="flex gap-20 whitespace-nowrap">
              {[...marqueeWords, ...marqueeWords].map((word, i) => <span key={i}>{word}</span>)}
           </motion.div>
        </section>

      </main>

      {/* --- MODAL DETAIL --- */}
      <AnimatePresence>
        {selectedDetail && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[200] flex items-center justify-center px-6 bg-black/95 backdrop-blur-2xl" onClick={() => setSelectedDetail(null)}>
            <motion.div initial={{ scale: 0.95, y: 40 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 40 }} className={`w-full max-w-2xl ${darkMode ? "bg-slate-900 border-white/20" : "bg-white border-black/10"} border rounded-[4rem] p-12 md:p-20 relative shadow-[0_0_100px_rgba(57,255,20,0.15)]`} onClick={e => e.stopPropagation()}>
               <button onClick={() => setSelectedDetail(null)} className="absolute top-10 right-10 opacity-30 hover:opacity-100 transition-all"><X size={32} /></button>
               <div className="space-y-12">
                  <div className="flex items-center gap-4 text-[#39ff14]"><Signal size={24} className="animate-pulse" /><span className="text-xs font-black uppercase tracking-[0.8em]">{selectedDetail.company} REPORT</span></div>
                  <h2 className="text-4xl font-black uppercase tracking-tighter leading-none italic">{selectedDetail.title}</h2>
                  <div className={`p-8 rounded-3xl ${darkMode ? "bg-white/5" : "bg-slate-50"} border border-white/5`}>
                     <p className="text-xl font-medium leading-relaxed italic uppercase opacity-70">"{selectedDetail.desc}"</p>
                  </div>
                  <div className="flex flex-wrap gap-4 pt-10">
                     {selectedDetail.tools.map(tool => (
                       <div key={tool} className={`flex items-center gap-3 px-5 py-2.5 rounded-2xl border ${darkMode ? "bg-white/5 border-white/10 text-[#39ff14]" : "bg-emerald-50 border-emerald-200 text-emerald-700"}`}>
                          <ToolIcon name={tool} />
                          <span className="text-[10px] font-black uppercase">{tool}</span>
                       </div>
                     ))}
                  </div>
               </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="py-24 border-t border-white/5 text-center text-[15px] font-black tracking-[1.5em] uppercase opacity-30 italic">
         RAFI MUHAMMAD SHIDQI &copy; 2026
      </footer>

      <style jsx global>{`
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #39ff14; border-radius: 10px; }
      `}</style>
    </div>
  );
}