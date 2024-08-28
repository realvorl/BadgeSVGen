import React from 'react';

const About: React.FC = () => {
  return (
    <div className="group information-panel">
      <h2>About This Project</h2>
      <p>This SVG Badge Generator allows you to easily create custom SVG badges with personalized text, colors, and layouts. Once you have customized your badge, you can copy the generated SVG code to use in your projects.</p>
      <p>If you prefer a PNG version, right-click the rendered badge, choose "Inspect", and then use your browser's developer tools to "Capture node screenshot". This feature is available in most modern browsers.</p>
      <p>If you enjoy this project and would like to see more improvements, consider sponsoring it through Ko-fi. Your support is greatly appreciated!</p>
      <div className="sponsor-button">
        <img src="https://ko-fi.com/img/githubbutton_sm.svg" alt="Ko-fi" />
        <a href="https://ko-fi.com/realvorl" target="_blank" rel="noopener noreferrer">Sponsor this project</a>
      </div>
      <p>If you have suggestions or requests for new features, feel free to contribute or open an issue on GitHub.</p>
    </div>
  );
};

export default About;
