import React, { useState } from 'react'
import './homepage.css'
import { AiOutlineBars } from 'react-icons/ai'
import { BsFillPhoneVibrateFill } from 'react-icons/bs'
import { MdPhoneInTalk, MdEmail } from 'react-icons/md'
import Logo from '../assets/logo.png';

const Homepage = () => {
    const [show, setShow] = useState(false);
  return (
    <div className='homepage w-full'>
        <div className='header-nav flex text-white gap-5 py-2
        justify-center max-sm:flex-col items-center max-sm:gap-2'>
            <div className='flex gap-3 items-center'>
                <MdPhoneInTalk size={25}/>
                <p className='font-bold'>wastemanagement@gmail.com</p>
            </div>

            <div className='flex gap-3 items-center'>
                <MdEmail size={25} />
                <p className='font-bold'>08025659854</p>
            </div>
        </div>

        <div className='bottom-nav bg-white flex justify-around
        px-2 max-sm:justify-between max-sm:py-2 max-sm:items-center
        max-sm:px-5'>
            <div className='nav-logo w-1/4'>
                <a href='/'><img src={Logo} alt='logo' /></a>
            </div>

            <div className='nav-links flex gap-5
            items-center max-sm:hidden font-semibold'>
                <a href='/sell'>SELL PLASTICS</a>
                <a href='/buy'>BUY PLASTICS</a>
                <a>ABOUT</a>
                <a>CONTACT US</a>
            </div>

            <div className='mobile-nav hidden max-sm:flex flex-col' onMouseLeave={() => setShow(false)}>
                <AiOutlineBars size={45} onClick={() => setShow(true)}/>
                {show ? (
                    <div className='flex flex-col absolute gap-5 font-bold
                    items-center mobile-nav-links bg-white p-3 w-full'>
                        <a href='/'>HOME</a>
                        <a href='/sell'>SELL PLASTICS</a>
                        <a href='/buy'>BUY PLASTICS</a>
                        <a>ABOUT</a>
                        <a>CONTACT US</a>
                    </div>
                ): null}
            </div>

            <div className='nav-contacts max-sm:hidden flex gap-4 py-1'>
                <BsFillPhoneVibrateFill size={45}/>
                <div>
                    <small>Need special services?</small>
                    <h1>08025659854</h1>
                </div>
            </div>
        </div>

        <div className='body'>
            <div className='body-shadow'>
                <div className='body-left w-1/2 px-5 py-5 max-sm:w-full'>
                    <h1 className='text-white text-5xl
                    pt-5 font-bold leading-normal
                    tracking-wide'>A Wide Range Of
                        Services For Plastic
                        With Regards to Collection
                        and Recycling!
                    </h1>
                    <p className='text-white
                    mt-2 text-bold w-4/5'>We are an organization with 
                        proficiency in collection and
                        recycling of plastic waste.
                    </p>

                    <div className='buy-and-sell mt-4 flex
                    gap-6 items-center w-3/4 px-5 text-white
                    font-bold pb-5 max-sm:w-full'>
                        <p className='w-2/6 max-sm:w-1/2
                        text-center'><a href='/buy'>Buy From Us</a></p>
                        <p className='w-2/6 max-sm:w-1/2
                        text-center'><a href='/sell'>Sell To Us</a></p>
                    </div>
                </div>
            </div>
        </div>

        <div className='footer text-center pt-3'>
            <small>&copy; Waste Management Agency</small>
        </div>
    </div>
  )
}

export default Homepage