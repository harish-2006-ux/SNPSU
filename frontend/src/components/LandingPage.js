import React, { useState } from 'react';
import './LandingPage.css';

export default function LandingPage({ onGetStarted }) {
  const [email, setEmail] = useState('');
  const [showVideoModal, setShowVideoModal] = useState(false);

  const handleGetStarted = () => {
    onGetStarted();
  };

  const handleWatchDemo = () => {
    setShowVideoModal(true);
  };

  const closeVideoModal = () => {
    setShowVideoModal(false);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Store email for later use
      localStorage.setItem('userEmail', email);
      onGetStarted();
    }
  };

  return (
    <div className="landing-page">
      {/* Navigation Header */}
      <nav className="landing-nav">
        <div className="nav-content">
          <div className="nav-logo">
            <span className="logo-icon">🌐</span>
            <span className="logo-text">GlobalJobMatch AI</span>
          </div>
          <div className="nav-actions">
            <button className="nav-btn" onClick={handleGetStarted}>
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="hero-video-container">
            <video 
              className="hero-video" 
              autoPlay 
              muted 
              loop 
              playsInline
              poster="/api/placeholder/1920/1080"
            >
              <source src="/videos/hero-bg.mp4" type="video/mp4" />
              {/* Fallback gradient if video doesn't load */}
            </video>
            <div className="video-overlay"></div>
          </div>
          <div className="hero-gradient"></div>
          <div className="hero-pattern"></div>
        </div>
        
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-icon">🚀</span>
            <span>AI-Powered Career Matching</span>
          </div>
          
          <h1 className="hero-title">
            Find Your Perfect
            <span className="hero-highlight"> Global Job Match</span>
            <br />
            in Minutes, Not Months
          </h1>
          
          <p className="hero-subtitle">
            Upload your resume and let our AI match you with top opportunities in South Korea and the United States. 
            Get personalized skill roadmaps, culture guides, and interview prep — all powered by advanced AI.
          </p>
          
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">10K+</div>
              <div className="stat-label">Job Matches</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">95%</div>
              <div className="stat-label">Match Accuracy</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">2 Min</div>
              <div className="stat-label">Average Time</div>
            </div>
          </div>
          
          <div className="hero-actions">
            <button className="cta-primary" onClick={handleGetStarted}>
              <span className="cta-icon">✨</span>
              Start Matching Now
              <span className="cta-arrow">→</span>
            </button>
            <button className="cta-secondary cta-video" onClick={handleWatchDemo}>
              <span className="cta-icon play-icon">▶️</span>
              Watch Demo
              <span className="video-duration">2:30</span>
            </button>
          </div>
          
          <div className="hero-trust">
            <span className="trust-text">Trusted by students from</span>
            <div className="trust-logos">
              <span className="trust-logo">🏛️ IIT</span>
              <span className="trust-logo">🎓 NIT</span>
              <span className="trust-logo">🏫 BITS</span>
              <span className="trust-logo">🎯 VIT</span>
            </div>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="visual-card card-1">
            <div className="card-header">
              <div className="card-avatar">👨‍💻</div>
              <div className="card-info">
                <div className="card-name">Software Engineer</div>
                <div className="card-company">🇰🇷 Kakao Corp</div>
              </div>
              <div className="card-score">92%</div>
            </div>
            <div className="card-tags">
              <span className="tag tag-green">✓ Python</span>
              <span className="tag tag-green">✓ React</span>
              <span className="tag tag-red">Gap: Korean</span>
            </div>
          </div>
          
          <div className="visual-card card-2">
            <div className="card-header">
              <div className="card-avatar">👩‍💼</div>
              <div className="card-info">
                <div className="card-name">Full Stack Developer</div>
                <div className="card-company">🇺🇸 Stripe</div>
              </div>
              <div className="card-score">88%</div>
            </div>
            <div className="card-tags">
              <span className="tag tag-green">✓ Node.js</span>
              <span className="tag tag-green">✓ AWS</span>
              <span className="tag tag-red">Gap: Go</span>
            </div>
          </div>
          
          <div className="visual-card card-3">
            <div className="roadmap-title">📈 Your Learning Path</div>
            <div className="roadmap-steps">
              <div className="roadmap-step">
                <div className="step-dot active"></div>
                <span>System Design</span>
                <span className="step-weeks">4w</span>
              </div>
              <div className="roadmap-step">
                <div className="step-dot"></div>
                <span>Korean Language</span>
                <span className="step-weeks">8w</span>
              </div>
              <div className="roadmap-step">
                <div className="step-dot"></div>
                <span>TypeScript</span>
                <span className="step-weeks">3w</span>
              </div>
            </div>
          </div>
          
          <div className="visual-card video-preview-card" onClick={handleWatchDemo}>
            <div className="video-preview">
              <div className="video-thumbnail">
                <div className="play-button">
                  <span className="play-triangle">▶</span>
                </div>
                <div className="video-overlay-text">
                  <div className="video-title">See AI in Action</div>
                  <div className="video-subtitle">2:30 Demo</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-header">
          <h2 className="section-title">Why Choose GlobalJobMatch AI?</h2>
          <p className="section-subtitle">
            Everything you need to land your dream job abroad, powered by cutting-edge AI
          </p>
        </div>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3 className="feature-title">Smart Job Matching</h3>
            <p className="feature-description">
              Our AI analyzes your skills and matches you with the most relevant opportunities in Korea and the US.
            </p>
            <div className="feature-stats">
              <span className="feature-stat">95% accuracy</span>
              <span className="feature-stat">10K+ jobs</span>
            </div>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">📈</div>
            <h3 className="feature-title">Personalized Roadmaps</h3>
            <p className="feature-description">
              Get step-by-step learning plans to fill skill gaps and become the perfect candidate.
            </p>
            <div className="feature-stats">
              <span className="feature-stat">Custom plans</span>
              <span className="feature-stat">Priority-based</span>
            </div>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🌏</div>
            <h3 className="feature-title">Culture Guides</h3>
            <p className="feature-description">
              Learn workplace etiquette, communication styles, and interview tips for each country.
            </p>
            <div className="feature-stats">
              <span className="feature-stat">2 countries</span>
              <span className="feature-stat">Expert insights</span>
            </div>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🤖</div>
            <h3 className="feature-title">AI Career Tools</h3>
            <p className="feature-description">
              Resume optimization, mock interviews, cover letter generation, and LinkedIn profile enhancement.
            </p>
            <div className="feature-stats">
              <span className="feature-stat">6 AI tools</span>
              <span className="feature-stat">Instant results</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <div className="section-header">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">Get matched with your dream job in just 3 simple steps</p>
        </div>
        
        <div className="steps-container">
          <div className="step-item">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3 className="step-title">Upload Your Resume</h3>
              <p className="step-description">
                Upload your resume or paste your skills. Our AI will analyze your background and experience.
              </p>
            </div>
            <div className="step-visual">📄</div>
          </div>
          
          <div className="step-connector"></div>
          
          <div className="step-item">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3 className="step-title">Get AI Matches</h3>
              <p className="step-description">
                Our AI scores and ranks the best job opportunities based on your profile and preferences.
              </p>
            </div>
            <div className="step-visual">🤖</div>
          </div>
          
          <div className="step-connector"></div>
          
          <div className="step-item">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3 className="step-title">Apply & Succeed</h3>
              <p className="step-description">
                Use our AI tools to optimize your application, practice interviews, and land the job.
              </p>
            </div>
            <div className="step-visual">🎉</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Find Your Global Opportunity?</h2>
          <p className="cta-subtitle">
            Join thousands of students who've successfully landed jobs abroad with our AI-powered platform.
          </p>
          
          <form className="cta-form" onSubmit={handleEmailSubmit}>
            <div className="form-group">
              <input
                type="email"
                placeholder="Enter your email to get started"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="email-input"
                required
              />
              <button type="submit" className="cta-submit">
                Get Started Free
                <span className="submit-arrow">→</span>
              </button>
            </div>
          </form>
          
          <div className="cta-features">
            <div className="cta-feature">
              <span className="feature-check">✓</span>
              <span>Free to use</span>
            </div>
            <div className="cta-feature">
              <span className="feature-check">✓</span>
              <span>No credit card required</span>
            </div>
            <div className="cta-feature">
              <span className="feature-check">✓</span>
              <span>Instant results</span>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {showVideoModal && (
        <div className="video-modal" onClick={closeVideoModal}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="video-close" onClick={closeVideoModal}>×</button>
            <div className="video-container">
              <div className="demo-video-placeholder">
                <div className="demo-content">
                  <div className="demo-step">
                    <div className="demo-icon">📄</div>
                    <div className="demo-text">Upload Resume</div>
                  </div>
                  <div className="demo-arrow">→</div>
                  <div className="demo-step">
                    <div className="demo-icon">🤖</div>
                    <div className="demo-text">AI Analysis</div>
                  </div>
                  <div className="demo-arrow">→</div>
                  <div className="demo-step">
                    <div className="demo-icon">🎯</div>
                    <div className="demo-text">Perfect Matches</div>
                  </div>
                </div>
                <div className="demo-play-overlay" onClick={() => onGetStarted()}>
                  <div className="demo-play-btn">
                    <span>▶</span>
                  </div>
                  <div className="demo-cta">Try Live Demo Instead</div>
                </div>
              </div>
            </div>
            <div className="video-info">
              <h3>GlobalJobMatch AI Demo</h3>
              <p>See how our AI matches you with perfect job opportunities in just 2 minutes</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}