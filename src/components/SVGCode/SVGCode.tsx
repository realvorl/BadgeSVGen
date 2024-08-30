import React from 'react';

interface Props {
  svgString: string;
}

const SVGCode: React.FC<Props> = ({ svgString }) => {
  return (
    <div className="group code-container">
      <pre>
        {svgString}
      </pre>
    </div>
  );
};

export default SVGCode;
