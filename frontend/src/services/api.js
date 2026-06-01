import axios from 'axios';

// In development, the proxy in package.json forwards /api → http://localhost:8000
// In production, set REACT_APP_API_URL in your .env
const BASE_URL = process.env.REACT_APP_API_URL || '';

export async function matchJobs(data) {
  try {
    const res = await axios.post(`${BASE_URL}/api/match`, data, {
      timeout: 30000, // 30s for AI response
    });
    return res.data;
  } catch (err) {
    if (err.response?.data?.detail) {
      throw new Error(err.response.data.detail);
    }
    if (err.code === 'ECONNREFUSED' || err.code === 'ERR_NETWORK') {
      throw new Error('Cannot connect to backend. Make sure FastAPI is running on port 8000.');
    }
    throw new Error('Matching failed. Please try again.');
  }
}
