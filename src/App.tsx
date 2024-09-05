import React, { useEffect, useState, useRef } from 'react';
import TextAndFont from './components/TextAndFont/TextAndFont';
import SizeAndLayout from './components/SizeAndLayout/SizeAndLayout';
import Colors from './components/Colors/Colors';
import SVGCode from './components/SVGCode/SVGCode';
import SVGRender from './components/SVGRender/SVGRender';
import About from './components/About/About';
import ShareButton from './components/ShareButton';
import './components/App/App.css';

import { decodeFromBase64 } from "./utils/base64Utils";
import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const App: React.FC = () => {
  const [inputs, setInputs] = useState({
    text1: 'VEO',
    text2: 'approved!',
    width: 110,
    height: 20,
    fontSize: 11,
    hintSize: 14,
    fillColor1: '#444444',
    fillColor2: '#4c1',
    textColor1: '#ffffff',
    textColor2: '#ffffff',
    dividerLine: 30,
  });

  const query = useQuery();
  const [isUrlProcessed, setIsUrlProcessed] = useState(false); // Track if the URL was already processed

  useEffect(() => {
    if (!isUrlProcessed) {
      const encodedData = query.get("data");
      if (encodedData) {
        try {
          const decodedData = decodeFromBase64(encodedData);
          // Update inputs from URL if the data is different
          if (JSON.stringify(decodedData) !== JSON.stringify(inputs)) {
            setInputs(decodedData);
            setIsUrlProcessed(true); // Set the flag that the URL data has been processed
          }
        } catch (error) {
          console.error("Error decoding Base64 data", error);
        }
      }
    }
  }, [query, isUrlProcessed]);

  // Function to update state and disconnect from URL
  const handleInputChange = (key: string, value: any) => {
    setInputs((prevInputs) => ({ ...prevInputs, [key]: value }));
    setIsUrlProcessed(true); // Disconnect from the URL after interaction
  };

  return (
    <div className="container">
      <div className="grid-container">
        <TextAndFont
          text1={inputs.text1}
          setText1={(text1) => handleInputChange('text1', text1)}
          text2={inputs.text2}
          setText2={(text2) => handleInputChange('text2', text2)}
          fontSize={inputs.fontSize}
          setFontSize={(fontSize) => handleInputChange('fontSize', fontSize)}
          hintSize={inputs.hintSize}
          setHintSize={(hintSize) => handleInputChange('hintSize', hintSize)}
        />
        <div className="group">
          <SVGCode svgString={generateSVG(inputs)} />
          <hr/>
          <ShareButton inputs={inputs} />
        </div>
        <SizeAndLayout
          width={inputs.width}
          setWidth={(width) => handleInputChange('width', width)}
          height={inputs.height}
          setHeight={(height) => handleInputChange('height', height)}
          dividerLine={inputs.dividerLine}
          setDividerLine={(dividerLine) => handleInputChange('dividerLine', dividerLine)}
        />
        <SVGRender svgString={generateSVG(inputs)} />
        <Colors
          fillColor1={inputs.fillColor1}
          setFillColor1={(fillColor1) => handleInputChange('fillColor1', fillColor1)}
          fillColor2={inputs.fillColor2}
          setFillColor2={(fillColor2) => handleInputChange('fillColor2', fillColor2)}
          textColor1={inputs.textColor1}
          setTextColor1={(textColor1) => handleInputChange('textColor1', textColor1)}
          textColor2={inputs.textColor2}
          setTextColor2={(textColor2) => handleInputChange('textColor2', textColor2)}
        />
        <About />
      </div>
    </div>
  );
};

function generateSVG(inputs: any) {
  const text1X = Math.round(inputs.dividerLine / 2);
  const text2X = Math.round(inputs.dividerLine + (inputs.width - inputs.dividerLine) / 2);

  return `
    <svg height="${inputs.height}" width="${inputs.width}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${inputs.dividerLine}" height="${inputs.height}" fill="${inputs.fillColor1}" />
      <rect x="${inputs.dividerLine}" width="${inputs.width - inputs.dividerLine}" height="${inputs.height}" fill="${inputs.fillColor2}" />
      <text text-anchor="middle" font-weight="bold" font-size="${inputs.fontSize}" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" fill="${inputs.textColor1}" x="${text1X}" y="50%" dy=".35em">${inputs.text1}</text>
      <text text-anchor="middle" font-size="${inputs.hintSize}" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" fill="${inputs.textColor2}" x="${text2X}" y="50%" dy=".35em">${inputs.text2}</text>
    </svg>
  `;
}

export default App;
