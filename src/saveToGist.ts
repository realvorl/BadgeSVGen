import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;  // Securely handle your token

async function saveToGist(inputs: any) {
  const gistData = {
    description: "SVG Badge Configuration",
    public: true,
    files: {
      [`${uuidv4()}.json`]: {  // Still generate a random filename, but we won't use this UUID
        content: JSON.stringify(inputs)
      }
    }
  };

  try {
    const response = await axios.post('https://api.github.com/gists', gistData, {
      headers: {
        'Authorization': `token ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json',
      }
    });

    if (response.status === 201) {
      const gistId = response.data.id;
      console.log("Gist created successfully with ID:", gistId);
      return gistId;
    } else {
      console.error("Failed to create gist:", response.status, response.statusText);
      return null;
    }
  } catch (error) {
    console.error("Error saving to gist:", error);
    return null;
  }
}

export default saveToGist;
