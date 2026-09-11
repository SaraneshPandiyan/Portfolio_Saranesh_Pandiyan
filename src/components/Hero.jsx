import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowDown, ChevronRight, Sparkles } from 'lucide-react'
import { personalInfo } from '../data/portfolio'

const roles = [
  'Frontend Developer',
  'QA Engineer',
  'Software Tester',
  'Aspiring Data Engineer',
  'Data Analyst',
]


const focusTags = [
  { label: 'QA & Testing', color: '#818CF8', bg: 'rgba(99,102,241,0.12)', border: 'rgba(99,102,241,0.35)' },
  { label: 'Frontend Dev', color: '#C084FC', bg: 'rgba(139,92,246,0.12)', border: 'rgba(139,92,246,0.35)' },
  { label: 'Data Analysis', color: '#22D3EE', bg: 'rgba(6,182,212,0.12)', border: 'rgba(6,182,212,0.35)' },
  { label: 'Data Engineering', color: '#34D399', bg: 'rgba(16,185,129,0.12)', border: 'rgba(16,185,129,0.35)' },
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="py-16 lg:py-24 relative">
      {/* Greeting badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-accent-500/30 bg-accent-500/8 text-accent-300 text-xs font-semibold tracking-widest uppercase"
      >
        <Sparkles size={12} className="text-accent-400" />
        Hello, I'm
      </motion.div>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 tracking-tight"
      >
        <span className="text-white">Saranesh</span>
        <br />
        <span className="hero-gradient-text">Pandiyan</span>
      </motion.h1>

      {/* Animated Role */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex items-center gap-3 mb-6 h-10"
      >
        <span className="w-6 h-0.5 bg-gradient-to-r from-accent-400 to-violet-400 rounded-full" />
        <AnimatePresence mode="wait">
          <motion.span
            key={roleIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-cyan-300"
          >
            {roles[roleIndex]}
          </motion.span>
        </AnimatePresence>
      </motion.div>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-[#B0B0C8] text-base sm:text-lg leading-relaxed max-w-2xl mb-3"
      >
        {personalInfo.tagline}
      </motion.p>

      {/* Sub-description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="text-[#6B6B80] text-sm sm:text-base leading-relaxed max-w-xl mb-8"
      >
        B.Tech IT graduate with hands-on experience in Manual Testing, API Testing, Frontend Development, SQL and QA documentation.
      </motion.p>

      {/* Focus tags */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex flex-wrap gap-2 mb-10"
      >
        {focusTags.map((tag) => (
          <motion.span
            key={tag.label}
            whileHover={{ scale: 1.05, y: -2 }}
            className="px-4 py-1.5 rounded-full text-xs font-bold border tracking-wide"
            style={{
              color: tag.color,
              borderColor: tag.border,
              backgroundColor: tag.bg,
            }}
          >
            {tag.label}
          </motion.span>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="flex flex-wrap gap-3 mb-10"
      >
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => {
            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
          }}
          className="btn-accent"
        >
          View My Work
          <ChevronRight size={16} />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
          }}
          className="btn-ghost"
        >
          Contact Me
        </motion.button>
      </motion.div>

      {/* Availability badge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.65 }}
        className="flex items-center gap-2 mb-2"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        <span className="text-emerald-400 text-xs font-semibold tracking-wide">
          {personalInfo.availability}
        </span>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-16 flex items-center gap-2 text-[#6B6B80] text-xs"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} />
        </motion.div>
        <span>Scroll to explore</span>
      </motion.div>
    </div>
  )
}
