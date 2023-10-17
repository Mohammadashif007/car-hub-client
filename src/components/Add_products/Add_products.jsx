import React from 'react';

const Add_products = () => {
    return (
        <div className='p-10'>
            <div className='w-1/2 mx-auto '>
                <h2 className='text-2xl ml-40'>Add Product</h2>
                <form>
                    <br />
                    {/* Brand & logo */}
                    <input type="text" name='name' placeholder='Brand Name' className='border px-3 py-2 '/>
                    <input type="text" name='logo' placeholder='Brand Logo URL'  className='border px-3 py-2 ml-10'/>
                    <br />
                    {/* Name & photo */}
                    <input type="text" name='car' placeholder='Car Name'  className='border px-3 py-2 mt-10'/>
                    <input type="text" name='image' placeholder='Car Photo URL'  className='border px-3 py-2 ml-10 mt-10'/>
                    <br />
                    {/* Rating & review */}
                    <input type="text" name='rating' placeholder='Rating'  className='border px-3 py-2 mt-10'/>
                    <input type="text" name='review' placeholder='Review'  className='border px-3 py-2 ml-10 mt-10'/>
                    <br />
                    {/*Transmission Type & mileage */}
                    <input type="text" name='transmission' placeholder='Transmission  Type'  className='border px-3 py-2 mt-10'/>
                    <input type="text" name='mileage' placeholder='Mileage'  className='border px-3 py-2 ml-10 mt-10'/>
                    <br />
                    <input type="text" name='model' placeholder='Model'  className='border px-3 py-2 mt-10'/>
                    <input type="text" name='mileage' placeholder='Mileage'  className='border px-3 py-2 ml-10 mt-10'/>
                    <br />
                    <input type="text" name='transmission' placeholder='Transmission  Type'  className='border px-3 py-2 mt-10'/>
                    <input type="text" name='engine' placeholder='Engine Type'  className='border px-3 py-2 ml-10 mt-10'/>
                    <br />
                    <input type="text" name='price' placeholder='Price'  className='border px-3 py-2 mt-10'/>
                    <input type="text" name='details' placeholder='Details'  className='border px-3 py-2 ml-10 mt-10'/>
                    <br />
                    <input type="submit" value="Submit" className='btn bg-[#EF1D26] text-white mt-10 ml-40' />
                </form>
            </div>
        </div>
    );
};

export default Add_products;