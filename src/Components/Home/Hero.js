import React from 'react';
import home1 from "../../images and icons/home 1st image.png"
import home2 from "../../images and icons/home 2nd image.png"
import home3 from "../../images and icons/home 3rd image.png"
const Hero = () => {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content grid lg:grid-cols-2 sm:grid-cols-1">
                <div className="flex flex-col">
                    <img src={home1} alt="" />
                    <img src={home2} alt="" />
                    <img src={home3} alt="" />
                </div>
                <div className="order-first">
                    <h1 class="text-5xl w-full ">Request <br></br><span className="font-bold">Smart Quotes</span><br></br> from professionals</h1>
                    <p class="py-6 text-[#8D9BB3]">Get quick Quotes from business Search <br></br> and connect with the best professionals and business</p>
                    <div className="flex btn-wide  justify-center items-center flex-col lg:block md:block">
                        <button class="btn btn-wide mb-5 bg-[#0C0C0C] rounded capitalize">Post requirement now</button>
                        <button class="btn  btn-wide  md:hidden lg:hidden bg-base-200  text-black rounded capitalize">Join as a professional</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;