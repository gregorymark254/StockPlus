import React, { useState } from 'react';
import axios from '../../api/api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {

  const [first_name,setFirst_name] = useState('')
  const [surname,setSurname] = useState('')
  const [other_names,setOther_names] = useState('')
  const [msisdn,setMsisdn] = useState('')
  const [role,setRole] = useState('')
  const [id_number,setId_number] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/user',
        { first_name, surname, other_names, msisdn, id_number, role }
      )
      console.log(response)
      toast.success('User added sucessfully')
      // navigate('/app/users')
    } catch (error) {
      console.log(error)
      toast.error('Failed to add user')
    }
  }

  return (
    <div className='mx-auto p-4 flex justify-center'>
      <div className='p-4 bg-white rounded-lg w-full lg:w-full xl:w-1/2'>
        <h3 className='text-xl text-center font-bold text-[#6571ff]'>Add New User.</h3>
        <form onSubmit={handleSubmit}>
          <div className='mt-2'>
            <label htmlFor='Name'>First Name
              <input
                type='text'
                required
                placeholder='First Name'
                className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#6571ff] focus:ring-[#6571ff] w-full rounded-md focus:ring-1'
                value={first_name}
                onChange={(e) => setFirst_name(e.target.value)}
              />
            </label>
          </div>
          <div className='mt-2'>
            <label htmlFor='surname'>Surname
              <input
                type='text'
                required
                placeholder='Surname'
                className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#6571ff] focus:ring-[#6571ff] w-full rounded-md focus:ring-1'
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
              />
            </label>
          </div>
          <div className='mt-2'>
            <label htmlFor='Other Names'>Other Names
              <input
                type='text'
                placeholder='Other Names'
                className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#6571ff] focus:ring-[#6571ff] w-full rounded-md focus:ring-1'
                value={other_names}
                onChange={(e) => setOther_names(e.target.value)}
              />
            </label>
          </div>
          <div className='mt-2'>
            <label htmlFor='number'>Phone Number
              <input
                type='number'
                required
                placeholder='Phone Number'
                className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#6571ff] focus:ring-[#6571ff] w-full rounded-md focus:ring-1'
                value={msisdn}
                onChange={(e) => setMsisdn(e.target.value)}
              />
            </label>
          </div>
          <div className='mt-2'>
            <label htmlFor='Size'>ID Number
              <input
                type='number'
                required
                placeholder='ID Number'
                className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#6571ff] focus:ring-[#6571ff] w-full rounded-md focus:ring-1'
                value={id_number}
                onChange={(e) => setId_number(e.target.value)}
              />
            </label>
          </div>
          <div className='mt-2'>
            <label htmlFor='role'>Role
             <select 
              name="" id=""
              required
              className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#6571ff] focus:ring-[#6571ff] w-full rounded-md focus:ring-1'
              value={role}
              onChange={(e) => setRole(e.target.value)}
             >
              <option value="">Role</option>
              <option value="admin">Admin</option>
              <option value="customer">Customer</option>
             </select>
            </label>
          </div>
          <div className='py-3'>
            <button type='submit' className='bg-[#6571ff] text-white px-5 py-1 w-full hover:bg-[#7c86f9]'>Create User</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddUser
