import React, { useState } from 'react';
import TextAndFont from './TextAndFont';
import SizeAndLayout from './SizeAndLayout';
import Colors from './Colors';
import SVGCode from './SVGCode';
import SVGRender from './SVGRender';
import About from './About';
import './App.css';

const App: React.FC = () => {
  const [text1, setText1] = useState('VEO');
  const [text2, setText2] = useState('approved!');
  const [width, setWidth] = useState(110);
  const [height, setHeight] = useState(20);
  const [fontSize, setFontSize] = useState(11);
  const [hintSize, setHintSize] = useState(14);
  const [fillColor1, setFillColor1] = useState('#444');
  const [fillColor2, setFillColor2] = useState('#4c1');
  const [textColor1, setTextColor1] = useState('#fff');
  const [textColor2, setTextColor2] = useState('#fff');
  const [dividerLine, setDividerLine] = useState(30);

  const svgString = `
    <svg height="${height}" width="${width}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${dividerLine}" height="${height}" fill="${fillColor1}"/>
      <rect x="${dividerLine}" width="${width - dividerLine}" height="${height}" fill="${fillColor2}"/>
      <text text-anchor="middle" font-weight="bold" font-size="${fontSize}" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" fill="${textColor1}" x="${dividerLine / 2}" y="50%" dy=".35em">${text1}</text>
      <text text-anchor="middle" font-size="${hintSize}" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" fill="${textColor2}" x="${dividerLine + (width - dividerLine) / 2}" y="50%" dy=".35em">${text2}</text>
    </svg>
  `;

  return (
    <div className="container">
      <div className="grid-container">
        <TextAndFont
          text1={text1}
          setText1={setText1}
          text2={text2}
          setText2={setText2}
          fontSize={fontSize}
          setFontSize={setFontSize}
          hintSize={hintSize}
          setHintSize={setHintSize}
        />
        <SVGCode svgString={svgString} />
        <SizeAndLayout
          width={width}
          setWidth={setWidth}
          height={height}
          setHeight={setHeight}
          dividerLine={dividerLine}
          setDividerLine={setDividerLine}
        />
        <SVGRender svgString={svgString} />
        <Colors
          fillColor1={fillColor1}
          setFillColor1={setFillColor1}
          fillColor2={fillColor2}
          setFillColor2={setFillColor2}
          textColor1={textColor1}
          setTextColor1={setTextColor1}
          textColor2={textColor2}
          setTextColor2={setTextColor2}
        />
        <About />
      </div>
    </div>
  );
};

export default App;
