import React, { useContext, useEffect } from 'react';
import AnimeContext from '../context/animeContext';
import WatchListCard from './WatchListCard';

export default function Watchlist() {

  const context = useContext(AnimeContext);
  const { watchlist, setWatchlist } = context;

  useEffect(() => {

    const myWatchlist = JSON.parse(localStorage.getItem("anime-watchlist"));
    if (myWatchlist) {
      setWatchlist(myWatchlist);
    }
//eslint-disable-next-line
  },[])

  return (
    <>
      <div className="container my-5">
        <div className="row">

          {watchlist.filter((element) => {
            return element.title.length !== 0
          }).map((element) => {
            return <WatchListCard key={element.title} title={element.title}
              img={element.image} rating={element.rating}
              genres={element.genres} />
          })}
        </div>
      </div>

    </>
  )
}
