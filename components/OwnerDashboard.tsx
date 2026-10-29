"use client";

import { useState } from "react";
import { ShieldCheck, LogOut, FileText, CheckCircle2, Plus, Sparkles, Building2, Calendar, Download } from "lucide-react";
import { masterProfileData, ApplicationTrackerItem } from "@/data/profile";
import { logoutAction } from "@/app/actions";

interface OwnerDashboardProps {
  onLogout: () => void;
}

export default function OwnerDashboard({ onLogout }: OwnerDashboardProps) {
  const { ownerPrivateData } = masterProfileData;
  const [applications, setApplications] = useState<ApplicationTrackerItem[]>(ownerPrivateData.starterApplications);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newCompany, setNewCompany] = useState("");
  const [newRole, setNewRole] = useState("");
  const [newStatus, setNewStatus] = useState<ApplicationTrackerItem["status"]>("Applied");
  const [newNotes, setNewNotes] = useState("");

  const handleAddApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCompany || !newRole) return;
    const item: ApplicationTrackerItem = {
      id: `app-${Date.now()}`,
      company: newCompany,
      role: newRole,
      status: newStatus,
      date: new Date().toISOString().split("T")[0],
      notes: newNotes,
    };
    setApplications([item, ...applications]);
    setNewCompany("");
    setNewRole("");
    setNewNotes("");
    setShowAddModal(false);
  };

  const statusColor = (status: ApplicationTrackerItem["status"]) => {
    switch (status) {
      case "Offer":
        return "bg-emerald-500/20 text-emerald-300 border-emerald-500/30";
      case "Interviewing":
        return "bg-cyan-500/20 text-cyan-300 border-cyan-500/30";
      case "Applied":
        return "bg-blue-500/20 text-blue-300 border-blue-500/30";
      case "Draft":
        return "bg-amber-500/20 text-amber-300 border-amber-500/30";
      default:
        return "bg-slate-500/20 text-slate-300 border-slate-500/30";
    }
  };

  return (
    <section id="owner-dashboard" className="py-16 border-t-2 border-amber-500/40 bg-gradient-to-b from-[#111927] to-[#090d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Owner Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl bg-amber-500/10 border border-amber-500/30 mb-10 shadow-lg shadow-amber-950/20">
          <div className="flex items-center gap-3.5">
            <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/40">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold text-white">Owner Portal (Rishikesh AV)</h2>
                <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-amber-400 text-slate-950 uppercase tracking-wide">
                  Private Mode Active
                </span>
              </div>
              <p className="text-xs text-amber-200/80 mt-0.5">
                This dashboard is visible only to you. Your private facts and application pipeline are protected behind session authentication.
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              logoutAction();
              onLogout();
            }}
            className="self-start sm:self-center inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-red-500/20 hover:bg-red-500/30 text-red-300 border border-red-500/40 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Lock & Logout
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Applications Tracker Column (2 cols) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-cyan-400" />
                  Your Active Applications Pipeline
                </h3>
                <p className="text-xs text-slate-400">Track and manage specific applications in progress</p>
              </div>

              <button
                onClick={() => setShowAddModal(true)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-cyan-600 hover:bg-cyan-500 text-white transition-all shadow-md shadow-cyan-600/30"
              >
                <Plus className="w-4 h-4" />
                Add Application
              </button>
            </div>

            {/* Applications List */}
            <div className="space-y-4">
              {applications.map((app) => (
                <div
                  key={app.id}
                  className="rounded-2xl bg-slate-900/80 border border-slate-800 p-5 hover:border-slate-700 transition-all"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <h4 className="text-base font-bold text-white">{app.company}</h4>
                      <p className="text-xs text-cyan-300 font-medium">{app.role}</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${statusColor(app.status)}`}>
                        {app.status}
                      </span>
                      <span className="text-xs text-slate-400 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" />
                        {app.date}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 bg-slate-950/60 p-3 rounded-xl border border-slate-800/80 leading-relaxed">
                    <span className="text-slate-400 font-semibold mr-1.5">Private Notes:</span>
                    {app.notes}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Private Facts & Quick Export Column (1 col) */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-400" />
                Dossier AI Master Facts
              </h3>
              <p className="text-xs text-slate-400">Facts injected into AI models for document generation</p>
            </div>

            <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-5 space-y-3 max-h-[460px] overflow-y-auto">
              {ownerPrivateData.privateFacts.map((fact, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                  <span>{fact}</span>
                </div>
              ))}
            </div>

            {/* Quick Export Downloads */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Master Data Backups
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Your full Dossier Schema v5 export file is bundled in your workspace for one-click import into Dossier.
              </p>
              <div className="text-xs font-mono text-cyan-300 bg-slate-950 p-2.5 rounded-lg border border-slate-800 break-all">
                dossier-master-export.json
              </div>
            </div>
          </div>

        </div>

        {/* Modal for adding application */}
        {showAddModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="w-full max-w-md rounded-2xl bg-[#0f172a] border border-slate-700 p-6 shadow-2xl">
              <h3 className="text-lg font-bold text-white mb-4">Add Application Tracker Card</h3>
              <form onSubmit={handleAddApp} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Company</label>
                  <input
                    type="text"
                    required
                    value={newCompany}
                    onChange={(e) => setNewCompany(e.target.value)}
                    placeholder="e.g. Google, JPMC, Razorpay"
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-sm text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Target Role</label>
                  <input
                    type="text"
                    required
                    value={newRole}
                    onChange={(e) => setNewRole(e.target.value)}
                    placeholder="e.g. Software Engineer / AI Engineer"
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-sm text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Current Status</label>
                  <select
                    value={newStatus}
                    onChange={(e) => setNewStatus(e.target.value as any)}
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-sm text-white focus:outline-none focus:border-cyan-500"
                  >
                    <option value="Draft">Draft</option>
                    <option value="Applied">Applied</option>
                    <option value="Interviewing">Interviewing</option>
                    <option value="Offer">Offer</option>
                    <option value="Archived">Archived</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Notes / Tailoring Highlights</label>
                  <textarea
                    rows={3}
                    value={newNotes}
                    onChange={(e) => setNewNotes(e.target.value)}
                    placeholder="Notes on customized resume version, referrals, interview stages..."
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-sm text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div className="flex items-center justify-end gap-3 pt-3">
                  <button
                    type="button"
                    onClick={() => setShowAddModal(false)}
                    className="px-4 py-2 rounded-lg text-xs font-medium text-slate-400 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-lg text-xs font-semibold bg-cyan-600 hover:bg-cyan-500 text-white shadow-md shadow-cyan-600/30"
                  >
                    Save Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
