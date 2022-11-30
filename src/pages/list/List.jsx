import React from 'react'
import Datatable from '../../compnents/datatable/Datatable'
import Navbar from '../../compnents/navbar/Navbar'
import Sidebar from '../../compnents/sidebar/Sidebar'
import "./list.scss"

const List = ({ columns }) => {
    return (
        <>
            <div className='list'>
                <Sidebar />
                <div className='listContainer'>
                    <Navbar />
                    <Datatable columns={columns} />
                </div>
            </div>
        </>
    )
}

export default List