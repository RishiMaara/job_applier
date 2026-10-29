import Image from "next/image";
import { Globe, Mail, Phone, MapPin, Award, Code, CheckCircle2, FileDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { masterProfileData } from "@/data/profile";

export default function Hero() {
  const { name, title, headline, summary, socials, email, phone, location, relocationStatus, stats } = masterProfileData;

  return (
    <section id="about" className="relative pt-12 pb-16 overflow-hidden">
      {/* Background radial gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[250px] bg-blue-600/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          
          {/* Avatar / Profile Image */}
          <div className="relative group shrink-0">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 opacity-60 blur-md group-hover:opacity-100 transition duration-500"></div>
            <div className="relative w-40 h-52 sm:w-48 sm:h-64 rounded-2xl overflow-hidden border-2 border-slate-700/80 bg-slate-900 shadow-2xl">
              <img
                src="/avatar.jpg"
                alt={name}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-2 left-2 right-2 text-center text-xs font-medium text-slate-300">
                AI & Systems Engineer
              </div>
            </div>
          </div>

          {/* Core Info */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-3">
              <Code className="w-3.5 h-3.5" />
              {headline}
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-2">
              {name}
            </h1>

            <p className="text-lg sm:text-xl font-medium text-slate-300 mb-4">
              {title}
            </p>

            <p className="text-sm sm:text-base text-slate-400 max-w-3xl leading-relaxed mb-6">
              {summary}
            </p>

            {/* Location & Status */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-slate-400 mb-6">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>{location}</span>
              </div>
              <span className="hidden sm:inline text-slate-600">•</span>
              <div className="text-emerald-400 font-medium">
                {relocationStatus}
              </div>
            </div>

            {/* Action buttons & Socials */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <a
                href={socials.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all"
              >
                <GithubIcon className="w-4 h-4 text-white" />
                GitHub
              </a>

              <a
                href={socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium bg-[#0077b5]/20 hover:bg-[#0077b5]/30 text-blue-300 border border-blue-500/30 transition-all"
              >
                <LinkedinIcon className="w-4 h-4 text-blue-400" />
                LinkedIn
              </a>

              <a
                href={socials.leetcode}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 transition-all"
              >
                <Code className="w-4 h-4 text-amber-400" />
                LeetCode (738+)
              </a>

              <a
                href={socials.portfolio}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 border border-purple-500/30 transition-all"
              >
                <Globe className="w-4 h-4 text-purple-400" />
                Portfolio
              </a>

              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium bg-cyan-600 hover:bg-cyan-500 text-white transition-all shadow-md shadow-cyan-600/30"
              >
                <Mail className="w-4 h-4" />
                {email}
              </a>
            </div>
          </div>
        </div>

        {/* Highlight Stats Row */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors text-center"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-1">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-slate-200 mb-0.5">{stat.label}</div>
              <div className="text-[11px] text-slate-400">{stat.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
