import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Trophy, Star, Activity, Brain } from 'lucide-react'
import { achievements } from '../data/portfolio'

const iconMap = { Trophy, Star, Activity, Brain }

const categoryStyles = {
  Academic: { color: '#F59E0B', bg: '#F59E0B', label: 'Academic' },
  Professional: { color: '#6366F1', bg: '#6366F1', label: 'Professional' },
  Sports: { color: '#10B981', bg: '#10B981', label: 'Sports' },
  Interests: { color: '#8B5CF6', bg: '#8B5CF6', label: 'Personal' },
}

export default function Achievements() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const academic = achievements.filter((a) => ['Academic', 'Professional'].includes(a.category))
  const personal = achievements.filter((a) => ['Sports', 'Interests'].includes(a.category))

  return (
    <div ref={ref} className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <div className="flex items-center gap-3 mb-2">
          <span className="step-number">08</span>
          <span className="section-label">Achievements</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
          Milestones & interests
        </h2>
      </motion.div>

      {/* Academic / Professional */}
      <div className="mb-4">
        <p className="section-label mb-3">Academic & Professional</p>
        <div className="grid sm:grid-cols-2 gap-4">
          {academic.map((ach, idx) => {
            const style = categoryStyles[ach.category]
            const Icon = iconMap[ach.icon]
            return (
              <motion.div
                key={ach.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-5"
              >
                <div className="flex items-start gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${style.color}15`, border: `1px solid ${style.color}30` }}
                  >
                    <Icon size={18} style={{ color: style.color }} />
                  </div>
                  <div>
                    <span
                      className="text-[0.6rem] font-bold uppercase tracking-wider"
                      style={{ color: style.color }}
                    >
                      {style.label}
                    </span>
                    <h3 className="text-white font-bold text-sm leading-tight mt-0.5">{ach.title}</h3>
                    <p className="text-accent-400 text-xs font-medium mt-0.5">{ach.org}</p>
                    <p className="text-[#6B6B80] text-xs leading-relaxed mt-2">{ach.description}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Personal / Beyond work */}
      <div>
        <p className="section-label mb-3">Beyond Work</p>
        <div className="grid sm:grid-cols-2 gap-4">
          {personal.map((ach, idx) => {
            const style = categoryStyles[ach.category]
            const Icon = iconMap[ach.icon]
            return (
              <motion.div
                key={ach.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                className="glass-card p-5"
              >
                <div className="flex items-start gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${style.color}15`, border: `1px solid ${style.color}30` }}
                  >
                    <Icon size={18} style={{ color: style.color }} />
                  </div>
                  <div>
                    <span
                      className="text-[0.6rem] font-bold uppercase tracking-wider"
                      style={{ color: style.color }}
                    >
                      {style.label}
                    </span>
                    <h3 className="text-white font-bold text-sm leading-tight mt-0.5">{ach.title}</h3>
                    <p className="text-[#6B6B80] text-xs leading-relaxed mt-2">{ach.description}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
