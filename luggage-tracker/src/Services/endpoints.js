import axios from 'axios';

const API_URL = "http://localhost:8080/api";

export const addItem = (item) => axios.post(`${API_URL}/item`, item);