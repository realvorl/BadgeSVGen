import React from 'react';

interface Props {
  text1: string;
  setText1: (value: string) => void;
  text2: string;
  setText2: (value: string) => void;
  width: number;
  setWidth: (value: number) => void;
  height: number;
  setHeight: (value: number) => void;
  fontSize: number;
  setFontSize: (value: number) => void;
  hintSize: number; // New state for hint size
  setHintSize: (value: number) => void;
  fillColor1: string;
  setFillColor1: (value: string) => void;
  fillColor2: string;
  setFillColor2: (value: string) => void;
  textColor1: string;
  setTextColor1: (value: string) => void;
  textColor2: string;
  setTextColor2: (value: string) => void;
  dividerLine: number;
  setDividerLine: (value: number) => void;
}

const SVGControls: React.FC<Props> = ({
  text1, setText1,
  text2, setText2,
  width, setWidth,
  height, setHeight,
  fontSize, setFontSize,
  hintSize, setHintSize, // Added hint size control
  fillColor1, setFillColor1,
  fillColor2, setFillColor2,
  textColor1, setTextColor1,
  textColor2, setTextColor2,
  dividerLine, setDividerLine
}) => {
  return (
    <div>
      <div className="group">
        <h2>Text & Font Size</h2>
        <label>Label: 
          <input type="text" value={text1} onChange={(e) => setText1(e.target.value)} />
        </label>
        <label>Hint: 
          <input type="text" value={text2} onChange={(e) => setText2(e.target.value)} />
        </label>
        <label>Label Size: 
          <input type="range" min="8" max="20" value={fontSize} onChange={(e) => setFontSize(parseInt(e.target.value))} />
        </label>
        <label>Hint Size: 
          <input type="range" min="8" max="20" value={hintSize} onChange={(e) => setHintSize(parseInt(e.target.value))} />
        </label>
      </div>

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

      <div className="group">
        <h2>Colors</h2>
        <label>Label back: 
          <input type="color" value={fillColor1} onChange={(e) => setFillColor1(e.target.value)} />
        </label>
        <label>Hint back: 
          <input type="color" value={fillColor2} onChange={(e) => setFillColor2(e.target.value)} />
        </label>
        <label>Label color: 
          <input type="color" value={textColor1} onChange={(e) => setTextColor1(e.target.value)} />
        </label>
        <label>Hint color: 
          <input type="color" value={textColor2} onChange={(e) => setTextColor2(e.target.value)} />
        </label>
      </div>
    </div>
  );
};

export default SVGControls;
