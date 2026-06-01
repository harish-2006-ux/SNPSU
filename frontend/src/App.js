import React, { useState } from 'react';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import InputForm from './components/InputForm';
import ResultsDashboard from './components/ResultsDashboard';
import Footer from './components/Footer';
import { matchJobs } from './services/api';
import './App.css';

export default function App() {
  const [currentView, setCurrentView] = useState('landing'); // 'landing', 'form', 'results'
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState(null);

  const handleGetStarted = () => {
    setCurrentView('form');
  };

  const handleMatch = async (data) => {
    setLoading(true);
    setError('');
    setResults(null);
    setFormData(data);
    try {
      const res = await matchJobs(data);
      setResults(res);
      setCurrentView('results');
    } catch (e) {
      setError(e.message || 'Something went wrong. Make sure the backend is running.');
    }
    setLoading(false);
  };

  const handleReset = () => {
    setResults(null);
    setError('');
    setFormData(null);
    setCurrentView('landing');
  };

  const renderContent = () => {
    switch (currentView) {
      case 'landing':
        return <LandingPage onGetStarted={handleGetStarted} />;
      case 'form':
        return <InputForm onSubmit={handleMatch} loading={loading} error={error} />;
      case 'results':
        return <ResultsDashboard results={results} formData={formData} onReset={handleReset} />;
      default:
        return <LandingPage onGetStarted={handleGetStarted} />;
    }
  };

  return (
    <div className="app-wrapper">
      {currentView !== 'landing' && <Header />}
      <main className={`main-content ${currentView === 'landing' ? 'landing-mode' : 'app-mode'}`}>
        {renderContent()}
      </main>
      {currentView !== 'landing' && <Footer />}
    </div>
  );
}
