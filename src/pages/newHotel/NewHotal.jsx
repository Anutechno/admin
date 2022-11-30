import React from 'react'
import { useState } from 'react'
import axios from "axios"
import "./newHotel.scss"
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import Sidebar from "../../compnents/sidebar/Sidebar"
import Navbar from "../../compnents/navbar/Navbar"
import useFetch from "../../hooks/useFetch"
import { hotelInputs } from "../../formSource"

const NewHotal = () => {
    const [files, setFiles] = useState("");
    const [info, setInfo] = useState({});
    const [rooms, setRooms] = useState([]);

    const { data, loading, error } = useFetch("/rooms");

    const handleChange = (e) => {
        setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    }
    const handleSelect = (e) => {
        const value = Array.from(
            e.target.selectedOptions,
            (option) => option.value
        );
        setRooms(value)
    }
    console.log(files);
    
    const handleClick = async (e) => {
        e.preventDefaut();
        try {
            const list = await Promise.all(
                Object.values(files).map(async (file) => {
                    const data = new FormData();
                    data.append("file", file)
                    data.append("upload_preset", "upload");
                    const uploadRes = await axios.post(
                        "https://api.cloudinary.com/v1_1/anudev/image/upload", data
                    );
                    const { url } = uploadRes.data;
                    return url;
                })
            );

            const newHotel = {
                ...info,
                rooms,
                photos: list,
            }
            await axios.post("/hotels", newHotel)

        } catch (err) {
            console.log(err);
        }
    }
    return (
        <>
            <div className='new'>
                <Sidebar />
                <div className='newContainer'>
                    <Navbar />
                    <div className='top'>
                        <h1>Add New Product</h1>
                    </div>
                    <div className='bottom'>
                        <div className='left'>
                            <img
                                src={files ?
                                    URL.createObjectURL(files[0])
                                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"}
                                alt="" />
                        </div>
                        <div className='right'>
                            <from>
                                <div className='fromInput'>
                                    <label htmlFor='file'>
                                        Image:<DriveFolderUploadOutlinedIcon className='icon' />
                                    </label>
                                    <input
                                        type="file"
                                        id="file"
                                        multiple
                                        onChange={(e) => setFiles(e.target.files)}
                                        style={{ display: "none" }}
                                    />
                                </div>
                                {hotelInputs.map((input) => (
                                    <div className='formInput' key={input.id}>
                                        <label>{input.label}</label>
                                        <input
                                            id={input.id}
                                            onChange={handleChange}
                                            type={input.type}
                                            placeholder={input.placeholder}
                                        />
                                    </div>
                                ))}
                                <div className='formInput'>
                                    <label>Featured</label>
                                    <select id="featured" onChange={handleChange}>
                                        <option value={false}>No</option>
                                        <option value={true}>Yes</option>
                                    </select>
                                </div>
                                <div className='selectRooms'>
                                    <label>Room</label>
                                    <select id='room' multiple onChange={handleSelect}>
                                        {loading ? "loading" : data && data.map((room) => (
                                            <option key={room._id} value={room._id}>
                                                {room.title}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <button onClick={handleClick}>Send</button>
                            </from>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewHotal