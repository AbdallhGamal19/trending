
import React, { useContext } from 'react'
import { Helmet } from 'react-helmet';
import { mediaContext } from '../../Context/MediaStore';
import MediaItems from '../MediaItems/MediaItems';
import Spinner from '../Spinner/Spinner';


export default function People({ itemNum }) {
  let { dataOfPeople } = useContext(mediaContext);
  return (
    <>
    <Helmet><title>People</title></Helmet>
      {dataOfPeople <= 0 ? <Spinner /> : document.body.classList.remove('overflow-hidden')}
      <div className="row gy-3 py-5">
        <div className="col-md-3">
          <div className={`line w-25 borderOfAdress`}></div>
          <div className="des pt-3  h1">Trending<br />Movies<br />To watch now</div>
          <span className=' d-block mb-3 text-muted'>most watched movies by days</span>
          <div className={`line w-100 borderOfAdress`}></div>
        </div>
        {dataOfPeople.slice(0, itemNum).map((item, index) => <  MediaItems key={index} item={item} />)}
      </div>
    </>


  )
}
