'use client'

import { FormEvent, useEffect, useRef, useState } from 'react'

const logo = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-09-12%20at%2018.39.51-1YxXhTTwiizkltJRNDFBHrpQ3IakoJ.jpeg'
const videoSrc = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/compressed-Meraki_Walkthrough-DfYZFtOjhRyO5aIYAv5neP2Lbuzl6x.mp4'

const pillars = [
  ['01', 'Strategy', 'Clarity before action. We define the decisions, priorities and path that move your business forward.'],
  ['02', 'Structure', 'The operating rhythm, governance and systems that make ambition repeatable.'],
  ['03', 'Capital', 'Disciplined thinking around resources, investment and sustainable value creation.'],
  ['04', 'Legacy', 'Building institutions, places and brands that endure beyond the next quarter.'],
]
const services = ['Business Advisory', 'Strategic Planning', 'Market Entry', 'Investment Advisory', 'Real Estate Advisory', 'Family Office Support']

export default function Page() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [muted, setMuted] = useState(true)
  const [playing, setPlaying] = useState(true)
  const [sent, setSent] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    const onPlaying = () => setPlaying(true)
    const onPause = () => setPlaying(false)
    video.addEventListener('playing', onPlaying)
    video.addEventListener('pause', onPause)
    video.play().catch(() => setPlaying(false))
    return () => { video.removeEventListener('playing', onPlaying); video.removeEventListener('pause', onPause) }
  }, [])

  const togglePlayback = () => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) video.play().catch(() => setPlaying(false))
    else video.pause()
  }
  const toggleSound = () => {
    const video = videoRef.current
    if (!video) return
    video.muted = !video.muted
    setMuted(video.muted)
  }
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSent(true)
  }

  return (
    <main className="site-shell">
      <section className="hero" id="top">
        <video ref={videoRef} className="hero-video" autoPlay muted={muted} loop playsInline preload="auto" aria-label="Abstract architectural motion background">
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="hero-wash" />
        <header className="site-header">
          <a href="#top" className="wordmark" aria-label="Four Pillars Business Advisory home"><span>FOUR</span><b>PILLARS</b></a>
          <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Primary navigation">
            <a href="#approach" onClick={() => setMenuOpen(false)}>Approach</a><a href="#pillars" onClick={() => setMenuOpen(false)}>Framework</a><a href="#services" onClick={() => setMenuOpen(false)}>Services</a><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </nav>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen}>{menuOpen ? 'CLOSE' : 'MENU'}</button>
        </header>
        <div className="hero-content">
          <p className="eyebrow">Business advisory / Dubai · UAE</p>
          <h1>Make the next<br /><em>move</em> meaningful.</h1>
          <div className="hero-bottom"><p>Independent thinking for leaders building what comes next.</p><a className="text-link" href="#approach">Discover our approach <span>↘</span></a></div>
        </div>
        <div className="media-controls"><button onClick={togglePlayback}>{playing ? 'PAUSE' : 'PLAY'}</button><button onClick={toggleSound}>{muted ? 'SOUND OFF' : 'SOUND ON'}</button></div>
        <div className="scroll-cue">Scroll to explore <span>↓</span></div>
      </section>

      <section className="intro section-ivory" id="approach"><div className="section-index">01 / 04</div><div className="intro-copy"><p className="eyebrow gold">A considered perspective</p><h2>Business is a long game.<br /><em>We think in chapters.</em></h2><p className="large-copy">Four Pillars Business Advisory is an independent partner to founders, families and institutions navigating moments of consequence.</p><p>We bring structure to complexity, context to decisions and a clear point of view to every engagement. Our work is deliberately senior, deeply considered and built around one idea: meaningful progress compounds.</p><a className="outline-button" href="#contact">Start a conversation <span>↗</span></a></div></section>

      <section className="pillars section-green" id="pillars"><div className="section-heading"><p className="eyebrow gold">Our framework</p><h2>Four ways to<br /><em>move forward.</em></h2></div><div className="pillar-list">{pillars.map(([number, title, copy]) => <article className="pillar" key={number}><span className="pillar-number">{number}</span><div><h3>{title}</h3><p>{copy}</p></div><span className="pillar-arrow">↗</span></article>)}</div></section>

      <section className="services section-ivory" id="services"><div className="section-heading"><p className="eyebrow gold">What we do</p><h2>Advice with<br /><em>intent.</em></h2></div><div className="service-list">{services.map((service, index) => <a href="#contact" className="service-row" key={service}><span>0{index + 1}</span><strong>{service}</strong><span>↗</span></a>)}</div></section>

      <section className="meraki section-dark"><div className="meraki-image"><img src={logo} alt="Meraki and Four Pillars collaboration mark" /></div><div className="meraki-copy"><p className="eyebrow gold">A collaboration in place</p><h2>Meraki <span>×</span><br /><em>Four Pillars</em></h2><p>Two perspectives, one shared ambition: to create spaces that are considered, enduring and unmistakably their own.</p><a className="text-link" href="#contact">Explore the dossier <span>↗</span></a></div></section>

      <section className="markets section-ivory"><div><p className="eyebrow gold">A regional point of view</p><h2>Rooted in Dubai.<br /><em>Open to the world.</em></h2></div><div className="market-copy"><p>We work across the Gulf and with international partners whose ambitions bring them here. Local context, global standards and a practical understanding of how opportunity takes shape.</p><div className="market-lines"><span>Dubai</span><span>Abu Dhabi</span><span>Riyadh</span><span>London</span></div></div></section>

      <section className="contact section-green" id="contact"><div className="contact-heading"><p className="eyebrow gold">Make an enquiry</p><h2>Let&apos;s make<br /><em>it meaningful.</em></h2><p>Tell us a little about where you are and where you want to go.</p></div>{sent ? <div className="form-success"><span>Thank you.</span><p>Your enquiry has been received. We&apos;ll be in touch shortly.</p></div> : <form onSubmit={submit}><label>Name<input required name="name" placeholder="Your name" /></label><label>Email<input required type="email" name="email" placeholder="you@company.com" /></label><label>How can we help?<textarea required name="message" placeholder="A little about your enquiry" rows={3} /></label><button className="solid-button" type="submit">Send enquiry <span>↗</span></button></form>}</section>

      <footer><a href="#top" className="wordmark footer-mark"><span>FOUR</span><b>PILLARS</b></a><div className="footer-details"><p>Business Advisory<br />Dubai · UAE</p><a href="mailto:hello@fourpillars.ae">hello@fourpillars.ae</a><a href="https://fourpillars.ae">fourpillars.ae</a></div><p className="copyright">© {new Date().getFullYear()} Four Pillars Business Advisory</p></footer>
    </main>
  )
}
