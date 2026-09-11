import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import FocusAreas from './components/FocusAreas'
import Experience from './components/Experience'
import Projects from './components/Projects'
import DataTrack from './components/DataTrack'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProfileSummary from './components/ProfileSummary'
import ScrollProgress from './components/ScrollProgress'

function App() {
  return (
    <div className="min-h-screen bg-[#080810] text-white font-sans relative">
      {/* ── Aurora background orbs ───────────────────── */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Top-left violet orb */}
        <div
          className="absolute w-[700px] h-[700px] rounded-full opacity-[0.055]"
          style={{
            background: 'radial-gradient(circle, #8B5CF6 0%, transparent 70%)',
            top: '-200px',
            left: '-200px',
            filter: 'blur(60px)',
          }}
        />
        {/* Center-right indigo orb */}
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-[0.04]"
          style={{
            background: 'radial-gradient(circle, #6366F1 0%, transparent 70%)',
            top: '30%',
            right: '-150px',
            filter: 'blur(80px)',
          }}
        />
        {/* Bottom-left cyan orb */}
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-[0.035]"
          style={{
            background: 'radial-gradient(circle, #06B6D4 0%, transparent 70%)',
            bottom: '0',
            left: '20%',
            filter: 'blur(80px)',
          }}
        />
        {/* Subtle dot grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <ScrollProgress />
      <Navbar />

      {/* Main layout */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:flex lg:gap-8 pt-20">
          {/* Left — main scrollable content */}
          <main className="lg:flex-1 min-w-0">
            <section id="home">
              <Hero />
            </section>
            <div className="glow-divider my-2" />
            <section id="about">
              <About />
            </section>
            <div className="glow-divider my-2" />
            <section id="focus">
              <FocusAreas />
            </section>
            <div className="glow-divider my-2" />
            <section id="experience">
              <Experience />
            </section>
            <div className="glow-divider my-2" />
            <section id="projects">
              <Projects />
            </section>
            <div className="glow-divider my-2" />
            <section id="data">
              <DataTrack />
            </section>
            <div className="glow-divider my-2" />
            <section id="skills">
              <Skills />
            </section>
            <div className="glow-divider my-2" />
            <section id="achievements">
              <Achievements />
            </section>
            <div className="glow-divider my-2" />
            <section id="education">
              <Education />
            </section>
            <div className="glow-divider my-2" />
            <section id="contact">
              <Contact />
            </section>
          </main>

          {/* Right — sticky profile summary (desktop only) */}
          <aside className="hidden lg:block lg:w-[320px] xl:w-[360px] shrink-0">
            <div className="sticky top-24">
              <ProfileSummary />
            </div>
          </aside>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default App
