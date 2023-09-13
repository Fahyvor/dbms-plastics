import React, { useState } from 'react'
import { AiOutlineBars } from 'react-icons/ai'
import Logo from '../assets/logo.png'

const Products = () => {
    const [show, setShow] = useState(false);

  return (
    <div className='pt-5 w-full'>
        <div className='mobile-nav flex flex-row-reverse
        items-center w-full justify-between px-5 font-bold' onMouseLeave={() => setShow(false)}>
                <AiOutlineBars size={45} onClick={() => setShow(true)} 
                className='hidden max-sm:flex'/>
                <div className='nav-logo w-1/4'>
                    <a href='/'><img src={Logo} alt='logo' /></a>
                </div>
                {show ? (
                    <div className='flex flex-col absolute gap-5
                    items-center seller-nav-links bg-white p-3 w-full'>
                        <a href='/'>HOME</a>
                        <a href='/sell'>SELL PLASTICS</a>
                        <a href='/buy'>BUY PLASTICS</a>
                        <a>ABOUT</a>
                        <a>CONTACT US</a>
                    </div>
                ): null}
        </div>

        <div>
            <h1
            className='text-center font-bold
            text-2xl mt-5 pb-5 text-lime-950'>Make your choice of Plastic</h1>
        </div>
        <div className='flex px-5 gap-1 justify-center font-bold'>
            <div className='bg-gray-100 p-2
            w-1/4 text-center'><h>Waste</h>
            </div>
            <div className='bg-gray-100 p-2
            w-1/4 text-center'><h>Owner</h>
            </div>
            <div className='bg-gray-100 p-2
            w-1/4 text-center'><h>Size</h>
            </div>
            <div className='bg-gray-100 p-2
            w-1/4 text-center'><h>Price</h>
            </div>
            {/* <div><a href='/'>Buy</a></div> */}
        </div>
    </div>
  )
}

export default Products