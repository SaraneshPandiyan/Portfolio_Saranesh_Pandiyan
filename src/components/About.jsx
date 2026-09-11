import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, GraduationCap, Star } from 'lucide-react'
import { personalInfo, education } from '../data/portfolio'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <div ref={ref} className="py-12">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <div className="flex items-center gap-3 mb-2">
          <span className="step-number">02</span>
          <span className="section-label">About Me</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
          The person behind the portfolio
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="glass-card p-6"
        >
          <p className="text-[#A0A0B0] text-sm leading-relaxed mb-4">
            Detail-oriented B.Tech IT fresher with hands-on internship experience in{' '}
            <span className="text-white font-medium">Manual Testing, API Testing</span>, and{' '}
            <span className="text-white font-medium">Frontend Development</span> using HTML5, CSS3,
            JavaScript and React.js.
          </p>
          <p className="text-[#A0A0B0] text-sm leading-relaxed mb-4">
            Skilled in designing <span className="text-accent-400 font-semibold">100+ structured test cases</span>,
            documenting <span className="text-accent-400 font-semibold">50+ defects</span>, and performing
            cross-browser and cross-platform QA across Web and Mobile applications.
          </p>
          <p className="text-[#A0A0B0] text-sm leading-relaxed">
            Proficient in SDLC, STLC, Regression Testing, Postman API Testing, and SRS documentation.
            Also actively building skills toward{' '}
            <span className="text-emerald-400 font-medium">Data Engineering and Data Analysis</span>,
            applying the same testing rigor and analytical discipline to data validation and insight generation.
          </p>

          {/* Career tracks */}
          <div className="mt-5 pt-5 border-t border-white/[0.07]">
            <p className="section-label mb-3">Career Tracks</p>
            <div className="flex flex-wrap gap-2">
              {[
                'QA Engineer', 'Software Tester', 'Frontend Developer',
                'Data Analyst', 'Data Engineering (Building)'
              ].map((track) => (
                <span key={track} className="skill-pill text-xs">{track}</span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Profile info card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="space-y-3"
        >
          {/* Education block */}
          <div className="glass-card p-5">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-accent-500/10 border border-accent-500/20 flex items-center justify-center shrink-0 mt-0.5">
                <GraduationCap size={16} className="text-accent-400" />
              </div>
              <div className="flex-1">
                <p className="section-label mb-2">Education</p>
                <p className="text-white font-semibold text-sm">{education.degree}</p>
                <p className="text-[#A0A0B0] text-xs mt-0.5">{education.college}</p>
                <p className="text-[#6B6B80] text-xs">{education.location}</p>
                <div className="flex gap-4 mt-3">
                  <div>
                    <p className="text-accent-400 font-bold text-base">{education.cgpa}</p>
                    <p className="text-[#6B6B80] text-xs">CGPA</p>
                  </div>
                  <div>
                    <p className="text-accent-400 font-bold text-base">{education.graduation}</p>
                    <p className="text-[#6B6B80] text-xs">Graduation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Location block */}
          <div className="glass-card p-5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-accent-500/10 border border-accent-500/20 flex items-center justify-center shrink-0">
                <MapPin size={16} className="text-accent-400" />
              </div>
              <div>
                <p className="section-label mb-1">Location</p>
                <p className="text-white font-medium text-sm">{personalInfo.location}</p>
              </div>
            </div>
          </div>

          {/* Achievement highlight */}
          <div className="glass-card p-5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center shrink-0">
                <Star size={16} className="text-yellow-400" />
              </div>
              <div>
                <p className="section-label mb-1" style={{ color: '#EAB308' }}>Achievement</p>
                <p className="text-white font-medium text-sm">1st Prize — Paper Presentation</p>
                <p className="text-[#6B6B80] text-xs">Karpagam College of Engineering</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
