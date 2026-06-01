import React, { useState } from 'react';
import JobCard from './JobCard';
import RoadmapSection from './RoadmapSection';
import CultureSection from './CultureSection';
import './ResultsDashboard.css';

export default function ResultsDashboard({ results, formData, onReset }) {
  const { jobs, roadmap, culture, summary } = results;
  const [activeTab, setActiveTab] = useState('korea');
  
  // Calculate stats
  const bestScore = jobs?.[0]?.score ?? 0;
  const rolesFound = jobs?.length ?? 0;
  const totalGaps = jobs?.reduce((acc, job) => acc + (job.gaps?.length ?? 0), 0) ?? 0;
  const totalWeeks = roadmap?.reduce((acc, item) => acc + (item.weeks ?? 0), 0) ?? 0;

  const handleAIAction = async (action, jobData = null) => {
    // Mock AI actions for demo
    const actions = {
      'resume-rewriter': `🤖 AI Resume Rewriter\n\nI'll help you rewrite your resume to match this ${jobData?.title} role at ${jobData?.company}.\n\nKey improvements:\n• Highlight ${jobData?.strengths?.[0]} experience\n• Add relevant keywords\n• Quantify achievements\n• Address skill gaps\n\nWould you like me to generate the optimized version?`,
      'mock-interview': `🎤 Mock Interview Bot\n\nLet's practice for your ${jobData?.title} interview at ${jobData?.company}!\n\nI'll ask you:\n• Technical questions about ${jobData?.strengths?.[0]}\n• Behavioral questions\n• Company-specific questions\n• Questions about ${jobData?.gaps?.[0]} (your gap area)\n\nReady to start the mock interview?`,
      'cover-email': `📧 Draft Cover Email\n\nSubject: Application for ${jobData?.title} - ${formData?.resume?.split('.')[0]}\n\nDear Hiring Manager,\n\nI'm excited to apply for the ${jobData?.title} position at ${jobData?.company}. With my background in ${jobData?.strengths?.[0]} and ${jobData?.strengths?.[1]}, I'm confident I can contribute to your team.\n\nI'm particularly drawn to ${jobData?.company} because of your innovative work in the Korean market. While I'm currently developing my skills in ${jobData?.gaps?.[0]}, I'm committed to rapid learning and growth.\n\nI'd love to discuss how my experience can benefit your team.\n\nBest regards,\n[Your name]`,
      'company-research': `🏢 Company Research: ${jobData?.company}\n\n**Company Overview:**\n• Industry leader in ${jobData?.country}\n• Known for innovation and growth\n• Strong engineering culture\n\n**Recent News:**\n• Expanding international presence\n• Investing in AI/ML technologies\n• Hiring top talent globally\n\n**Interview Tips:**\n• Research their latest products\n• Understand their tech stack\n• Prepare questions about team structure\n• Show enthusiasm for their mission`,
      'salary-negotiation': `💰 Salary Negotiation Guide\n\nFor ${jobData?.title} at ${jobData?.company}:\n\n**Market Research:**\n• Current range: ${jobData?.salary}\n• Industry average: 15% higher\n• Your experience level: Entry-Mid\n\n**Negotiation Strategy:**\n• Wait for offer before discussing salary\n• Highlight your unique strengths\n• Consider total compensation package\n• Be prepared to justify your ask`,
      'linkedin-optimizer': `💼 LinkedIn Optimization\n\n**Optimized Headline:**\n"${formData?.role} | ${jobData?.strengths?.[0]} & ${jobData?.strengths?.[1]} | Seeking ${jobData?.country} Opportunities"\n\n**About Section:**\nPassionate ${formData?.role} with expertise in ${jobData?.strengths?.join(', ')}. Currently expanding skills in ${jobData?.gaps?.[0]} to stay at the forefront of technology.\n\n**Skills to Add:**\n• ${jobData?.strengths?.join('\n• ')}\n• ${jobData?.gaps?.join('\n• ')} (learning)`
    };

    alert(actions[action] || 'AI feature coming soon!');
  };

  return (
    <div className="results-wrapper fade-in">
      {/* Enhanced Stats Summary Bar */}
      <div className="stats-summary">
        <div className="stat-item">
          <div className="stat-value">{bestScore}%</div>
          <div className="stat-label">Best Score</div>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <div className="stat-value">{rolesFound}</div>
          <div className="stat-label">Roles Found</div>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <div className="stat-value">{totalGaps}</div>
          <div className="stat-label">Skill Gaps</div>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <div className="stat-value">{totalWeeks}w</div>
          <div className="stat-label">Learning Time</div>
        </div>
        <button className="reset-btn" onClick={onReset}>← New Search</button>
      </div>

      {/* Job Matches with Enhanced Cards */}
      <section className="results-section fade-in stagger-1">
        <div className="section-header">
          <div className="section-title">🎯 Top Job Matches</div>
          <div className="section-sub">{jobs?.length} roles found for {formData?.role} in {formData?.country}</div>
        </div>
        <div className="jobs-list">
          {jobs?.map((job, i) => (
            <JobCard 
              key={i} 
              job={job} 
              rank={i + 1} 
              onAIAction={handleAIAction}
              formData={formData}
            />
          ))}
          {(!jobs || jobs.length === 0) && (
            <div className="empty-state">No matches found. Try broadening your preferences.</div>
          )}
        </div>
      </section>

      {/* Enhanced Roadmap with Priority Badges */}
      <section className="results-section fade-in stagger-2">
        <RoadmapSection roadmap={roadmap} />
      </section>

      {/* Tabbed Culture Brief */}
      <section className="results-section fade-in stagger-3">
        <div className="section-header">
          <div className="section-title">🌏 Culture Guide</div>
          <div className="culture-tabs">
            <button 
              className={`culture-tab ${activeTab === 'korea' ? 'active' : ''}`}
              onClick={() => setActiveTab('korea')}
            >
              🇰🇷 South Korea
            </button>
            <button 
              className={`culture-tab ${activeTab === 'usa' ? 'active' : ''}`}
              onClick={() => setActiveTab('usa')}
            >
              🇺🇸 United States
            </button>
          </div>
        </div>
        <CultureSection culture={culture} activeTab={activeTab} />
      </section>

      {/* AI-Powered Action CTAs */}
      <section className="ai-actions-section fade-in stagger-4">
        <div className="section-title">🤖 AI-Powered Career Tools</div>
        <div className="ai-actions-grid">
          <button 
            className="ai-action-btn primary"
            onClick={() => handleAIAction('resume-rewriter', jobs?.[0])}
          >
            <span className="ai-icon">📝</span>
            <div>
              <div className="ai-action-title">AI Resume Rewriter</div>
              <div className="ai-action-desc">Optimize your resume for top matches</div>
            </div>
          </button>
          <button 
            className="ai-action-btn secondary"
            onClick={() => handleAIAction('mock-interview', jobs?.[0])}
          >
            <span className="ai-icon">🎤</span>
            <div>
              <div className="ai-action-title">Mock Interview Bot</div>
              <div className="ai-action-desc">Practice with AI interviewer</div>
            </div>
          </button>
          <button 
            className="ai-action-btn tertiary"
            onClick={() => handleAIAction('linkedin-optimizer', jobs?.[0])}
          >
            <span className="ai-icon">💼</span>
            <div>
              <div className="ai-action-title">LinkedIn Optimizer</div>
              <div className="ai-action-desc">Generate optimized profile content</div>
            </div>
          </button>
        </div>
      </section>
    </div>
  );
}
