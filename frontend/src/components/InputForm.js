import React, { useState, useRef } from 'react';
import './InputForm.css';

const DEMO_RESUME = `B.Tech CSE final year student. Proficient in Python, React, and REST APIs. Built 3 projects: a chatbot using OpenAI API, a data dashboard with React + Chart.js, and a task manager app deployed on Heroku. Familiar with Git, GitHub, SQL basics, and some Docker. Participated in 2 college hackathons. Looking for entry-level software engineering roles abroad.`;

export default function InputForm({ onSubmit, loading, error }) {
  const [resume, setResume] = useState('');
  const [role, setRole] = useState('Software Engineer');
  const [country, setCountry] = useState('Both (US + Korea)');
  const [salary, setSalary] = useState('Entry level');
  const [dragActive, setDragActive] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const [uploadSuccess, setUploadSuccess] = useState('');
  const fileInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ resume, role, country, salary_range: salary });
  };

  const fillDemo = () => setResume(DEMO_RESUME);

  // Handle file upload
  const handleFileUpload = (file) => {
    setUploadError('');
    setUploadSuccess('');
    
    if (!file) return;

    // Check file type - only allow .txt files for now
    const fileExtension = '.' + file.name.split('.').pop().toLowerCase();
    
    if (fileExtension !== '.txt') {
      setUploadError('Only .txt files are supported. Please save your resume as a text file, or copy and paste your resume content in the text area below.');
      return;
    }

    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setUploadError('File size must be less than 5MB');
      return;
    }

    // Read the text file
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target.result;
      if (text.trim()) {
        setResume(text.substring(0, 3000)); // Limit to 3000 chars
        setUploadSuccess(`✅ Successfully uploaded "${file.name}"`);
        // Clear success message after 3 seconds
        setTimeout(() => setUploadSuccess(''), 3000);
      } else {
        setUploadError('The uploaded file appears to be empty. Please check your file and try again.');
      }
    };
    reader.onerror = () => {
      setUploadError('Error reading file. Please try again or paste your resume text manually.');
    };
    reader.readAsText(file);
  };

  // Drag and drop handlers
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };

  const handleFileInputChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFileUpload(e.target.files[0]);
    }
  };

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="form-wrapper fade-in cinematic-form">
      {/* Cinematic Background */}
      <div className="cinematic-background">
        <div className="cinematic-particles"></div>
        <div className="cinematic-grid"></div>
        <div className="cinematic-glow"></div>
      </div>

      {/* Cinematic Hero */}
      <div className="cinematic-hero">
        <div className="cinematic-badge">
          <span className="badge-pulse"></span>
          <span className="badge-text">AI-Powered Matching Engine</span>
        </div>
        
        <h1 className="cinematic-title">
          <span className="title-line">Transform Your Career</span>
          <span className="title-line highlight-line">
            <span className="highlight-text">With AI Precision</span>
            <div className="title-underline"></div>
          </span>
        </h1>
        
        <p className="cinematic-subtitle">
          Upload your resume and let our advanced AI analyze your skills, match you with perfect opportunities, 
          and create a personalized roadmap to success.
        </p>
      </div>

      <form className="cinematic-form-container" onSubmit={handleSubmit}>
        {/* Enhanced Resume Input */}
        <div className="cinematic-form-group">
          <div className="form-label-row">
            <label className="cinematic-label">
              <span className="label-icon">🧠</span>
              <span className="label-text">Your Professional Profile</span>
            </label>
            <div className="upload-actions">
              <button type="button" className="cinematic-upload-btn" onClick={openFileDialog}>
                <span className="btn-icon">📄</span>
                Upload Resume
                <div className="btn-shine"></div>
              </button>
              <button type="button" className="cinematic-demo-btn" onClick={fillDemo}>
                <span className="btn-icon">⚡</span>
                Use Demo Profile
              </button>
            </div>
          </div>
          
          {/* Hidden file input */}
          <input
            ref={fileInputRef}
            type="file"
            accept=".txt"
            onChange={handleFileInputChange}
            style={{ display: 'none' }}
          />
          
          {/* Cinematic Upload Area */}
          <div
            className={`cinematic-upload-area ${dragActive ? 'drag-active' : ''}`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            onClick={openFileDialog}
          >
            <div className="upload-visual">
              <div className="upload-icon-container">
                <span className="upload-icon">📁</span>
                <div className="icon-ripple"></div>
              </div>
              <div className="upload-content">
                <span className="upload-text">
                  Drop your resume (.txt) here or <span className="upload-link">click to browse</span>
                </span>
                <span className="upload-formats">AI will analyze your skills and experience</span>
              </div>
            </div>
          </div>
          
          <div className="cinematic-divider">
            <div className="divider-line"></div>
            <span className="divider-text">OR PASTE DIRECTLY</span>
            <div className="divider-line"></div>
          </div>
          
          <div className="cinematic-textarea-container">
            <textarea
              className="cinematic-textarea"
              value={resume}
              onChange={e => {
                setResume(e.target.value);
                if (uploadError) setUploadError('');
                if (uploadSuccess) setUploadSuccess('');
              }}
              placeholder="Paste your resume content here... Our AI will analyze your skills, experience, and achievements to find perfect job matches."
              rows={6}
              required
            />
            <div className="textarea-glow"></div>
            <div className="char-count-container">
              <div className="char-count">{resume.length} / 3000 characters</div>
              <div className="ai-indicator">
                <span className="ai-icon">🤖</span>
                <span className="ai-text">AI Ready</span>
              </div>
            </div>
          </div>
          
          {uploadSuccess && <div className="cinematic-success">{uploadSuccess}</div>}
          {uploadError && <div className="cinematic-error">{uploadError}</div>}
        </div>

        {/* Preferences Row */}
        <div className="prefs-grid">
          <div className="form-group">
            <label className="form-label">Preferred role</label>
            <select value={role} onChange={e => setRole(e.target.value)} className="form-select">
              <option>Software Engineer</option>
              <option>Full Stack Developer</option>
              <option>Backend Developer</option>
              <option>Frontend Engineer</option>
              <option>ML Engineer</option>
              <option>Data Engineer</option>
              <option>DevOps Engineer</option>
              <option>Product Manager</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Target country</label>
            <select value={country} onChange={e => setCountry(e.target.value)} className="form-select">
              <option>Both (US + Korea)</option>
              <option>South Korea 🇰🇷</option>
              <option>United States 🇺🇸</option>
              <option>Remote / Global</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Experience level</label>
            <select value={salary} onChange={e => setSalary(e.target.value)} className="form-select">
              <option>Entry level</option>
              <option>Mid level</option>
              <option>Senior level</option>
            </select>
          </div>
        </div>

        {error && <div className="error-box">{error}</div>}

        <button type="submit" className="submit-btn" disabled={loading || !resume.trim()}>
          {loading ? (
            <>
              <span className="spinner" /> Matching with AI...
            </>
          ) : (
            <>✨ Find My Global Matches</>
          )}
        </button>
      </form>

      {/* How it works */}
      <div className="how-it-works">
        <div className="hiw-title">How it works</div>
        <div className="hiw-steps">
          {[
            { icon: '📄', label: 'Upload resume or paste skills' },
            { icon: '🤖', label: 'AI scores job matches' },
            { icon: '📈', label: 'Get skill roadmap' },
            { icon: '🌏', label: 'Receive culture guide' },
          ].map((s, i) => (
            <div className="hiw-step" key={i}>
              <span className="hiw-icon">{s.icon}</span>
              <span className="hiw-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
