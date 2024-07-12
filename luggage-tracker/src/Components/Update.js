// import React, { useState } from 'react';

// const Update = ({ item, showModal, handleClose, handleSave }) => {
//     const [formData, setFormData] = useState(item || {});

//     React.useEffect(() => {
//         setFormData(item);
//     }, [item]);

//     const handleChange = (e) => {
//         const { id, value } = e.target;
//         setFormData((prevData) => ({ ...prevData, [id]: value }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         handleSave(formData);
//     };

//     return (
//         <div>
//             <div className={`modal fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }} id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
//                 <div className="modal-dialog modal-dialog-centered" role="document">
//                     <div className="modal-content">
//                         <div className="modal-header">
//                             <h5 className="modal-title" id="exampleModalCenterTitle">Update Details</h5>
//                             <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={handleClose}>
//                                 <span aria-hidden="true">&times;</span>
//                             </button>
//                         </div>
//                         <div className="modal-body">
//                             <form className="form-container" onSubmit={handleSubmit}>
//                                 <div className="form-group">
//                                     <label htmlFor="item_name">Item Name</label>
//                                     <input
//                                         type="text"
//                                         className="form-control"
//                                         id="item_name"
//                                         value={formData.item_name || ''}
//                                         onChange={handleChange}
//                                         placeholder="Enter Item Name"
//                                     />
//                                     <small id="itemHelp" className="form-text text-muted">Please enter the item name.</small>
//                                 </div>
//                                 <div className="form-group">
//                                     <label htmlFor="weight">Item Weight</label>
//                                     <input
//                                         type="number"
//                                         className="form-control"
//                                         id="weight"
//                                         step="0.01"
//                                         value={formData.weight || ''}
//                                         onChange={handleChange}
//                                         placeholder="Enter Item Weight"
//                                     />
//                                     <small id="itemHelp" className="form-text text-muted">Please enter the item weight in decimals.</small>
//                                 </div>
//                                 <div className="form-group">
//                                     <label htmlFor="quantity">Quantity</label>
//                                     <select
//                                         id="quantity"
//                                         className="form-control"
//                                         value={formData.quantity || ''}
//                                         onChange={handleChange}
//                                     >
//                                         <option>Choose...</option>
//                                         {[1, 2, 3, 4, 5].map((num) => (
//                                             <option key={num} value={num}>{num}</option>
//                                         ))}
//                                     </select>
//                                 </div>
//                                 <button type="submit" className="btn btn-primary">Submit</button>
//                             </form>
//                         </div>
//                         <div className="modal-footer">
//                             <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={handleClose}>Close</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Update;
