"use client";

import { useState } from "react";
import Link from "next/link";
import { User, LogOut, ShieldCheck, Download, Menu, X, ExternalLink } from "lucide-react";
import { logoutAction } from "@/app/actions";

interface NavbarProps {
  isOwner: boolean;
  onOpenLogin: () => void;
}

export default function Navbar({ isOwner, onOpenLogin }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#090d16]/80 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Status */}
          <div className="flex items-center gap-3">
            <Link href="/" className="font-bold text-lg text-white hover:text-cyan-400 transition-colors">
              Rishikesh AV<span className="text-cyan-400">.</span>
            </Link>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Open to Opportunities
            </span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#education" className="hover:text-cyan-400 transition-colors">Education</a>

            {isOwner && (
              <a href="#owner-dashboard" className="flex items-center gap-1.5 text-amber-400 font-medium px-2 py-1 rounded bg-amber-500/10 border border-amber-500/30">
                <ShieldCheck className="w-4 h-4" />
                Owner Portal
              </a>
            )}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="mailto:rishirudhm@gmail.com"
              className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-cyan-600 hover:bg-cyan-500 text-white transition-all shadow-sm shadow-cyan-600/30"
            >
              Get in Touch
            </a>

            {isOwner ? (
              <button
                onClick={() => logoutAction()}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-red-400 bg-slate-800/60 hover:bg-red-500/10 border border-slate-700/60 transition-all"
                title="Log out of owner dashboard"
              >
                <LogOut className="w-3.5 h-3.5" />
                Logout
              </button>
            ) : (
              <button
                onClick={onOpenLogin}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-slate-200 bg-slate-800/40 hover:bg-slate-800 border border-slate-800 transition-all"
                title="Rishi owner login"
              >
                <User className="w-3.5 h-3.5" />
                Owner Login
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-[#0c1220] px-4 pt-2 pb-4 space-y-2 text-sm text-slate-300">
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 hover:text-cyan-400"
          >
            About
          </a>
          <a
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 hover:text-cyan-400"
          >
            Experience
          </a>
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 hover:text-cyan-400"
          >
            Projects
          </a>
          <a
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 hover:text-cyan-400"
          >
            Skills
          </a>
          <a
            href="#education"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 hover:text-cyan-400"
          >
            Education
          </a>

          {isOwner ? (
            <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
              <span className="text-amber-400 text-xs font-semibold">Logged in as Owner</span>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  logoutAction();
                }}
                className="text-red-400 text-xs flex items-center gap-1"
              >
                <LogOut className="w-3.5 h-3.5" /> Logout
              </button>
            </div>
          ) : (
            <div className="pt-2 border-t border-slate-800">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLogin();
                }}
                className="text-slate-400 text-xs flex items-center gap-1"
              >
                <User className="w-3.5 h-3.5" /> Owner Login
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
