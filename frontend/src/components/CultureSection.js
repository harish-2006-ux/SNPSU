import React from 'react';
import './CultureSection.css';

// Mock culture data for demo
const CULTURE_DATA = {
  korea: {
    country: '🇰🇷 South Korea',
    tips: [
      'Use formal language (존댓말) in all professional communications',
      'Bow slightly when meeting senior colleagues or during video calls',
      'Business cards are exchanged with both hands and received respectfully',
      'Hierarchy is important - address seniors by title, not first name',
      'Work-life balance is improving, but dedication is highly valued',
      'Team harmony (nunchi) is crucial - read the room and adapt'
    ],
    email_example: 'Dear [Name]-님, I hope this email finds you well. I am writing to express my interest in the [Position] role...',
    interview_tips: 'Dress conservatively, arrive 10 minutes early, prepare thoughtful questions about company culture, and show respect for the interviewer\'s time and position.',
    salary_norm: 'Salary discussions happen after job offer. Entry-level: ₩35-50M, Mid-level: ₩50-80M, Senior: ₩80M+',
    work_culture: 'Expect longer hours initially, team dinners (회식) are common for bonding, and showing commitment through presence is valued.'
  },
  usa: {
    country: '🇺🇸 United States',
    tips: [
      'Direct communication is preferred - be clear and concise',
      'First names are common, even with senior colleagues',
      'Firm handshakes and eye contact show confidence',
      'Self-promotion is expected - highlight your achievements',
      'Work-life balance is generally respected and encouraged',
      'Networking and building relationships is key to career growth'
    ],
    email_example: 'Hi [Name], I hope you\'re doing well. I\'m reaching out about the [Position] opportunity...',
    interview_tips: 'Be confident, ask about growth opportunities, prepare STAR method examples, and show enthusiasm for the role and company mission.',
    salary_norm: 'Salary negotiation is expected. Research market rates, consider total compensation, and negotiate after receiving an offer.',
    work_culture: 'Results-oriented culture, remote work is common, and individual contributions are recognized and rewarded.'
  }
};

export default function CultureSection({ culture, activeTab }) {
  const currentCulture = CULTURE_DATA[activeTab] || CULTURE_DATA.korea;

  return (
    <div className="culture-content">
      <div className="culture-grid">
        <div className="culture-section">
          <div className="culture-section-title">
            <span className="culture-icon">💼</span>
            Professional Etiquette
          </div>
          <div className="culture-tips">
            {currentCulture.tips?.slice(0, 3).map((tip, i) => (
              <div className="culture-tip" key={i}>
                <span className="tip-dot">•</span>
                <span>{tip}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="culture-section">
          <div className="culture-section-title">
            <span className="culture-icon">🤝</span>
            Workplace Culture
          </div>
          <div className="culture-tips">
            {currentCulture.tips?.slice(3).map((tip, i) => (
              <div className="culture-tip" key={i}>
                <span className="tip-dot">•</span>
                <span>{tip}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="culture-examples">
        {currentCulture.email_example && (
          <div className="culture-example">
            <div className="example-label">
              <span className="example-icon">📧</span>
              Email Communication Style
            </div>
            <div className="example-text">"{currentCulture.email_example}"</div>
          </div>
        )}

        {currentCulture.interview_tips && (
          <div className="culture-example">
            <div className="example-label">
              <span className="example-icon">🎤</span>
              Interview Approach
            </div>
            <div className="example-text">{currentCulture.interview_tips}</div>
          </div>
        )}

        {currentCulture.salary_norm && (
          <div className="culture-example">
            <div className="example-label">
              <span className="example-icon">💰</span>
              Salary & Negotiation
            </div>
            <div className="example-text">{currentCulture.salary_norm}</div>
          </div>
        )}
      </div>
    </div>
  );
}
