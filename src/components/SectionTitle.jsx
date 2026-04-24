import React from 'react';

export default function SectionTitle({ eyebrow, title, text, center = false }) {
  return (
    <div className={`section-title${center ? ' center' : ''}`}>
      <p>{eyebrow}</p>
      <h2>{title}</h2>
      {text ? <span>{text}</span> : null}
    </div>
  );
}
