import React from "react";
import Hero_section from "../Hero_section/Hero_section";
import { useLoaderData } from "react-router-dom";
import Car_logo from "../Car_logo/Car_logo";
import About_us from "../About_us/About_us";
import { AiFillCar } from "react-icons/ai";

const Home = () => {
    const carsLogo = useLoaderData();
    console.log(carsLogo);
    return (
        <div>
            <Hero_section></Hero_section>
            <About_us></About_us>
            {/* <div className="md:grid grid-cols-3 gap-5 w-4/5 mx-auto my-10">
                {carsLogo.map((carLogo) => (
                    <Car_logo key={carLogo.id} carLogo={carLogo}></Car_logo>
                ))}
            </div> */}

            <div className="text-center my-10">
                <div className="flex justify-center gap-2 text-[#EF1D26] items-center text-center ml-8 ">
                    <i className="text-2xl text-center">
                        <AiFillCar />
                    </i>
                    <p className="text-[20px] font-bold tracking-widest text-center my-3">
                    POPULAR BRANDS
                    </p>
                </div>
                <h3 className="text-4xl font-bold">Our Top Quality <span className="text-[#EF1D26]">Brands</span></h3>
            </div>


            <div className="grid grid-cols-2 lg:flex gap-6 w-4/5 mx-auto my-10 mb-28">
                {carsLogo.map((carLogo) => (
                    <Car_logo key={carLogo.id} carLogo={carLogo}></Car_logo>
                ))}
            </div>
        </div>
    );
};

export default Home;
