import React from 'react'
import Chart from '../../compnents/chart/Chart'
import Navbar from '../../compnents/navbar/Navbar'
import Sidebar from '../../compnents/sidebar/Sidebar'
import List from '../../compnents/table/Table'

import "./single.scss"


const Single = () => {
    return (
        <>
            <div className='single'>
                <Sidebar />
                <div className='singleContainer'>
                    <Navbar />
                    <div className='top'>
                        <div className='left'>
                            <div className='editButtn'>Edit</div>
                            <h1 className='title'>Information</h1>
                            <div className='item'>
                                <img
                                    src='https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
                                    alt=''
                                    className='itemImg'
                                />
                                <div className='details'>
                                    <h1 className='itemTitle'>Jane Doe</h1>
                                    <div className='detailItem'>
                                        <span className='itemKey'>Email</span>
                                        <span className='itemValue'>janedoe@gmail.com</span>
                                    </div>
                                    <div className='detailItem'>
                                        <span className='itemKey'>phone</span>
                                        <span className='itemValue'>+1 2345 67 89</span>
                                    </div>
                                    <div className='detailItem'>
                                        <span className='itemKey'>Address</span>
                                        <span className='itemValue'>Gardon NewYork</span>
                                    </div>
                                    <div className='detailItem'>
                                        <span className='itemKey'>Country</span>
                                        <span className='itemValue'>USA</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='right'>
                            <Chart aspect={3 / 1} title="User Spending (Last 6 Months)" />
                        </div>
                    </div>
                    <div className='bottom'>
                        <h1>Last Transactions</h1>
                        <List />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Single