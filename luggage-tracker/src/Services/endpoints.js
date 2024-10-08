import axios from 'axios';

const API_URL = "http://localhost:8080/api";

export const addItem = (item) => axios.post(`${API_URL}/item`, item);
export const viewItems = () => axios.get(`${API_URL}/allItems`);
export const updateItems = (item) => axios.put(`${API_URL}/item/${item.item_id}`, item);
export const deleteItem = (id) => axios.delete(`${API_URL}/item/${id}`);
export const getBagById = (id) => axios.get(`${API_URL}/bag/${id}`);
export const addItemToBag = (itemId, bagId) => axios.post(`${API_URL}/add/${bagId}/${itemId}`);
export const itemsInBag = (id) => axios.get(`${API_URL}/bag/items/${id}`);
export const weightCal = (id) => axios.get(`${API_URL}/weight/space/${id}`);
export const deleteItemFromBag = (bagId, itemName) => axios.delete(`${API_URL}/${bagId}/items/${itemName}`);
