import React from 'react';
import { Link } from 'react-router-dom';
import home1 from "../../images and icons/home 1st image.png";
import home2 from "../../images and icons/home 2nd image.png";
import home3 from "../../images and icons/home 3rd image.png";
import Girl from "../../images and icons/girl.png";
const Hero = () => {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content grid lg:grid-cols-2 sm:grid-cols-1">
                <div className="flex flex-col">
                    <div className='flex'>
                        <img src={Girl} alt="" />
                        <div className='bg-[#202020] py-4 px-6 h-[100%] mt-[10px] 
                        ml-[-35px] flex'>
                            <div>
                                <h2 className='text-[26px] text-[#FFFFFF]'>Tell us what u need</h2>
                                <p className='text-[12px] text-[#FFFFFF]'>Whatever the service you're looking for, we'll help you find a professional for the job.</p>
                            </div>
                            <h1 className='text-[114px] text-[#484848] mt-[-20px] 
                            mb-[-70px] mr-[-15px]'>1</h1>
                        </div>
                    </div>
                    {/* <img src={home1} alt="" /> */}
                    <img src={home2} alt="" />
                    <img src={home3} alt="" />
                </div>
                <div className="order-first">
                    <h1 class="text-5xl w-full ">Request <br></br><span className="font-bold">Smart Quotes</span><br></br> from professionals</h1>
                    <p class="py-6 text-[#8D9BB3]">Get quick Quotes from business Search <br></br> and connect with the best professionals and business</p>
                    <div className="flex btn-wide  justify-center items-center flex-col lg:flex md:flex">
                        <button class="btn btn-wide mb-5 bg-[#0C0C0C] rounded capitalize">Post requirement now</button>
                        <Link to="/SmartQuotes" class="btn btn-wide block lg:hidden md:hidden bg-base-200 text-black rounded capitalize">Join as a professional</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;