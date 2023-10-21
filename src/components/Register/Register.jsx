import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const Register = () => {
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const {createUser} = useContext(AuthContext);
    const [success, setSuccess] = useState('');
    


    const handleRegistrationForm = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        setError('');

        if(password.length < 6){
            setError('Password should be 6 character or longer');
            return;
        }
        else if(!/[A-Z]/.test(password)){
            setError('Password should have one upper case character');
            return;
        }
        else if(!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\\/|]/.test(password)){
            setError('Password should have one spacial character');
            return;
        }

        createUser(email, password)
        .then(result => {
            console.log(result.user)
            form.reset();
            navigate('/')

        })
        .catch(error => {
            console.error(error)
            setError(error.message)
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegistrationForm} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="input input-bordered"
                                required
                            />
                            <label className="label">
                                <a
                                    href="#"
                                    className="label-text-alt link link-hover"
                                >
                                    Forgot password?
                                </a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                       {
                        error &&  <p className="text-red-500">{error}</p>
                       }
                    </form>
                    <p className="p-5">Already have account. Please<span className="text-blue-700"><Link to='/login'> Login</Link></span></p>
                </div>
            </div>
        </div>
    );
};

export default Register;
