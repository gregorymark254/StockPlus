import React, { useState, useEffect, useCallback } from 'react'
import axios from '../../api/api';
import { Link } from 'react-router-dom';
import { MdOutlineBlock } from 'react-icons/md';
import { FaEye } from "react-icons/fa";
import Loader from '../Loader';
import Pagination from '../Pagination';

const Suppliers = () => {

  const [suppliers,setSuppliers] = useState('')
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(20);
  const [total, setTotal] = useState(0);
  const [searchSupplier, setSearchSupplier] = useState('');

  // Fetch All suppliers
  const getUsers = useCallback(async (offset, limit, search) => {
    try {
      const response = await axios.get(`/api/suppliers?offset=${offset}&limit=${limit}&search=${search}`);
      setSuppliers(response.data.results);
      setTotal(response.data.total);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error);
      setLoading(false);
    }
  },[]);

  // Search supplier
  const handleSearchChange = (e) => {
    setSearchSupplier(e.target.value);
    setCurrentPage(1);
  };

  // debounce for search query
  useEffect(() => {
    const timerId = setTimeout(() => {
      setLoading(true);
      getUsers((currentPage - 1) * recordsPerPage, recordsPerPage, searchSupplier);
    }, 500);
    return () => clearTimeout(timerId);
  }, [currentPage, recordsPerPage, searchSupplier, getUsers]);

  return (
    <div className='mx-auto p-4'>
      <div className='bg-white rounded-lg p-4 lg:w-[78vw] xl:w-[81vw] 2xl:w-full'>
        <div className='flex flex-wrap items-center justify-between py-3'>
          <Link to='/app/createsupplier' className='bg-[#6571ff] hover:bg-[#7c86f9] text-white px-5 py-2 rounded-lg'>Add Supplier</Link>
          <h5 className='text-[#6571ff]'>Showing {suppliers.length} out of {total} suppliers</h5>
          <div className='py-2'>
            <form>
              <label htmlFor='search'><span className='hidden'>Search</span>
                <input
                  type='search'
                  id='search'
                  className='px-3 py-1.5 border bg-[#f2f9ff] border-slate-300 placeholder-slate-400 rounded-md focus:outline-none focus:border-[#6571ff] focus:ring-[#6571ff] focus:ring-1'
                  required
                  placeholder='Search supplier'
                  value={searchSupplier}
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
                {suppliers.length > 0
                  ? (
                    <table className='w-full text-left table-auto'>
                      <thead>
                        <tr className='border-b border-slate-500'>
                          <th className='p-2'>ID</th>
                          <th className='p-2'>Supplier Name</th>
                          <th className='p-2'>Contact Person</th>
                          <th className='p-2'>Contact Number</th>
                          <th className='p-2'>Email Address</th>
                          <th className='p-2'>Address</th>
                          <th className='p-2'>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {suppliers.map((supplier) => (
                          <tr key={supplier.supplierId}>
                            <td className='p-2 '>{supplier.supplierId}</td>
                            <td className='p-2 '>{supplier.supplierName}</td>
                            <td className='p-2'>{supplier.contactPerson}</td>
                            <td className='p-2'>{supplier.contactNumber}</td>
                            <td className='p-2'>{supplier.email}</td>
                            <td className='p-2'>{supplier.Address}</td>
                            <td className='p-2'>
                              <Link to={`/app/mysupplies/${supplier.supplierId}`}><span className='text-xl text-blue-600 hover:text-blue-500'><FaEye /></span></Link>
                            </td>
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

export default Suppliers
