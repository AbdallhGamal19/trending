import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom'
import Spinner from '../Spinner/Spinner';

export default function Details() {
  let { id, mediaType } = useParams();
  const [dataItem, setDataItem] = useState({})
  let itemDietails = async () => {
    let { data } = await axios.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=b9d58fddc28747d259d024facaf1ce6d&language=en-US`);
    setDataItem(data);
    console.log(data);
  }
  useEffect(() => {
    itemDietails();
  }, [])

  return (
    <>
      <Helmet><title>details</title></Helmet>
      {dataItem <= 0 ? <Spinner /> : document.body.classList.remove('overflow-hidden')}
      <div className="row py-5">
        <div className="col-md-4">
          <div className="item ">
            {dataItem.poster_path ?
              <img className='w-100' src={`https://image.tmdb.org/t/p/original/${dataItem.poster_path}`} alt={dataItem.title} /> :
              <img className='w-100' src={`https://image.tmdb.org/t/p/original/${dataItem.profile_path}`} alt={dataItem.name} />}

          </div>
        </div>
        <div className="col-md-8">
          <div className="item">
            <h1 className='h2'>{dataItem.title}{dataItem.name}</h1>
            <p className='fs-5 my-3'>{dataItem.overview}{dataItem.biography}</p>
            <div className="genres">
              {dataItem.genres?.map((genre, index) => <span key={index} className='bg-info me-3 p-2 rounded-2 d-inline-block'>{genre.name}</span>)}
            </div>
            <div className="vots my-3 fs-4 d-flex flex-column">
              {dataItem.vote_average ? <span className='my-2' > vote : {dataItem.vote_average?.toFixed(1)} </span> : <span className='my-2' > place of birth : {dataItem.place_of_birth} </span>}
              {dataItem.vote_count ? <span className='my-2' >vote count : {dataItem.vote_count?.toFixed(0)}</span> : <span className='my-2' > birthday : {dataItem.birthday} </span>}
              <span className='my-2' >popularity : {dataItem.popularity}</span>
              {dataItem.release_date ? <span className='my-2' >release date :  {dataItem.release_date}</span> : ""}
              {dataItem.last_air_date ? <span className='my-2' >last air date :  {dataItem.last_air_date}</span> : ""}
              {dataItem.known_for_department ? <span className='my-2' >known for department :  {dataItem.known_for_department}</span> : ""}
            </div>
          </div>
        </div>
      </div>

    </>



  )
}
