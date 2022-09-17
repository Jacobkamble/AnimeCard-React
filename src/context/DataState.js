import animeContext from './animeContext';
import { useState } from 'react'

const DataState = (props) => {

    const[page,setPage]=useState(1);
    // const [mal_id,setMal_id]=useState("");
    const[index,setIndex]=useState(null);
    const [result, setResult] = useState([]);
    const[watchlist,setWatchlist]=useState([{title:"",rating:"",image:"",genres:""}]);
    const [check, setCheck] = useState(false);
    // const[newWatchlist,newSetwatchlist]=useState([])

    const fetchData = async () => {
        const url = `https://api.jikan.moe/v4/anime?page=${page}`;
        const data = await fetch(url);
        const parsedData = await data.json();
        setResult(parsedData.data);

    }

    return (
        <animeContext.Provider value={{result,setResult,fetchData,watchlist,setWatchlist,check,setCheck,index,setIndex,
        page,setPage}}>
            {props.children}
        </animeContext.Provider>
    )
};

export default DataState;