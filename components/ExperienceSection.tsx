import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { masterProfileData } from "@/data/profile";

export default function ExperienceSection() {
  const { experiences } = masterProfileData;

  return (
    <section id="experience" className="py-16 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-10">
          <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <Briefcase className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Work Experience
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Production engineering in financial risk, machine learning pipelines, and agile software development
            </p>
          </div>
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:left-5 before:w-0.5 before:bg-slate-800 hidden sm:block" />

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="relative rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700/80 p-6 sm:p-8 transition-all hover:shadow-xl hover:shadow-cyan-950/20"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    {exp.current && (
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                        Current Role
                      </span>
                    )}
                  </div>
                  <div className="text-cyan-400 font-semibold text-base mt-0.5">
                    {exp.company}
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Bullets */}
              <ul className="space-y-2.5 mb-6 text-sm text-slate-300 leading-relaxed">
                {exp.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Skills tags */}
              <div className="flex flex-wrap items-center gap-1.5 pt-4 border-t border-slate-800/80">
                <span className="text-xs font-medium text-slate-400 mr-1">Technologies:</span>
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-slate-800/60 text-slate-300 border border-slate-700/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
