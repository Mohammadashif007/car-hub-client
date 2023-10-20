import React from "react";
import {AiFillEye} from "react-icons/ai"
import { useNavigate } from "react-router-dom";

const Car = ({ car }) => {
    const navigate = useNavigate();

    const { carName, carImage, details, review, rating, price, _id } = car;

    const handleNavigate = (id) => {
       navigate(`/car/${id}`)
    }

    return (
        // <div>
        //     <img src={carImage} alt="" />
        //     <h2>{carName}</h2>
        // </div>

        
        <div className="card w-full bg-base-100 shadow-xl">
            <figure>
                <img className="h-[220px]" src={carImage} alt="car" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">
                    {carName}
                    {/* <div className="badge badge-secondary">NEW</div> */}
                </h2>
                <div className="flex gap-2 my-4">
                    <div className="rating ">
                        <input
                            type="radio"
                            name="rating-2"
                            className="text-[5px] mask mask-star-2 bg-orange-400"
                        />
                        <input
                            type="radio"
                            name="rating-2"
                            className="text-[5px] mask mask-star-2 bg-orange-400"
                            checked
                        />
                        <input
                            type="radio"
                            name="rating-2"
                            className="text-[5px] mask mask-star-2 bg-orange-400"
                        />
                        <input
                            type="radio"
                            name="rating-2"
                            className="text-[5px] mask mask-star-2 bg-orange-400"
                        />
                        <input
                            type="radio"
                            name="rating-2"
                            className="text-[5px] mask mask-star-2 bg-orange-400"
                        />
                    </div>
                    <p>{rating}.0</p>
                    <p>({review} Review)</p>
                </div>
                <p>{details}</p>
                <div className="border my-4"></div>
                <div className="card-actions items-center">
                    {/* <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div> */}
                    <p className="text-2xl font-bold text-[#EF1D26]">{price}</p>
                    <button onClick={()=>handleNavigate(_id)} className="btn bg-[#EF1D26] text-white text-[17px]"><i className="text-2xl"><AiFillEye></AiFillEye></i>Details</button>
                </div>
            </div>
        </div>
    );
};

export default Car;
