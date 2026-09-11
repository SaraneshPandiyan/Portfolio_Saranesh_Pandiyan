import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Shield, Code2, BarChart3, Database, Sparkles } from 'lucide-react'

const focusAreas = [
  {
    id: 'qa',
    icon: Shield,
    title: 'QA Engineering',
    color: '#6366F1',
    badge: null,
    skills: [
      'Manual Testing', 'Functional Testing', 'Regression Testing',
      'Smoke Testing', 'Sanity Testing', 'UAT', 'UI Testing',
      'Web Testing', 'Mobile Testing', 'Cross-Browser Testing',
    ],
    description: 'Ensuring software reliability through rigorous testing methodologies and systematic defect identification.',
  },
  {
    id: 'frontend',
    icon: Code2,
    title: 'Frontend Development',
    color: '#8B5CF6',
    badge: null,
    skills: [
      'HTML5', 'CSS3', 'JavaScript', 'React.js',
      'Responsive Design', 'DOM Manipulation',
    ],
    description: 'Building responsive, user-focused interfaces with modern web technologies.',
  },
  {
    id: 'data-analysis',
    icon: BarChart3,
    title: 'Data Analysis',
    color: '#06B6D4',
    badge: 'Developing',
    skills: [
      'SQL', 'MySQL', 'Excel', 'Data Validation',
      'CRUD Operations', 'Analytical Thinking',
    ],
    description: 'Applying QA rigor and analytical discipline to extract insights from structured data.',
  },
  {
    id: 'data-eng',
    icon: Database,
    title: 'Data Engineering',
    color: '#10B981',
    badge: 'Building',
    skills: ['SQL', 'Data Validation', 'Data Cleaning', 'Excel Analytics'],
    description: 'Actively learning data pipeline principles, ETL concepts, and cloud data tooling.',
    isLearning: true,
    placeholder: 'Future: ETL / Data Pipelines / Cloud Data Tools',
  },
]

export default function FocusAreas() {
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
          <span className="step-number">03</span>
          <span className="section-label">Professional Focus</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
          Capability areas
        </h2>
        <p className="text-[#6B6B80] text-sm mt-2">Four core areas that define my professional identity</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-4">
        {focusAreas.map((area, idx) => {
          const Icon = area.icon
          return (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-5 relative overflow-hidden"
            >
              {/* Badge */}
              {area.badge && (
                <span
                  className="absolute top-4 right-4 text-[0.6rem] font-bold px-2 py-0.5 rounded-full border"
                  style={{
                    color: area.color,
                    borderColor: `${area.color}40`,
                    backgroundColor: `${area.color}10`,
                  }}
                >
                  {area.badge}
                </span>
              )}

              {/* Icon + title */}
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${area.color}15`, border: `1px solid ${area.color}30` }}
                >
                  <Icon size={18} style={{ color: area.color }} />
                </div>
                <h3 className="text-white font-bold text-base">{area.title}</h3>
              </div>

              {/* Description */}
              <p className="text-[#6B6B80] text-xs leading-relaxed mb-4">{area.description}</p>

              {/* Skills */}
              <div className="flex flex-wrap gap-1.5">
                {area.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-[0.7rem] font-medium rounded-full border"
                    style={{
                      color: `${area.color}DD`,
                      borderColor: `${area.color}25`,
                      backgroundColor: `${area.color}08`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Learning note */}
              {area.isLearning && (
                <div className="mt-4 pt-3 border-t border-white/[0.06]">
                  <div className="flex items-center gap-1.5">
                    <Sparkles size={11} className="text-emerald-400" />
                    <p className="text-emerald-400 text-[0.7rem] font-medium">{area.placeholder}</p>
                  </div>
                </div>
              )}

              {/* Accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: area.color }}
              />
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
