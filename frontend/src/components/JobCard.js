import React, { useState } from 'react';
import './JobCard.css';

function DonutScore({ score }) {
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (score / 100) * circumference;
  
  const color = score >= 85 ? '#1dc8a0' : score >= 70 ? '#6c63ff' : score >= 55 ? '#f59e0b' : '#9896b0';
  
  return (
    <div className="donut-score">
      <svg width="48" height="48" className="donut-svg">
        <circle
          cx="24"
          cy="24"
          r={radius}
          fill="none"
          stroke="rgba(152, 150, 176, 0.2)"
          strokeWidth="3"
        />
        <circle
          cx="24"
          cy="24"
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth="3"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform="rotate(-90 24 24)"
          className="donut-progress"
        />
      </svg>
      <div className="donut-text">
        <span className="donut-score-num">{score}</span>
        <span className="donut-score-pct">%</span>
      </div>
    </div>
  );
}

export default function JobCard({ job, rank, onAIAction, formData }) {
  const [expanded, setExpanded] = useState(rank === 1);

  const handleActionClick = (e, action) => {
    e.stopPropagation();
    onAIAction(action, job);
  };

  return (
    <div className={`job-card ${rank === 1 ? 'job-card--top' : ''}`}>
      <div className="job-card-main" onClick={() => setExpanded(!expanded)}>
        <DonutScore score={job.score} />
        <div className="job-info">
          <div className="job-title-row">
            <span className="job-title">{job.title}</span>
            {rank === 1 && <span className="top-badge">Best Match</span>}
            {rank === 2 && <span className="rank-badge">2nd</span>}
            {rank === 3 && <span className="rank-badge">3rd</span>}
          </div>
          <div className="job-meta">
            {job.company} · {job.country} · {job.salary}
          </div>
        </div>
        <div className="expand-icon">{expanded ? '▲' : '▼'}</div>
      </div>

      {expanded && (
        <div className="job-card-detail">
          <p className="job-why">{job.why}</p>
          
          <div className="pills-row">
            {job.strengths?.map((s, i) => (
              <span key={i} className="pill pill-green">✓ {s}</span>
            ))}
            {job.gaps?.map((g, i) => (
              <span key={i} className="pill pill-red">Gap: {g}</span>
            ))}
          </div>

          {/* AI Action Buttons */}
          <div className="job-actions">
            <button 
              className="job-action-btn primary"
              onClick={(e) => handleActionClick(e, 'cover-email')}
            >
              <span className="action-icon">📧</span>
              Draft Cover Email
            </button>
            <button 
              className="job-action-btn secondary"
              onClick={(e) => handleActionClick(e, 'mock-interview')}
            >
              <span className="action-icon">🎤</span>
              Prep Interview
            </button>
            <button 
              className="job-action-btn tertiary"
              onClick={(e) => handleActionClick(e, 'company-research')}
            >
              <span className="action-icon">🏢</span>
              Company Research
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
