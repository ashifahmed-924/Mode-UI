import React from 'react'
import './App.css'

function App() {
  return (
    <div className="app">
      {/* Announcement Bar */}
      <div className="announcement-bar">
        <div className="announcement-content">
          <span className="announcement-badge">Announcement</span>
          <span className="announcement-text">
            We are happy to announce that we raise $2 Million in Seed Funding
          </span>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">Mode UI</div>
          <div className="nav-links">
            <a href="#card-access" className="nav-link">
              Card access
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#banking" className="nav-link">Banking</a>
            <a href="#processing" className="nav-link">Processing</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#carrier" className="nav-link">Carrier</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
          <button className="login-button">
            Login
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M12.5 2.5H15.8333C16.2754 2.5 16.6993 2.67559 17.0118 2.98816C17.3244 3.30072 17.5 3.72464 17.5 4.16667V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H12.5M8.33333 14.1667L12.5 10M12.5 10L8.33333 5.83333M12.5 10H2.5" stroke="#5A6475" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
          </button>
          <button className="mobile-menu-toggle">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <span className="hero-label">Seamless experience</span>
            <h1 className="hero-headline">
              Unleashing the Next Generation of Card Solutions
            </h1>
            <p className="hero-description">
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            </p>
            <button className="cta-button">
              Unlock your Card
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
           <path d="M1 6.83333H12.6667M12.6667 6.83333L6.83333 1M12.6667 6.83333L6.83333 12.6667" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </button>
            <p className="disclaimer">*No credit card required</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App

