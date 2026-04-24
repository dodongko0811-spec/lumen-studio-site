import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';

const metrics = [
  { value: '10', label: 'sections per page' },
  { value: '4', label: 'routed pages' },
  { value: '1', label: 'clean deployment flow' },
];

const services = [
  'Brand systems that feel clear and easy to trust.',
  'Landing pages that stay clear on every screen.',
  'Reusable sections for future content growth.',
];

const features = [
  { title: 'Editorial Layouts', text: 'Strong spacing and quiet confidence.' },
  { title: 'Conversion Flow', text: 'A clear path from story to action.' },
  { title: 'Responsive Rhythm', text: 'Built for desktop, tablet, and mobile.' },
];

const testimonials = [
  'The page feels calm, elevated, and easy to scan.',
  'The sections are structured in a way that makes updates simple.',
  'It looks polished without feeling overdesigned.',
];

export default function HomePage() {
  return (
    <div className="page">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Home</p>
          <h1>Build a website that feels calm, clear, and genuinely cared for.</h1>
          <p className="hero-text">
            Lumen Studio keeps the structure simple and the details honest, so the page feels made by a real person.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/work">
              View the Work
            </Link>
            <Link className="button button-ghost" to="/services">
              Explore Services
            </Link>
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

      <section className="stats-strip">
        {metrics.map((item) => (
          <article key={item.label} className="stat-card">
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </article>
        ))}
      </section>

      <section className="section">
        <SectionTitle
          eyebrow="01. Why it works"
          title="Built to feel intentional, not template-based"
          text="The structure guides the eye without trying too hard."
        />
        <div className="service-grid">
          {services.map((text) => (
            <article key={text} className="service-card">
              <span className="card-index" aria-hidden="true">
                0{services.indexOf(text) + 1}
              </span>
              <h3>Core focus</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionTitle
          eyebrow="02. Key strengths"
          title="A few details that make the design feel finished"
          text="Each block uses contrast, spacing, and hierarchy to stay calm."
        />
        <div className="project-grid">
          {features.map((feature) => (
            <article key={feature.title} className="project-card">
              <div className="project-image" aria-hidden="true">
                <div className="project-glow" />
                <div className="project-panel">
                  <span>{feature.title}</span>
                  <div className="project-surface">
                    <div className="project-line" />
                    <div className="project-line short" />
                  </div>
                </div>
              </div>
              <div className="project-copy">
                <p>{feature.title}</p>
                <h3>{feature.title}</h3>
                <span>{feature.text}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section process-section">
        <div className="process-copy">
          <SectionTitle
            eyebrow="03. Process"
          title="Simple structure, with room for real content"
          text="A clean workflow keeps the project easy to update."
          />
          <ul className="process-list">
            <li>
              <span>1</span>
              <p>Discover the brand story and define the visual direction.</p>
            </li>
            <li>
              <span>2</span>
              <p>Build a modular page system with reusable content sections.</p>
            </li>
            <li>
              <span>3</span>
              <p>Polish spacing, motion, and responsiveness for every screen size.</p>
            </li>
          </ul>
        </div>
        <div className="process-panel">
          <div className="process-badge">Firebase</div>
          <h3>Deployment-ready by design</h3>
          <p>
            The project includes a Firebase Hosting config and a clean React structure, making GitHub deployment and future updates
            straightforward.
          </p>
        </div>
      </section>

      <section className="section">
        <SectionTitle
          eyebrow="04. Testimonials"
          title="What the finished page feels like"
          text="These notes mirror the kind of response the polished layout should get."
        />
        <div className="project-grid">
          {testimonials.map((quote) => (
            <article key={quote} className="service-card">
              <span className="card-index" aria-hidden="true">
                04
              </span>
              <h3>Guest note</h3>
              <p>{quote}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionTitle
          eyebrow="05. Design details"
          title="The visual system stays consistent everywhere"
          text="Headers, cards, and spacing all follow the same calm rhythm."
        />
        <div className="service-grid">
          <article className="service-card">
            <span className="card-index">05</span>
            <h3>Typography</h3>
            <p>Fraunces for impact, Inter for readability.</p>
          </article>
          <article className="service-card">
            <span className="card-index">05</span>
            <h3>Color</h3>
            <p>Dark surfaces, soft glass, warm accents.</p>
          </article>
          <article className="service-card">
            <span className="card-index">05</span>
            <h3>Motion</h3>
            <p>Light hover lifts and smooth navigation transitions.</p>
          </article>
        </div>
      </section>

      <section className="section">
        <SectionTitle
          eyebrow="06. Delivery"
          title="Ready for Firebase and GitHub workflows"
          text="The app already has the hosting config and repo-friendly structure in place."
        />
        <div className="contact-card">
          <div>
            <p className="contact-label">Hosting</p>
            <h3>Firebase Hosting</h3>
          </div>
          <div>
            <p className="contact-label">Version control</p>
            <h3>GitHub repo ready</h3>
          </div>
        </div>
      </section>

      <section className="section" id="contact-start">
        <SectionTitle
          eyebrow="07. Start here"
          title="Ready when you are"
          text="The site is prepared for GitHub and Firebase without extra setup friction."
        />
        <div className="contact-card">
          <h3>Send a message</h3>
          <p>hello@lumenstudio.dev</p>
          <Link className="button button-primary" to="/contact">
            Go to Contact Page
          </Link>
        </div>
      </section>

      <section className="section">
        <SectionTitle
          eyebrow="08. FAQ"
          title="What this starter is meant to do"
          text="You can swap in real content without rebuilding the whole thing."
        />
        <div className="service-grid">
          <article className="service-card">
            <span className="card-index">08</span>
            <h3>Multi-page</h3>
            <p>Use the nav to move between four separate pages.</p>
          </article>
          <article className="service-card">
            <span className="card-index">08</span>
            <h3>Ten sections</h3>
            <p>Each page is arranged as a full 10-section experience.</p>
          </article>
          <article className="service-card">
            <span className="card-index">08</span>
            <h3>Deployable</h3>
            <p>The repo and Firebase hosting flow are already wired in.</p>
          </article>
        </div>
      </section>
    </div>
  );
}
