import React, { useState } from 'react';
import axios from '../../api/api';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

const CreateOrder = () => {
  
  const [userId, setUserId] = useState('');
  const [productId, setProductId] = useState('');
  const [quantity, setQuantity] = useState('');
  const [amount, setAmount] = useState('');

  const navigate = useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      await axios.post('/api/orders',
        {  userId, productId, quantity, amount }
      )
      toast.success('Order made sucessfully')
      navigate('/app/orders')
    } catch (error) {
      console.log(error)
      toast.error('Failed to add order')
    }
  }
  return (
    <div className='mx-auto p-4 flex justify-center'>
      <div className='p-4 bg-white rounded-lg w-full lg:w-full xl:w-1/2'>
        <h3 className='text-xl text-center font-bold text-[#6571ff]'>Add New Order.</h3>
        <form onSubmit={handleSubmit}>
        <div className='my-2'>
            <label htmlFor='userId'><span>User Id</span>
              <input
                type='number'
                required
                placeholder='User Id'
                className='px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#6571ff] focus:ring-[#6571ff] block w-full rounded-md sm:text-sm focus:ring-1'
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
              />
            </label>
          </div>
          <div className='my-2'>
            <label htmlFor='productid'><span>productId</span>
              <input
                type='number'
                required
                placeholder='Order Date'
                className='px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#6571ff] focus:ring-[#6571ff] block w-full rounded-md sm:text-sm focus:ring-1'
                value={productId}
                onChange={(e) => setProductId(e.target.value)}
              />
            </label>
          </div>
          <div className='my-2'>
            <label htmlFor='quantity'><span>Quantity</span>
              <input
                type='number'
                required
                placeholder='Quantity'
                className='px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#6571ff] focus:ring-[#6571ff] block w-full rounded-md sm:text-sm focus:ring-1'
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </label>
          </div>
          <div className='my-2'>
            <label htmlFor='Amount'><span>Amount</span>
              <input
                type='number'
                required
                placeholder='Amount'
                className='px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#6571ff] focus:ring-[#6571ff] block w-full rounded-md sm:text-sm focus:ring-1'
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </label>
          </div>
          <div className='py-3'>
            <button type='submit' className='bg-[#6571ff] text-white px-5 py-1 w-full hover:bg-[#7c86f9]'>Create Order</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateOrder
