import React from 'react';

const services = [
  {
    title: 'Brand Systems',
    text: 'Identity-led websites with precise spacing, bold typography, and a signature visual rhythm.',
  },
  {
    title: 'Product Pages',
    text: 'High-converting landing pages that guide visitors from story to action in a few graceful steps.',
  },
  {
    title: 'Content Design',
    text: 'Clear copy structure, polished sections, and reusable blocks for future growth.',
  },
];

const projects = [
  {
    title: 'Obsidian House',
    category: 'Brand Website',
    text: 'A cinematic luxury studio site with strong editorial contrast and glassmorphism overlays.',
  },
  {
    title: 'Northline Commerce',
    category: 'Ecommerce',
    text: 'A clean storefront concept focused on premium product storytelling and mobile conversion.',
  },
  {
    title: 'Atlas Events',
    category: 'Experience Design',
    text: 'A bold event landing page with motion-led sections and fast content scanning.',
  },
];

const stats = [
  { value: '08+', label: 'Pages and modules' },
  { value: '100%', label: 'Responsive layout' },
  { value: '24/7', label: 'Ready for deployment' },
];

const steps = [
  'Discover the brand story and define the visual direction.',
  'Build a modular page system with reusable content sections.',
  'Polish spacing, motion, and responsiveness for every screen size.',
];

function SectionTitle({ eyebrow, title, text, center = false }) {
  return (
    <div className={`section-title${center ? ' center' : ''}`}>
      <p>{eyebrow}</p>
      <h2>{title}</h2>
      {text ? <span>{text}</span> : null}
    </div>
  );
}

function Header() {
  return (
    <header className="topbar">
      <div className="brand">
        <span className="brand-mark" aria-hidden="true" />
        <div>
          <strong>Lumen Studio</strong>
          <p>Creative websites for modern brands</p>
        </div>
      </div>
      <nav>
        <a href="#services">Services</a>
        <a href="#work">Work</a>
        <a href="#process">Process</a>
        <a href="#contact">Contact</a>
      </nav>
      <a className="button button-light" href="#contact">
        Start a Project
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">Design that feels expensive</p>
        <h1>Make a website that looks unforgettable from the first scroll.</h1>
        <p className="hero-text">
          Lumen Studio blends cinematic visuals, calm structure, and strong conversion flow into a single
          polished experience.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#work">
            View the Work
          </a>
          <a className="button button-ghost" href="#services">
            Explore Services
          </a>
        </div>
        <div className="hero-mini">
          <span>React</span>
          <span>Firebase-ready</span>
          <span>GitHub-friendly</span>
        </div>
      </div>
      <div className="hero-visual" aria-hidden="true">
        <div className="orb orb-a" />
        <div className="orb orb-b" />
        <div className="card-display">
          <div className="card-window">
            <div className="card-window-top" />
            <div className="card-window-body">
              <div className="signal-row">
                <span />
                <span />
                <span />
              </div>
              <div className="chart-line" />
              <div className="chart-grid">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="section" id="services">
      <SectionTitle
        eyebrow="Services"
        title="Built to feel intentional, not template-based"
        text="Every block is designed to guide the eye, tell the story, and keep the page moving."
      />
      <div className="service-grid">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <span className="card-index" aria-hidden="true">
              0{services.indexOf(service) + 1}
            </span>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Metrics() {
  return (
    <section className="stats-strip" aria-label="Quick metrics">
      {stats.map((item) => (
        <article key={item.label} className="stat-card">
          <strong>{item.value}</strong>
          <span>{item.label}</span>
        </article>
      ))}
    </section>
  );
}

function Work() {
  return (
    <section className="section" id="work">
      <SectionTitle
        eyebrow="Selected Work"
        title="A few concepts that feel premium at every size"
        text="Each example balances atmosphere, hierarchy, and clarity so the brand has room to breathe."
      />
      <div className="project-grid">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <div className="project-image" aria-hidden="true">
              <div className="project-glow" />
              <div className="project-panel">
                <span>{project.category}</span>
                <div className="project-surface">
                  <div className="project-line" />
                  <div className="project-line short" />
                </div>
              </div>
            </div>
            <div className="project-copy">
              <p>{project.category}</p>
              <h3>{project.title}</h3>
              <span>{project.text}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="section process-section" id="process">
      <div className="process-copy">
        <SectionTitle
          eyebrow="Process"
          title="Simple structure, polished execution"
          text="The workflow is lightweight and repeatable, which makes future updates easier."
        />
        <ul className="process-list">
          {steps.map((step, index) => (
            <li key={step}>
              <span>{index + 1}</span>
              <p>{step}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="process-panel">
        <div className="process-badge">Firebase</div>
        <h3>Deployment-ready by design</h3>
        <p>
          The project includes a Firebase Hosting config and a clean React structure, making GitHub deployment and
          future updates straightforward.
        </p>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <SectionTitle
        eyebrow="Contact"
        title="Ready when you are"
        text="This starter is set up for GitHub version control and Firebase Hosting."
      />
      <div className="contact-card">
        <div>
          <p className="contact-label">Email</p>
          <h3>hello@lumenstudio.dev</h3>
        </div>
        <div>
          <p className="contact-label">Next step</p>
          <h3>Push to GitHub and deploy to Firebase</h3>
        </div>
        <a className="button button-primary" href="mailto:hello@lumenstudio.dev">
          Send a Message
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>Built with React, prepared for Firebase Hosting, and ready for GitHub.</p>
      <p>© 2026 Lumen Studio</p>
    </footer>
  );
}

export default function App() {
  return (
    <div className="app-shell">
      <Header />
      <main>
        <Hero />
        <Metrics />
        <Services />
        <Work />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
