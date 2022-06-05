import React from 'react';
import facebook from "../images and icons/Facebook.png"
import google from "../images and icons/Google.png"

const Register = () => {
    return (
        <div className=" py-10">
            <div class="card lg:w-3/6 md:w-3/6 sm:w-5/6 mx-auto flex-shrink-0 shadow-2xl bg-base-100 my-auto ">
                <h2 className="text-[69px] sm:font-3xl md:font-medium lg:font-medium ml-5">Register </h2>
                <div class="card-body">
                    <form action="" >
                        <div className="lg:grid lg:grid-cols-2 lg:gap-5 md:grid md:grid-cols-1">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">First name</span>
                                </label>
                                <label class="input-group">
                                    <select class="select select-bordered">
                                        <option disabled selected>Title</option>
                                        <option>Mr. </option>
                                        <option>Mrs. </option>
                                        <option>Other</option>
                                    </select>
                                    <input type="text" placeholder="First name" class="input input-bordered" />
                                </label>
                            </div>
                            <div class="form-control w-full ">
                                <label class="label">
                                    <span class="label-text">Last name</span>
                                </label>
                                <input type="text" placeholder="Type here" class="input input-bordered w-auto max-w-xs" />
                            </div>
                        </div>
                        <div class="form-control w-full mr-5">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="Type here" class="input input-bordered w-auto " />
                        </div>
                        <div class="form-control w-full mr-5">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="Type here" class="input input-bordered w-auto " />
                        </div>
                        <div class="form-control w-full mr-5 mb-5">
                            <label class="label">
                                <span class="label-text">Phone</span>
                            </label>
                            <input type="text" placeholder="Type here" class="input input-bordered w-auto" />
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <small className="flex"><input type="checkbox" class="checkbox mr-2" /> Read and accept terms and conditions
                            </small>
                            <input type="submit" value="Register" className="btn my-4 bg-[#0C0C0C] text-white "></input>
                        </div>
                    </form>
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
                </div>


            </div>

        </div>
    );
};

export default Register;