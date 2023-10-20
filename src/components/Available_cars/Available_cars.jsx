import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Car from "../Car/Car";
import { AiFillCar } from "react-icons/ai";
import Advertisement_slider from "../Advertisement_slider/Advertisement_slider";

const Available_cars = () => {
    const cars = useLoaderData();
    // console.log(brandName);
    const [specificCars, setSpecificCars] = useState(cars);
    // const brandCars = setSpecificCars.filter(name => name.brandName == )

    return (
        <div>
            {" "}
            <div className="text-center my-10">
                <div className="flex justify-center gap-2 text-[#EF1D26] items-center text-center ml-8 ">
                    <i className="text-2xl text-center">
                        <AiFillCar />
                    </i>
                    <p className="text-[20px] font-bold tracking-widest text-center my-3">
                        POPULAR BRANDS
                    </p>
                </div>
                <h3 className="text-4xl font-bold">
                    Let's Check Latest
                    <span className="text-[#EF1D26]"> Cars</span>
                </h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 w-4/5 mx-auto my-10">
                {specificCars.map((car) => (
                    <Car key={car._id} car={car}></Car>
                ))}
            </div>
            <div className="py-10">
                <Advertisement_slider cars={specificCars}></Advertisement_slider>
            </div>
        </div>
    );
};

export default Available_cars;
