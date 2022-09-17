import React, { useContext } from 'react'
import AnimeContext from '../context/animeContext';
import WatchListCard from './WatchListCard';

export default function Watchlist() {

  const context = useContext(AnimeContext);
  const { watchlist } = context;

  // const removeDuplicate = (arr, key) => {

  //   let jsonObject = arr.map(JSON.stringify);
  //   let uniqueSet = new Set(jsonObject);
  //   let newArr = Array.from(uniqueSet).map(JSON.parse);
  //   return newArr;
  // }

  //  let uniq=removeDuplicate(watchlist);

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
