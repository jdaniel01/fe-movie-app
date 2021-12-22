import React, { useState, useEffect } from "react";
import logo from '../../assets/images/logo512.png';
import { apiKey } from '../../assets/index';
import "./Title.css";

export default function Title({ title, toggleDetails }) {

    return (
        <div className="title-container" onClick={() => toggleDetails(title.id)} >
            <div className="details-container">
                <h3>{title.original_title}</h3>
                <div className="sub-details">
                    <p>{title.media_type}</p>
                    <p>⭐{title.vote_average}</p>
                </div>
            </div>
            <img src={`https://image.tmdb.org/t/p/w300/${title.poster_path}?api_key=${apiKey}`} />
        </div>
    )
}