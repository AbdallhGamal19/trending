import axios from 'axios';
import Joi from 'joi';
import React, { useState } from 'react'
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

export default function Login({saveUserData}) {
localStorage.removeItem('token')
  let [user, setUser] = useState({
    email: '',
    password: ''
  })
  const [spiner, setSpiner] = useState(false);
  const [erorrList, setErorrList] = useState([]);
  const [erorrMessage, setErorrMessage] = useState('')
  let Navigate = useNavigate();

  let getInputValue = (e) => {
    let muUser = { ...user };
    muUser[e.target.name] = e.target.value;
    setUser(muUser)
  }

  let sendDataToApi = async () => {
    let { data } = await axios.post(`https://route-movies-api.vercel.app/signin`, user);
    if (data.message === 'success') {
      localStorage.setItem('token',data.token);
      saveUserData();
      Navigate('/');
      setSpiner(false)
    }
    else {
      setErorrMessage(data.message);
      setSpiner(false)
    }
  }

  let validateDataForm = () => {
    let schema = Joi.object({
      email: Joi.string().required().email({ tlds: { allow: ['com', 'net'] } }),
      password: Joi.string().required().pattern(new RegExp(/^[a-z][0-9]{4}$/))
    })
    return schema.validate(user, { abortEarly: false })
  }

  let submitFormData = (e) => {
    setSpiner(true)
    e.preventDefault()
    let responsOfValidate = validateDataForm();
    if (responsOfValidate.error) {
      setErorrList(responsOfValidate.error.details);
      setSpiner(false)
    } else {
      sendDataToApi();
      setSpiner(true)
    }
  }


  return (
    <>
    <Helmet><title>Login</title></Helmet>
      <div className="w-75 m-auto py-5">
        <h2>Login</h2>
        <form onSubmit={submitFormData}>
          <div className="input-data my-2">
            <label htmlFor="email">Email</label>
            <input onChange={getInputValue} className='form-control my-2' type="email" name='email' />
            {erorrMessage === "email doesn't exist" ? <div className="alert alert-danger py-1">{erorrMessage}</div> : ''}
            {erorrList.filter((err) => err.context.label === "email")[0] ? <div className=" alert alert-danger  m-auto mb-3 p-1 ms-0">You should enter a valid email.</div> : ''}
          </div>
          <div className="input-data my-2">
            <label htmlFor="password">Password</label>
            <input onChange={getInputValue} className='form-control my-2' type="password" name='password' />
            {erorrList.filter((err) => err.context.label === "password")[0] ? <div className=" alert alert-danger  m-auto mb-3 p-1 ms-0">must start with a lowercase letter and then four numbers</div> : ''}
            {erorrMessage === 'incorrect password' ? <div className="alert alert-danger py-1">{erorrMessage}</div> : ''}

          </div>
          {spiner ? <button className='btn btn-info my-2 float-end' type='submit'><i className='fa fa-spinner fa-spin'></i></button> : <button className='btn btn-info my-2 float-end' type='submit'>login</button>}
          <div className="clear-fix"></div>
        </form>
      </div>
    </>
  )
}
