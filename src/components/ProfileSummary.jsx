import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  MapPin, Mail, Phone, Link2, GitBranch,
  ChevronDown, ChevronUp,
  CheckSquare, Bug, Zap, RefreshCw, QrCode, AlertCircle
} from 'lucide-react'
import { personalInfo, stats, capabilityTags } from '../data/portfolio'

const iconMap = {
  CheckSquare, Bug, Zap, RefreshCw, QrCode, AlertCircle
}

const capabilityColors = {
  'QA / Testing': { text: '#818CF8', bg: 'rgba(99,102,241,0.1)', border: 'rgba(99,102,241,0.25)' },
  'Frontend Dev': { text: '#C084FC', bg: 'rgba(139,92,246,0.1)', border: 'rgba(139,92,246,0.25)' },
  'Data Analysis': { text: '#22D3EE', bg: 'rgba(6,182,212,0.1)', border: 'rgba(6,182,212,0.25)' },
  'Data Engineering': { text: '#34D399', bg: 'rgba(16,185,129,0.1)', border: 'rgba(16,185,129,0.25)' },
}

export default function ProfileSummary() {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="space-y-4">
      {/* Profile card */}
      <div className="glass-card p-6">
        {/* Avatar with spinning ring */}
        <div className="flex flex-col items-center text-center mb-6">
          <div className="relative mb-4">
            {/* Spinning gradient ring */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-accent-400 via-violet-500 to-cyan-400 opacity-70 blur-sm animate-spin-slow" />
            <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-accent-500 via-violet-600 to-indigo-700 flex items-center justify-center text-white text-2xl font-extrabold shadow-xl shadow-accent-500/25">
              SP
            </div>
          </div>
          <h2 className="text-white font-extrabold text-lg leading-tight">{personalInfo.name}</h2>
          <p className="text-[#6B6B80] text-xs mt-1 tracking-wide">Professional Portfolio</p>

          {/* Availability dot */}
          <div className="flex items-center gap-1.5 mt-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
            </span>
            <span className="text-emerald-400 text-[0.65rem] font-semibold">Available</span>
          </div>
        </div>

        {/* Capability tags */}
        <div className="grid grid-cols-2 gap-2 mb-5">
          {capabilityTags.map((tag) => {
            const colors = capabilityColors[tag.label] || { text: '#818CF8', bg: 'rgba(99,102,241,0.1)', border: 'rgba(99,102,241,0.25)' }
            return (
              <div
                key={tag.label}
                className="text-center py-2 px-2 rounded-xl border relative"
                style={{ backgroundColor: colors.bg, borderColor: colors.border }}
              >
                <span
                  className="text-[0.68rem] font-bold block leading-tight"
                  style={{ color: colors.text }}
                >
                  {tag.label}
                </span>
                {tag.badge && (
                  <span className="absolute -top-1.5 -right-1 text-[0.5rem] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-1.5 py-0.5 rounded-full font-bold">
                    {tag.badge}
                  </span>
                )}
              </div>
            )
          })}
        </div>

        {/* Contact */}
        <div className="space-y-2.5 border-t border-white/[0.07] pt-4">
          <div className="flex items-center gap-2.5 text-[#A0A0B0]">
            <MapPin size={13} className="text-accent-400 shrink-0" />
            <span className="text-xs">{personalInfo.location}</span>
          </div>
          <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2.5 text-[#A0A0B0] hover:text-white transition-colors group">
            <Mail size={13} className="text-accent-400 shrink-0" />
            <span className="text-xs truncate group-hover:text-accent-300">{personalInfo.email}</span>
          </a>
          <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-2.5 text-[#A0A0B0] hover:text-white transition-colors">
            <Phone size={13} className="text-accent-400 shrink-0" />
            <span className="text-xs">{personalInfo.phone}</span>
          </a>
        </div>

        {/* Social */}
        <div className="flex gap-2 mt-4">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl border border-accent-500/20 text-accent-300 hover:text-white hover:border-accent-500/50 hover:bg-accent-500/10 transition-all text-xs font-semibold"
          >
            <Link2 size={12} />
            LinkedIn
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl border border-white/[0.08] text-[#A0A0B0] hover:text-white hover:border-white/25 hover:bg-white/5 transition-all text-xs font-semibold"
          >
            <GitBranch size={12} />
            GitHub
          </a>
        </div>
      </div>

      {/* Quick stats */}
      <div className="glass-card p-4">
        <div className="flex items-center justify-between mb-3">
          <p className="section-label">Quick Stats</p>
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-[#6B6B80] hover:text-white transition-colors"
          >
            {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {stats.slice(0, expanded ? stats.length : 4).map((stat) => {
            const Icon = iconMap[stat.icon]
            return (
              <div key={stat.label} className="metric-badge">
                <div className="flex items-center gap-1 justify-center mb-1">
                  {Icon && <Icon size={10} className="text-accent-400" />}
                  <span className="stat-number">{stat.value}</span>
                </div>
                <p className="text-[#6B6B80] text-[0.6rem] leading-tight text-center">{stat.label}</p>
              </div>
            )
          })}
        </div>

        {!expanded && stats.length > 4 && (
          <button
            onClick={() => setExpanded(true)}
            className="w-full mt-2 text-[#6B6B80] text-xs hover:text-accent-400 transition-colors text-center"
          >
            +{stats.length - 4} more stats
          </button>
        )}
      </div>

      {/* Education summary */}
      <div className="glass-card p-4">
        <p className="section-label mb-3">Education</p>
        <div className="space-y-2">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-white text-xs font-bold">B.Tech – Information Technology</p>
              <p className="text-[#6B6B80] text-[0.7rem]">Karpagam College of Engineering</p>
            </div>
          </div>
          <div className="flex gap-3 pt-1">
            <div className="flex-1 bg-accent-500/8 border border-accent-500/20 rounded-xl p-2 text-center">
              <p className="text-accent-400 font-extrabold text-sm">7.42</p>
              <p className="text-[#6B6B80] text-[0.6rem]">CGPA</p>
            </div>
            <div className="flex-1 bg-accent-500/8 border border-accent-500/20 rounded-xl p-2 text-center">
              <p className="text-accent-400 font-extrabold text-sm">2026</p>
              <p className="text-[#6B6B80] text-[0.6rem]">Graduation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
