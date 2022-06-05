import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className=" py-10">
            <div className="card lg:w-[649px] md:w-[649px] sm:w-4/6 mx-auto bg-none lg:drop-shadow-md md:drop-shadow-md  md:bg-base-100 lg:bg-base-100  my-10 ">
                <h2 className="text-[69px] font-medium ml-5">Login</h2>
                <div className="card-body">
                    <form action="" >
                        <div className="form-control w-full mr-5">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="Enter your email" className="focus:border-0 input input-bordered w-auto " />
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="Enter your Password" className="focus:border-0 input input-bordered w-full" />
                            <label className="label">
                                <div className="form-control">
                                    <label className="label cursor-pointer">
                                        <input type="checkbox" className="checkbox mr-2" />
                                        <span className="label-text">Remember me</span>
                                    </label>
                                </div>
                                <span className="label-text-alt underline">Forget Password?</span>
                            </label>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <input type="submit" value="Login" className="btn focus:border-0 mt-[28px] bg-[#0C0C0C] text-white "></input>
                        </div>

                    </form>
                </div>
                <div className="flex flex-col w-full border-opacity-50">
                    <div className="text-center text-[13px]  font-medium mb-[19px] text-[#7D7D7D]">OR</div>
                    <h2 className="text-center text-[19px] mb-[36px] font-medium">Register</h2>

                </div>
            </div>
            <div>
                <div className="flex justify-center w-half">
                    <p className="text-center mr-11 text-gray-400">Offering a service?</p>
                    <Link to="/" className="underline text-blue-500">Join as a professional</Link>
                </div>
                <div className="flex justify-center w-half">
                    <p className="text-center mr-10 text-gray-400">Looking for a service?</p>
                    <Link to="/" className="underline text-blue-500">Get Started?</Link>
                </div>
            </div>

        </div>
    );
};

export default Login;