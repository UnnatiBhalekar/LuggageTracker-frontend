import React, { useEffect, useState } from 'react';
import './ItemList.css';
import { viewItems, updateItems, deleteItem } from '../Services/endpoints';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';

const ItemList = () => {
    const [items, setItems] = useState([]);
    const [editMode, setEditMode] = useState(null);
    const [editItemData, setEditItemData] = useState({
        item_id: '',
        item_name: '',
        weight: '',
        quantity: ''
    });

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

    const handleEditClick = (item) => {
        setEditMode(item.item_id);
        setEditItemData({
            item_id: item.item_id,
            item_name: item.item_name,
            weight: item.weight,
            quantity: item.quantity
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditItemData({
            ...editItemData,
            [name]: value
        });
    };

    const handleSaveClick = async () => {
        try {
            await updateItems(editItemData); // Call the updateItems function from endpoint.js
            setItems(items.map(item => (item.item_id === editItemData.item_id ? editItemData : item)));
            setEditMode(null);
        } catch (error) {
            console.error('Error updating item', error);
        }
    };

    const handleDeleteClick = async (id) => {
        try{
            await deleteItem(id);
            setItems(items.filter(item => item.item_id !== id))
        }catch (error) {
            console.error('Error deleting item', error);
        }
    };

    return (
        <div className="table-container">
            <div className="table-responsive">
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
                            {editMode === item.item_id ? (
                                <>
                                    <td>{item.item_id}</td>
                                    <td><input type="text" name="item_name" value={editItemData.item_name} onChange={handleInputChange} /></td>
                                    <td><input type="number" name="weight" value={editItemData.weight} onChange={handleInputChange} /></td>
                                    <td><input type="number" name="quantity" value={editItemData.quantity} onChange={handleInputChange} /></td>
                                    <td>
                                        <button className="save-button" onClick={handleSaveClick}>
                                            <SaveIcon />
                                        </button>
                                    </td>
                                </>
                            ) : (
                                <>
                                    <th scope="row">{item.item_id}</th>
                                    <td>{item.item_name}</td>
                                    <td>{item.weight}</td>
                                    <td>{item.quantity}</td>
                                    <td>
                                        <button className="edit-button" onClick={() => handleEditClick(item)}>
                                            <EditIcon />
                                        </button>
                                        <button className='delete-button'onClick={() => handleDeleteClick(item.item_id)}>
                                            <DeleteIcon />
                                        </button>
                                    </td>
                                </>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
            
        </div>
    )
}

export default ItemList;
