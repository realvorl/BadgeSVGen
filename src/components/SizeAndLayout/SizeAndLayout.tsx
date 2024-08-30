import React from 'react';

interface Props {
  width: number;
  setWidth: (value: number) => void;
  height: number;
  setHeight: (value: number) => void;
  dividerLine: number;
  setDividerLine: (value: number) => void;
}

const SizeAndLayout: React.FC<Props> = ({ width, setWidth, height, setHeight, dividerLine, setDividerLine }) => {
  return (
    <div className="group">
      <h2>Size & Layout</h2>
      <label>Width: 
        <input type="range" min="50" max="200" value={width} onChange={(e) => setWidth(parseInt(e.target.value))} />
      </label>
      <label>Height: 
        <input type="range" min="10" max="50" value={height} onChange={(e) => setHeight(parseInt(e.target.value))} />
      </label>
      <label>Midline: 
        <input type="range" min="10" max={width - 10} value={dividerLine} onChange={(e) => setDividerLine(parseInt(e.target.value))} />
      </label>
    </div>
  );
};

export default SizeAndLayout;
