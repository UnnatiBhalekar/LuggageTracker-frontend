import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { itemsInBag, weightCal } from '../Services/endpoints';
import { ToastContainer, toast } from 'react-toastify';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import 'react-toastify/dist/ReactToastify.css';
import './BagDetails.css';

const BagDetails = () => {
    const { id } = useParams(); // Get the bag ID from the URL
    const [bagDetails, setBagDetails] = useState([]);
    const [spaceDetails, setSpaceDetails] = useState([]);

    useEffect(() => {
        const fetchBagDetails = async () => {
            try {
                const bagResponse = await weightCal(id);
                setSpaceDetails(bagResponse.data);


            } catch (error) {
                toast.error('Error fetching space details', error);
            }
        };

        const fetchSpaceDetails = async () => {
            try {
                const spaceResponse = await itemsInBag(id);
                setBagDetails(spaceResponse.data);


            } catch (error) {
                toast.error('Error fetching bag details', error);
            }
        }

        fetchBagDetails();
        fetchSpaceDetails();
    }, [id]);

    return (
        <div className='body-details'>
            <ToastContainer />
            <div className='detail table-responsive'>
                <table class="table table-bordered">
                    <thead>
                        <tr className='table-info'>
                            <th scope="col">Item Name</th>
                            <th scope="col">Weight</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bagDetails.map((item, index) => (
                            <tr key={index}>
                                <td>{item.itemName}</td>
                                <td>{item.weight}</td>
                                <td>
                                    <button className="delete">
                                        <DeleteOutlineIcon />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div>
                <div class="card text-black bg-info mb-3">
                    <div class="card-header">Total Weight</div>
                    <div class="card-body">
                        <h5 class="card-title">{spaceDetails.totalWeight} kg</h5>
                        <p class="card-text">Total Weight Calculated by Adding all the items in the Bag</p>
                    </div>
                </div>
                <div class="card text-black bg-warning mb-3">
                    <div class="card-header">Available Space</div>
                    <div class="card-body">
                        <h5 class="card-title">{spaceDetails.availableSpace} kg</h5>
                        <p class="card-text">Available Space in the respective Bag</p>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default BagDetails;
