import React, { useEffect, useState } from 'react';
import './ItemList.css';
import { viewItems, updateItems, deleteItem, addItemToBag } from '../Services/endpoints';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

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
                toast.error('Error fetching items..');
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
            toast.success('Item updated Successfully!');
        } catch (error) {
            toast.error('Error updating item', error);
        }
    };

    const handleDeleteClick = async (id) => {
        try {
            await deleteItem(id);
            setItems(items.filter(item => item.item_id !== id))
            toast.success('Item Deleted Successfully');
        } catch (error) {
            toast.error('Error deleting item', error);
        }
    };

    const handleAddItemToBagClick = async (itemId, bagId) => {
        try {
            await addItemToBag(itemId, bagId);
            toast.success(`Item Added Successfully to Bag ${bagId}`);
        } catch (error) {
            toast.error(`Error adding item in Bag ${bagId}`, error);
        }
    };

    return (
        <div className="table-container">
            <ToastContainer />
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
                                            <button className='delete-button' onClick={() => handleDeleteClick(item.item_id)}>
                                                <DeleteIcon />
                                            </button>
                                            <div class="btn-group">
                                                <button type="button" class=" add-button btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Add Item in Bag
                                                </button>
                                                <div class="dropdown-menu">
                                                    <button class="dropdown-item" type="button" onClick={() => handleAddItemToBagClick(item.item_id, 1)}>Luggage Bag 1</button>
                                                    <button class="dropdown-item" type="button" onClick={() => handleAddItemToBagClick(item.item_id, 2)}>Luggage Bag 2</button>
                                                    <button class="dropdown-item" type="button" onClick={() => handleAddItemToBagClick(item.item_id, 3)}>Cabin Bag</button>
                                                    <div class="dropdown-divider"></div>
                                                </div>
                                            </div>

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
