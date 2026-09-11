import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, MapPin, Award } from 'lucide-react'
import { education } from '../data/portfolio'

export default function Education() {
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
          <span className="step-number">09</span>
          <span className="section-label">Education</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
          Academic background
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="glass-card p-6 sm:p-8"
      >
        <div className="flex flex-col sm:flex-row items-start gap-5">
          {/* Icon */}
          <div className="w-14 h-14 rounded-2xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center shrink-0">
            <GraduationCap size={26} className="text-accent-400" />
          </div>

          <div className="flex-1">
            <h3 className="text-white font-extrabold text-xl leading-tight">{education.degree}</h3>
            <p className="text-accent-400 font-semibold text-base mt-1">{education.college}</p>

            <div className="flex items-center gap-1.5 mt-2">
              <MapPin size={12} className="text-[#6B6B80]" />
              <p className="text-[#6B6B80] text-sm">{education.location}</p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-4 mt-6">
              <div className="metric-badge px-6 py-3">
                <div className="flex items-center gap-2">
                  <Award size={16} className="text-accent-400" />
                  <div>
                    <p className="text-white font-extrabold text-2xl leading-none">{education.cgpa}</p>
                    <p className="text-[#6B6B80] text-xs mt-0.5">CGPA</p>
                  </div>
                </div>
              </div>
              <div className="metric-badge px-6 py-3">
                <div>
                  <p className="text-white font-extrabold text-2xl leading-none">{education.graduation}</p>
                  <p className="text-[#6B6B80] text-xs mt-0.5">Graduation Year</p>
                </div>
              </div>
              <div className="metric-badge px-6 py-3">
                <div>
                  <p className="text-white font-extrabold text-2xl leading-none">B.Tech</p>
                  <p className="text-[#6B6B80] text-xs mt-0.5">Degree</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
