import axios from 'axios';

const API_URL = 'http://localhost:5000/api/resumes';

export const createResume = async (data) => await axios.post(`${API_URL}/create`, data);
export const getResumes = async () => await axios.get(API_URL);
