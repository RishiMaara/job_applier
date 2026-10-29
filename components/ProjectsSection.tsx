"use client";

import { useState } from "react";
import { FolderGit2, ExternalLink, Sparkles, Layers } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { masterProfileData, ProjectItem } from "@/data/profile";

const categories = ["All", "AI & ML", "Full-Stack", "Systems & Backend", "Computer Vision"] as const;

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const { projects } = masterProfileData;

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-16 border-t border-slate-800/80 bg-slate-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2.5 mb-2 text-cyan-400 font-semibold text-xs uppercase tracking-wider">
              <FolderGit2 className="w-4 h-4" />
              Engineering Portfolio
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Featured Systems & Applications
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Production-grade constraint solvers, full-stack microservices, computer vision pipelines, and RAG systems
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-cyan-600 text-white shadow-sm"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col rounded-2xl bg-slate-900/40 border border-slate-800/90 hover:border-cyan-500/40 p-6 sm:p-7 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-950/20 group"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60">
                      {project.category}
                    </span>
                    {project.badge && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                        <Sparkles className="w-3 h-3 text-amber-400" />
                        {project.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-slate-800/60 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/60 transition-colors"
                      title="GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-cyan-600/20 hover:bg-cyan-600/30 text-cyan-300 border border-cyan-500/30 transition-colors"
                      title="Live Preview"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed font-normal">
                {project.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-1.5 mb-6 text-xs text-slate-400 leading-relaxed flex-1">
                {project.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-cyan-400 text-sm leading-none mt-0.5">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Tech stack badges */}
              <div className="flex flex-wrap items-center gap-1.5 pt-4 border-t border-slate-800/80 mt-auto">
                {project.stack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-cyan-200/90 border border-slate-700/60"
                  >
                    {tech}
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
