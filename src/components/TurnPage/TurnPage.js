import { useEffect, useState } from "react";

import "./TurnPage.css";

export default function TurnPage({ page, setPage }) {
    /// Functional component for changing the page of the movies displayed.


    return (
        <div className="turnpage_container">
            <div className="one_page_less" id={page} onClick={() => (page > 1) ? setPage(page - 1) : setPage(1)}>◀</div>
            {page > 3 ? (
                <>
                    <div className="page_number" id={`${page - 3}`} onClick={(e) => setPage(Number(e.target.id))}>{page - 3}</div>
                    <div className="page_number" id={`${page - 2}`} onClick={(e) => setPage(Number(e.target.id))}>{page - 2}</div>
                    <div className="page_number" id={`${page - 1}`} onClick={(e) => setPage(Number(e.target.id))}>{page - 1}</div>
                    <div className="page_number-current" id={`${page}`} onClick={(e) => setPage(Number(e.target.id))}>{page}</div>
                    <div className="page_number" id={`${page + 1}`} onClick={(e) => setPage(Number(e.target.id))}>{page + 1}</div>
                    <div className="page_number" id={`${page + 2}`} onClick={(e) => setPage(Number(e.target.id))}>{page + 2}</div>
                    <div className="page_number" id={`${page + 3}`} onClick={(e) => setPage(Number(e.target.id))}>{page + 3}</div>
                </>
            ) : (
                <>
                    <div className="page_number" id={1}>1</div>
                    <div className="page_number" id={2}>2</div>
                    <div className="page_number" id={3}>3</div>
                    <div className="page_number" id={4}>4</div>
                    <div className="page_number" id={5}>5</div>
                    <div className="page_number" id={6}>6</div>
                    <div className="page_number" id={7}>7</div>
                </>
            )
            }
            <div className="one_page_more" onClick={() => setPage(page + 1)}>▶</div>
        </div >
    )
}