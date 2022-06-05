import React from 'react';

const Register = () => {
    return (
        <div className=" py-10">
            <div class="card lg:w-[653px] md:w-[653px] sm:w-5/6 mx-auto flex-shrink-0 lg:bg-white md:bg-white bg-none lg:drop-shadow-md md:drop-shadow-md  my-auto ">
                <h2 className="text-[69px] sm:font-3xl md:font-medium lg:font-medium ml-5">Register </h2>
                <div class="card-body">
                    <form action="" >
                        <div className="lg:grid lg:grid-cols-2 lg:gap-5 md:grid md:grid-cols-1">
                            <div class="form-control sm:w-full">
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
                                    <input type="text" placeholder="" class="input input-bordered" />
                                </label>
                            </div>
                            <div class="form-control sm:w-full ">
                                <label class="label">
                                    <span class="label-text">Last name</span>
                                </label>
                                <input type="text" placeholder="" class="input input-bordered w-auto max-w-xs" />
                            </div>
                        </div>
                        <div class="form-control w-full mr-5">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="Enter your email" class="input input-bordered w-auto " />
                        </div>
                        <div class="form-control w-full mr-5">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="Enter your Password" class="input input-bordered w-auto " />
                        </div>
                        <div class="form-control w-full mr-5 mb-5">
                            <label class="label">
                                <span class="label-text">Phone number`</span>
                            </label>
                            <input type="text" placeholder="Enter your Phone Number" class="input input-bordered w-auto" />
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <small className="flex"><input type="checkbox" class="checkbox mr-2" /> Read and accept terms and conditions
                            </small>
                            <input type="submit" value="Register" className="btn my-4 bg-[#0C0C0C] text-white "></input>
                        </div>
                    </form>                    
                </div>
                
            </div>            
        </div>
    );
};

export default Register;