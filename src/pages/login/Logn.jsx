import React, { useContext, useState } from 'react'
import "./login.scss"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import axios from 'axios'

const Logn = () => {
    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined,
    });
    const navigate = useNavigate();
    const { loading, error, dispatch } = useContext(AuthContext)

    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };
    const handleClick = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_STRAT" });
        try {
            const res = await axios.post("/auth/login", credentials);
            if (res.data.isAdmin) {
                dispatch({ type: "LOGIN_SUCCES", payload: res.data.details });
                navigate("/")
            } else {
                dispatch({ type: "LOGIN_FAILURE", payload: { message: "You are not allowed" } });
            }
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });

        }
    }

    return (
        <>
            <div className='login'>
                <div className='lContainer'>
                    <input
                        type="text"
                        placeholder="username"
                        id="username"
                        onChange={handleChange}
                        className="lInput"
                    />
                    <input
                        type="password"
                        placeholder="password"
                        id="password"
                        onChange={handleChange}
                        className="lInput"
                    />
                    <button disabled={loading} onClick={handleClick} className="lButton" >Login</button>
                    {error && <span>{error.message}</span>}
                </div>
            </div>
        </>
    )
}

export default Logn