import React, { useState, useEffect, useCallback } from 'react'
import axios from '../../api/api';
import { Link, useParams } from 'react-router-dom';
import { MdOutlineBlock } from 'react-icons/md';
import Loader from '../Loader';
import Pagination from '../Pagination';


const MySupplies = () => {

  const [mysupplies,setMysupplies] = useState('')
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(20);
  const [total, setTotal] = useState(0);
  const [searchSupply, setSearchSupply] = useState('');
  const { id } = useParams()

  // Fetch All my supply profucts
  const getUsers = useCallback(async (offset, limit, search) => {
    try {
      const response = await axios.get(`/api/products/${id}?offset=${offset}&limit=${limit}&search=${search}`);
      setMysupplies(response.data.results);
      setTotal(response.data.total);
      setLoading(false);
      console.log(response)
    } catch (error) {
      console.log(error);
      setError(error);
      setLoading(false);
    }
  },[id]);

  // Search product
  const handleSearchChange = (e) => {
    setSearchSupply(e.target.value);
    setCurrentPage(1);
  };

  // debounce for search query
  useEffect(() => {
    const timerId = setTimeout(() => {
      setLoading(true);
      getUsers((currentPage - 1) * recordsPerPage, recordsPerPage, searchSupply);
    }, 500);
    return () => clearTimeout(timerId);
  }, [currentPage, recordsPerPage, searchSupply, getUsers]);

  return (
    <div className='mx-auto p-4'>
      <div className='bg-white rounded-lg p-4 lg:w-[78vw] xl:w-[81vw] 2xl:w-full'>
        <div className='flex flex-wrap items-center justify-between py-3'>
          <Link to={`/app/createproduct/${id}`} className='bg-[#6571ff] hover:bg-[#7c86f9] text-white px-5 py-2 rounded-lg'>Create Product</Link>
          <h5 className='text-[#6571ff]'>Showing {mysupplies.length} out of {total} Products</h5>
          <div className='py-2'>
            <form>
              <label htmlFor='search'><span className='hidden'>Search</span>
                <input
                  type='search'
                  id='search'
                  className='px-3 py-1.5 border bg-[#f2f9ff] border-slate-300 placeholder-slate-400 rounded-md focus:outline-none focus:border-[#6571ff] focus:ring-[#6571ff] focus:ring-1'
                  required
                  placeholder='Search product'
                  value={searchSupply}
                  onChange={handleSearchChange}
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
                {mysupplies.length > 0
                  ? (
                    <table className='w-full text-left table-auto'>
                      <thead>
                        <tr className='border-b border-slate-500'>
                          <th className='p-2'>Product ID</th>
                          <th className='p-2'>Product Name</th>
                          <th className='p-2'>Product Description</th>
                          <th className='p-2'>Product Price</th>
                          <th className='p-2'>Stock Level</th>
                          <th className='p-2'>Supplier Name</th>
                          <th className='p-2'>Category Name</th>
                        </tr>
                      </thead>
                      <tbody>
                        {mysupplies.map((product) => (
                          <tr key={product.productId}>
                            <td className='p-2 '>{product.productId}</td>
                            <td className='p-2 '>{product.productName}</td>
                            <td className='p-2'>{product.productDescription}</td>
                            <td className='p-2'>{product.productPrice}</td>
                            <td className='p-2'>{product.stocklevel}</td>
                            <td className='p-2'>{product.supplierName}</td>
                            <td className='p-2'>{product.categoryName}</td>
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
              className='px-3 py-1 border bg-[#f2f9ff] border-slate-300 rounded-md focus:outline-none focus:border-[#6571ff] focus:ring-[#6571ff]'
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

export default MySupplies
