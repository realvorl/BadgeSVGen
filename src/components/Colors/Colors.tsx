import React from 'react';

interface Props {
  fillColor1: string;
  setFillColor1: (value: string) => void;
  fillColor2: string;
  setFillColor2: (value: string) => void;
  textColor1: string;
  setTextColor1: (value: string) => void;
  textColor2: string;
  setTextColor2: (value: string) => void;
}

const Colors: React.FC<Props> = ({ 
  fillColor1, 
  setFillColor1, 
  fillColor2, 
  setFillColor2, 
  textColor1, 
  setTextColor1, 
  textColor2, 
  setTextColor2 
}) => {
  const presets = [
    { name: 'Default', fill1: '#444444', fill2: '#4c1', text1: '#ffffff', text2: '#ffffff' },
    { name: 'Blue', fill1: '#0366d6', fill2: '#28a745', text1: '#ffffff', text2: '#ffffff' },
    { name: 'Purple', fill1: '#5a32a3', fill2: '#9333ea', text1: '#ffffff', text2: '#ffffff' },
    { name: 'Orange', fill1: '#e97435', fill2: '#f59e0b', text1: '#ffffff', text2: '#ffffff' },
  ];

  const applyPreset = (preset: typeof presets[0]) => {
    setFillColor1(preset.fill1);
    setFillColor2(preset.fill2);
    setTextColor1(preset.text1);
    setTextColor2(preset.text2);
  };

  return (
    <div className="group colors-container">
      <h2 className="group-title">
        <span className="title-icon">🎨</span>
        Colors
      </h2>
      
      <div className="form-group">
        <div className="color-grid">
          <label className="color-label">
            <span className="label-text">Label Background</span>
            <div className="color-input-group">
              <input 
                type="color" 
                value={fillColor1} 
                onChange={(e) => setFillColor1(e.target.value)}
                className="color-picker"
              />
              <input 
                type="text" 
                value={fillColor1} 
                onChange={(e) => setFillColor1(e.target.value)}
                className="color-text-input"
                maxLength={7}
              />
            </div>
          </label>

          <label className="color-label">
            <span className="label-text">Label Text</span>
            <div className="color-input-group">
              <input 
                type="color" 
                value={textColor1} 
                onChange={(e) => setTextColor1(e.target.value)}
                className="color-picker"
              />
              <input 
                type="text" 
                value={textColor1} 
                onChange={(e) => setTextColor1(e.target.value)}
                className="color-text-input"
                maxLength={7}
              />
            </div>
          </label>

          <label className="color-label">
            <span className="label-text">Message Background</span>
            <div className="color-input-group">
              <input 
                type="color" 
                value={fillColor2} 
                onChange={(e) => setFillColor2(e.target.value)}
                className="color-picker"
              />
              <input 
                type="text" 
                value={fillColor2} 
                onChange={(e) => setFillColor2(e.target.value)}
                className="color-text-input"
                maxLength={7}
              />
            </div>
          </label>

          <label className="color-label">
            <span className="label-text">Message Text</span>
            <div className="color-input-group">
              <input 
                type="color" 
                value={textColor2} 
                onChange={(e) => setTextColor2(e.target.value)}
                className="color-picker"
              />
              <input 
                type="text" 
                value={textColor2} 
                onChange={(e) => setTextColor2(e.target.value)}
                className="color-text-input"
                maxLength={7}
              />
            </div>
          </label>
        </div>

        <div className="presets-section">
          <p className="presets-title">Quick Presets</p>
          <div className="presets-grid">
            {presets.map((preset) => (
              <button
                key={preset.name}
                onClick={() => applyPreset(preset)}
                className="preset-button"
                title={preset.name}
              >
                <div className="preset-preview">
                  <div style={{ backgroundColor: preset.fill1 }} className="preset-color"></div>
                  <div style={{ backgroundColor: preset.fill2 }} className="preset-color"></div>
                </div>
                <span className="preset-name">{preset.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Colors;