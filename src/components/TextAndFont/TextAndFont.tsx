import React from 'react';

interface Props {
  text1: string;
  setText1: (value: string) => void;
  text2: string;
  setText2: (value: string) => void;
  fontSize: number;
  setFontSize: (value: number) => void;
  hintSize: number;
  setHintSize: (value: number) => void;
}

const TextAndFont: React.FC<Props> = ({ 
  text1, 
  setText1, 
  text2, 
  setText2, 
  fontSize, 
  setFontSize, 
  hintSize, 
  setHintSize 
}) => {
  return (
    <div className="group text-font-container">
      <h2 className="group-title">
        <span className="title-icon">✏️</span>
        Text & Font
      </h2>
      
      <div className="form-group">
        <label className="form-label">
          <span className="label-text">Label (left)</span>
          <input 
            type="text" 
            value={text1} 
            onChange={(e) => setText1(e.target.value)}
            className="text-input"
            placeholder="e.g., VEO"
          />
        </label>

        <label className="form-label">
          <span className="label-text">Message (right)</span>
          <input 
            type="text" 
            value={text2} 
            onChange={(e) => setText2(e.target.value)}
            className="text-input"
            placeholder="e.g., approved!"
          />
        </label>

        <label className="form-label">
          <span className="label-text">Label Size</span>
          <div className="slider-container">
            <input 
              type="range" 
              min="8" 
              max="20" 
              value={fontSize} 
              onChange={(e) => setFontSize(parseInt(e.target.value))}
              className="range-input"
            />
            <span className="slider-value">{fontSize}px</span>
          </div>
        </label>

        <label className="form-label">
          <span className="label-text">Message Size</span>
          <div className="slider-container">
            <input 
              type="range" 
              min="8" 
              max="20" 
              value={hintSize} 
              onChange={(e) => setHintSize(parseInt(e.target.value))}
              className="range-input"
            />
            <span className="slider-value">{hintSize}px</span>
          </div>
        </label>
      </div>
    </div>
  );
};

export default TextAndFont;