import { useState } from 'react';
import "./Modal.css";

const month = {
    "01": "January",
    "02": "February",
    "03": "March",
    "04": "April",
    "05": "May",
    "06": "June",
    "07": "July",
    "08": "August",
    "09": "September",
    "10": "October",
    "11": "November",
    "12": "December"
}

export default function CoverModal({ display, title }) {

    const [modalT, setModalT] = useState("cover_modal-info");

    const [info, setInfo] = useState({
        title: (title.title) ? title.title : title.name,
        id: title.id,
        releaseDate: title.release_date ? title.release_date : title.first_air_date,
        overview: title.overview,
        media_type: title.media_type,
        vote: title.vote_average / 2,
    })
    if (display) {

        return (
            <div className={`${modalT}`} onMouseLeave={(e) => setModalT('cover_modal')}>
                {modalT === "cover_modal-info" &&
                    <>
                        <div>{info.title}</div>
                {/* <div>{info.vote}⭐</div> */}
                    <div className="title_details">{info.overview}</div>
                    </>

                }
                {modalT === "cover_modal" &&
                    <div className="info_button" onMouseEnter={() => setModalT("cover_modal-info")}>more...</div>
                }
            </div>
        )
    }
    else {
        return null;
    }
};