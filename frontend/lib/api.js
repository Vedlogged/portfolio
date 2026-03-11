import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// API methods
export const contactAPI = {
  submit: async (data) => {
    const response = await api.post('/contact', data);
    return response.data;
  },
};

export const projectsAPI = {
  getAll: async (category) => {
    const params = category && category !== 'all' ? { category } : {};
    const response = await api.get('/projects', { params });
    return response.data;
  },
  getFeatured: async () => {
    const response = await api.get('/projects/featured');
    return response.data;
  },
  getOne: async (id) => {
    const response = await api.get(`/projects/${id}`);
    return response.data;
  },
};

export default api;
