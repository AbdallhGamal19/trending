


import { Helmet } from 'react-helmet';
import Movies from '../Movies/Movies';
import Owel from '../Owel/Owel';
import People from '../People/People';
import Tv from '../Tv/Tv';

export default function Home() {

  let itemNum=10;
  return (
    <>
    
    <Owel/>
      <Movies itemNum={itemNum}/>
      <Tv itemNum={itemNum}/>
      <People itemNum={itemNum}/>
      <Helmet><title>Home</title></Helmet>
    </>

  )
}
