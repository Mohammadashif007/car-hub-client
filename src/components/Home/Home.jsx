import React from "react";
import Hero_section from "../Hero_section/Hero_section";
import { useLoaderData } from "react-router-dom";
import Car_logo from "../Car_logo/Car_logo";

const Home = () => {
    const carsLogo = useLoaderData();
    console.log(carsLogo);
    return (
        <div>
            <Hero_section></Hero_section>
            <div className="md:grid grid-cols-3 gap-5 w-4/5 mx-auto my-10">
                {carsLogo.map((carLogo) => (
                    <Car_logo key={carLogo.id} carLogo={carLogo}></Car_logo>
                ))}
            </div>
        </div>
    );
};

export default Home;
