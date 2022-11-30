import React from 'react'
import "./home.scss"
import Navbar from '../../compnents/navbar/Navbar'
import Sidebar from '../../compnents/sidebar/Sidebar'
import Widget from '../../compnents/widget/Widget'
import Featured from '../../compnents/featured/Featured'
import Table from '../../compnents/table/Table'
import Chart from '../../compnents/chart/Chart'

const Home = () => {
    return (
        <>
            <div className='home'>
                <Sidebar />
                <div className='homeContainer'>
                    <Navbar />
                    <div className='widgets'>
                        <Widget type="user" />
                        <Widget type="order" />
                        <Widget type="earning" />
                        <Widget type="balance" />
                    </div>
                    <div className='charts'>
                        <Featured />
                        <Chart title="Last 6 Months (Revenue)" aspect={2 / 1}/>
                    </div>
                    <div className='listContainer'>
                        <div className='listTitle'>Latest Transactions</div>
                        <Table />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home