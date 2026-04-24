import React from 'react';
import SectionTitle from '../components/SectionTitle';

const faqs = [
  {
    q: 'What stack was used?',
    a: 'React, Vite, React Router, and Firebase Hosting.',
  },
  {
    q: 'Can it be expanded?',
    a: 'Yes. The pages are built from reusable sections and can grow easily.',
  },
  {
    q: 'Is it responsive?',
    a: 'Yes. The layout adapts from desktop down to mobile screens.',
  },
];

export default function ContactPage() {
  return (
    <div className="page">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Contact</p>
          <h1>Ready when you are.</h1>
          <p className="hero-text">
            This contact page keeps the same premium tone while giving visitors a clear next step.
          </p>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="orb orb-a" />
          <div className="orb orb-b" />
          <div className="card-display">
            <div className="card-window">
              <div className="card-window-top" />
              <div className="card-window-body">
                <div className="project-surface" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="contact-start">
        <SectionTitle eyebrow="01. Form" title="Start the conversation" />
        <div className="contact-card">
          <p className="contact-label">Email</p>
          <h3>hello@lumenstudio.dev</h3>
          <p className="contact-label">Project type</p>
          <h3>Website design, React build, Firebase deploy</h3>
          <a className="button button-primary" href="mailto:hello@lumenstudio.dev">
            Send a Message
          </a>
        </div>
      </section>

      <section className="section">
        <SectionTitle eyebrow="02. Process" title="How the project usually moves" />
        <div className="service-grid">
          <article className="service-card">
            <span className="card-index">02</span>
            <h3>Brief</h3>
            <p>Share your goal, audience, and content needs.</p>
          </article>
          <article className="service-card">
            <span className="card-index">02</span>
            <h3>Build</h3>
            <p>We shape the pages and keep the system reusable.</p>
          </article>
          <article className="service-card">
            <span className="card-index">02</span>
            <h3>Deploy</h3>
            <p>Push to GitHub and publish through Firebase.</p>
          </article>
        </div>
      </section>

      <section className="section process-section">
        <div className="process-copy">
          <SectionTitle eyebrow="03. Availability" title="What matters most during a handoff" />
          <ul className="process-list">
            <li>
              <span>1</span>
              <p>Clear content and page goals.</p>
            </li>
            <li>
              <span>2</span>
              <p>Assets and links ready to use.</p>
            </li>
            <li>
              <span>3</span>
              <p>A simple deployment target.</p>
            </li>
          </ul>
        </div>
        <div className="process-panel">
          <div className="process-badge">Ready</div>
          <h3>Fast turnaround</h3>
          <p>Keeping the structure clear makes updates and deployments easier to maintain.</p>
        </div>
      </section>

      <section className="section">
        <SectionTitle eyebrow="04. Location" title="Remote-first delivery" />
        <div className="contact-card">
          <h3>Available online</h3>
          <p>All setup files are already included in the project.</p>
        </div>
      </section>

      <section className="section">
        <SectionTitle eyebrow="05. FAQ" title="Helpful answers at a glance" />
        <div className="service-grid">
          {faqs.map((item) => (
            <article key={item.q} className="service-card">
              <span className="card-index">05</span>
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionTitle eyebrow="06. Links" title="What’s already connected" />
        <div className="contact-card">
          <h3>GitHub</h3>
          <p>Source control and project history are ready for the repo.</p>
        </div>
      </section>

      <section className="section">
        <SectionTitle eyebrow="07. Hosting" title="Firebase stays the live target" />
        <div className="contact-card">
          <h3>Firebase Hosting</h3>
          <p>The app is configured for straightforward deploys to Firebase.</p>
        </div>
      </section>

      <section className="section">
        <SectionTitle eyebrow="08. Notes" title="Keep content concise and consistent" />
        <div className="contact-card">
          <h3>Content handoff</h3>
          <p>Short copy and real project details make the portfolio feel sharper.</p>
        </div>
      </section>

      <section className="section">
        <SectionTitle eyebrow="09. Timing" title="Update when the project is ready" />
        <div className="contact-card">
          <h3>Flexible schedule</h3>
          <p>The structure is ready now and can be refined whenever needed.</p>
        </div>
      </section>

      <section className="section">
        <SectionTitle eyebrow="10. Final" title="Let’s build the next version" />
        <div className="contact-card">
          <p>hello@lumenstudio.dev</p>
          <a className="button button-primary" href="mailto:hello@lumenstudio.dev">
            Get in touch
          </a>
        </div>
      </section>
    </div>
  );
}
