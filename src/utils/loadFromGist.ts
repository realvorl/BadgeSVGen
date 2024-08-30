import axios from 'axios';

async function loadFromGist(gistId: string) {
  try {
    const response = await axios.get(`https://api.github.com/gists/${gistId}`);
    if (response.status === 200) {
      const fileKey = Object.keys(response.data.files)[0];
      const content = response.data.files[fileKey].content;
      return JSON.parse(content);
    } else {
      console.error("Failed to load gist:", response.status, response.statusText);
      return null;
    }
  } catch (error) {
    console.error("Error loading from gist:", error);
    return null;
  }
}

export default loadFromGist;
