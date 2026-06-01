import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span>🌐 GlobalJobMatch AI</span>
          <span className="footer-sep">·</span>
          <span>i12 HR Drive Hackathon 2026</span>
          <span className="footer-sep">·</span>
          <span>Sapthagiri NPS University × IIMSTC × Callus</span>
        </div>
        <div className="footer-tech">
          Built with React · FastAPI · Anthropic Claude · Open Source
        </div>
      </div>
    </footer>
  );
}
