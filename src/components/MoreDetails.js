import React, { useContext, useEffect } from 'react'
import AnimeContext from '../context/animeContext';

export default function MoreDetails() {

    const context = useContext(AnimeContext);
    const { result, fetchData, index } = context;


    useEffect(() => {
        fetchData();
        //eslint-disable-next-line
    }, []);


    let data = [result[index]];

    let synopsis = "";
    let airedDate = "";
    let duration = "";
    let image = ""
    let youtube = ""
    let title = ""

    if (index !== null)
        data.map((element) => {
            title = element.title;
            synopsis = element.synopsis;
            airedDate = element.aired.string;
            duration = element.duration;
            image = element.images.jpg.large_image_url;
            youtube = element.trailer.embed_url

            return "";
        })

    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-11 my-5">
                        <div className="card mb-3" >
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={image} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{title}</h5>
                                        <h6 className="card-title">Synopsis : </h6>
                                        <p className="card-text">{synopsis}</p>
                                        <p className="card-text"><small className="text-muted">
                                            <strong>Aired Date : </strong>{airedDate} </small>
                                        </p>
                                        <p className="card-text"><small className="text-muted">
                                            <strong>Episodes : </strong>{duration} </small>
                                        </p>
                                        <a href={youtube} rel="noreferrer" target="_blank" className="btn btn-primary my-1">Watch trailer</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
