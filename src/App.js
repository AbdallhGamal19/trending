
import './App.css';
import Home from "./Component/Home/Home.jsx"
import Profile from "./Component/Profile/Profile"
import Login from "./Component/Login/Login"
import Details from "./Component/Details/Details"
import Movies from "./Component/Movies/Movies"
import Register from "./Component/Register/Register.jsx"
import People from "./Component/People/People.jsx"
import Tv from "./Component/Tv/Tv.jsx"
import Notfound from "./Component/Notfound/Notfound"
import MasterLayout from "./Component/MasterLayout/MasterLayout.jsx"
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { useContext } from 'react';
import ProtectedRoute from './Component/ProtectedRoute/ProtectedRoute';
import { contextuserData } from './Context/UserDataAndLogoutStoe';
import { Offline } from "react-detect-offline";

function App() {
  let { logout, saveUserData, userData } = useContext(contextuserData)
  let router = createHashRouter([
    {
      path: '', element: <MasterLayout logout={logout} userData={userData} />, errorElement: <Notfound />, children: [
        { index: true, element: <ProtectedRoute userData={userData}><Home /></ProtectedRoute> },
        { path: 'profile', element: <ProtectedRoute userData={userData}><Profile /></ProtectedRoute> },
        { path: 'details', element: <ProtectedRoute userData={userData}><Details /></ProtectedRoute> },
        { path: 'movies', element: <ProtectedRoute userData={userData}><Movies /></ProtectedRoute> },
        { path: 'People', element: <ProtectedRoute userData={userData}><People /></ProtectedRoute> },
        { path: 'tv', element: <ProtectedRoute userData={userData}><Tv /></ProtectedRoute> },
        { path: 'detalis/:id/:mediaType', element: <ProtectedRoute userData={userData}><Details /></ProtectedRoute> },
        { path: 'login', element: <Login saveUserData={saveUserData} /> },
        { path: 'register', element: <Register /> },


      ]
    }
  ])
  return (
    <>

      <Offline>
        <div className='bg-info w-25 text-center p-1 m-auto'>
          You are offline
        </div>
      </Offline>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
