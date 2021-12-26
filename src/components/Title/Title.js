import React, { useState, useEffect } from "react";
import CoverModal from "../Modals/CoverModal";
import logo from '../../assets/images/logo512.png';
import { apiKey } from '../../assets/index';
import "./Title.css";

export default function Title({ title, toggleDetails }) {

    const [display, setDisplay] = useState(false);

    return (
        <div className='cover_container' onMouseEnter={() => setDisplay(true)} onMouseLeave={() => setDisplay(false)}>
            <img src={`https://image.tmdb.org/t/p/w300/${title.poster_path}?api_key=${apiKey}`} className="cover_image" alt={title.media_type} />
            <CoverModal display={display} title={title} />
        </div>
    )
}