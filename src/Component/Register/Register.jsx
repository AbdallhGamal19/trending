import axios from 'axios';
import Joi from 'joi';
import React, { useState } from 'react'
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  let [user, setUser] = useState({
    first_name: '',
    last_name: '',
    age: '',
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
    let { data } = await axios.post("https://route-movies-api.vercel.app/signup", user);

    if (data.message === 'success') {
      Navigate('/login');
      setSpiner(false)
    }
    else {
      setErorrMessage(data.message);
    }
  }

  let validateDataForm = () => {
    let schema = Joi.object({
      first_name: Joi.string().required().alphanum().min(3).max(10),
      last_name: Joi.string().required().alphanum().min(3).max(10),
      age: Joi.number().required().min(15).max(80),
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
    <Helmet><title>Register</title></Helmet>
      <div className="w-75 m-auto py-5">
        <h2>Registration form</h2>
        <form onSubmit={submitFormData}>
          <div className="input-data my-2">
            <label htmlFor="first_name">First name</label>
            <input onChange={getInputValue} className='form-control my-2' type="text" name='first_name' />
            {erorrList.filter((err) => err.context.label === "first_name")[0] ? <div className=" alertsOfNames alert alert-danger  m-auto mb-3 py-1 ms-0">Your name should have at least 3 characters not more than 10 characters</div> : ''}
          </div>
          <div className="input-data my-2">
            <label htmlFor="last_name">Last name</label>
            <input onChange={getInputValue} className='form-control my-2' type="text" name='last_name' />
            {erorrList.filter((err) => err.context.label === "last_name")[0] ? <div className=" alertsOfNames alert alert-danger  m-auto mb-3 p-1 me-0 ">Your name should have at least 3 characters not more than 10 characters</div> : ''}
          </div>
          <div className="input-data my-2">
            <label htmlFor="age">Age</label>
            <input onChange={getInputValue} className='form-control my-2' type="number" name='age' />
            {erorrList.filter((err) => err.context.label === "age")[0] ? <div className=" alert alert-danger  m-auto mb-3 p-1 ms-0">Your age must be over 15 and not over 80.</div> : ''}
          </div>
          <div className="input-data my-2">
            <label htmlFor="email">Email</label>
            <input onChange={getInputValue} className='form-control my-2' type="email" name='email' />
            {erorrMessage ? <div className="alert alert-danger py-1">{erorrMessage}</div> : ''}
            {erorrList.filter((err) => err.context.label === "email")[0] ? <div className=" alert alert-danger  m-auto mb-3 p-1 ms-0">You should enter a valid email.</div> : ''}
          </div>
          <div className="input-data my-2">
            <label htmlFor="password">Password</label>
            <input onChange={getInputValue} className='form-control my-2' type="password" name='password' />
            {erorrList.filter((err) => err.context.label === "password")[0] ? <div className=" alert alert-danger  m-auto mb-3 p-1 ms-0">must start with a lowercase letter and then four numbers</div> : ''}

          </div>
          {spiner ? <button className='btn btn-info my-2 float-end' type='submit'><i className='fa fa-spinner fa-spin'></i></button> : <button className='btn btn-info my-2 float-end' type='submit'>Rigester</button>}
          <div className="clear-fix"></div>
        </form>
      </div>
    </>
  )
}
