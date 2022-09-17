import React from 'react'

export default function WatchListCard(props) {
    return (
        <>
            <div className="col-md-4 my-5">
                <div className="card" >
                    <img src={props.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.rating}</p>
                        <p className='card-text'>{props.genres}</p>
                    </div>
                </div>
            </div>

        </>
    )
}
