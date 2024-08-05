import axios from 'axios';

const API_URL = "http://localhost:8080/api";

export const addItem = (item) => axios.post(`${API_URL}/item`, item);
export const viewItems = () => axios.get(`${API_URL}/allItems`);
export const updateItems = (item) => axios.put(`${API_URL}/item/${item.item_id}`, item);
export const deleteItem = (id) => axios.delete(`${API_URL}/item/${id}`);
