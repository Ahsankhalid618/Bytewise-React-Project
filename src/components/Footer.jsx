import React from 'react'
import logo2 from "../assets/logo2.svg"
import { LuInstagram } from "react-icons/lu";
import { CiBasketball } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

export const Footer = () => {
    return (
        <div className='bg-[#263238] py-16 px-36 flex justify-between'>
            <div className='w-[40%]'>
                <div>
                    <img src={logo2} alt="" />
                </div>
                <div className='my-7 text-[#F5F7FA] text-sm'>
                    <p>Copyright © 2020 Nexcent ltd.</p>
                    <p>All rights reserved</p>
                </div>
                <div className='flex ites-center gap-5'>
                    <i className='bg-[#38474d] p-2 rounded-full text-white text-lg'><LuInstagram /></i>
                    <i className='bg-[#38474d] p-2 rounded-full text-white text-lg'><CiBasketball /></i>
                    <i className='bg-[#38474d] p-2 rounded-full text-white text-lg'><FaTwitter /></i>
                    <i className='bg-[#38474d] p-2 rounded-full text-white text-lg'><FaYoutube /></i>
                </div>
            </div>
            <div className='w-[60%] grid grid-rows-1 grid-flow-col gap-16'>
                <div>
                    <ul className='text-[#F5F7FA] text-sm flex flex-col gap-5'>
                        <li className='text-white font-semibold text-lg mb-5'>Company</li>
                        <li>About us</li>
                        <li>Blog</li>
                        <li>Contact us</li>
                        <li>Pricing</li>
                        <li>Testimonials</li>
                    </ul>
                </div>
                <div>
                    <ul className='text-[#F5F7FA] text-sm flex flex-col gap-5'>
                        <li className='text-white font-semibold text-lg mb-5'>Support</li>
                        <li>Help center</li>
                        <li>Terms of service</li>
                        <li>Legal</li>
                        <li>Privacy policy</li>
                        <li>Status</li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-white font-semibold text-lg mb-10'>Stay up to date</h1>
                    <div className='bg-[#4e5b61] flex items-center p-2 rounded-lg my-2'>
                        <input placeholder='Your email address' className='bg-transparent outline-none' />
                        <i className='text-white'><FiSend /></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
