'use client';

import React from "react";
import Image, { type StaticImageData } from "next/image";

/* =======================
   Import images from /public (best for GH Pages)
   ======================= */
import profilePng from "../public/profile.png";
import pub1Png from "../public/pub1.png";
import pub2Png from "../public/pub2.png";
import pub3Png from "../public/pub3.png";

/* =======================
   Types
   ======================= */
interface SocialLink { label: string; href: string }
interface Profile {
  name: string; role: string; org?: string; location: string;
  avatar: StaticImageData; socials: SocialLink[];
}
interface NewsItem { date: string; text: string }
interface Publication {
  tag?: string; title: string; link: string; venue?: string;
  desc?: string; authors?: string; thumb?: StaticImageData
}
interface Education { school: string; link?: string; place: string; degree: string; gpa?: string; courses?: string[] }
interface Certification { text: string }
interface Experience { company: string; link?: string; title: string; bullets: string[]; tools?: string; dates: string }
interface Award { text: string }
interface Skill { title: string; text: string }

/* =======================
   Inline SVG Icons
   ======================= */
function MapPinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="12" cy="10" r="3" strokeWidth="2" />
    </svg>
  );
}
function ExternalLinkIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path d="M15 3h6v6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 14 21 3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21 10v11H3V3h11" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function LinkIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
/* Brand icons for socials */
function MailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" strokeWidth="2" />
      <path d="m3 7 9 6 9-6" strokeWidth="2" />
    </svg>
  );
}
function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0zM0 8.5h5V23H0zM8 8.5h4.8v2h.07c.67-1.2 2.3-2.47 4.73-2.47C21.44 8.03 23 10.2 23 14.06V23h-5v-8.07c0-1.92-.69-3.23-2.41-3.23-1.31 0-2.09.88-2.43 1.72-.12.29-.15.7-.15 1.12V23H8z"/>
    </svg>
  );
}
function GitHubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.41-4.04-1.41-.55-1.41-1.34-1.78-1.34-1.78-1.09-.75.08-.73.08-.73 1.2.09 1.82 1.23 1.82 1.23 1.07 1.83 2.82 1.3 3.51.99.11-.79.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.98 0-1.32.47-2.39 1.23-3.23-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.28 1.23a11.4 11.4 0 0 1 5.98 0C18.25 5.3 19.25 5.62 19.25 5.62c.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.23 0 4.65-2.8 5.67-5.47 5.98.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5z"/>
    </svg>
  );
}
function ScholarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 3 1 8l11 5 9-4.09V15h2V8L12 3z" />
      <path d="M7 12.5v3c0 1.7 2.24 3 5 3s5-1.3 5-3v-3l-5 2.3L7 12.5z" />
    </svg>
  );
}

/* =======================
   Content
   ======================= */
const profile: Profile = {
  name: "Most Husne Jahan",
  role: "Machine Learning Engineer",
  location: "Toronto, Canada",
  avatar: profilePng,
  socials: [
    { label: "Email", href: "mailto:mosthusne.jahan@gmail.com" },
    { label: "LinkedIn", href: "https://linkedin.com/in/husnejahan" },
    { label: "GitHub", href: "https://github.com/husnejahan" },
    { label: "Google Scholar", href: "https://scholar.google.com/" },
  ],
};

const blurb =
  "I am a Machine Learning expert specializing in R&D of LLMs and Multimodal LLMs (MLLMs) that integrate text, images, and video. I design scalable transformer architectures for cross-modal reasoning and alignment. My work spans fine-tuning, optimization, and deployment of LLMs/MLLMs for captioning, VQA, video-language grounding, and document intelligence.";

/* ✅ News */
const news: NewsItem[] = [
  { date: "2025.07", text: "Served as Ethics reviewer at NeurIPS 2025 Datasets and Benchmarks Track!" },
  { date: "2024.08", text: "GESA has been selected at IEEE 7th International Conference on Multimedia Information Processing and Retrieval (MIPR)!" },
  { date: "2022.05", text: "Lightseg has been accepted at IEEE 19th International Symposium on Biomedical Imaging (ISBI)!" },
];

