import React from 'react';

const SmartQuotes = () => {
    return (
        <div className="my-5">
            <div className="text-center">
                <h2 className="text-5xl p-16 lg:p-5 md:p-5 lg:text-center md:text-center text-left lg:w-full md:w-full w-full break-all bg-[#202020] md:bg-transparent lg:bg-transparent lg:text-black md:text-black text-[#919191]">Request <span className="font-bold">Smart Quotes</span> from professionals</h2>
                <p className="mt-5 hidden lg:block md:block text-[#607395] mb-14">Get quick Quotes from businesses Search and connect with the best professionals and businesses.</p>
            </div>
            <div>
                <div className="card lg:w-3/6 md:w-3/6 sm:w-4/6 mx-auto flex-shrink-0   shadow-2xl bg-base-100  my-10 ">
                    <div className="card-body">
                        <form action="" >
                            <div className="form-control w-full mr-5">
                                <label className="label">
                                    <span className="label-text">Add <span className="font-bold">Title</span> to your quote request</span>
                                </label>
                                <input type="text" className="input  input-bordered focus:border-0 w-auto " />
                            </div>
                            <div className="form-control w-full mr-5">
                                <label className="label">
                                    <span className="label-text">Select Your <span className="font-bold">Location</span></span>
                                </label>
                                <input type="text" className="input focus:border-0 input-bordered w-auto " />
                            </div>
                            <div className="form-control w-full mr-5">
                                <label className="label">
                                    <span className="label-text">Tell us more about your <span className="font-bold">requirements</span> here</span>
                                </label>
                                <input type="text" className="input focus:border-0 input-bordered w-auto " />
                            </div>
                            <div className="form-control w-full mr-5">
                                <label className="label">
                                    <span className="label-text"><span className="font-bold">When</span> do you need this?</span>
                                </label>
                                <input type="text" className="input focus:border-0 input-bordered w-auto " />
                            </div>

                            <div className="form-control w-full mr-5">
                                <label className="label">
                                    <span className="label-text">Add <span className="font-bold">industry tags</span> related to your request</span>
                                </label>
                                <input type="text" className="input focus:border-0 input-bordered w-auto " />
                            </div>
                            <div className="form-control w-full mr-5">
                                <label className="label">
                                    <span className="label-text">How do you want the professional to <span className="font-bold">contact</span> you?</span>
                                </label>
                                <input type="text" className="input focus:border-0 input-bordered w-auto " />
                            </div>
                            <div className="flex justify-center items-center mt-7">
                                <input type="submit" value="Post Requirements Now" className="btn bg-[#0C0C0C]" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SmartQuotes;