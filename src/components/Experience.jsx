import { useState, useRef, useEffect } from 'react'
import { motion, useInView, animate } from 'framer-motion'
import { ChevronDown, ChevronUp, Briefcase, Calendar } from 'lucide-react'
import { experiences } from '../data/portfolio'

function AnimatedCounter({ value, inView }) {
  const [display, setDisplay] = useState('0')
  const numMatch = value.match(/^(\d+)(\+?)$/)

  useEffect(() => {
    if (!inView || !numMatch) return
    const target = parseInt(numMatch[1])
    const suffix = numMatch[2] || ''
    const controls = animate(0, target, {
      duration: 1.2,
      ease: 'easeOut',
      onUpdate: (v) => setDisplay(Math.round(v) + suffix),
    })
    return () => controls.stop()
  }, [inView, value])

  return <span>{numMatch ? display : value}</span>
}

function ExperienceCard({ exp, index, inView }) {
  const [open, setOpen] = useState(index === 0)

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="glass-card overflow-hidden"
    >
      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full p-5 flex items-start gap-4 text-left hover:bg-white/[0.02] transition-colors"
      >
        {/* Step number */}
        <div className="w-10 h-10 rounded-xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center shrink-0 mt-0.5">
          <span className="text-accent-400 font-extrabold text-xs">{exp.id}</span>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="text-white font-bold text-base leading-tight">{exp.role}</h3>
              <div className="flex items-center gap-2 mt-1">
                <Briefcase size={11} className="text-accent-400 shrink-0" />
                <span className="text-accent-400 font-semibold text-xs">{exp.company}</span>
                <span className="text-[#6B6B80] text-xs">·</span>
                <span className="text-[#6B6B80] text-xs uppercase tracking-wide font-medium">{exp.type}</span>
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-[#6B6B80] text-[0.65rem] hidden sm:block">{exp.period}</span>
              {open ? (
                <ChevronUp size={14} className="text-[#6B6B80]" />
              ) : (
                <ChevronDown size={14} className="text-[#6B6B80]" />
              )}
            </div>
          </div>

          {/* Period on mobile */}
          <div className="flex items-center gap-1.5 mt-1 sm:hidden">
            <Calendar size={10} className="text-[#6B6B80]" />
            <span className="text-[#6B6B80] text-[0.65rem]">{exp.period}</span>
          </div>

          {/* Metrics row (always visible) */}
          {exp.metrics.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {exp.metrics.map((m) => (
                <div key={m.label} className="metric-badge px-3 py-1.5 flex items-center gap-1.5">
                  <span className="text-accent-400 font-extrabold text-sm">
                    <AnimatedCounter value={m.value} inView={inView} />
                  </span>
                  <span className="text-[#6B6B80] text-[0.65rem]">{m.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </button>

      {/* Expandable responsibilities */}
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <div className="px-5 pb-5 border-t border-white/[0.06] pt-4">
          <ul className="space-y-2">
            {exp.responsibilities.map((r, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <div className="w-1 h-1 rounded-full bg-accent-400 mt-2 shrink-0" />
                <p className="text-[#A0A0B0] text-sm leading-relaxed">{r}</p>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <div ref={ref} className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <div className="flex items-center gap-3 mb-2">
          <span className="step-number">04</span>
          <span className="section-label">Experience</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
          Professional journey
        </h2>
        <p className="text-[#6B6B80] text-sm mt-2">Click each role to expand responsibilities</p>
      </motion.div>

      <div className="space-y-4">
        {experiences.map((exp, idx) => (
          <ExperienceCard key={exp.id} exp={exp} index={idx} inView={inView} />
        ))}
      </div>
    </div>
  )
}
