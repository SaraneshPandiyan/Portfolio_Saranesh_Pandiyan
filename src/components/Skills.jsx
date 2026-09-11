import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skillCategories } from '../data/portfolio'

const categoryColors = {
  languages: '#6366F1',
  frontend: '#8B5CF6',
  testing: '#EC4899',
  api: '#F59E0B',
  database: '#06B6D4',
  tools: '#10B981',
  methodologies: '#6366F1',
  soft: '#A78BFA',
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const displayCategories =
    activeCategory === 'all'
      ? skillCategories
      : skillCategories.filter((c) => c.id === activeCategory)

  return (
    <div ref={ref} className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <div className="flex items-center gap-3 mb-2">
          <span className="step-number">07</span>
          <span className="section-label">Skills</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
          Technical toolkit
        </h2>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
              activeCategory === 'all'
                ? 'bg-accent-500 border-accent-500 text-white'
                : 'border-white/[0.08] text-[#A0A0B0] hover:border-white/20 hover:text-white'
            }`}
          >
            All Skills
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                activeCategory === cat.id
                  ? 'text-white border-transparent'
                  : 'border-white/[0.08] text-[#A0A0B0] hover:border-white/20 hover:text-white'
              }`}
              style={
                activeCategory === cat.id
                  ? { backgroundColor: categoryColors[cat.id] || '#6366F1', borderColor: 'transparent' }
                  : {}
              }
            >
              {cat.label}
            </button>
          ))}
        </div>
      </motion.div>

      <div className="space-y-4">
        {displayCategories.map((cat, idx) => {
          const color = categoryColors[cat.id] || '#6366F1'
          return (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="glass-card p-5"
            >
              <div className="flex items-center gap-2 mb-3">
                <div
                  className="w-2 h-5 rounded-full"
                  style={{ backgroundColor: color }}
                />
                <h3 className="text-white font-bold text-sm">{cat.label}</h3>
                <span className="text-[#6B6B80] text-xs ml-auto">{cat.skills.length} skills</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1.5 text-xs font-medium rounded-full border cursor-default transition-all"
                    style={{
                      color: `${color}CC`,
                      borderColor: `${color}25`,
                      backgroundColor: `${color}08`,
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
