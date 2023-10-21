import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const Car_details = () => {
    const navigate = useNavigate();
    const detailsData = useLoaderData();
    const carDetails = detailsData[0];
    const {
        _id,
        carName,
        carImage,
        color,
        bodyTypes,
        details,
        price,
        brandName,
        rating,
        review,
    } = carDetails;

    const handleNavigate = id => {
        navigate(`/my_cart/${id}`)
    }

    return (
        <div className="my-20 flex justify-center">
            {/* <div>
                <img src={carImage} alt="" />
                <h2 className="text-2xl font-bold my-3">{carName}</h2>
            </div> */}
            <div className="card w-4/5 bg-base-100 shadow-xl">
                <figure>
                    <img className="w-full" src={carImage} alt="car" />
                </figure>
                <div className="card-body flex-row justify-center items-center py-10">
                    <div className="flex-1">
                        <h2 className="card-title text-3xl font-bold">
                            {carName}
                            {/* <div className="badge badge-secondary">NEW</div> */}
                        </h2>
                        <h2 className="mt-5 text-2xl font-bold text-[#EF1D26]">
                            {brandName}
                        </h2>
                        <p className="py-5">{details}</p>

                        <p className="text-2xl font-bold text-[#EF1D26]">
                            {price}
                        </p>
                        <button onClick={() => handleNavigate(_id)} className="btn bg-[#EF1D26] text-white text-[17px] mt-5">
                            Add Cart
                        </button>
                    </div>
                    <div className="card-actions justify-end flex-1">
                        <div className="flex flex-col items-center">
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
                            <div className="text-[#EF1D26]">
                                <div className="badge badge-outline">
                                    {color}
                                </div>
                                <div className="badge badge-outline">
                                    {bodyTypes}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Car_details;
