import React, { useContext } from 'react'
import { useState } from 'react';
import {Link } from 'react-router-dom';
import AnimeContext from '../context/animeContext';

export default function BoxItems(props) {
    const context = useContext(AnimeContext);
    const { watchlist, setWatchlist, setIndex } = context;
    const [check, setCheck] = useState(false)


    // const removeDuplicate = (arr, key) => {

    //     let jsonObject = arr.map(JSON.stringify);
    //     let uniqueSet = new Set(jsonObject);
    //     let newArr = Array.from(uniqueSet).map(JSON.parse);
    //     return newArr;
    // }

    const addWatch = async (e) => {

        setCheck(true);
        await setWatchlist(
            watchlist.concat({
                title: props.title,
                rating: props.rating,
                genres: props.genres,
                image: props.img
            })
        )
    }
    const findIndex = (e) => {
        setIndex(props.index);
    }

    return (
        <>
            <div className="col-md-4 my-5">
                <div className="card" >
                    <img src={props.img} style={{ height: "25rem" }} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h4 className="card-title">{props.title}</h4>
                        <p className="card-text"><strong>Rating : </strong> {props.rating}</p>
                        <p className='card-text'><strong>Genres : </strong> {props.genres}</p>
                        <Link to="/more" onClick={findIndex} className="btn btn-dark my-1">More Details</Link>
                        <button value={check} className={`btn btn-dark mx-2 my-1 ${check ? "disabled" : ""}`} onClick={addWatch}>{check === true ? "Added" : "Add to Watchlist"}
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