const pubs: Publication[] = [
  {
    title: "GESA: Exploring Loss-based Adversarial Attacks in Volumetric Media Streaming",
    link: "https://ieeexplore.ieee.org/document/10707915",
    venue: "IEEE MIPR 2024",
    desc: "GESA dataset for packet-loss impacts on streaming point clouds.",
    thumb: pub1Png,
  },
  {
    title: "LIGHTSEG: Efficient Yet Effective Medical Image Segmentation",
    link: "https://ieeexplore.ieee.org/document/9761663",
    venue: "IEEE ISBI 2022",
    desc: "Lightweight segmentation for constrained compute.",
    thumb: pub2Png,
  },
  {
    title: "Pay Attention for COVID-19 Detection Using Efficient Convolution",
    link: "https://rc.signalprocessingsociety.org/conferences/isbi-2022/spsisbi22vid0165",
    venue: "IEEE ISBI 2022",
    desc: "COVIDAT-Net: low-compute COVID-19 classification.",
    thumb: pub3Png,
  },
];

const education: Education[] = [
  {
    school: "Toronto Metropolitan University",
    link: "https://www.torontomu.ca/",
    place: "Toronto, Canada",
    degree: "MEng, Electrical & Computer Engineering",
    gpa: "3.63 / 4.33",
    courses: ["Neural Information Processing", "Machine Learning", "Topics in Data Science", "Deep Learning"],
  },
  {
    school: "Rajshahi University of Engineering & Technology (RUET)",
    link: "https://www.ruet.ac.bd/",
    place: "Rajshahi, Bangladesh",
    degree: "BSc, Electrical & Electronic Engineering",
    gpa: "3.62 / 4.0",
    courses: [
      "Introduction to Programming Language",
      "Engineering Mathematics I–V",
      "Electromagnetic Fields & Waves",
      "Introduction to Digital System & Design",
      "Microprocessor & Microcomputer System",
      "Advanced Computer Programming",
    ],
  },
];

const certifications: Certification[] = [
  { text: "How Google does Machine Learning – Google Cloud Training (Coursera)" },
  { text: "Launching into Machine Learning – Google Cloud Training (Coursera)" },
  { text: "Convolutional Neural Networks in TensorFlow (Coursera)" },
  { text: "Introduction to TensorFlow for AI, Machine Learning, and Deep Learning (Coursera)" },
  { text: "Introduction to Containers w/ Docker, Kubernetes & OpenShift (Coursera)" },
  { text: "Containers & Kubernetes Essentials (IBM)" },
  { text: "Design Thinking for Innovation – University of Virginia (Coursera)" },
];

