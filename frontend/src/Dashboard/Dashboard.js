import React, { useEffect, useState } from 'react'
import './dashboard.css'
import { GiNuclearWaste } from 'react-icons/gi'
import { BsFillPeopleFill } from 'react-icons/bs'
import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://dbms-plastics.onrender.com',
});

const Dashboard = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
            axiosInstance.get('/getplastics').then((response) => {
            const allProducts = response.products.sort((p1, p2) => {
                return p1.id - p2.id;
            });
            setProducts(allProducts);
        });
    }, [])
  return (
    <div className='w-full text-center pt-4'>
        <div className='dashboard-header'>
            <h1 className='text-3xl font-bold mt-4 pb-4'>Admin Dashboard</h1>
        </div>

        <div className='dashboard-head-items px-3
        mt-5 pb-5 flex max-sm:flex-col gap-4 justify-center'>
            <div className='total-plastics w-1/3
            flex gap-5 items-center justify-center
            bg-slate-100 p-4 max-sm:w-full'>
                <div className='plastic-icon'>
                    <GiNuclearWaste size={45}/>
                </div>

                <div className=''>
                    <h3>Total Plastics</h3>
                    <h3>300</h3>
                </div>
            </div>

            <div className='total-sellers w-1/3
            flex gap-5 items-center justify-center
            bg-slate-100 p-4 max-sm:w-full'>
                <div className='sellers-icon'>
                    <BsFillPeopleFill size={45}/>
                </div>
                <div className=''>
                    <h3>Total Sellers</h3>
                    <h3>50</h3>
                </div>
            </div>

            <div className='total-buyers w-1/3
            flex gap-5 items-center justify-center
            bg-slate-100 p-4 max-sm:w-full'>
                <div className='buyers-icon'>
                <BsFillPeopleFill size={45}/>
                </div>
                <div className=''>
                    <h3>Total Buyers</h3>
                    <h3>60</h3>
                </div>
            </div>
        </div>

        <div className='dashboard-body w-full flex
        flex-col px-4 max-sm:mt-7 text-left'>
            <>
            <table className='max-sm:flex max-sm:gap-4'>
                <tr className='body-header'>
                    <th>#</th>
                    <th>Sellers Name</th>
                    <th>Product Selling</th>
                    <th>Product Cost</th>
                    <th>Product Size</th>
                    <th>Buyers</th>
                    <th>Item Bought</th>
                </tr>

            {products.map((product, index) => (
                <tr key={index}>
                    <td>1001</td>
                    <td>{product.name}</td>
                    <td>Polymer Plastic</td>
                    <td>$25</td>
                    <td>250Kg</td>
                    <td>Obinna</td>
                    <td>Plastic</td>
                </tr>
            ))}
            </table>
            </>
        </div>
    </div>
  )
}

export default Dashboard