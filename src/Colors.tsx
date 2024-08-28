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

const Colors: React.FC<Props> = ({ fillColor1, setFillColor1, fillColor2, setFillColor2, textColor1, setTextColor1, textColor2, setTextColor2 }) => {
  return (
    <div className="group">
      <h2>Colors</h2>
      <label>Label Back: 
        <input type="color" value={fillColor1} onChange={(e) => setFillColor1(e.target.value)} />
      </label>
      <label>Label Text: 
        <input type="color" value={textColor1} onChange={(e) => setTextColor1(e.target.value)} />
      </label>
      <label>Hint Back: 
        <input type="color" value={fillColor2} onChange={(e) => setFillColor2(e.target.value)} />
      </label>
      <label>Hint Text: 
        <input type="color" value={textColor2} onChange={(e) => setTextColor2(e.target.value)} />
      </label>
    </div>
  );
};

export default Colors;
