import React from 'react';

interface Props {
  svgString: string;
}

const SVGRender: React.FC<Props> = ({ svgString }) => {
  return (
    <div className="group svg-preview">
      <div dangerouslySetInnerHTML={{ __html: svgString }} />
    </div>
  );
};

export default SVGRender;
