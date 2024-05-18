import React, { useState, useEffect } from 'react'
import axios from '../../api/api';
import { useParams } from 'react-router-dom';

const OrderDetails = () => {

    const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [orderId, setOrderId] = useState('');
  const [productId, setProductId] = useState('');
    const { id } = useParams();

    useEffect(() => {
        const getOrderById = async () => {
          try {
            const response = await axios.get(`/api/order/${id}`);
            setQuantity(response.data.quantity);
            setPrice(response.data.price);
            setOrderId(response.data.orderId);
            setProductId(response.data.productId);
          } catch (error) {
            console.error(error);
          }
        };
        getOrderById();
      }, [id]);

  return (
    <div>
      <div className="mx-auto p-4">
        <h3 className='text-[#6571ff]'><b>Order Details</b></h3>
        <div className="bg-white rounded-lg p-4 mt-3">
            <div className="flex items-center space-x-3">
                <span><b>Quantity:</b></span>
                <p>{quantity}</p>
            </div>
            <div className="flex items-center space-x-3">
                <span><b>Price:</b></span>
                <p>{price}</p>
            </div>
            <div className="flex items-center space-x-3">
                <span><b>Order Id:</b></span>
                <p>{orderId}</p>
            </div>
            <div className="flex items-center space-x-3">
                <span><b>Product Id:</b></span>
                <p>{productId}</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default OrderDetails
