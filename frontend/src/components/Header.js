import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo-group">
          <div className="logo-icon">🌐</div>
          <div>
            <div className="brand-name">
              Global<span>JobMatch</span> AI
            </div>
            <div className="brand-sub">
              Indian talent × Global opportunity — powered by Claude AI
            </div>
          </div>
        </div>
        <div className="header-badges">
          <span className="badge badge-kr">🇰🇷 Korea</span>
          <span className="badge badge-us">🇺🇸 USA</span>
          <span className="badge badge-open">Open Source</span>
        </div>
      </div>
    </header>
  );
}
