import React from 'react';

const About: React.FC = () => {
  return (
    <div className="group about-section">
      <h2 className="group-title">
        <span className="title-icon">ℹ️</span>
        About This Project
      </h2>
      
      <div className="about-content">
        <p>
          <strong>Badge Maker Lite</strong> allows you to easily create custom SVG badges 
          with personalized text, colors, and layouts. Once you've customized your badge, 
          you can copy the generated SVG code to use in your projects.
        </p>
        
        <p>
          <strong>💾 PNG Tip:</strong> If you prefer a PNG version, right-click the 
          rendered badge, choose "Inspect", and then use your browser's developer tools 
          to "Capture node screenshot". This feature is available in most modern browsers.
        </p>

        <div className="support-section">
          <p>
            If you enjoy this project and would like to see more improvements, 
            consider supporting it through Ko-fi. Your support is greatly appreciated! ❤️
          </p>
          
          <div className="sponsor-button">
            <a 
              href="https://ko-fi.com/realvorl" 
              target="_blank" 
              rel="noopener noreferrer"
              className="kofi-link"
            >
              <img 
                src="https://ko-fi.com/img/githubbutton_sm.svg" 
                alt="Ko-fi"
                className="kofi-image"
              />
            </a>
          </div>
        </div>

        <div className="badges-section">
          <a 
            href="https://github.com/realvorl/BadgeSVGen/issues/new" 
            target="_blank" 
            rel="noopener noreferrer"
            className="badge-link"
          >
            <svg height="20" width="118" xmlns="http://www.w3.org/2000/svg">
              <rect width="78" height="20" fill="#150080" />
              <rect x="78" width="40" height="20" fill="#d14010" />
              <text textAnchor="middle" fontWeight="bold" fontSize="14" fontFamily="Verdana,Geneva,DejaVu Sans,sans-serif" fill="#fff" x="39" y="50%" dy=".35em">open an</text>
              <text textAnchor="middle" fontSize="13" fontFamily="Verdana,Geneva,DejaVu Sans,sans-serif" fill="#fff" x="98" y="50%" dy=".35em">issue</text>
            </svg>
          </a>
          
          <a 
            href="https://github.com/realvorl/BadgeSVGen/blob/main/CONTRIBUTING.md" 
            target="_blank" 
            rel="noopener noreferrer"
            className="badge-link"
          >
            <svg height="20" width="98" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="20" fill="#050505" />
              <rect x="32" width="66" height="20" fill="#4b6c8b" />
              <text textAnchor="middle" fontWeight="bold" fontSize="13" fontFamily="Verdana,Geneva,DejaVu Sans,sans-serif" fill="#fff" x="16" y="50%" dy=".35em">OR</text>
              <text textAnchor="middle" fontSize="12" fontFamily="Verdana,Geneva,DejaVu Sans,sans-serif" fill="#fff" x="65" y="50%" dy=".35em">contribute</text>
            </svg>
          </a>
        </div>

        <p className="creator-text">
          Created with 💜 by{' '}
          <a 
            href="https://github.com/realvorl" 
            target="_blank" 
            rel="noopener noreferrer"
            className="creator-link"
          >
            Veo
          </a>
        </p>
      </div>
            {/* Footer */}
      <footer className="app-footer">
        <p>
          💡 <strong>Tip:</strong> Use these badges in your README.md, documentation, or website!
        </p>
      </footer>
    </div>
  );
};

export default About;