import React from 'react';

interface Props {
  svgString: string;
}

const SVGRender: React.FC<Props> = ({ svgString }) => {
  return (
    <div className="group svg-preview-container">
      <h2 className="group-title">
        <span className="title-icon">👁️</span>
        Live Preview
      </h2>
      <div className="svg-preview">
        <div dangerouslySetInnerHTML={{ __html: svgString }} />
      </div>
      <p className="helper-text">
        This is your badge rendered in real-time
      </p>
    </div>
  );
};

export default SVGRender;