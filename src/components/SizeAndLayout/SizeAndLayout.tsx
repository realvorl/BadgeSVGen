import React from 'react';

interface Props {
  width: number;
  setWidth: (value: number) => void;
  height: number;
  setHeight: (value: number) => void;
  dividerLine: number;
  setDividerLine: (value: number) => void;
}

const SizeAndLayout: React.FC<Props> = ({ 
  width, 
  setWidth, 
  height, 
  setHeight, 
  dividerLine, 
  setDividerLine 
}) => {
  return (
    <div className="group size-layout-container">
      <h2 className="group-title">
        <span className="title-icon">📐</span>
        Size & Layout
      </h2>
      
      <div className="form-group">
        <label className="form-label">
          <span className="label-text">Width</span>
          <div className="slider-container">
            <input 
              type="range" 
              min="50" 
              max="200" 
              value={width} 
              onChange={(e) => setWidth(parseInt(e.target.value))}
              className="range-input"
            />
            <span className="slider-value">{width}px</span>
          </div>
        </label>

        <label className="form-label">
          <span className="label-text">Height</span>
          <div className="slider-container">
            <input 
              type="range" 
              min="10" 
              max="50" 
              value={height} 
              onChange={(e) => setHeight(parseInt(e.target.value))}
              className="range-input"
            />
            <span className="slider-value">{height}px</span>
          </div>
        </label>

        <label className="form-label">
          <span className="label-text">Divider Position</span>
          <div className="slider-container">
            <input 
              type="range" 
              min="10" 
              max={width - 10} 
              value={dividerLine} 
              onChange={(e) => setDividerLine(parseInt(e.target.value))}
              className="range-input"
            />
            <span className="slider-value">{dividerLine}px</span>
          </div>
        </label>

        <p className="helper-text">
          The divider controls where the label ends and the message begins
        </p>
      </div>
    </div>
  );
};

export default SizeAndLayout;