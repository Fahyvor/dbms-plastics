import React, {useState} from 'react'
import './sellers.css'
import { AiOutlineBars } from 'react-icons/ai'
import Logo from '../assets/logo.png'

const SellWaste = () => {
    const [show, setShow] = useState(false);

    const confirmSale = (e) => {
        // e.preventDefault;
    }

  return (
    <div className='w-full flex flex-col items-center pt-8 h-full'>
        <div className='mobile-nav flex flex-row-reverse
        items-center w-full justify-between px-5 pb-5 font-bold' onMouseLeave={() => setShow(false)}>
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

            <h1 className='text-2xl font-bold sell-header'>
                Welcome to Wastia Management!
            </h1>

        <form className='flex flex-col w-2/6
        max-sm:w-11/12 items-center gap-8 mt-8'
        onSubmit={confirmSale}>
            <input name='waste' type='text' placeholder='Waste(eg. Plastic)'
            required className='bg-gray-100 p-4 w-full'/>

            <input name='owner' type='text' placeholder='Owner of the waste'
            required className='bg-gray-100 p-4 w-full'/>

            <input name='size' type='text' placeholder='Size in Kg'
            required className='bg-gray-100 p-4 w-full'/>

            <input name='price' type='type' placeholder='Price'
            required className='bg-gray-100 p-4 w-full'/>

            <button type='submit' className='bg-lime-950
            text-white p-3 w-2/3'>Sell</button>
        </form>

        <div className='footer text-center pt-3 mt-5'>
            <small>&copy; Waste Management Agency</small>
        </div>
    </div>
  )
}

export default SellWaste