import React from 'react'

const Dashboard = () => {
  return (
    <div>
        <div className='dashboard-header'>
            <h1>Admin Dashboard</h1>
        </div>

        <div className='dashboard-header'>
            <div className='total-plastics'>
                <div className='plastic-icon'>

                </div>

                <div className=''>
                    <h3>Total Plastics</h3>
                    <h3>300</h3>
                </div>
            </div>

            <div className='total-sellers'>
                <div className='sellers-icon'>

                </div>
                <div className=''>
                    <h3>Total Sellers</h3>
                    <h3>50</h3>
                </div>
            </div>

            <div className='total-buyers'>
                <div className='buyers-icon'>

                </div>
                <div className=''>
                    <h3>Total Buyers</h3>
                    <h3>60</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard