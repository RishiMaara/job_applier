import { Globe, Mail, Code, Heart, Lock } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { masterProfileData } from "@/data/profile";

interface FooterProps {
  isOwner: boolean;
  onOpenLogin: () => void;
}

export default function Footer({ isOwner, onOpenLogin }: FooterProps) {
  const { name, socials, email } = masterProfileData;

  return (
    <footer className="border-t border-slate-800/80 bg-[#060911] py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="text-center md:text-left">
            <div className="font-bold text-white text-sm mb-1">{name}</div>
            <p className="text-slate-500">
              Personal Live Master Profile & Engineering Portfolio • Vercel Native
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={socials.github}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={socials.leetcode}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-amber-400 transition-colors"
              title="LeetCode"
            >
              <Code className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${email}`}
              className="text-slate-400 hover:text-cyan-400 transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Owner Access Trigger in Footer */}
          <div className="text-center md:text-right">
            {!isOwner ? (
              <button
                onClick={onOpenLogin}
                className="inline-flex items-center gap-1.5 text-slate-400 hover:text-slate-200 transition-colors"
              >
                <Lock className="w-3.5 h-3.5" />
                <span>Owner Login</span>
              </button>
            ) : (
              <span className="text-amber-400 font-semibold inline-flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                Owner Mode Active
              </span>
            )}
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-slate-900 text-center text-slate-400 text-[11px]">
          © {new Date().getFullYear()} {name}. Deployed on Vercel with single-user authentication.
        </div>
      </div>
    </footer>
  );
}
