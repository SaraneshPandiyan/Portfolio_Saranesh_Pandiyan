import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GitBranch, Clock, Sparkles, Database, BarChart3 } from 'lucide-react'
import { dataTrackProjects } from '../data/portfolio'

const statusColors = {
  'Building': { color: '#10B981', bg: '#10B98115', border: '#10B98130' },
  'Coming Soon': { color: '#F59E0B', bg: '#F59E0B15', border: '#F59E0B30' },
}

const typeIcons = {
  'Data Analysis': BarChart3,
  'Data Engineering': Database,
}

export default function DataTrack() {
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
          <span className="step-number">06</span>
          <span className="section-label" style={{ color: '#10B981' }}>Data Track</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
          Data Analysis & Engineering
        </h2>
        <p className="text-[#6B6B80] text-sm mt-2 max-w-lg">
          Building practical skills in Data Analysis and Data Engineering. Projects will be added here as they are completed.
        </p>

        {/* Mission statement */}
        <div className="mt-4 p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/15 flex items-start gap-3">
          <Sparkles size={16} className="text-emerald-400 mt-0.5 shrink-0" />
          <p className="text-emerald-300 text-sm leading-relaxed">
            Applying the same <strong>testing rigor, analytical thinking, and systematic approach</strong> from QA work to data validation, SQL querying, and data pipeline fundamentals.
          </p>
        </div>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-4">
        {dataTrackProjects.map((project, idx) => {
          const statusStyle = statusColors[project.status] || statusColors['Coming Soon']
          const Icon = typeIcons[project.type] || Database

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="glass-card p-5 relative"
            >
              {/* Status badge */}
              <div className="flex items-center justify-between mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${statusStyle.color}15`, border: `1px solid ${statusStyle.border}` }}
                >
                  <Icon size={18} style={{ color: statusStyle.color }} />
                </div>
                <span
                  className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border"
                  style={{ color: statusStyle.color, backgroundColor: statusStyle.bg, borderColor: statusStyle.border }}
                >
                  <Clock size={10} />
                  {project.status}
                </span>
              </div>

              {/* Type label */}
              <p className="section-label mb-1" style={{ color: statusStyle.color }}>{project.type}</p>

              {/* Title */}
              <h3 className="text-white font-bold text-base mb-2">{project.title}</h3>

              {/* Description */}
              <p className="text-[#6B6B80] text-sm leading-relaxed mb-4">{project.description}</p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-[0.7rem] font-medium rounded-full border"
                    style={{ color: `${statusStyle.color}CC`, borderColor: `${statusStyle.color}25`, backgroundColor: `${statusStyle.color}08` }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* GitHub placeholder */}
              <button
                disabled
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/[0.07] text-[#6B6B80] text-sm opacity-50 cursor-not-allowed w-full justify-center"
              >
              <GitBranch size={14} />
                GitHub — Coming Soon
              </button>
            </motion.div>
          )
        })}
      </div>

      {/* Add project hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.5 }}
        className="mt-4 p-4 rounded-xl border border-dashed border-white/[0.1] text-center"
      >
        <p className="text-[#6B6B80] text-xs">
          📁 Add new data projects in{' '}
          <code className="text-accent-400 text-[0.7rem] bg-accent-500/10 px-1.5 py-0.5 rounded">
            src/data/portfolio.js → dataTrackProjects
          </code>
        </p>
      </motion.div>
    </div>
  )
}
