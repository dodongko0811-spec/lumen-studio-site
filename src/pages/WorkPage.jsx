import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';

const workCards = [
  'Editorial campaigns',
  'Product showcases',
  'Service launches',
  'Portfolio stories',
  'Landing experiments',
  'Brand moments',
];

export default function WorkPage() {
  return (
    <div className="page">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Work</p>
          <h1>Project pages that feel like a finished story, not a wireframe.</h1>
          <p className="hero-text">
            Every portfolio section is tuned for clear pacing and a more human sense of finish.
          </p>
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <SectionTitle eyebrow="01. Gallery" title="Selected project directions" />
        <div className="project-grid">
          {workCards.map((card) => (
            <article key={card} className="project-card">
              <div className="project-image" aria-hidden="true">
                <div className="project-glow" />
                <div className="project-panel">
                  <span>{card}</span>
                  <div className="project-surface" />
                </div>
              </div>
              <div className="project-copy">
                <p>{card}</p>
                <h3>{card}</h3>
                <span>Presented with enough structure to feel finished, not overworked.</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionTitle eyebrow="02. Case studies" title="What a finished project communicates" />
        <div className="service-grid">
          <article className="service-card">
            <span className="card-index">02</span>
            <h3>Problem</h3>
            <p>What the brand needed the website to solve.</p>
          </article>
          <article className="service-card">
            <span className="card-index">02</span>
            <h3>Solution</h3>
            <p>How the structure and visuals answered that need.</p>
          </article>
          <article className="service-card">
            <span className="card-index">02</span>
            <h3>Outcome</h3>
            <p>What the user should remember after scrolling.</p>
          </article>
        </div>
      </section>

      <section className="section process-section">
        <div className="process-copy">
          <SectionTitle eyebrow="03. Method" title="A reliable page-building approach" />
          <ul className="process-list">
            <li>
              <span>1</span>
              <p>Research the brand and define the page mood.</p>
            </li>
            <li>
              <span>2</span>
              <p>Lay out content blocks for narrative flow.</p>
            </li>
            <li>
              <span>3</span>
              <p>Refine spacing, contrast, and interaction.</p>
            </li>
          </ul>
        </div>
        <div className="process-panel">
          <div className="process-badge">Story-first</div>
          <h3>Visual rhythm matters</h3>
          <p>Each section should feel like it belongs in the same voice.</p>
        </div>
      </section>

      <section className="section">
        <SectionTitle eyebrow="04. Results" title="The page should answer fast" />
        <div className="contact-card">
          <h3>Immediate clarity</h3>
          <p>Visitors should instantly know what the brand does and why it matters.</p>
        </div>
      </section>

      <section className="section">
        <SectionTitle eyebrow="05. Reuse" title="Reusable blocks keep the system efficient" />
        <div className="contact-card">
          <h3>Modular setup</h3>
          <p>Sections can be copied and updated without breaking the overall feel.</p>
        </div>
      </section>

      <section className="section">
        <SectionTitle eyebrow="06. Motion" title="Hover states stay elegant and restrained" />
        <div className="contact-card">
          <h3>Soft motion</h3>
          <p>Subtle movement keeps the experience polished instead of noisy.</p>
        </div>
      </section>

      <section className="section">
        <SectionTitle eyebrow="07. Portfolio" title="Designed to showcase real client work" />
        <div className="contact-card">
          <h3>Case study ready</h3>
          <p>Each section can hold screenshots, results, and process notes.</p>
        </div>
      </section>

      <section className="section">
        <SectionTitle eyebrow="08. Output" title="Works across desktop and mobile" />
        <div className="contact-card">
          <h3>Responsive design</h3>
          <p>The structure collapses cleanly without losing hierarchy.</p>
        </div>
      </section>

      <section className="section">
        <SectionTitle eyebrow="09. Hosting" title="Deployment stays simple" />
        <div className="contact-card">
          <h3>Firebase-ready</h3>
          <p>The build can be shipped directly to Firebase Hosting.</p>
        </div>
      </section>

      <section className="section" id="contact-start">
        <SectionTitle eyebrow="10. Next" title="Want this adapted to a real portfolio?" />
        <div className="contact-card">
          <Link className="button button-primary" to="/contact">
            Contact the studio
          </Link>
        </div>
      </section>
    </div>
  );
}
