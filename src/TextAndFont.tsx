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

const TextAndFont: React.FC<Props> = ({ text1, setText1, text2, setText2, fontSize, setFontSize, hintSize, setHintSize }) => {
  return (
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
  );
};

export default TextAndFont;
