import React, { useEffect, useContext } from 'react'
import BoxItems from './BoxItems';
import AnimeContext from '../context/animeContext';

export default function Box() {

    const context = useContext(AnimeContext);
    const { result, setResult, fetchData, page, setPage } = context;

    useEffect(() => {
        fetchData();
        //eslint-disable-next-line
    }, []);

    const handlePrevious = async () => {

        if (page >= 2) {
            setPage(page - 1);

            const url = `https://api.jikan.moe/v4/anime?page=${page - 1}`;
            const data = await fetch(url);
            const parsedData = await data.json();
            setResult(parsedData.data);

        }
    }

    const handleNext = async () => {
        setPage(page + 1);
        const url = `https://api.jikan.moe/v4/anime?page=${page + 1}`;
        const data = await fetch(url);
        const parsedData = await data.json();
        setResult(parsedData.data);
    }

    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    {result.map((element, index) => {
                        return <BoxItems key={element.mal_id} title={element.title}
                            index={index}
                            img={element.images.jpg.image_url} rating={element.rating}
                            genres={element.genres[0].name} />
                    })}
                    <div className="d-flex justify-content-between">
                        <button className={`btn btn-dark mx-2 my-1 ${page <= 0 ? "disableds" : ""}`} onClick={handlePrevious}>Previous</button>
                        <p className='text-center text-light'><strong>{page}</strong></p>
                        <button className={`btn btn-dark mx-2 my-1 `} onClick={handleNext}>Next</button>
                    </div>
                </div>
            </div>
        </>
    )
}
