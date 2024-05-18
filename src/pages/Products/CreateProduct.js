import React, { useState } from 'react';
import axios from '../../api/api';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

const CreateProduct = () => {
  const [supplierId, setSupplierId] = useState('');
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [stocklevel, setStocklevel] = useState('');
  const [categoryId, setCategoryId] = useState('');

  const navigate = useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      await axios.post('/api/createproduct',
        {  supplierId, productName, productDescription, productPrice, stocklevel,categoryId }
      )
      toast.success('Product added sucessfully')
      navigate('/app/products')
    } catch (error) {
      console.log(error)
      toast.error('Failed to add products')
    }
  }
  
  return (
    <div className='mx-auto p-4 flex justify-center'>
      <div className='p-4 bg-white rounded-lg w-full lg:w-full xl:w-1/2'>
        <h3 className='text-xl text-center font-bold text-[#6571ff]'>Add New Product.</h3>
        <form onSubmit={handleSubmit}>
          <div className='my-2'>
            <label htmlFor='supplierId'><span>Supplier Id</span>
              <input
                type='number'
                required
                placeholder='Supplier Id'
                className='px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#6571ff] focus:ring-[#6571ff] block w-full rounded-md sm:text-sm focus:ring-1'
                value={supplierId}
                onChange={(e) => setSupplierId(e.target.value)}
              />
            </label>
          </div>
          <div className='my-2'>
            <label htmlFor='name'><span>Product Name</span>
              <input
                type='text'
                required
                placeholder='Product Name'
                className='px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#6571ff] focus:ring-[#6571ff] block w-full rounded-md sm:text-sm focus:ring-1'
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
            </label>
          </div>
          <div className='my-2'>
            <label htmlFor='productDescription'><span>Product Description</span>
              <input
                type='text'
                required
                placeholder='Description'
                className='px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#6571ff] focus:ring-[#6571ff] block w-full rounded-md sm:text-sm focus:ring-1'
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
              />
            </label>
          </div>
          <div className='my-2'>
            <label htmlFor='productPrice'><span>Product Price</span>
              <input
                type='number'
                required
                placeholder='Price'
                className='px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#6571ff] focus:ring-[#6571ff] block w-full rounded-md sm:text-sm focus:ring-1'
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
              />
            </label>
          </div>
          <div className='my-2'>
            <label htmlFor='stocklevel'><span>Stock Level</span>
              <input
                type='number'
                required
                placeholder='Stock Level'
                className='px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#6571ff] focus:ring-[#6571ff] block w-full rounded-md sm:text-sm focus:ring-1'
                value={stocklevel}
                onChange={(e) => setStocklevel(e.target.value)}
              />
            </label>
          </div>
          <div className='my-2'>
            <label htmlFor='category'><span>Category Id</span>
              <input
                type='number'
                required
                placeholder='category Id'
                className='px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#6571ff] focus:ring-[#6571ff] block w-full rounded-md sm:text-sm focus:ring-1'
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
              />
            </label>
          </div>
          <div className='py-3'>
            <button type='submit' className='bg-[#6571ff] text-white px-5 py-1 w-full hover:bg-[#7c86f9]'>Create Product</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateProduct
