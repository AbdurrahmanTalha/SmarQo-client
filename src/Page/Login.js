import React from 'react';
import { Link } from 'react-router-dom';
import facebook from "../images and icons/Facebook.png"
import google from "../images and icons/Google.png"

const PLogin = () => {
    return (
        <div className=" py-10">
            <div class="card lg:w-3/6 md:w-3/6 sm:w-4/6 mx-auto flex-shrink-0   shadow-2xl bg-base-100  my-10 ">
                <h2 className="text-[69px] font-medium ml-5">Login</h2>
                <div class="card-body">
                    <form action="" >

                        <div class="form-control w-full mr-5">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="Type here" class="input input-bordered w-auto " />
                        </div>
                        <div class="form-control w-full ">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                            <label class="label">
                                <div class="form-control">
                                    <label class="label cursor-pointer">
                                        <input type="checkbox" class="checkbox mr-2" />
                                        <span class="label-text">Remember me</span>
                                    </label>
                                </div>
                                <span class="label-text-alt underline">Forget Password?</span>
                            </label>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <input type="submit" value="Login" className="btn my-4 bg-[#0C0C0C] text-white "></input>
                        </div>
                        <div class="flex flex-col w-full border-opacity-50">
                            <div class="divider">OR</div>
                            <div className="mx-auto">
                                <button className="btn bg-white flex justify-between items-center text-black">
                                    <img className="w-10 mr-3" src={facebook} alt="" />
                                    <span>Continue With Facebook</span>
                                </button>
                                <button className="btn my-5 bg-white flex justify-between items-center text-black">
                                    <img className="w-10 mr-3" src={google} alt="" />
                                    <span>Continue With Facebook</span>
                                </button>
                            </div>
                        </div>
                    </form>
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

export default PLogin;