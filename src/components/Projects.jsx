import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code2, Shield, BarChart3, ExternalLink } from 'lucide-react'
import { projects } from '../data/portfolio'

const filterTabs = [
  { id: 'all', label: 'All', icon: null },
  { id: 'qa', label: 'QA & Testing', icon: Shield },
  { id: 'frontend', label: 'Frontend', icon: Code2 },
  { id: 'data', label: 'Data', icon: BarChart3 },
]

const categoryColors = {
  qa: '#6366F1',
  frontend: '#8B5CF6',
  data: '#06B6D4',
  frontend: '#8B5CF6',
}

const roleColors = {
  'QA Tester': '#6366F1',
  'Frontend Developer': '#8B5CF6',
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const filtered = projects.filter(
    (p) => activeFilter === 'all' || p.category === activeFilter
  )

  return (
    <div ref={ref} className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <div className="flex items-center gap-3 mb-2">
          <span className="step-number">05</span>
          <span className="section-label">Projects</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
          Selected work
        </h2>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mt-4">
          {filterTabs.map((tab) => {
            const Icon = tab.icon
            const isActive = activeFilter === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-semibold border transition-all duration-200 ${
                  isActive
                    ? 'bg-accent-500 border-accent-500 text-white'
                    : 'border-white/[0.08] text-[#A0A0B0] hover:border-white/20 hover:text-white'
                }`}
              >
                {Icon && <Icon size={12} />}
                {tab.label}
              </button>
            )
          })}
        </div>
      </motion.div>

      <div className="grid sm:grid-cols-1 gap-5">
        {filtered.map((project, idx) => {
          const accentColor = categoryColors[project.category] || '#6366F1'
          const roleColor = roleColors[project.role] || '#6366F1'
          return (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="glass-card p-5 sm:p-6"
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-white font-bold text-lg leading-tight">{project.title}</h3>
                  <p className="text-[#6B6B80] text-xs mt-0.5">{project.subtitle}</p>
                </div>
                <span
                  className="shrink-0 px-3 py-1 rounded-full text-xs font-bold border"
                  style={{ color: roleColor, borderColor: `${roleColor}40`, backgroundColor: `${roleColor}10` }}
                >
                  {project.role}
                </span>
              </div>

              <p className="text-[#A0A0B0] text-sm leading-relaxed mb-4">{project.description}</p>

              {/* Metrics */}
              {project.metrics.length > 0 && (
                <div className="flex flex-wrap gap-3 mb-4">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="metric-badge px-4 py-2">
                      <p className="text-accent-400 font-extrabold text-lg leading-none">{m.value}</p>
                      <p className="text-[#6B6B80] text-[0.65rem] mt-0.5">{m.label}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Modules */}
              {project.modules && (
                <div className="mb-4">
                  <p className="section-label mb-2">Modules Tested</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.modules.map((m) => (
                      <span key={m} className="px-2 py-0.5 rounded text-xs bg-white/[0.04] border border-white/[0.07] text-[#A0A0B0]">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/[0.06]">
                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-[0.7rem] font-medium rounded-full border"
                      style={{ color: `${accentColor}CC`, borderColor: `${accentColor}25`, backgroundColor: `${accentColor}08` }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                <div className="flex flex-wrap gap-1">
                  {project.highlights.map((h) => (
                    <span key={h} className="px-2 py-0.5 rounded text-[0.65rem] bg-white/[0.03] border border-white/[0.06] text-[#6B6B80]">
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )
        })}

        {filtered.length === 0 && (
          <div className="text-center py-12 text-[#6B6B80] text-sm">
            No projects in this category yet.
          </div>
        )}
      </div>
    </div>
  )
}
