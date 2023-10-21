import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const Nav_bar = () => {

    const {user, logOut} = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
        .then(() => {
            console.log('signout successfully')
        })
        .catch((error) => {
            console.log(error.message)
        })

    }

    const navLinks = <>
    <li> <NavLink to='/'>Home</NavLink></li>
    {
        user && <>
        <li> <NavLink to='/add_products'>Add Product</NavLink></li>
        <li> <NavLink to='/my_cart'>My Cart</NavLink></li>
        </>
    }
    
</>
    return (
        <div className="navbar bg-base-100 w-11/12 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                     {navLinks}
                    </ul>
                </div>
                <a className="normal-case text-2xl font-bold">CarHub.</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                   {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                    <span>{user.email}</span>
                    <button onClick={handleSignOut} className='btn'>Sign Out </button>
                    </>:<button className='btn'><Link to='/login'>Log in</Link></button>
                }
            </div>

        </div>
    );
};

export default Nav_bar;