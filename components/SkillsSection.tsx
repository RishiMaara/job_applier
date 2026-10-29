import { Wrench, Terminal, Cpu, Database, Cloud, CheckSquare } from "lucide-react";
import { masterProfileData } from "@/data/profile";

const iconMap: Record<string, any> = {
  "Programming Languages": Terminal,
  "Web & Microservices": Wrench,
  "AI, GenAI & ML": Cpu,
  "Databases & Storage": Database,
  "DevOps & Cloud": Cloud,
  "Engineering Fundamentals": CheckSquare,
};

export default function SkillsSection() {
  const { skillCategories, languages } = masterProfileData;

  return (
    <section id="skills" className="py-16 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-10">
          <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <Cpu className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Technical Core & Capabilities
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Languages, distributed systems tools, machine learning frameworks, and engineering standards
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((cat, idx) => {
            const Icon = iconMap[cat.title] || Terminal;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-slate-900/40 border border-slate-800 p-6 hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center gap-2.5 mb-4 text-slate-200">
                  <div className="p-1.5 rounded-lg bg-slate-800 text-cyan-400">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-semibold text-sm text-white">{cat.title}</h3>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-800/60 text-slate-300 hover:text-white border border-slate-700/60 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Spoken Languages Bar */}
        <div className="p-6 rounded-2xl bg-slate-900/30 border border-slate-800">
          <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
            Spoken & Written Languages
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {languages.map((lang, lIdx) => (
              <div key={lIdx} className="p-3 rounded-xl bg-slate-800/40 border border-slate-700/40 text-center">
                <div className="text-sm font-semibold text-white">{lang.language}</div>
                <div className="text-xs text-cyan-400 mt-0.5">{lang.level}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
