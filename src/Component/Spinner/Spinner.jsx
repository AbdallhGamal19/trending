import React, { useContext } from 'react'

import { mediaContext } from '../../Context/MediaStore';

export default function Spinner() {
  let { DataOfMovies } = useContext(mediaContext)
  let bod = document.getElementById('body');
  if (DataOfMovies <= 0) {
    bod.classList.add('overflow-hidden')
  }

  return (
    <>
      <div id="loader">
        <div id="shadow"></div>
        <div id="box"></div>
      </div>
      <h4>Loader #6</h4>
    </>
  )
}
