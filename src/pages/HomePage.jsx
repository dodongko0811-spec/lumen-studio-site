import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';

const metrics = [
  { value: '10', label: 'sections per page' },
  { value: '4', label: 'routed pages' },
  { value: '1', label: 'clean deployment flow' },
];

const services = [
  'Clear pages that still leave room for personality.',
  'Layouts that stay readable without looking stiff.',
  'Reusable sections that make future edits easier.',
];

const features = [
  { title: 'Layout', text: 'Enough room for the page to breathe.' },
  { title: 'Flow', text: 'The story moves without feeling forced.' },
  { title: 'Responsive', text: 'Works on desktop, tablet, and phone.' },
];

const testimonials = [
  'It feels like a real person thought through the pacing.',
  'Nothing shouts, but everything still feels considered.',
  'It looks finished without losing any warmth.',
];

export default function HomePage() {
  return (
    <div className="page">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Home</p>
          <h1>A website should feel like somebody actually cared.</h1>
          <p className="hero-text">
            Lumen Studio keeps the structure simple, the spacing honest, and the tone warm so the page feels made by a real person.
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
          title="Built to guide the eye without trying too hard"
          text="The structure gives each block enough room to land and keeps the story moving."
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
          title="A few details that give the page some character"
          text="Spacing, hierarchy, and a warm palette keep it calm without feeling flat."
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
            text="A small process keeps the build honest and easier to update later."
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
              <p>Keep spacing, motion, and responsiveness in check on every screen size.</p>
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
          title="What the finished page should make people say"
          text="These sound like real comments from someone who actually opened the page."
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
          title="The pieces that hold it together"
          text="Type, color, and motion stay restrained, but never feel flat."
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
          title="Ready to ship"
          text="The app already has the Firebase and GitHub pieces in place."
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
          title="Let's get the first version online"
          text="Swap in the real content and it is ready to go."
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
          title="Questions worth answering first"
          text="A clean setup makes future edits less painful."
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
