import React, { useState } from 'react';
import { addItem } from './Services/endpoints';
import './AddItem.css';

const AddItem = () => {
    const [formData, setFormData] = useState({
        item_name: '',
        weight: 0,
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
        console.log(formData);
        try {
            await addItem(formData); // Calling the addItem function from endpoint.js
            alert('Item added successfully!');
            // Optionally, clear the form fields after successful submission
            setFormData({
                item_name: '',
                weight: 0,
                quantity: 'Choose...'
            });
        } catch (error) {
            console.error("There was an error adding the item!", error);
            alert('There was an error adding the item.');
        }
    };

    return (
        <div>
            <form className="form-container" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="itemName">Item Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="itemName"
                        value={formData.item_name}
                        onChange={handleChange}
                        placeholder="Enter Item Name"
                    />
                    <small id="itemHelp" className="form-text text-muted">Please enter the item name.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="itemWeight">Item Weight</label>
                    <input
                        type="decimal"
                        className="form-control"
                        id="itemWeight"
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
