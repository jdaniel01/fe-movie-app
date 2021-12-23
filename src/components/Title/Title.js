import React, { useState, useEffect } from "react";
import logo from '../../assets/images/logo512.png';
import { apiKey } from '../../assets/index';
import "./Title.css";

export default function Title({ title, toggleDetails }) {


    return (
        <div className={`${title.media_type}-container`} onClick={() => toggleDetails(title.id)} >
            <div className="details_container">
                <marquee direction="left" height="1fr">{(title.title) ? title.title : title.name}</marquee>
                <div className="sub-details">
                    <p>{(title.vote_average > 5) ? <>👍🏽</> : <>👎🏽</>} {title.vote_average} / 10</p>
                </div>
            </div>
            <div className='cover_container'>
                <img src={`https://image.tmdb.org/t/p/w300/${title.poster_path}?api_key=${apiKey}`} className="cover_image" />
            </div>
        </div>
    )
}