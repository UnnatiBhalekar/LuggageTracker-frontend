import React, { useState } from 'react';
import { addItem } from '../Services/endpoints';
import './AddItem.css';

const AddItem = () => {
    const [formData, setFormData] = useState({
        item_name: '',
        weight: '',
        quantity: 'Choose...'
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.quantity === 'Choose...') {
            alert('Please select a quantity.');
            return;
        }
        try {
            await addItem(formData); // Calling the addItem function from endpoint.js
            alert('Item added successfully!');
            // Optionally, clear the form fields after successful submission
            setFormData({
                item_name: '',
                weight: '',
                quantity: 'Choose...'
            });
        } catch (error) {
            console.error("There was an error adding the item!", error);
            alert('There was an error adding the item.');
        }
    };

    return (
        <div className="body">
            <form className="form-container" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="item_name">Item Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="item_name"
                        value={formData.item_name}
                        onChange={handleChange}
                        placeholder="Enter Item Name"
                    />
                    <small id="itemHelp" className="form-text text-muted">Please enter the item name.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="weight">Item Weight</label>
                    <input
                        type="number"
                        className="form-control"
                        id="weight"
                        step="0.01"
                        value={formData.weight}
                        onChange={handleChange}
                        placeholder="Enter Item Weight"
                    />
                    <small id="itemHelp" className="form-text text-muted">Please enter the item weight in decimals.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="quantity">Quantity</label>
                    <select
                        id="quantity"
                        className="form-control"
                        value={formData.quantity}
                        onChange={handleChange}
                    >
                        <option>Choose...</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default AddItem;
