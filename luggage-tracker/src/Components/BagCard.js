import React from 'react'
import { Link } from 'react-router-dom';
import './BagCard.css';
import Bags from '../Bags.jpg';

const BagCard = () => {
    return (
        <div className='body-new'>
            <div className="row">
                <div className="col-sm-4">
                    <div className="card">
                        <img className="card-img-top" src={Bags} alt="Card cap" />
                        <div className="card-body">
                            <h5 className="card-title">Luggage Bag 1</h5>
                            <p className="card-text">Maximun Capacity 23kg.</p>
                            <Link to={`/bag/1`} className="btn btn-primary">View Details</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                        <img className="card-img-top" src={Bags} alt="Card cap" />
                        <div className="card-body">
                            <h5 className="card-title">Luggage Bag 2</h5>
                            <p className="card-text">Maximun Capacity 23kg.</p>
                            <Link to={`/bag/2`} className="btn btn-primary">View Details</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                        <img className="card-img-top" src={Bags} alt="Card cap" />
                        <div className="card-body">
                            <h5 className="card-title">Cabin Bag</h5>
                            <p className="card-text">Maximun Capacity 7kg.</p>
                            <Link to={`/bag/3`} className="btn btn-primary">View Details</Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BagCard