import React, { useState, useEffect } from "react";
import Title from "./components/Title/Title";
import logo from './assets/images/logo512.png';
import "./App.css";

import { token, apiKey } from './assets/index';
import TurnPage from "./components/TurnPage/TurnPage";
export default function App() {

    const [page, setPage] = useState(1);
    const [viewing, setViewing] = useState("example");
    const [user, setUser] = useState({ request_token: '', session_id: '', status: '' });
    const [media, setMedia] = useState({ example: [{}], all: [], today: [], week: [] });

    const [details, setDetails] = useState({});


    async function toggleDetails(titleId) {
        if (!details[titleId]) {
            setDetails({ ...details, [titleId]: true });
        }
        else {
            setDetails({ ...details, [titleId]: false });
        }
    }

    useEffect(() => {
        console.log(details);
    }, [details])


    async function guestLogin() {
        try {
            const res = await fetch(`https://api.themoviedb.org/3/authentication/guest_session/new?api_key=${apiKey}`);
            const data = await res.json();
            console.log("Guest login: ", data);

        }
        catch (e) {
            console.error(e);
        }
    }

    function logout() {
        setUser({ request_token: '', session_id: '', status: '' });
    }

    async function getToken() {
        try {
            const res = await fetch(`https://api.themoviedb.org/4/auth/request_token?api_key=${apiKey}`, {
                method: "POST",
                headers: {
                    "content-type": "application/json;charset=utf-8",
                    "authorization": `Bearer ${token}`
                },
                body: {
                    "redirect_to": "http://www.themoviedb.org/"
                },
            })
            let data = await res.json();
            if (user.request_token.length === 0) {
                setUser({ ...user, request_token: data.request_token })
            }
        }
        catch (e) {
            console.log(e);
            console.error(e);
        }

    }

    async function topWeek() {
        const res = await fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}&page=${page}`)
        const data = await res.json();
        console.log("This Week: ", data);
        setViewing("week");
        setMedia({ ...media, week: data.results })
    }

    async function topToday() {
        const res = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}&page=${page}`)
        const data = await res.json();
        console.log("Today: ", data);
        setViewing('today');
        setMedia({ ...media, today: data.results })
    }

    useEffect(() => {
        if (page < 1) {
            setPage(1);
        }
        console.log("Page: ", page);
        if (viewing === "today") {
            topToday();
        }
        else if (viewing === "week") {
            topWeek();
        }
    }, [page])

    return (
        <div className="app">
            <div className="category_block">
                <button type='button' onClick={() => topToday()}>Today's Favorites</button>
                <button type='button' onClick={() => topWeek()}>This Week's Favorites</button>
            </div>
            <TurnPage page={page} setPage={setPage} />
            <section className="results_block">
                {viewing === 'example' && media['example'].length &&
                    <div className="title-container" onClick={() => toggleDetails('example')} hidden={details["example"]}>
                        <h3>Title of Film, Show, etc.</h3>
                        <img src={logo} alt="movie reel" />
                    </div>
                }
                {viewing !== 'example' && media[viewing] && media[viewing].map(title =>
                    <Title title={title} toggleDetails={toggleDetails} key={title.id} />
                )}
            </section>
            <TurnPage page={page} setPage={setPage} />

        </div>
    )
}