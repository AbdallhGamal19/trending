import React from 'react'
import { Link } from 'react-router-dom'
import styles from './mediaItem.module.scss'

export default function MediaItems({item}) {
  return (
    
      <div className="col-md-3">
        <Link className='nav-link' to={`/detalis/${item.id}/${item.media_type}`}>
        <div className="box position-relative">
          <span className={`${styles.vot} p-1 bg-info d-block position-absolute top-0 end-0 `}>{item.vote_average?item.vote_average.toFixed(1):item.popularity.toFixed(1)}</span>
          {item.poster_path?<img className='w-100' src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt="" />:
          <img className='w-100' src={`https://image.tmdb.org/t/p/original/${item.profile_path}`} alt="" />}
          <h2 className='h6 m-1'>{item.title}{item.name}</h2>
        </div>
        </Link>
      </div>
    
    
  )
}
