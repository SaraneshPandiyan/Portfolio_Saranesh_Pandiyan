import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Phone, MapPin, Link2, GitBranch, Download, Send, CheckCircle } from 'lucide-react'
import { personalInfo } from '../data/portfolio'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    // In production, wire to a form service (Formspree, EmailJS, etc.)
    setSubmitted(true)
  }

  return (
    <div ref={ref} className="py-12 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <div className="flex items-center gap-3 mb-2">
          <span className="step-number">10</span>
          <span className="section-label">Contact</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
          Let's build something reliable.
        </h2>
        <p className="text-[#6B6B80] text-sm mt-2 max-w-xl">
          Interested in QA, Frontend Development, Data Analysis or Data Engineering opportunities? Let's connect.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Contact form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="glass-card p-6"
        >
          {!submitted ? (
            <>
              <h3 className="text-white font-bold text-base mb-4">Get In Touch</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[#6B6B80] text-xs font-semibold mb-1.5 uppercase tracking-wide">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your full name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="block text-[#6B6B80] text-xs font-semibold mb-1.5 uppercase tracking-wide">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="block text-[#6B6B80] text-xs font-semibold mb-1.5 uppercase tracking-wide">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about the opportunity or project..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="form-input resize-none"
                  />
                </div>
                <button type="submit" className="btn-accent w-full justify-center">
                  <Send size={14} />
                  Send Message
                </button>
              </form>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <CheckCircle size={48} className="text-emerald-400 mb-4" />
              <h3 className="text-white font-bold text-lg mb-2">Message Sent!</h3>
              <p className="text-[#6B6B80] text-sm">
                Thanks for reaching out. I'll get back to you soon.
              </p>
              <button
                onClick={() => { setSubmitted(false); setForm({ name: '', email: '', message: '' }) }}
                className="btn-ghost mt-6 text-sm"
              >
                Send Another
              </button>
            </div>
          )}
        </motion.div>

        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="space-y-4"
        >
          {/* Direct contacts */}
          <div className="glass-card p-5">
            <p className="section-label mb-4">Direct Contact</p>
            <div className="space-y-3">
              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-3 p-3 rounded-xl border border-white/[0.05] hover:border-accent-500/30 hover:bg-accent-500/5 transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-accent-500/10 border border-accent-500/20 flex items-center justify-center shrink-0">
                  <Phone size={14} className="text-accent-400" />
                </div>
                <div>
                  <p className="text-[#6B6B80] text-[0.65rem] uppercase tracking-wide font-semibold">Phone</p>
                  <p className="text-white text-sm font-medium group-hover:text-accent-300 transition-colors">
                    {personalInfo.phone}
                  </p>
                </div>
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 p-3 rounded-xl border border-white/[0.05] hover:border-accent-500/30 hover:bg-accent-500/5 transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-accent-500/10 border border-accent-500/20 flex items-center justify-center shrink-0">
                  <Mail size={14} className="text-accent-400" />
                </div>
                <div>
                  <p className="text-[#6B6B80] text-[0.65rem] uppercase tracking-wide font-semibold">Email</p>
                  <p className="text-white text-sm font-medium group-hover:text-accent-300 transition-colors break-all">
                    {personalInfo.email}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-3 p-3 rounded-xl border border-white/[0.05]">
                <div className="w-8 h-8 rounded-lg bg-accent-500/10 border border-accent-500/20 flex items-center justify-center shrink-0">
                  <MapPin size={14} className="text-accent-400" />
                </div>
                <div>
                  <p className="text-[#6B6B80] text-[0.65rem] uppercase tracking-wide font-semibold">Location</p>
                  <p className="text-white text-sm font-medium">{personalInfo.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="glass-card p-5">
            <p className="section-label mb-3">Profiles</p>
            <p className="text-[#6B6B80] text-xs mb-3">
              Update LinkedIn & GitHub URLs in{' '}
              <code className="text-accent-400 text-[0.65rem] bg-accent-500/10 px-1 py-0.5 rounded">
                src/data/portfolio.js
              </code>
            </p>
            <div className="flex gap-3">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-white/[0.07] text-[#A0A0B0] hover:text-white hover:border-accent-500/40 hover:bg-accent-500/5 transition-all font-medium text-sm"
              >
                <Link2 size={15} />
                LinkedIn
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-white/[0.07] text-[#A0A0B0] hover:text-white hover:border-white/20 hover:bg-white/5 transition-all font-medium text-sm"
              >
                <GitBranch size={15} />
                GitHub
              </a>
            </div>
          </div>

          {/* Resume download */}
          <a
            href={personalInfo.resumeFile}
            download
            className="btn-accent w-full justify-center py-3"
          >
            <Download size={16} />
            Download Resume
          </a>
        </motion.div>
      </div>
    </div>
  )
}
