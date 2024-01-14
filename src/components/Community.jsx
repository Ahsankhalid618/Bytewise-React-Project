import React from 'react'
import icon1 from "../assets/community/Icon1.svg"
import icon2 from "../assets/community/Icon2.svg"
import icon3 from "../assets/community/Icon3.svg"

export const Community = () => {
    return (
        <div>
            <div className='text-center'>
                <h1 className='text-[#4D4D4D] text-4xl leading-[44px] font-semibold mt-10'>Manage your entire community</h1>
                <h1 className='text-[#4D4D4D] text-4xl leading-[44px] font-semibold'>in a single system</h1>
                <p className='text-[#717171] text-base font-normal my-2'>Who is Nextcent suitable for?</p>
            </div>
            <div className='px-36 flex justify-between items-center mt-5'>
                <div className='py-6 px-8 w-[307px] shadow-[0px_2px_4px_0px_rgba(171,190,209,0.20)] rounded-lg'>
                    <div>
                        <div className='relative text-center'>
                            <img className='inline-block' src={icon1} alt="" />
                            <span className='-z-10 absolute top-0 right-20 w-[50px] h-[49px] bg-[#E8F5E9] rounded-tl-[18px] rounded-tr-[5px] rounded-bl-[5px] rounded-br-[18px]'></span>
                        </div>
                        <h3 className='text-[#4D4D4D] font-bold text-[1.75rem] leading-9 text-center'>Membership Organisations</h3>
                    </div>
                    <p className='text-[#717171] text-sm font-normal text-center'>Our membership management software provides full automation of membership renewals and payments</p>
                </div>
                <div className='py-6 px-8 w-[307px] shadow-[0px_2px_4px_0px_rgba(171,190,209,0.20)] rounded-lg'>
                    <div>
                        <div className='relative text-center'>
                            <img className='inline-block' src={icon2} alt="" />
                            <span className='-z-10 absolute top-0 right-20 w-[50px] h-[49px] bg-[#E8F5E9] rounded-tl-[18px] rounded-tr-[5px] rounded-bl-[5px] rounded-br-[18px]'></span>
                        </div>
                        <h3 className='text-[#4D4D4D] font-bold text-[1.75rem] leading-9 text-center'>National Associations</h3>
                    </div>
                    <p className='text-[#717171] text-sm font-normal text-center'>Our membership management software provides full automation of membership renewals and payments</p>
                </div>
                <div className='py-6 px-8 w-[307px] shadow-[0px_2px_4px_0px_rgba(171,190,209,0.20)] rounded-lg'>
                    <div>
                        <div className='relative text-center'>
                            <img className='inline-block' src={icon3} alt="" />
                            <span className='-z-10 absolute top-0 right-20 w-[50px] h-[49px] bg-[#E8F5E9] rounded-tl-[18px] rounded-tr-[5px] rounded-bl-[5px] rounded-br-[18px]'></span>
                        </div>
                        <h3 className='text-[#4D4D4D] font-bold text-[1.75rem] leading-9 text-center'>Clubs And Groups</h3>
                    </div>
                    <p className='text-[#717171] text-sm font-normal text-center'>Our membership management software provides full automation of membership renewals and payments</p>
                </div>
            </div>
        </div>
    )
}
