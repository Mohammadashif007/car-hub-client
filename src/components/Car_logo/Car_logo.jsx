import React from 'react';
import { useNavigate } from 'react-router-dom';

const Car_logo = ({carLogo}) => {
    const {brand_logo, brand_name} = carLogo;
    const navigate = useNavigate();
    const handleNavigate = (brandName) => {
        navigate(`/available_cars/${brandName}`)
        console.log(brandName);
    }
    return (
        <div onClick={()=>handleNavigate(brand_name)} className='text-center border rounded-md p-2 cursor-pointer bg-gray-100 hover:-translate-y-1'>
            <img className= "w-full mx-auto" src={brand_logo} alt="" />
            <h2 className='text-2xl font-bold'>{brand_name}</h2>
        </div>
    );
};

export default Car_logo;