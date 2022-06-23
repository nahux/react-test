import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const endpoint = 'http://localhost:3001/api/driver';

const AddDriver = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setbirthDate] = useState('');

  const navigate = useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();
    await axios.post(endpoint, {
      first_name: firstName,
      last_name: lastName,
      birth_date: birthDate
    });
    navigate('/');
  }
  return (
    <div className='mt-2'>
      <Link to="/driver/list" className='btn btn-dark mt-2 mb-2'><i className="bi bi-arrow-left"></i></Link>
      <div className='container'>
        <h3>Add a New Driver</h3>
        <form onSubmit={submitForm}>
          {/* First Name */}
          <div className='mb-3'>
            <label className='form-label' htmlFor="firstName">First Name</label>
            <input value={firstName} onChange={(e) => setFirstName(e.target.value)} name="firstName" type="text" className='form-control' />
          </div>
          {/* Last Name */}
          <div className='mb-3'>
            <label className='form-label' htmlFor="lastName">Last Name</label>
            <input value={lastName} onChange={(e) => setLastName(e.target.value)} name="lastName" type="text" className='form-control' />
          </div>
          {/* First Name */}
          <div className='mb-3'>
            <label className='form-label' htmlFor="birthDate">Birth Date</label>
            <input value={birthDate} onChange={(e) => setbirthDate(e.target.value)} name="birthDate" type="date" className='form-control' />
          </div>

          <button type="submit" className='btn btn-dark'>Add</button>
        </form>
      </div>
    </div>
  )
}

export default AddDriver