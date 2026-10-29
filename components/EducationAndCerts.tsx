import { GraduationCap, Award, Calendar, CheckCircle2 } from "lucide-react";
import { masterProfileData } from "@/data/profile";

export default function EducationAndCerts() {
  const { education, certifications } = masterProfileData;

  return (
    <section id="education" className="py-16 border-t border-slate-800/80 bg-slate-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Education Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Education
                </h2>
                <p className="text-xs text-slate-400">Formal engineering degrees and background</p>
              </div>
            </div>

            <div className="space-y-6">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-slate-900/40 border border-slate-800 p-6 hover:border-slate-700 transition-colors"
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-xs font-semibold text-cyan-400">{edu.period}</span>
                    {edu.grade && (
                      <span className="px-2 py-0.5 rounded text-xs font-bold bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                        {edu.grade}
                      </span>
                    )}
                  </div>
                  <h3 className="text-base font-bold text-white mb-0.5">{edu.degree}</h3>
                  <div className="text-xs text-slate-300 font-medium mb-3">{edu.institution}</div>
                  <p className="text-xs text-slate-400 leading-relaxed">{edu.details}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Verified Certifications
                </h2>
                <p className="text-xs text-slate-400">Industry-recognized cloud & GenAI credentials</p>
              </div>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-slate-900/40 border border-slate-800 p-5 hover:border-amber-500/30 transition-all flex items-start gap-4"
                >
                  <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 shrink-0 mt-0.5">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-sm font-bold text-white">{cert.title}</h3>
                      <span className="text-xs font-medium text-slate-400 shrink-0">{cert.date}</span>
                    </div>
                    <div className="text-xs text-amber-300/80 font-medium mt-0.5">
                      Issued by {cert.issuer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
