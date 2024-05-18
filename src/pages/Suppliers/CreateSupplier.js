import React, { useState } from 'react';
import axios from '../../api/api';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

const CreateSupplier = () => {

  const [supplierName, setSupplierName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const navigate = useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      await axios.post('/api/supplier',
        {  supplierName, contactPerson, contactNumber, email, address }
      )
      toast.success('Supplier added sucessfully')
      navigate('/app/suppliers')
    } catch (error) {
      console.log(error)
      toast.error('Failed to add supplier')
    }
  }

  return (
    <div className='mx-auto p-4 flex justify-center'>
      <div className='p-4 bg-white rounded-lg w-full lg:w-full xl:w-1/2'>
        <h3 className='text-xl text-center font-bold text-[#6571ff]'>Add New Supplier.</h3>
        <form onSubmit={handleSubmit}>
          <div className='my-2'>
            <label htmlFor='Suppliername'><span>Supplier Name</span>
              <input
                type='text'
                required
                placeholder='Supplier Name'
                className='px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#6571ff] focus:ring-[#6571ff] block w-full rounded-md sm:text-sm focus:ring-1'
                value={supplierName}
                onChange={(e) => setSupplierName(e.target.value)}
              />
            </label>
          </div>
          <div className='my-2'>
            <label htmlFor='contact'><span>Contact Person</span>
              <input
                type='text'
                required
                placeholder='Contact Person'
                className='px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#6571ff] focus:ring-[#6571ff] block w-full rounded-md sm:text-sm focus:ring-1'
                value={contactPerson}
                onChange={(e) => setContactPerson(e.target.value)}
              />
            </label>
          </div>
          <div className='my-2'>
            <label htmlFor='contactNumber'><span>Phone Number</span>
              <input
                type='number'
                required
                placeholder='0700000000'
                className='px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#6571ff] focus:ring-[#6571ff] block w-full rounded-md sm:text-sm focus:ring-1'
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
              />
            </label>
          </div>
          <div className='my-2'>
            <label htmlFor='email'><span>Email</span>
              <input
                type='email'
                required
                placeholder='user@exapmle.com'
                className='px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#6571ff] focus:ring-[#6571ff] block w-full rounded-md sm:text-sm focus:ring-1'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>
          <div className='my-2'>
            <label htmlFor='address'><span>Address</span>
              <input
                type='text'
                required
                placeholder='Address'
                className='px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#6571ff] focus:ring-[#6571ff] block w-full rounded-md sm:text-sm focus:ring-1'
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </label>
          </div>
          <div className='py-3'>
            <button type='submit' className='bg-[#6571ff] text-white px-5 py-1 w-full hover:bg-[#7c86f9]'>Create Supplier</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateSupplier
