const fs = require('fs');
const path = require('path');

// Path to the index.html file
const indexPath = path.join(__dirname, 'public', 'index.html');

// Read the index.html file
let indexFile = fs.readFileSync(indexPath, 'utf8');

// Check if the environment variable is set
const trackingId = process.env.REACT_APP_GA_TRACKING_ID;

if (trackingId) {
  const gaScript = `
    <script async src="https://www.googletagmanager.com/gtag/js?id=${trackingId}"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${trackingId}');
    </script>
  `;
  
  // Replace the placeholder with the Google Analytics script
  indexFile = indexFile.replace('%REACT_APP_GA_SCRIPT%', gaScript);
} else {
  // Remove the placeholder if no tracking ID is set
  indexFile = indexFile.replace('%REACT_APP_GA_SCRIPT%', '');
}

// Write the modified index.html back to the public directory
fs.writeFileSync(indexPath, indexFile, 'utf8');
