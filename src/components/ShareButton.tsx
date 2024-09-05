// src/components/ShareButton.tsx
import React from "react";
import { generateShareableLink } from "../utils/generateShareableLink";

const ShareButton = ({ inputs }: { inputs: any }) => {
  const handleShare = () => {
    const shareableLink = generateShareableLink(inputs);
    navigator.clipboard.writeText(shareableLink);
    alert("Shareable link copied to clipboard!");
  };

  return <button onClick={handleShare}>⋔ Share Badge ⋔</button>;
};

export default ShareButton;
