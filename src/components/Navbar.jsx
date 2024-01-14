import React from 'react'
import logo from "../assets/Logo.svg"
export const Navbar = () => {
    return (
        <div className='bg-[#F5F7FA]'>
            <div className='py-5 px-5 flex items-center justify-between container mx-auto'>
                <div className='w-[20%]'>
                    <img src={logo} alt="logo" />
                </div>
                <div className='w-[55%]'>
                    <ul className='flex items-center gap-12'>
                        <li className='font-medium'>Home</li>
                        <li>Service</li>
                        <li>Feature</li>
                        <li>Product</li>
                        <li>Testimonial</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                <div className='w-[18%] flex gap-2'>
                    <button className='tertiary-btn'>Login</button>
                    <button className='primary-btn-small text-sm font-medium'>Sign up</button>
                </div>
            </div>
        </div>
    )
}
