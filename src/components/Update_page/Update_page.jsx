import React from "react";

const Update_page = () => {
    return (
        <div className="p-10">
            <div className="w-1/2 mx-auto ">
                <h2 className="text-2xl ml-40">Add Product</h2>
                <form>
                    <br />
                    {/* Brand & logo */}
                    <input
                        type="text"
                        name="brand_name"
                        placeholder="Brand Name"
                        className="border px-3 py-2 "
                    />
                    <input
                        type="text"
                        name="brand_logo"
                        placeholder="Brand Logo URL"
                        className="border px-3 py-2 ml-10"
                    />
                    <br />
                    {/* Name & photo */}
                    <input
                        type="text"
                        name="car_name"
                        placeholder="Car Name"
                        className="border px-3 py-2 mt-10"
                    />
                    <input
                        type="text"
                        name="car_image"
                        placeholder="Car Photo URL"
                        className="border px-3 py-2 ml-10 mt-10"
                    />
                    <br />
                    {/* Rating & review */}
                    <input
                        type="text"
                        name="rating"
                        placeholder="Rating"
                        className="border px-3 py-2 mt-10"
                    />
                    <input
                        type="text"
                        name="review"
                        placeholder="Review"
                        className="border px-3 py-2 ml-10 mt-10"
                    />
                    <br />
                    {/*Transmission Type & mileage */}
                    <input
                        type="text"
                        name="transmission"
                        placeholder="Transmission  Type"
                        className="border px-3 py-2 mt-10"
                    />
                    <input
                        type="text"
                        name="mileage"
                        placeholder="Mileage"
                        className="border px-3 py-2 ml-10 mt-10"
                    />
                    <br />
                    {/* model & engine type */}
                    <input
                        type="text"
                        name="model"
                        placeholder="Model"
                        className="border px-3 py-2 mt-10"
                    />
                    <input
                        type="text"
                        name="engine_type"
                        placeholder="Engin Type"
                        className="border px-3 py-2 ml-10 mt-10"
                    />
                    <br />
                    {/* Price & details */}
                    <input
                        type="text"
                        name="price"
                        placeholder="Price"
                        className="border px-3 py-2 mt-10"
                    />
                    <input
                        type="text"
                        name="details"
                        placeholder="Details"
                        className="border px-3 py-2 ml-10 mt-10"
                    />
                    <br />
                    {/* Body types & color */}
                    <input
                        type="text"
                        name="body_types"
                        placeholder="Body Types"
                        className="border px-3 py-2 mt-10"
                    />
                    <input
                        type="text"
                        name="color"
                        placeholder="Color"
                        className="border px-3 py-2 ml-10 mt-10"
                    />
                    <br />
                    {/* Btn */}
                    <input
                        type="submit"
                        value="Submit"
                        className="btn bg-[#EF1D26] text-white mt-10 ml-40"
                    />
                </form>
            </div>
        </div>
    );
};

export default Update_page;