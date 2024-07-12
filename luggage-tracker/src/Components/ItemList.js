import React, { useEffect, useState } from 'react';
import './ItemList.css';
import { viewItems } from '../Services/endpoints';
import EditIcon from '@mui/icons-material/Edit';

const ItemList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await viewItems();
                setItems(response.data);
            } catch (error) {
                console.error('Error fetching items..');
            }
        }

        fetchItems();
    }, []);

   

    return (
        <div className="table-container">
            <table className="table table-sm table-bordered table-hover">
                <thead>
                    <tr className="table-info">
                        <th scope="col">Id</th>
                        <th scope="col">Item Name</th>
                        <th scope="col">Weight</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <tr key={item.item_id}>
                            <th scope="row">{item.item_id}</th>
                            <td>{item.item_name}</td>
                            <td>{item.weight}</td>
                            <td>{item.quantity}</td>
                            <td>
                                <button className="edit-button">
                                    <EditIcon />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ItemList