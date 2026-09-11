import { Link2, GitBranch, Mail } from 'lucide-react'
import { personalInfo } from '../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/[0.06] bg-[#0C0C0F]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-accent-500 flex items-center justify-center text-white font-bold text-xs">
              SP
            </div>
            <div>
              <p className="text-white font-bold text-sm">{personalInfo.name}</p>
              <p className="text-[#6B6B80] text-xs">QA Engineer · Frontend Developer · Data Analysis</p>
            </div>
          </div>

          {/* Social */}
          <div className="flex items-center gap-2">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg border border-white/[0.08] flex items-center justify-center text-[#6B6B80] hover:text-white hover:border-accent-500/40 hover:bg-accent-500/10 transition-all"
              aria-label="LinkedIn"
            >
              <Link2 size={13} />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg border border-white/[0.08] flex items-center justify-center text-[#6B6B80] hover:text-white hover:border-white/20 hover:bg-white/5 transition-all"
              aria-label="GitHub"
            >
              <GitBranch size={13} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-8 h-8 rounded-lg border border-white/[0.08] flex items-center justify-center text-[#6B6B80] hover:text-white hover:border-accent-500/40 hover:bg-accent-500/10 transition-all"
              aria-label="Email"
            >
              <Mail size={13} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-4 border-t border-white/[0.04] text-center">
          <p className="text-[#6B6B80] text-xs">
            © {year} {personalInfo.name}. Built with React, Vite & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  )
}
