
import axios from 'axios';
const { createContext, useState, useEffect } = require("react");

export let mediaContext = createContext(0);

export default function MediaContextProvider({children}) {
    const [DataOfMovies, setDataOfMovies] = useState([]);
    const [DataOfTv, setDataOfTv] = useState([]);
    const [dataOfPeople, setDataOfPeople] = useState([]);
 
    let getMediaItems = async (mediaType,callback) => {
        let { data } = await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=b9d58fddc28747d259d024facaf1ce6d`);
        callback(data.results);
    }
    useEffect(() => {
        getMediaItems('movie',setDataOfMovies);
        getMediaItems('tv',setDataOfTv);
        getMediaItems('person',setDataOfPeople);
    }, []);
    
   return <mediaContext.Provider value={{DataOfMovies,DataOfTv,dataOfPeople}}>
        {children}
    </mediaContext.Provider>
}