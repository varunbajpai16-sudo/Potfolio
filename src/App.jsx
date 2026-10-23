import React, { useEffect, useState } from "react";
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, BriefcaseBusiness, Code2,
  Download, Github, GraduationCap, Linkedin, Mail, MapPin, Menu, X,
  Sparkles, Target, Globe, ExternalLink, Terminal
} from "lucide-react";

const projects = [
  {
    name: "NexusAI",
    tag: "MULTI-AGENT AI PLATFORM",
    description: "A multi-agent AI workspace orchestrating specialized agents for research, coding, reasoning, web discovery and PDF workflows.",
    stack: ["React", "Node.js", "Multi-Agent AI", "LLMs"],
    image: "/projects/nexus-ai.png",
    link: "https://nexus-ai-kappa-flax.vercel.app/",
    number: "01",
  },
  {
    name: "EcoTrust",
    tag: "ENVIRONMENTAL INTELLIGENCE",
    description: "A real-time environmental monitoring and compliance platform with emissions insights, validation workflows and intelligent alerts.",
    stack: ["React", "Node.js", "MongoDB", "CEMS"],
    image: "/projects/ecotrust.png",
    link: "https://eco-trust-peach.vercel.app/",
    number: "02",
  },
  {
    name: "MentorOwl",
    tag: "TUITION-FINDER PLATFORM",
    description: "A tuition discovery experience connecting students, parents and teachers with subject and location-aware search.",
    stack: ["MERN", "GeoLocation", "Google Auth"],
    image: "/projects/tutormate.png",
    link: "https://mentor-owl.vercel.app/",
    number: "03",
  },
  {
    name: "Bhuvan GPT",
    tag: "GEOSPATIAL AI INTELLIGENCE",
    description: "An AI-powered geospatial assistant for exploring satellite imagery and geographic data with natural-language queries, including land-use analysis, disaster monitoring, water resources and urban planning.",
    stack: ["React", "Leaflet", "LangChain", "LangGraph", "Geospatial AI"],
    image: "/projects/bhuvan-gpt.png",
    link: "https://bhuvan-gpt.vercel.app/",
    number: "04",
  },
];

const skills = [
  ["React", "⚛", "text-cyan-300"],
  ["Node.js", "JS", "text-lime-300"],
  ["MongoDB", "◆", "text-green-400"],
  ["TypeScript", "TS", "text-sky-300"],
  ["Tailwind CSS", "≈", "text-cyan-300"],
  ["Express.js", "ex", "text-white"],
  ["Git", "⌘", "text-orange-400"],
  ["Docker", "▤", "text-sky-300"],
  ["PostgreSQL", "◉", "text-blue-300"],
  ["LangChain", "∞", "text-neutral-200"],
  ["LangGraph", "◎", "text-emerald-300"],
  ["RAG", "⌕", "text-red-300"],
  ["Vector DBs", "▦", "text-violet-300"],
];

function SectionLabel({ children }) {
  return <div className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.24em] text-red-400"><span className="h-1.5 w-1.5 rounded-full bg-red-500 shadow-[0_0_12px_#ff3434]" />{children}</div>;
}

