import React, { useState } from 'react';

interface Props {
  svgString: string;
}

const SVGCode: React.FC<Props> = ({ svgString }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(svgString.trim()).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="code-section">
      <div className="code-header">
        <h3 className="code-title">SVG Code</h3>
        <button onClick={copyToClipboard} className="copy-button">
          {copied ? '✓ Copied!' : '📋 Copy'}
        </button>
      </div>
      <div className="code-container">
        <pre className="code-preview">{svgString.trim()}</pre>
      </div>
    </div>
  );
};

export default SVGCode;