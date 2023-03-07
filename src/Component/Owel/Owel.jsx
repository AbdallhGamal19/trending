import React, { useContext, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom'
import { mediaContext } from '../../Context/MediaStore';



export default function Owel() {

    let { DataOfMovies, DataOfTv, dataOfPeople } = useContext(mediaContext);
    
    return (

        <OwlCarousel className='owl-theme py-5 my-3' autoplay={true} autoplayTimeout={500} autoplayHoverPause={true} margin={10} dots={false} items={5} loop={true}  >
            
                <>
                {DataOfTv.map((item, index) =>
                    <Link className='nav-link' to={`/detalis/${item.id}/${item.media_type}`} key={index} >
                        <div className='item'  >
                            <img className='w-100' src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt="" />
                        </div>
                    </Link>
                )}

                {DataOfMovies.map((item, index) =>
                    <Link className='nav-link' to={`/detalis/${item.id}/${item.media_type}`} key={index} >
                        <div className='item'  >
                            <img className='w-100' src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt="" />
                        </div>
                    </Link>
                )}

                {dataOfPeople.map((item, index) =>
                    <Link className='nav-link' to={`/detalis/${item.id}/${item.media_type}`} key={index} >
                        <div className='item'  >
                            <img className='w-100' src={`https://image.tmdb.org/t/p/original/${item.profile_path}`} alt="" />
                        </div>
                    </Link>
                )}

            </>
        </OwlCarousel>


    )
}
