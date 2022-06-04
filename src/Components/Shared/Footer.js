import React from 'react';
import flag from "../../images and icons/Mask Group 3.png"

const Footer = () => {
    return (
        <div className="p-16">
            <footer class="footer border-t-2 border-gray-500/30  p-10 text-base-content">
                <div>
                    <span class="footer-title">Services</span>
                    <a class="link link-hover">Branding</a>
                    <a class="link link-hover">Design</a>
                    <a class="link link-hover">Marketing</a>
                    <a class="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span class="footer-title">Company</span>
                    <a class="link link-hover">About us</a>
                    <a class="link link-hover">Contact</a>
                    <a class="link link-hover">Jobs</a>
                    <a class="link link-hover">Press kit</a>
                </div>
                <div>
                    <span class="footer-title">Legal</span>
                    <a class="link link-hover">Terms of use</a>
                    <a class="link link-hover">Privacy policy</a>
                    <a class="link link-hover">Cookie policy</a>
                </div>
                <div className="flex justify-end mr-0 ml-auto ">
                    <div class="form-control w-80 flex flex-col items-end">
                        <img src={flag} className="w-24" alt="" />
                        <p className="text-xl mb-3">Team@smarqo.com</p>
                        <p className="text-2xl">+91 84568 65923</p>
                        <small className="">(MON-FRI, 7 AM -9PM)</small>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;