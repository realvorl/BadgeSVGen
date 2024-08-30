import React from 'react';

const About: React.FC = () => {
  return (
    <div className="group information-panel">
      <h2>About This Project</h2>
      <p>This SVG Badge Generator allows you to easily create custom SVG badges with personalized text, colors, and layouts. Once you have customized your badge, you can copy the generated SVG code to use in your projects.</p>
      <p>If you prefer a PNG version, right-click the rendered badge, choose "Inspect", and then use your browser's developer tools to "Capture node screenshot". This feature is available in most modern browsers.</p>
      <p>If you enjoy this project and would like to see more improvements, consider sponsoring it through Ko-fi. Your support is greatly appreciated!</p>
      <div className="sponsor-button">
        <a href="https://ko-fi.com/realvorl" target="_blank" rel="noopener noreferrer">
          <img src="https://ko-fi.com/img/githubbutton_sm.svg" alt="Ko-fi" />
        </a>
      </div>
      <div>
        <a href="https://github.com/realvorl/BadgeSVGen/issues/new" target="_blank" rel="noopener noreferrer">
          <span>
            <svg height="20" width="118" xmlns="http://www.w3.org/2000/svg">
              <rect width="78" height="20" fill="#150080" />
              <rect x="78" width="40" height="20" fill="#d14010" />
              <text text-anchor="middle" font-weight="bold" font-size="14" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" fill="#fff" x="39" y="50%" dy=".35em">open an</text>
              <text text-anchor="middle" font-size="13" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" fill="#fff" x="98" y="50%" dy=".35em">issue</text>
            </svg>
          </span>
        </a>
        <span> </span>
        <a href="https://github.com/realvorl/BadgeSVGen/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer">
          <span>
            <svg height="20" width="98" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="20" fill="#050505" />
              <rect x="32" width="66" height="20" fill="#4b6c8b" />
              <text text-anchor="middle" font-weight="bold" font-size="13" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" fill="#fff" x="16" y="50%" dy=".35em">OR</text>
              <text text-anchor="middle" font-size="12" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" fill="#fff" x="65" y="50%" dy=".35em">contribute</text>
            </svg>
          </span>
        </a>
      </div>
    </div>
  );
};

export default About;