function Avatar() {
  return (
    <div className="avatar-scene relative mx-auto h-[370px] w-full max-w-[590px] sm:h-[430px] lg:h-[500px]">
      <div className="absolute left-[54%] top-[53%] h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-700/20 blur-[85px]" />
      <div className="absolute left-[54%] top-[53%] h-[370px] w-[370px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-red-500/15" />
      <div className="absolute left-[54%] top-[53%] h-[305px] w-[305px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-red-500/10" />
      <div className="absolute left-[54%] top-[53%] h-[255px] w-[255px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-red-400/20 animate-[spin_35s_linear_infinite]" />
      <div className="avatar-float absolute left-[54%] top-[49%] z-10 w-[340px] -translate-x-1/2 -translate-y-1/2 sm:w-[420px]">
        <img
          src="/avatar-reference.jpg"
          alt="Stylized developer avatar from the portfolio design"
          className="w-full object-contain drop-shadow-[0_20px_45px_rgba(255,25,35,.22)]"
        />
      </div>
      <div className="float-slow absolute left-0 top-[17%] z-20 w-[150px] rounded-xl border border-red-500/45 bg-[#080607]/90 px-4 py-4 shadow-[0_0_38px_rgba(255,0,25,.11)] backdrop-blur-xl sm:left-[1%] sm:w-[170px]">
        <div className="mb-3 text-[11px] font-medium leading-4 text-red-400">&lt; Full Stack<br/>Developer /&gt;</div>
        <div className="space-y-2 text-xs text-neutral-300"><div>⚛ &nbsp;React</div><div>⬡ &nbsp;Node.js</div><div>◈ &nbsp;MongoDB</div><div>⌁ &nbsp;Tailwind</div><div>⌘ &nbsp;LangChain</div><div>◉ &nbsp;LangGraph</div></div>
      </div>
      <div className="float-slower absolute right-0 top-[12%] z-20 w-[160px] rounded-xl border border-red-500/35 bg-[#080607]/90 p-4 shadow-[0_0_35px_rgba(255,0,25,.1)] backdrop-blur-xl sm:right-[-1%] sm:w-[190px]">
        <div className="mb-3 text-[10px] uppercase tracking-[.13em] text-red-300">// Currently Working On</div>
        <div className="space-y-2.5 text-[10px] leading-4 text-neutral-300"><div>☑ EcoTrust — Environmental Intelligence</div><div>☑ TutorMate — Tuition Finder App</div><div>☑ DSA &amp; System Design</div><div>☑ Exploring Agentic AI</div></div>
        <div className="mt-3 flex h-5 items-end justify-end gap-1">{[7,12,17,22].map((h,i)=><span key={i} className="w-1.5 bg-red-500/80" style={{height:h}}/>)}</div>
      </div>
      <div className="absolute bottom-[5%] left-[52%] h-10 w-[78%] -translate-x-1/2 rounded-[50%] bg-red-600/20 blur-2xl" />
    </div>
  );
}
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [["Home", "#home"], ["About", "#about"], ["Projects", "#projects"], ["Skills", "#skills"], ["Experience", "#experience"], ["Contact", "#contact"]];

  return (
    <div className="min-h-screen overflow-hidden bg-[#050505] text-white selection:bg-red-500/30 selection:text-white">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(105,8,17,.18),transparent_48%)]" />
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[.055] [background-image:linear-gradient(rgba(255,255,255,.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.2)_1px,transparent_1px)] [background-size:58px_58px]" />

      <header className={`fixed top-0 z-50 w-full border-b transition-all duration-300 ${scrolled ? "border-white/10 bg-black/85 shadow-lg shadow-black/30 backdrop-blur-xl" : "border-white/[.06] bg-black/45 backdrop-blur-md"}`}>
        <div className="mx-auto flex h-[72px] max-w-[1320px] items-center justify-between px-5 sm:px-8 lg:px-10">
          <a href="#home" className="group flex items-center gap-3">
            <span className="text-3xl font-black italic tracking-[-.12em] text-white">V<span className="text-red-500">B</span></span>
            <span className="text-sm font-semibold tracking-wide">Varun Bajpai</span>
          </a>
          <nav className="hidden items-center gap-7 lg:flex">
            {nav.map(([label, href]) => <a key={label} href={href} className={`relative py-6 text-[12px] transition hover:text-red-400 ${label === "Home" ? "text-red-400 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-red-500" : "text-neutral-300"}`}>{label}</a>)}
          </nav>
          <a href="/resume.pdf" className="hidden items-center gap-2 rounded-lg border border-red-500/60 px-4 py-2.5 text-xs font-semibold text-red-300 transition hover:bg-red-500 hover:text-white sm:flex">
            <Download size={14}/> Download Resume <ArrowDownRight size={13}/>
          </a>
          <button className="rounded-lg border border-white/10 p-2 lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X/> : <Menu/>}</button>
        </div>
        {menuOpen && <nav className="grid gap-1 border-t border-white/10 bg-black/95 px-6 py-4 lg:hidden">{nav.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-3 text-sm text-neutral-300 hover:bg-red-500/10 hover:text-red-300">{label}</a>)}</nav>}
      </header>

      <main className="relative z-10">
        <section id="home" className="hero-band relative mx-auto grid min-h-[700px] max-w-[1320px] items-center gap-0 px-5 pb-7 pt-32 sm:px-8 lg:min-h-[650px] lg:grid-cols-[.98fr_1.02fr] lg:px-10 lg:pb-5 lg:pt-[118px]">
          <div className="relative z-20 order-2 max-w-[610px] lg:order-1 lg:pb-2">
            <div className="mb-5 flex items-center gap-3 text-sm text-neutral-200"><span className="relative flex h-2.5 w-2.5"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-70"/><span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500"/></span>Hello, I’m</div>
            <h1 className="text-[clamp(3.45rem,6.1vw,5.8rem)] font-black leading-[.94] tracking-[-.075em]">Varun <span className="bg-gradient-to-r from-red-300 via-red-500 to-red-700 bg-clip-text text-transparent">Bajpai</span></h1>
            <h2 className="mt-5 text-lg font-semibold tracking-tight text-white sm:text-[21px]">AI Full-Stack Engineer</h2>
            <p className="mt-3 max-w-[510px] text-sm leading-6 text-neutral-400 sm:text-[15px]">I build scalable web applications and thoughtful digital products that solve real-world problems.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#projects" className="group inline-flex items-center gap-3 rounded-lg bg-gradient-to-r from-red-500 to-red-600 px-6 py-3.5 text-xs font-bold shadow-[0_0_30px_rgba(239,25,42,.23)] transition hover:-translate-y-0.5 hover:shadow-[0_0_38px_rgba(239,25,42,.4)]">View My Work <ArrowRight size={15} className="transition group-hover:translate-x-1"/></a>
              <a href="#contact" className="inline-flex items-center gap-3 rounded-lg border border-white/20 bg-white/[.025] px-6 py-3.5 text-xs font-semibold transition hover:border-red-500/60 hover:bg-red-500/10">Let’s Connect <ArrowUpRight size={14}/></a>
            </div>
            <div className="mt-7 grid max-w-[590px] grid-cols-2 gap-y-4 border-t border-white/10 pt-4 sm:grid-cols-4 sm:gap-0">
              {[["250+", "LeetCode Problems"], ["5+", "Projects Completed"], ["MERN", "Primary Stack"], ["3rd Year", "B.Tech CSE (AKTU)"]].map(([n, label], i) => <div key={label} className={`sm:px-4 ${i === 0 ? "sm:pl-0" : "sm:border-l sm:border-white/10"}`}><div className="text-[21px] font-extrabold tracking-tight text-red-500">{n}</div><div className="mt-1 text-[11px] text-neutral-400">{label}</div></div>)}
            </div>
          </div>
          <div className="relative order-1 -mx-3 -mb-3 mt-0 lg:order-2 lg:mx-0 lg:mb-0 lg:mt-0"><Avatar/></div>
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/40 to-transparent"/>
        </section>

        <section id="about" className="mx-auto max-w-[1320px] px-5 py-14 sm:px-8 lg:px-10 lg:py-16">
          <div className="grid gap-9 lg:grid-cols-[1.1fr_1.55fr_.72fr] lg:items-center">
            <div><SectionLabel>About me</SectionLabel><h2 className="max-w-sm text-3xl font-bold leading-tight tracking-tight sm:text-[34px]">Turning Ideas<br/>Into Real Products</h2><p className="mt-4 max-w-[440px] text-sm leading-[1.65] text-neutral-400">I’m a Computer Science student passionate about full-stack development, AI, and building products that create real impact. I love learning new technologies, solving challenging problems, and turning ideas into working solutions.</p><a href="#experience" className="mt-5 inline-flex items-center gap-2 rounded-md border border-red-500/60 px-4 py-2 text-xs font-medium text-red-300 transition hover:bg-red-500/10">More About Me <ArrowRight size={13}/></a></div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                [GraduationCap, "Education", "B.Tech CSE", "AKTU · 3rd Year"],
                [Target, "Focus Area", "Full-Stack Dev", "& AI"],
                [MapPin, "Location", "India", "Open to remote"],
                [BriefcaseBusiness, "Open To", "Internships", "Full-Time Roles"],
              ].map(([Icon, label, line1, line2]) => <div key={label} className="min-h-[135px] rounded-xl border border-white/[.09] bg-gradient-to-br from-white/[.045] to-white/[.01] p-4 transition hover:border-red-500/30"><Icon size={20} className="mb-4 text-red-500"/><div className="text-xs font-semibold text-red-300">{label}</div><div className="mt-2 text-sm font-semibold">{line1}</div><div className="mt-0.5 text-xs text-neutral-400">{line2}</div></div>)}
            </div>
            <div className="relative rounded-xl border border-red-500/30 bg-gradient-to-br from-red-950/25 to-black p-6"><span className="text-4xl font-black leading-none text-red-500">“</span><p className="mt-1 text-lg font-medium leading-relaxed text-neutral-100">Build, Learn,<br/>Solve, Repeat.</p><div className="mt-5 text-right font-serif text-lg italic text-red-300">— Varun Bajpai</div><div className="absolute bottom-0 right-0 h-20 w-24 rounded-full bg-red-600/10 blur-2xl"/></div>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-[1320px] border-t border-white/[.06] px-5 py-12 sm:px-8 lg:px-10">
          <div className="mb-6 flex items-end justify-between gap-4"><div><SectionLabel>Tech stack</SectionLabel><h2 className="text-2xl font-bold tracking-tight sm:text-[28px]">Technologies I Work With</h2></div><a href="#contact" className="hidden items-center gap-2 text-xs text-red-300 transition hover:text-red-200 sm:flex">More Skills <ArrowRight size={13}/></a></div>
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5">
            {skills.map(([name, symbol, color]) => <div key={name} className="group flex min-h-[76px] flex-col items-center justify-center gap-2 rounded-xl border border-white/[.07] bg-white/[.025] p-2 transition duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:bg-red-500/[.06]"><span className={`text-xl font-black ${color}`}>{symbol}</span><span className="text-center text-[10px] text-neutral-300">{name}</span></div>)}
          </div>
          <div className="mt-7 rounded-xl border border-red-500/20 bg-gradient-to-r from-red-950/20 via-white/[.02] to-transparent p-5 sm:p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="mb-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.22em] text-red-400"><span className="h-1.5 w-1.5 rounded-full bg-red-500"/> Agentic AI toolkit</div>
                <h3 className="text-lg font-bold text-white">Building intelligent, tool-using AI workflows</h3>
                <p className="mt-1 max-w-2xl text-xs leading-5 text-neutral-400">Tools and patterns I work with across NexusAI and EcoTrust.</p>
              </div>
              <div className="flex max-w-[650px] flex-wrap gap-2">
                {["LangChain", "LangGraph", "RAG", "Vector Databases", "Multi-Agent Workflows", "LLM Tool Calling", "Context Retrieval"].map((tool) => <span key={tool} className="rounded-full border border-red-500/25 bg-red-500/[.06] px-3 py-1.5 text-[10px] font-medium text-neutral-200 transition hover:border-red-400/60 hover:text-red-200">{tool}</span>)}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-[1320px] border-t border-white/[.06] px-5 py-12 sm:px-8 lg:px-10 lg:py-14">
          <div className="mb-7 flex items-end justify-between gap-4"><div><SectionLabel>Featured projects</SectionLabel><h2 className="text-3xl font-bold tracking-tight">Some Things I’ve Built</h2></div><a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-red-500/50 px-4 py-2.5 text-xs text-red-300 transition hover:bg-red-500/10">Explore Projects <ArrowUpRight size={14}/></a></div>
          <div className="grid gap-4 lg:grid-cols-3">
            {projects.map((project) => <article key={project.name} className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/[.045] to-white/[.01] transition duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:shadow-[0_15px_50px_rgba(120,0,15,.12)]">
              <div className="relative h-[190px] overflow-hidden border-b border-white/[.07] bg-[#090909]">
                <img src={project.image} alt={`${project.name} website preview`} className="h-full w-full object-cover object-top opacity-90 transition duration-700 group-hover:scale-[1.035] group-hover:opacity-100" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10" />
                <div className="absolute right-3 top-3 rounded-md border border-red-500/30 bg-black/75 px-2 py-1 text-[9px] font-semibold tracking-[.16em] text-red-300 backdrop-blur">{project.number} / 04</div>
                <span className="absolute bottom-3 left-4 text-[9px] font-semibold tracking-[.18em] text-white/80">LIVE PROJECT PREVIEW</span>
              </div>
              <div className="p-5"><div className="mb-2 flex items-center justify-between gap-3"><span className="text-[9px] font-bold tracking-[.17em] text-red-400">{project.tag}</span><span className="text-xs text-neutral-600">{project.number}</span></div><h3 className="text-xl font-bold">{project.name}</h3><p className="mt-2 min-h-[68px] text-[12px] leading-[1.7] text-neutral-400">{project.description}</p><div className="mt-4 flex flex-wrap gap-1.5">{project.stack.map((item) => <span key={item} className="rounded-md border border-white/[.08] bg-white/[.035] px-2 py-1 text-[9px] text-neutral-300">{item}</span>)}</div><a href={project.link} target={project.link.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-red-300 transition group-hover:text-red-200">Explore Project <ExternalLink size={12}/></a></div>
            </article>)}
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-[1320px] border-t border-white/[.06] px-5 py-12 sm:px-8 lg:px-10">
          <div className="grid gap-8 md:grid-cols-[.8fr_1.2fr]">
            <div><SectionLabel>Experience & growth</SectionLabel><h2 className="max-w-md text-3xl font-bold leading-tight">Curious by nature.<br/><span className="text-neutral-500">Builder by choice.</span></h2><p className="mt-4 max-w-sm text-sm leading-6 text-neutral-400">I’m constantly sharpening my engineering fundamentals and building real-world applications. My current focus is full-stack product development, system design, and practical AI integrations.</p></div>
            <div className="relative border-l border-red-500/30 pl-6">
              <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full border-2 border-red-400 bg-black shadow-[0_0_12px_#f33]"/>
              <div className="text-[10px] font-bold uppercase tracking-[.2em] text-red-400">Current focus · 2026</div><h3 className="mt-2 text-lg font-bold">Full-Stack Development & AI</h3><p className="mt-2 max-w-xl text-sm leading-6 text-neutral-400">Building with React, Node.js, Express and MongoDB; exploring agentic AI workflows, RAG patterns, and reliable API design while continuing DSA practice.</p>
              <div className="mt-4 flex flex-wrap gap-2">{["Product engineering","DSA","System design","Agentic AI"].map(x=><span key={x} className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] text-neutral-300">{x}</span>)}</div>
            </div>
          </div>
        </section>

        <section id="contact" className="relative mx-auto max-w-[1320px] border-t border-red-500/15 px-5 py-14 sm:px-8 lg:px-10 lg:py-16">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_100%,rgba(135,8,20,.18),transparent_60%)]"/>
          <SectionLabel>Let’s connect</SectionLabel>
          <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between"><div><h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Want to Build Something Amazing?</h2><p className="mt-3 text-sm text-neutral-400">I’m open to discussing new opportunities, interesting projects, or just tech.</p></div><div className="flex flex-wrap gap-3"><a href="mailto:varunbajpai16@gmail.com" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-red-500 to-red-600 px-6 py-3.5 text-xs font-bold shadow-[0_0_28px_rgba(239,25,42,.2)] transition hover:-translate-y-0.5"><Mail size={15}/> Get In Touch</a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-3.5 text-xs font-semibold transition hover:border-red-500/50 hover:bg-red-500/10"><Linkedin size={15}/> Connect on LinkedIn <ArrowUpRight size={13}/></a><a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-4 py-3.5 text-xs font-semibold transition hover:border-red-500/50 hover:bg-red-500/10"><Github size={15}/></a></div></div>
          <div className="mt-12 flex flex-col justify-between gap-3 border-t border-white/[.08] pt-5 text-[10px] text-neutral-500 sm:flex-row"><span>© 2026 Varun Bajpai. Crafted with intent.</span><span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-green-400"/> Available for opportunities <span className="ml-2 text-neutral-700">·</span> <span className="flex items-center gap-1"><Terminal size={11}/> React / Tailwind</span></span></div>
        </section>
      </main>
    </div>
  );
}
