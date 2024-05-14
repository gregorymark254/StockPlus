import React, { useState, useEffect, useCallback } from 'react'
import axios from '../../api/api';
import { Link } from 'react-router-dom';
import { MdOutlineBlock } from 'react-icons/md';
import Loader from '../Loader';
import Pagination from '../Pagination';

const Products = () => {

  const [products,setProducts] = useState('')
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(20);
  const [total, setTotal] = useState(0);

  // Fetch All products
  const getProducts = useCallback(async () => {
    try {
      const offset = (currentPage - 1) * recordsPerPage;
      const response = await axios.get(`/product?page_size=${recordsPerPage}&page_number=${offset}`);
      setProducts(response.data.Loan);
      setTotal(response.data.Total);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error);
      setLoading(false);
    }
  }, [currentPage,recordsPerPage]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <div className='mx-auto p-4'>
      <div className='bg-white rounded-lg p-4 lg:w-[78vw] xl:w-[81vw] 2xl:w-full'>
        <div className='flex flex-wrap items-center justify-between py-3'>
          <Link to='/app/addproduct' className='bg-[#6571ff] hover:bg-[#7c86f9] text-white px-5 py-2 rounded-lg'>Add Product</Link>
          <h5 className='text-[#6571ff]'>Showing {products.length} products</h5>
          <div className='py-2'>
            <form>
              <label htmlFor='search'><span className='hidden'>Search</span>
                <input
                  type='search'
                  id='search'
                  className='px-3 py-1.5 border bg-[#f2f9ff] border-slate-300 placeholder-slate-400 rounded-md focus:outline-none focus:border-[#6571ff] focus:ring-[#6571ff] focus:ring-1'
                  required
                  placeholder='Search product'
                  // value={searchUser}
                  // onChange={search.bind(this)}
                />
              </label>
            </form>
          </div>
        </div>
        {loading
          ? (
            <div className='flex items-center justify-center bg-[#f1f4f6] h-screen md:h-[56em] lg:h-[25em] xl:h-[35em] 2xl:lg:h-[48em]'>
              <Loader />
            </div>
            )
          : error
            ? (
              <div className='bg-[#f1f4f6] grid place-items-center h-screen md:h-[56em] lg:h-[25em] xl:h-[35em] 2xl:lg:h-[48em]'>
                <div className='grid place-items-center'>
                  <h2><MdOutlineBlock /></h2>
                  <h4>Error occurred while fetching data</h4>
                </div>
              </div>
              )
            : (
              <div className='overflow-x-auto h-[73vh]'>
                {products.length > 0
                  ? (
                    <table className='w-full text-left table-auto'>
                      <thead>
                        <tr className='border-b border-slate-500'>
                          <th className='p-2'>Loan Name</th>
                          <th className='p-2'>Publisher Name</th>
                          <th className='p-2'>Loan Type</th>
                          <th className='p-2'>Intrest Type</th>
                          <th className='p-2'>Currency</th>
                          <th className='p-2'>Loan Request Date</th>
                          <th className='p-2'>Loan Approval Date</th>
                          <th className='p-2'>View More</th>
                        </tr>
                      </thead>
                      <tbody>
                        {products.map((product) => (
                          <tr key={product.id}>
                            <td className='p-2 '>{product.loan_name}</td>
                            <td className='p-2'>{product.publisher_name}</td>
                            <td className='p-2'>{product.loan_type}</td>
                            <td className='p-2'>{product.interest_type}</td>
                            <td className='p-2'>{product.currency}</td>
                            <td className='p-2'>{product.loan_request_date}</td>
                            <td className='p-2'>{product.loan_approval_date}</td>
                            <td className='p-2'>view</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    )
                  : (
                    <div className='bg-[#f1f4f6] grid place-items-center h-screen md:h-[56em] lg:h-[25em] xl:h-[35em] 2xl:lg:h-[48em]'>
                      <div className='grid place-items-center'>
                        <h2><MdOutlineBlock /></h2>
                        <h4>No Data</h4>
                      </div>
                    </div>
                    )}
              </div>
              )}
          <div className='flex flex-wrap items-center justify-between mt-4 gap-4'>
          <div>
            <span className='mr-2'>Records per page:</span>
            <select
              className='px-3 py-1 border bg-[#f2f9ff] border-slate-300 rounded-md focus:outline-none focus:border-[#85d6e3] focus:ring-[#85d6e3]'
              value={recordsPerPage}
              onChange={(e) => {
                setRecordsPerPage(parseInt(e.target.value, 10));
                setCurrentPage(1);
              }}
            >
              <option value='20'>20</option>
              <option value='50'>50</option>
              <option value='75'>75</option>
              <option value='100'>100</option>
            </select>
          </div>
          <Pagination
            nPages={Math.ceil(total / recordsPerPage)}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  )
}

export default Products
