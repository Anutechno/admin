import React, { useContext } from 'react'
import "./sidebar.scss"
import { Dashboard, PersonOutline, LocalShipping, CreditCard, Store, InsertChart, SettingsApplications, ExitToApp, NotificationsNone, SettingsSystemDaydreamOutlined, PsychologyOutlined, AccountCircleOutlined } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { DarkModeContext } from '../../context/darkModeContext'

const Sidebar = () => {
    const { dispatch } = useContext(DarkModeContext)
    return (
        <>
            <div className='sidebar'>
                <div className='top'>
                    <Link to="/" style={{ textDecoration: "none" }} >
                        <span className='logo'>AnuADMIN</span>
                    </Link>
                </div>
                <hr />
                <div className='center'>
                    <ul>
                        <p className='title'>MIAN</p>
                        <li>
                            <Link to="/" style={{ textDecoration: "none" }} >
                                <Dashboard className='icon' />
                                <span>Dashboard</span>
                            </Link>

                        </li>
                        <p className='title'>LISTS</p>
                        <Link to="/users" style={{ textDecoration: "none" }}>
                            <li>
                                <PersonOutline className='icon' />
                                <span>User</span>
                            </li>
                        </Link>
                        <Link to="/hotels" style={{ textDecoration: "none" }}>
                            <li>
                                <Store className='icon' />
                                <span>Hotels</span>
                            </li>
                        </Link>
                        <Link to="/rooms" style={{ textDecoration: "none" }}>
                            <li>
                                <CreditCard className='icon' />
                                <span>Rooms</span>
                            </li>
                        </Link>
                        <li>
                            <LocalShipping className='icon' />
                            <span>Delivery</span>
                        </li>
                        <p className='title'>USEFULL</p>
                        <li>
                            <InsertChart className='icon' />
                            <span>stats</span>
                        </li>
                        <li>
                            <NotificationsNone className='icon' />
                            <span>Notificatin</span>
                        </li>
                        <p className='title'>SERVICE</p>
                        <li>
                            <SettingsSystemDaydreamOutlined className='icon' />
                            <span>System Helth</span>
                        </li>
                        <li>
                            <PsychologyOutlined className='icon' />
                            <span>Logs</span>
                        </li>
                        <li>
                            <SettingsApplications className='icon' />
                            <span>Settings</span>
                        </li>
                        <p className='title'>USER</p>
                        <li>
                            <AccountCircleOutlined className='icon' />
                            <span>Profile</span>
                        </li>
                        <li>
                            <ExitToApp className='icon' />
                            <span>LogOut</span>
                        </li>
                    </ul>
                </div>
                <div className='bottom'>
                    <div className='colorOption'
                        onClick={() => dispatch({ type: "LIGHT" })} ></div>
                    <div className='colorOption'
                        onClick={() => dispatch({ type: "DARK" })} ></div>
                </div>
            </div>
        </>
    )
}

export default Sidebar