import React from 'react';
import './RoadmapSection.css';

const PRIORITY_CONFIG = {
  High: { color: '#ff6b5a', bg: 'rgba(255, 107, 90, 0.1)', border: 'rgba(255, 107, 90, 0.25)', icon: '🔥' },
  Medium: { color: '#f59e0b', bg: 'rgba(245, 158, 11, 0.1)', border: 'rgba(245, 158, 11, 0.25)', icon: '⚡' },
  Low: { color: '#9896b0', bg: 'rgba(152, 150, 176, 0.1)', border: 'rgba(152, 150, 176, 0.25)', icon: '📚' },
};

export default function RoadmapSection({ roadmap }) {
  return (
    <>
      <div className="section-header">
        <div className="section-title">📈 Skill Roadmap</div>
        <div className="section-sub">Prioritized learning plan based on your job gaps</div>
      </div>
      <div className="roadmap-list">
        {roadmap?.map((item, i) => {
          const priorityConfig = PRIORITY_CONFIG[item.priority] || PRIORITY_CONFIG.Low;
          return (
            <div className="roadmap-item" key={i}>
              <div className="roadmap-step">
                <div className="step-num">{item.step}</div>
                {i < (roadmap.length - 1) && <div className="step-line" />}
              </div>
              <div className="roadmap-content">
                <div className="roadmap-top">
                  <span className="roadmap-skill">{item.skill}</span>
                  {item.priority && (
                    <span
                      className="priority-badge"
                      style={{ 
                        color: priorityConfig.color,
                        background: priorityConfig.bg,
                        borderColor: priorityConfig.border
                      }}
                    >
                      <span className="priority-icon">{priorityConfig.icon}</span>
                      {item.priority}
                    </span>
                  )}
                </div>
                <div className="roadmap-resource">{item.resource}</div>
                <div className="roadmap-meta">
                  <span className="roadmap-weeks">~{item.weeks} weeks</span>
                  <span className="roadmap-difficulty">
                    {item.priority === 'High' ? 'Essential' : item.priority === 'Medium' ? 'Important' : 'Nice to have'}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
        {(!roadmap || roadmap.length === 0) && (
          <div className="empty-roadmap">
            <span className="empty-icon">🎯</span>
            <p>No skill gaps found — you're well-prepared for these roles!</p>
          </div>
        )}
      </div>
    </>
  );
}
