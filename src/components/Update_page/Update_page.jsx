import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update_page = () => {
    const carInfo = useLoaderData();
    const {
        _id,
        brandLogo,
        carName,
        brandName,
        carImage,
        details,
        review,
        rating,
        price,
        transmission,
        mileage,
        model,
        enginType,
        bodyTypes,
        color,
    } = carInfo;

    const handleUpdateForm = (event) => {
        event.preventDefault();
        const form = event.target;
        const brandName = form.brand_name.value;
        const brandLogo = form.brand_logo.value;
        const carName = form.car_name.value;
        const carImage = form.car_image.value;
        const rating = form.rating.value;
        const review = form.review.value;
        const transmission = form.transmission.value;
        const mileage = form.mileage.value;
        const model = form.model.value;
        const enginType = form.engine_type.value;
        const price = form.price.value;
        const details = form.details.value;
        const bodyTypes = form.body_types.value;
        const color = form.color.value;

        const updateCarsInfo = {
            brandName,
            brandLogo,
            carName,
            carImage,
            rating,
            review,
            transmission,
            mileage,
            model,
            enginType,
            price,
            details,
            bodyTypes,
            color,
        };
        // console.log(carsInfo);

        fetch(
            `https://carhub-server-7b4gnmwge-mohammad-ashifs-projects.vercel.app/cars/${_id}`,
            {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(updateCarsInfo),
            }
        )
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        icon: "success",
                        title: "Car Info Updated successfully",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    form.reset();
                }
            });
    };

    return (
        <div className="p-10">
            <div className="w-1/2 mx-auto ">
                <h2 className="text-2xl ml-40">Update Car Information.</h2>
                <form onSubmit={handleUpdateForm}>
                    <br />
                    {/* Brand & logo */}
                    <input
                        type="text"
                        name="brand_name"
                        defaultValue={brandName}
                        placeholder="Brand Name"
                        className="border px-3 py-2 "
                    />
                    <input
                        type="text"
                        name="brand_logo"
                        defaultValue={brandLogo}
                        placeholder="Brand Logo URL"
                        className="border px-3 py-2 ml-10"
                    />
                    <br />
                    {/* Name & photo */}
                    <input
                        type="text"
                        name="car_name"
                        defaultValue={carName}
                        placeholder="Car Name"
                        className="border px-3 py-2 mt-10"
                    />
                    <input
                        type="text"
                        name="car_image"
                        defaultValue={carImage}
                        placeholder="Car Photo URL"
                        className="border px-3 py-2 ml-10 mt-10"
                    />
                    <br />
                    {/* Rating & review */}
                    <input
                        type="text"
                        name="rating"
                        defaultValue={rating}
                        placeholder="Rating"
                        className="border px-3 py-2 mt-10"
                    />
                    <input
                        type="text"
                        name="review"
                        defaultValue={review}
                        placeholder="Review"
                        className="border px-3 py-2 ml-10 mt-10"
                    />
                    <br />
                    {/*Transmission Type & mileage */}
                    <input
                        type="text"
                        name="transmission"
                        defaultValue={transmission}
                        placeholder="Transmission  Type"
                        className="border px-3 py-2 mt-10"
                    />
                    <input
                        type="text"
                        name="mileage"
                        defaultValue={mileage}
                        placeholder="Mileage"
                        className="border px-3 py-2 ml-10 mt-10"
                    />
                    <br />
                    {/* model & engine type */}
                    <input
                        type="text"
                        name="model"
                        defaultValue={model}
                        placeholder="Model"
                        className="border px-3 py-2 mt-10"
                    />
                    <input
                        type="text"
                        name="engine_type"
                        defaultValue={enginType}
                        placeholder="Engin Type"
                        className="border px-3 py-2 ml-10 mt-10"
                    />
                    <br />
                    {/* Price & details */}
                    <input
                        type="text"
                        name="price"
                        defaultValue={price}
                        placeholder="Price"
                        className="border px-3 py-2 mt-10"
                    />
                    <input
                        type="text"
                        name="details"
                        defaultValue={details}
                        placeholder="Details"
                        className="border px-3 py-2 ml-10 mt-10"
                    />
                    <br />
                    {/* Body types & color */}
                    <input
                        type="text"
                        name="body_types"
                        defaultValue={bodyTypes}
                        placeholder="Body Types"
                        className="border px-3 py-2 mt-10"
                    />
                    <input
                        type="text"
                        name="color"
                        defaultValue={color}
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
