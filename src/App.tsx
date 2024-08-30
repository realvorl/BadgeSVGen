import React, { useState } from 'react';
import TextAndFont from './TextAndFont';
import SizeAndLayout from './SizeAndLayout';
import Colors from './Colors';
import SVGCode from './SVGCode';
import SVGRender from './SVGRender';
import About from './About';
import saveToGist from './saveToGist';
import loadFromGist from './loadFromGist';
import './App.css';

const App: React.FC = () => {
  const [inputs, setInputs] = useState({
    text1: 'VEO',
    text2: 'approved!',
    width: 110,
    height: 20,
    fontSize: 11,
    hintSize: 14,
    fillColor1: '#444',
    fillColor2: '#4c1',
    textColor1: '#fff',
    textColor2: '#fff',
    dividerLine: 30,
  });

  const [uuid, setUuid] = useState('');

  const handleSave = async () => {
    const gistId = await saveToGist(inputs);
    if (gistId) {
      alert(`Saved! Access your badge at https://realvorl.github.io/BadgeSVGen/${gistId}`);
    } else {
      alert('Failed to save. Please try again.');
    }
  };

  const handleLoad = async () => {
    const config = await loadFromGist(uuid);
    if (config) {
      setInputs(config);
    } else {
      alert('Failed to load. Please check the UUID and try again.');
    }
  };

  return (
    <div className="container">
      <div className="grid-container">
        <TextAndFont
          text1={inputs.text1}
          setText1={(text1) => setInputs({ ...inputs, text1 })}
          text2={inputs.text2}
          setText2={(text2) => setInputs({ ...inputs, text2 })}
          fontSize={inputs.fontSize}
          setFontSize={(fontSize) => setInputs({ ...inputs, fontSize })}
          hintSize={inputs.hintSize}
          setHintSize={(hintSize) => setInputs({ ...inputs, hintSize })}
        />
        <SVGCode svgString={generateSVG(inputs)} />
        <SizeAndLayout
          width={inputs.width}
          setWidth={(width) => setInputs({ ...inputs, width })}
          height={inputs.height}
          setHeight={(height) => setInputs({ ...inputs, height })}
          dividerLine={inputs.dividerLine}
          setDividerLine={(dividerLine) => setInputs({ ...inputs, dividerLine })}
        />
        <SVGRender svgString={generateSVG(inputs)} />
        <Colors
          fillColor1={inputs.fillColor1}
          setFillColor1={(fillColor1) => setInputs({ ...inputs, fillColor1 })}
          fillColor2={inputs.fillColor2}
          setFillColor2={(fillColor2) => setInputs({ ...inputs, fillColor2 })}
          textColor1={inputs.textColor1}
          setTextColor1={(textColor1) => setInputs({ ...inputs, textColor1 })}
          textColor2={inputs.textColor2}
          setTextColor2={(textColor2) => setInputs({ ...inputs, textColor2 })}
        />
        <About />

        <div className="load-container">
          <input
            type="text"
            value={uuid}
            onChange={(e) => setUuid(e.target.value)}
            placeholder="Enter UUID"
            className="uuid-input"
          />
          <button onClick={handleLoad} className="load-button">
            Load Badge
          </button>
        </div>

        <button onClick={handleSave}>
          Save Badge
        </button>
      </div>
    </div>
  );
};

interface BadgeInputs {
  text1: string;
  text2: string;
  width: number;
  height: number;
  fontSize: number;
  hintSize: number;
  fillColor1: string;
  fillColor2: string;
  textColor1: string;
  textColor2: string;
  dividerLine: number;
}

function generateSVG(inputs: BadgeInputs) {
  return `
    <svg height="${inputs.height}" width="${inputs.width}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${inputs.dividerLine}" height="${inputs.height}" fill="${inputs.fillColor1}"/>
      <rect x="${inputs.dividerLine}" width="${inputs.width - inputs.dividerLine}" height="${inputs.height}" fill="${inputs.fillColor2}"/>
      <text text-anchor="middle" font-weight="bold" font-size="${inputs.fontSize}" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" fill="${inputs.textColor1}" x="${inputs.dividerLine / 2}" y="50%" dy=".35em">${inputs.text1}</text>
      <text text-anchor="middle" font-size="${inputs.hintSize}" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" fill="${inputs.textColor2}" x="${inputs.dividerLine + (inputs.width - inputs.dividerLine) / 2}" y="50%" dy=".35em">${inputs.text2}</text>
    </svg>
  `;
}

export default App;
