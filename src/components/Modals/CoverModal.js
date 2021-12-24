import { useState } from 'react';
import "./Modal.css";

export default function CoverModal({ display, title }) {

    function showInfo() {

    }


    if (display) {
        return (
            <div className="cover_modal">
                <button onClick={(e) => showInfo()}>➕More</button>
            </div>
        )
    }
    else {
        return null;
    }
};