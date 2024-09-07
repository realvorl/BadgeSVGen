import React from 'react';
import { encodeToBase64 } from "../utils/base64Utils";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ShareButton: React.FC<{ inputs: any }> = ({ inputs }) => {
  const onClick = () => {
    const jsonData = JSON.stringify(inputs);
    const encodedData = encodeToBase64(jsonData);
    const shareableLink = `${window.location.origin}${window.location.pathname}?data=${encodedData}`;

    // Copy to clipboard
    navigator.clipboard.writeText(shareableLink).then(() => {
      // Show toast notification
      toast.success("Shareable link is now in your clipboard!");
    }).catch(err => {
      console.error('Failed to copy: ', err);
      toast.error("Failed to copy the link to clipboard.");
    });
  };

  return (
    <>
      <button onClick={onClick}>Share Badge</button>
      <ToastContainer />
    </>
  );
};

export default ShareButton;