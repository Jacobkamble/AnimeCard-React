import AnimeContext from "../context/animeContext";
import { useEffect, useContext } from "react";
import BoxItems from "./BoxItems";

export default function Filter(props) {
    const context = useContext(AnimeContext);
    const { result, fetchData } = context;

    useEffect(() => {
        fetchData();
        //eslint-disable-next-line
    }, []);

    return (

        <>
            <div className="container my-5">
                <div className="row">
                    {result.filter((ele) => {
                        return ele.genres[0].name.toLowerCase().includes(props.filter);
                    }).map((element) => {
                        return <BoxItems key={element.mal_id} title={element.title}
                            img={element.images.jpg.image_url} rating={element.rating}
                            genres={element.genres[0].name} />
                    })}
                </div>
            </div>
        </>
    )
}

