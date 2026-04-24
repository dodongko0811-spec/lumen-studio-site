import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';

const serviceCards = [
  'Brand systems',
  'Landing pages',
  'Content design',
  'UI refinements',
  'Performance polish',
  'Responsive layouts',
];

const processItems = [
  'Discovery and direction',
  'Component planning',
  'Responsive build',
  'Visual refinement',
  'Deployment handoff',
];

export default function ServicesPage() {
  return (
    <div className="page">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Services</p>
          <h1>Services shaped for clear storytelling and clean execution.</h1>
          <p className="hero-text">
            Every page in this build is designed to feel structured, premium, and easy to maintain.
          </p>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="orb orb-a" />
          <div className="orb orb-b" />
          <div className="card-display">
            <div className="card-window">
              <div className="card-window-top" />
              <div className="card-window-body">
                <div className="project-surface">
                  <div className="project-line" />
                  <div className="project-line short" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <SectionTitle eyebrow="01. Overview" title="What the service stack includes" />
        <div className="service-grid">
          {serviceCards.map((label) => (
            <article key={label} className="service-card">
              <span className="card-index">01</span>
              <h3>{label}</h3>
              <p>Designed to slot into a broader brand system without visual noise.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionTitle eyebrow="02. Packages" title="Flexible enough for one page or many" />
        <div className="project-grid">
          <article className="project-card">
            <div className="project-image" aria-hidden="true">
              <div className="project-glow" />
              <div className="project-panel">
                <span>Starter</span>
                <div className="project-surface" />
              </div>
            </div>
            <div className="project-copy">
              <p>Starter</p>
              <h3>Single concept pages</h3>
              <span>Ideal for launches that need clarity and speed.</span>
            </div>
          </article>
          <article className="project-card">
            <div className="project-image" aria-hidden="true">
              <div className="project-glow" />
              <div className="project-panel">
                <span>Standard</span>
                <div className="project-surface" />
              </div>
            </div>
            <div className="project-copy">
              <p>Standard</p>
              <h3>Multi-page structure</h3>
              <span>Best for brands with a larger story to tell.</span>
            </div>
          </article>
          <article className="project-card">
            <div className="project-image" aria-hidden="true">
              <div className="project-glow" />
              <div className="project-panel">
                <span>Growth</span>
                <div className="project-surface" />
              </div>
            </div>
            <div className="project-copy">
              <p>Growth</p>
              <h3>Design systems</h3>
              <span>Reusable blocks for ongoing content expansion.</span>
            </div>
          </article>
        </div>
      </section>

      <section className="section process-section">
        <div className="process-copy">
          <SectionTitle eyebrow="03. Process" title="A simple, repeatable flow" />
          <ul className="process-list">
            {processItems.map((item, index) => (
              <li key={item}>
                <span>{index + 1}</span>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="process-panel">
          <div className="process-badge">Reusable</div>
          <h3>Section-driven development</h3>
          <p>Every page is built from reusable, consistent blocks so future updates stay easy.</p>
        </div>
      </section>

      <section className="section">
        <SectionTitle eyebrow="04. Stack" title="Built with a clean modern stack" />
        <div className="service-grid">
          <article className="service-card">
            <span className="card-index">04</span>
            <h3>React</h3>
            <p>Component-driven UI for speed and consistency.</p>
          </article>
          <article className="service-card">
            <span className="card-index">04</span>
            <h3>Vite</h3>
            <p>Fast local development and production builds.</p>
          </article>
          <article className="service-card">
            <span className="card-index">04</span>
            <h3>Firebase</h3>
            <p>Simple hosting and deployment flow for the finished site.</p>
          </article>
        </div>
      </section>

      <section className="section">
        <SectionTitle eyebrow="05. Audience" title="Works for premium brands that need calm clarity" />
        <div className="contact-card">
          <h3>Built for</h3>
          <p>Studios, cafes, portfolios, product launches, and local businesses.</p>
        </div>
      </section>

      <section className="section">
        <SectionTitle eyebrow="06. Support" title="Easy to update after launch" />
        <div className="contact-card">
          <h3>Content handoff</h3>
          <p>The page structure is easy to edit, duplicate, and expand later.</p>
        </div>
      </section>

      <section className="section">
        <SectionTitle eyebrow="07. Accessibility" title="Readable, navigable, and responsive" />
        <div className="contact-card">
          <h3>Accessible by default</h3>
          <p>Clear hierarchy and strong contrast keep the experience usable on every screen.</p>
        </div>
      </section>

      <section className="section">
        <SectionTitle eyebrow="08. Motion" title="Hover states that stay subtle" />
        <div className="contact-card">
          <h3>Soft interaction</h3>
          <p>The UI moves gently, so the visual tone stays premium instead of flashy.</p>
        </div>
      </section>

      <section className="section">
        <SectionTitle eyebrow="09. Ready" title="Prepared for GitHub and Firebase" />
        <div className="contact-card">
          <h3>Deployment setup</h3>
          <p>The repo and hosting configuration are already included in the project.</p>
        </div>
      </section>

      <section className="section" id="contact-start">
        <SectionTitle eyebrow="10. Next step" title="Take the structure into a real brand" />
        <div className="contact-card">
          <Link className="button button-primary" to="/contact">
            Start the project
          </Link>
        </div>
      </section>
    </div>
  );
}
