import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Car from "../Car/Car";

const Available_cars = () => {
    const cars = useLoaderData()
    // console.log(brandName);
    const [specificCars, setSpecificCars] = useState(cars);
    console.log(specificCars);
    // const brandCars = setSpecificCars.filter(name => name.brandName == )

    return (
        <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 w-4/5 mx-auto my-10">
                {specificCars.map((car) => (
                    <Car key={car._id} car={car}></Car>
                ))}
            </div>
        </div>
    );
};

export default Available_cars;
