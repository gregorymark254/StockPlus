import React, { useState } from 'react';
import axios from '../../api/api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AddSupplyItem = () => {

  const [platform_onwer_id,setPlatform_onwer_id] = useState('')
  const [supplier_entity_id,setSupplier_entity_id] = useState('')
  const [name,setName] = useState('')
  const [type,setType] = useState('')
  const [quantity,setQuantity] = useState('')
  const [price,setPrice] = useState('')
  const [model,setModel] = useState('')
  const [size,setSize] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      await axios.post('/supply_item',
        { platform_onwer_id, supplier_entity_id, name, type, quantity, price, model, size }
      )
      toast.success('Supply item added')
      navigate('/app/supply-items')
    } catch (error) {
      console.log(error)
      toast.error('Failed to add item')
    }
  }
  return (
    <div className='mx-auto p-4 flex justify-center'>
      <div className='p-4 bg-white rounded-lg w-full lg:w-full xl:w-1/2'>
        <h3 className='text-xl text-center font-bold text-[#6571ff]'>Add New Supply Item.</h3>
        <form onSubmit={handleSubmit}>
          <div className='mt-2'>
            <label htmlFor='Platform Id'>Platform Owner Id
              <input
                type='text'
                required
                placeholder='Platform Owner id'
                className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#6571ff] focus:ring-[#6571ff] w-full rounded-md focus:ring-1'
                value={platform_onwer_id}
                onChange={(e) => setPlatform_onwer_id(e.target.value)}
              />
            </label>
          </div>
          <div className='mt-2'>
            <label htmlFor='supplier Id'>Supplier Entity Id
              <input
                type='text'
                required
                placeholder='Supplier Id'
                className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#6571ff] focus:ring-[#6571ff] w-full rounded-md focus:ring-1'
                value={supplier_entity_id}
                onChange={(e) => setSupplier_entity_id(e.target.value)}
              />
            </label>
          </div>
          <div className='mt-2'>
            <label htmlFor='Name'>Name
              <input
                type='text'
                required
                placeholder='Name'
                className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#6571ff] focus:ring-[#6571ff] w-full rounded-md focus:ring-1'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>
          <div className='mt-2'>
            <label htmlFor='Type'>Type
              <input
                type='text'
                required
                placeholder='Type'
                className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#6571ff] focus:ring-[#6571ff] w-full rounded-md focus:ring-1'
                value={type}
                onChange={(e) => setType(e.target.value)}
              />
            </label>
          </div>
          <div className='mt-2'>
            <label htmlFor='Quantity'>Quantity
              <input
                type='text'
                required
                placeholder='Quantity'
                className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#6571ff] focus:ring-[#6571ff] w-full rounded-md focus:ring-1'
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </label>
          </div>
          <div className='mt-2'>
            <label htmlFor='Price'>Price
              <input
                type='text'
                required
                placeholder='Price'
                className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#6571ff] focus:ring-[#6571ff] w-full rounded-md focus:ring-1'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </label>
          </div>
          <div className='mt-2'>
            <label htmlFor='model'>Model
              <input
                type='text'
                required
                placeholder='Model'
                className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#6571ff] focus:ring-[#6571ff] w-full rounded-md focus:ring-1'
                value={model}
                onChange={(e) => setModel(e.target.value)}
              />
            </label>
          </div>
          <div className='mt-2'>
            <label htmlFor='Size'>Size
              <input
                type='text'
                required
                placeholder='Size'
                className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#6571ff] focus:ring-[#6571ff] w-full rounded-md focus:ring-1'
                value={size}
                onChange={(e) => setSize(e.target.value)}
              />
            </label>
          </div>
          <div className='py-3'>
            <button type='submit' className='bg-[#6571ff] text-white px-5 py-1 w-full hover:bg-[#7c86f9]'>Create Item</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddSupplyItem
