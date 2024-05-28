import React, { useState, useEffect, useCallback } from 'react';
import axios from '../../api/api';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

const CreateOrder = () => {
  // getting current user
  const currentUser = window.localStorage.getItem('token');
  const user = JSON.parse(currentUser).data;
  
  const [userId, setUserId] = useState(user.userId);
  const [productId, setProductId] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const navigate = useNavigate()
  const [products,setProducts] = useState([])

  // Fetch All products
  const getProducts = useCallback(async () => {
    try {
      const response = await axios.get('/api/products');
      setProducts(response.data.results);
    } catch (error) {
      console.log(error);
    }
  },[]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const handleProductChange = (e) => {
    const selectedProductId = e.target.value;
    setProductId(selectedProductId);
    const selectedProduct = products.find(product => product.productId === parseInt(selectedProductId))
    if (selectedProduct) {
      setProductId(selectedProductId);
      setPrice(selectedProduct.productPrice);
    }
  }

  // submit data
  const handleSubmit = async(e) => {
    e.preventDefault();
    const amount = quantity * price
    try {
      const response = await axios.post('/api/orders',
        {  userId, productId, quantity, amount }
      )
      toast.success('Order made sucessfully')
      if (paymentMethod === 'Cash on delivery') {
        navigate('/app/myorders')
      } else {
        const orderId  = response.data.orderId
        console.log(orderId)
        await axios.post('/api/payment',
          { orderId, paymentMethod, amount }
        )
        navigate('/app/myorders')
      }
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
        <div className='my-2 hidden'>
            <label htmlFor='userId'><span>User Id</span>
              <input
                type='number'
                required
                disabled
                placeholder='User Id'
                className='px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#6571ff] focus:ring-[#6571ff] block w-full rounded-md sm:text-sm focus:ring-1'
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
              />
            </label>
          </div>
          <div className='my-2'>
            <label htmlFor='productid'><span>Product Name</span>
            <select
                name='org' id='org'
                className='px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#6571ff] focus:ring-[#6571ff] block w-full rounded-md sm:text-sm focus:ring-1'
                value={productId}
                onChange={handleProductChange}
              >
                <option value=''>Select Product</option>
                {products.map(product => (
                  <option key={product.productId} value={product.productId}>{product.productName}</option>
                ))}
              </select>
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
                disabled
                placeholder='Amount'
                className='px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#6571ff] focus:ring-[#6571ff] block w-full rounded-md sm:text-sm focus:ring-1'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </label>
          </div>
          <div className='my-2'>
            <label htmlFor="payment"><span>Payment Method</span>
              <select 
                name="" id=""
                required
                className='px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#6571ff] focus:ring-[#6571ff] block w-full rounded-md sm:text-sm focus:ring-1'
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              >
                <option value="">Select Payment Method</option>
                <option value="Cash on delivery">Cash on delivery</option>
                <option value="Mpesa">Mpesa</option>
                <option value="Paystack">Paystack</option>
              </select>
            </label>
          </div>
          <div>
            Total Amount : KSH {quantity * price}
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
