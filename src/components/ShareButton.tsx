import React from 'react';
import { encodeToBase64 } from "../utils/base64Utils";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ShareButton: React.FC<{ inputs: any }> = ({ inputs }) => {
  const onClick = () => {
    const jsonData = JSON.stringify(inputs);
    const encodedData = encodeToBase64(jsonData);
    const shareableLink = `${window.location.origin}${window.location.pathname}?data=${encodedData}`;

    navigator.clipboard.writeText(shareableLink).then(() => {
      toast.success("🎉 Shareable link copied to clipboard!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }).catch(err => {
      console.error('Failed to copy: ', err);
      toast.error("❌ Failed to copy link.", {
        position: "top-center",
        autoClose: 3000,
      });
    });
  };

  return (
    <div className="share-section">
      <button onClick={onClick} className="share-button">
        🔗 Share Badge
      </button>
      <p className="helper-text">
        Generates a shareable link with your badge configuration
      </p>
      <ToastContainer 
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default ShareButton;