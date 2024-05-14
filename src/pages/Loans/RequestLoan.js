import React, { useState } from 'react';
import axios from '../../api/api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const RequestLoan = () => {

  const [product_id,setProduct_id] = useState('')
  const [amount,setAmount] = useState('')
  const [asset_amount,setAsset_amount] = useState('')
  const [entity_id,setEntity_id] = useState('')

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/loan_request',
        { product_id, amount, asset_amount, entity_id }
      )
      toast.success('Loan requested sucess')
      navigate('/app/loan-requests')
    } catch (error) {
      console.log(error)
      toast.error('Failed to request loan')
    }
  }

  return (
    <div className='mx-auto p-4 flex justify-center'>
      <div className='p-4 bg-white rounded-lg w-full lg:w-full xl:w-1/2'>
        <h3 className='text-xl text-center font-bold text-[#6571ff]'>Request Loan</h3>
        <form onSubmit={handleSubmit}>
          <div className='mt-2'>
            <label htmlFor='product Id'>Product Id
              <input
                type='text'
                required
                placeholder='Product Id'
                className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#6571ff] focus:ring-[#6571ff] w-full rounded-md focus:ring-1'
                value={product_id}
                onChange={(e) => setProduct_id(e.target.value)}
              />
            </label>
          </div>
          <div className='mt-2'>
            <label htmlFor='Name'>Amount
              <input
                type='number'
                required
                placeholder='Amount'
                className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#6571ff] focus:ring-[#6571ff] w-full rounded-md focus:ring-1'
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </label>
          </div>
          <div className='mt-2'>
            <label htmlFor='Type'>Assesment amount
              <input
                type='number'
                required
                placeholder='Assesment Amount'
                className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#6571ff] focus:ring-[#6571ff] w-full rounded-md focus:ring-1'
                value={asset_amount}
                onChange={(e) => setAsset_amount(e.target.value)}
              />
            </label>
          </div>
          <div className='mt-2'>
            <label htmlFor='Entity'>Entity Id
              <input
                type='number'
                required
                placeholder='Entity Id'
                className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#6571ff] focus:ring-[#6571ff] w-full rounded-md focus:ring-1'
                value={entity_id}
                onChange={(e) => setEntity_id(e.target.value)}
              />
            </label>
          </div>
          <div className='py-3'>
            <button type='submit' className='bg-[#6571ff] text-white px-5 py-1 w-full hover:bg-[#7c86f9]'>Request Loan</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RequestLoan