const experience: Experience[] = [
  {
    company: "Concordia University",
    link: "https://www.concordia.ca/",
    title: "Research Assistant",
    bullets: [
      "Conducted research in 3D vision, point cloud video compression, and 3D video data processing.",
      "Developed and optimized novel algorithms for point cloud completion and enhanced 3D video processing for real-time streaming.",
      "Published and presented findings at academic conferences, contributing to advancements in 3D real-time video streaming."
    ],
    tools: "Focus Areas: Point Cloud Completion, Point Cloud Video Compression",
    dates: "Jan 2023 – Dec 2024 | Montreal, Quebec",
  },
  {
    company: "CINTIQS",
    link: "https://www.cintiqs.com/",
    title: "Senior Artificial Intelligence Engineer",
    bullets: [
      "Achieved significant advancements in AI innovation for military and defense applications by developing end-to-end AI software pipelines. Successfully trained and deployed new AI models for OCR, video super-resolution, and object tracking. Designed and implemented image restoration techniques using GANs for denoising, colorizing historical images, and frame interpolation, enhancing the quality of old and degraded videos.",
      "Implemented services using Flask, OCR, and Docker."
    ],
    tools: "Python, Flask, SQLite, OCR",
    dates: "January 2022 – Sep 2022 | Ottawa, Ontario, Canada",
  },
  {
    company: "Atelesys",
    link: "https://atelesys.com/",
    title: "Software Developer",
    bullets: [
      "Developed end-to-end applications using Python and React to efficiently meet project requirements."
    ],
    tools: "Python, Flask, React",
    dates: "Oct 2021 – Dec 2022 | Toronto, Ontario, Canada",
  },
  {
    company: "Intelense",
    link: "https://www.intelense.com/",
    title: "Artificial Intelligence Developer",
    bullets: [
      "Developed real-time video analytics for public safety: anomaly detection (GAN, WGAN, VAE), accident and fall detection (pose estimation), fight, fire and smoke detection.",
      "Integrated AI with real-time camera feeds (RTSP, HTTP) using deep learning and computer vision.",
      "Built modular Flask + OpenCV apps for multi-camera tracking (perspective transform, object detection, tracking).",
      "Conducted R&D, literature reviews, and built pipelines across projects.",
      "Implemented alert systems to notify on anomaly threshold breaches."
    ],
    tools: "Python, Flask, JavaScript",
    dates: "Jun 2020 – Sep 2021 | Toronto, Canada",
  },
  {
    company: "Dutch-Bangla Bank",
    link: "https://www.dutchbanglabank.com/",
    title: "Data Analyst",
    bullets: [
      "Conducted data mining and retrieval with MySQL to identify critical business areas; identified top customers using clustering.",
      "Delivered a POC solution achieving 96% accuracy on company data."
    ],
    tools: "Python, MySQL",
    dates: "Jun 2010 – Apr 2016 | Dhaka, Bangladesh",
  },
];

const awards: Award[] = [
  { text: "Split Graduate Fellowship GCS — 2023" },
  { text: "Concordia Conference and Exposition Allowance — 2024" },
];

const service: string[] = ["Volunteer, Toronto AI Meetup Group", "Organizer, University AI Symposium 2023"];

/* 🎯 Technical Skills (data) */
const skills: Skill[] = [
  { title: "Programming Languages", text: "6+ years with Python (PyTorch, TensorFlow, Keras), C/C++, R, SQL, MATLAB." },
  { title: "LLM & Generative AI Expertise", text: "Fine-tuning & prompt engineering for LLaMA, GPT-3/4, Mistral, Gemma. Hugging Face + LoRA/QLoRA." },
  { title: "AI Model Training", text: "LLM, MLLM, CNN, 3D CNN, RNN/LSTM/GRU, Object Detection, OpenCV, U-Net, GAN." },
  { title: "Computer Vision", text: "Real-time analytics, video mining, 3D detection, anomaly detection, super-resolution (SRGAN)." },
  { title: "AI Deployment & Optimization", text: "AWS SageMaker, Flask, REST API." },
  { title: "Model Compression & MLOps", text: "TensorRT, TensorFlow Lite, Git, OpenShift, Docker." },
  { title: "Data Management & Big Data", text: "Spark-Scala, Hive, Flume, Sqoop, Pig, Databricks, PostgreSQL, MongoDB." },
  { title: "Fullstack & Web", text: "React, HTML, CSS, RESTful APIs; integrate backend AI into responsive UIs." },
  { title: "Operating Systems & Cloud", text: "Mac, Windows, Linux, ROS; AWS (EC2, S3, EMR, SageMaker, Lambda)." },
  { title: "GPU Computing", text: "NVIDIA GPU, CUDA, cuDNN, Keras, PyTorch, TensorFlow, TensorBoard." },
];

/* =======================
   Page
   ======================= */
export default function Page() {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen w-full bg-neutral-50 text-neutral-900">
      {/* Top Nav */}
      <header className="sticky top-0 z-30 border-b border-neutral-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto flex max-w-7xl items-center justify-start px-4 py-3">
          <nav className="flex flex-wrap gap-8 md:gap-10 text-[15px] font-medium text-neutral-700">
            {[
              { id: "about", label: "About" },
              { id: "news", label: "News" },
              { id: "publications", label: "Publications" },
              { id: "education", label: "Education" },
              { id: "certifications", label: "Certifications" },
              { id: "experience", label: "Experience" },
              { id: "awards", label: "Awards" },
              { id: "service", label: "Service" },
              { id: "skills", label: "Technical Skills" }, // moved to end
            ].map((it) => (
              <a key={it.id} href={`#${it.id}`} className="hover:text-neutral-900">
                {it.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Layout: compact sidebar (200px) + wide main content */}
      <main className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 py-10 md:grid-cols-[200px,1fr]">
        {/* Sidebar (compact) */}
        <aside className="order-2 md:order-1">
          <div className="sticky top-20 border border-neutral-200 bg-white p-3">
            <div className="mx-auto mb-2 h-24 w-24 overflow-hidden rounded-full ring-1 ring-neutral-200">
              <div className="relative h-full w-full">
                <Image src={profile.avatar} alt={`${profile.name} avatar`} fill className="object-cover" />
              </div>
            </div>
            <h1 className="text-[17px] font-semibold leading-tight">{profile.name}</h1>
            <p className="mt-0.5 text-[13px] text-neutral-600">{profile.role}</p>

            <div className="mt-3 space-y-2 text-[13px]">
              <div className="flex items-center gap-2 text-neutral-700">
                <MapPinIcon className="h-4 w-4" />
                <span className="truncate">{profile.location}</span>
              </div>

              <div className="grid grid-cols-1 gap-1.5">
                {profile.socials.map((s) => {
                  const label = s.label.toLowerCase();
                  let Icon: React.FC<React.SVGProps<SVGSVGElement>> = ExternalLinkIcon;
                  if (label.includes("email")) Icon = MailIcon;
                  else if (label.includes("linkedin")) Icon = LinkedInIcon;
                  else if (label.includes("github")) Icon = GitHubIcon;
                  else if (label.includes("scholar")) Icon = ScholarIcon;

                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      className="inline-flex items-center gap-2 border border-neutral-200 px-2.5 py-1.5 hover:bg-neutral-50"
                    >
                      <Icon className="h-4 w-4" />
                      <span className="truncate">{s.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </aside>

        {/* Main content: flat sections */}
        <section className="order-1 space-y-10 md:order-2">
          {/* About */}
          <section id="about" className="space-y-3">
            <h2 className="text-[18px] font-semibold">👤 About</h2>
            <p className="leading-7 text-neutral-800">{blurb}</p>
          </section>

          <hr className="border-neutral-200" />

          {/* News */}
          <section id="news" className="space-y-3">
            <h2 className="text-[18px] font-semibold">🔥 News</h2>
            {news.length === 0 ? (
              <p className="text-sm text-neutral-600">
                No news yet. Add items to the <code>news</code> array.
              </p>
            ) : (
              <ul className="space-y-3">
                {news.map((n) => (
                  <li key={`${n.date}-${n.text}`} className="flex items-start gap-3">
                    <span className="mt-1">🎉🎉</span>
                    <p className="text-[15px] leading-6">
                      <span className="font-medium">{n.date}:</span> {n.text}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </section>

          <hr className="border-neutral-200" />

          {/* Publications */}
          <section id="publications" className="space-y-4">
            <h2 className="text-[18px] font-semibold">📚 Publications</h2>
            <div className="space-y-8">
              {pubs.map((p) => (
                <article key={p.title} className="grid grid-cols-1 gap-4 md:grid-cols-[1fr,2fr]">
                  <div className="relative overflow-hidden bg-neutral-100">
                    <Image
                      src={p.thumb ?? pub1Png}
                      alt={`${p.title} thumbnail`}
                      width={640}
                      height={360}
                      className="h-48 w-full object-cover md:h-full"
                    />
                  </div>
                  <div>
                    <a href={p.link} className="text-base font-semibold leading-6 hover:underline">
                      {p.title}
                    </a>
                    {p.venue ? <p className="mt-1 text-sm text-neutral-600">{p.venue}</p> : null}
                    {p.authors ? <p className="mt-1 text-sm text-neutral-700">{p.authors}</p> : null}
                    {p.desc ? <p className="mt-2 text-sm text-neutral-700">{p.desc}</p> : null}
                    <div className="mt-3">
                      <a href={p.link} className="inline-flex items-center gap-2 text-sm text-teal-700 hover:underline">
                        <LinkIcon className="h-4 w-4" />
                        View Paper
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <hr className="border-neutral-200" />

          {/* Education */}
          <section id="education" className="space-y-4">
            <h2 className="text-[18px] font-semibold">🎓 Education</h2>
            <div className="space-y-4">
              {education.map((e) => (
                <div key={e.school} className="space-y-0.5">
                  <h3 className="text-base font-semibold">
                    {e.link ? <a href={e.link} className="hover:underline">{e.school}</a> : e.school}
                  </h3>
                  <p className="text-sm text-neutral-600">{e.place}</p>
                  <p className="text-sm">
                    <strong>Degree:</strong> {e.degree}
                    {e.gpa ? <> — <strong>CGPA:</strong> {e.gpa}</> : null}
                  </p>
                  {e.courses?.length ? (
                    <div>
                      <p className="text-sm font-medium">Relevant Coursework:</p>
                      <ul className="ml-5 list-disc text-sm text-neutral-800">
                        {e.courses.map((c) => (<li key={c}>{c}</li>))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </section>

          <hr className="border-neutral-200" />

          {/* Certifications */}
          <section id="certifications" className="space-y-3">
            <h2 className="text-[18px] font-semibold">📜 Certifications</h2>
            <ul className="ml-5 list-disc text-sm text-neutral-800">
              {certifications.map((c, i) => (<li key={i}>{c.text}</li>))}
            </ul>
          </section>

          <hr className="border-neutral-200" />

          {/* Experience */}
          <section id="experience" className="space-y-4">
            <h2 className="text-[18px] font-semibold">💼 Experience</h2>
            <div className="space-y-6">
              {experience.map((x) => (
                <div key={x.company} className="space-y-1">
                  <h3 className="text-base font-semibold">
                    {x.link ? <a href={x.link} className="hover:underline">{x.company}</a> : x.company}
                  </h3>
                  <p className="text-sm text-neutral-700">{x.title}</p>
                  <ul className="ml-5 list-disc text-sm text-neutral-800">
                    {x.bullets.map((b, i) => (<li key={i}>{b}</li>))}
                  </ul>
                  {x.tools ? <p className="text-sm"><strong>Tools:</strong> {x.tools}</p> : null}
                  <p className="text-sm text-neutral-600">{x.dates}</p>
                </div>
              ))}
            </div>
          </section>

          <hr className="border-neutral-200" />

          {/* Awards */}
          <section id="awards" className="space-y-3">
            <h2 className="text-[18px] font-semibold">🏆 Awards</h2>
            <ul className="ml-5 list-disc text-sm text-neutral-800">
              {awards.map((a, i) => (<li key={i}>{a.text}</li>))}
            </ul>
          </section>

          <hr className="border-neutral-200" />

          {/* Service */}
          <section id="service" className="space-y-3">
            <h2 className="text-[18px] font-semibold">🤝 Service</h2>
            <ul className="ml-5 list-disc text-sm text-neutral-800">
              {service.map((s) => (<li key={s}>{s}</li>))}
            </ul>
          </section>

          <hr className="border-neutral-200" />

          {/* Technical Skills — moved to the END */}
          <section id="skills" className="space-y-3">
            <h2 className="text-[18px] font-semibold">🛠️ Technical Skills</h2>
            <ul className="space-y-2">
              {skills.map((s) => (
                <li key={s.title} className="text-[15px] leading-6">
                  <span className="font-medium">{s.title}:</span> {s.text}
                </li>
              ))}
            </ul>
          </section>

          <footer className="pt-6 pb-10 text-center text-sm text-neutral-500">
            © {year} {profile.name}.
          </footer>
        </section>
      </main>
    </div>
  );
}
