import React, { useState, useEffect, useCallback } from 'react'
import axios from '../../api/api';
import { MdOutlineBlock } from 'react-icons/md';
import Loader from '../Loader';
import Pagination from '../Pagination';

const Transactions = () => {

  const [transactions,setTransactions] = useState('')
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(20);
  const [total, setTotal] = useState(0);

  // Fetch All transactions
  const getTransaction = useCallback(async () => {
    try {
      const offset = (currentPage - 1) * recordsPerPage;
      const response = await axios.get(`/transaction`);
      setTransactions(response.data.Data);
      setTotal(response.data.Total);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error);
      setLoading(false);
    }
  }, [currentPage,recordsPerPage]);

  useEffect(() => {
    getTransaction();
  }, [getTransaction]);


  return (
    <div className='mx-auto p-4'>
      <div className='bg-white rounded-lg p-4 lg:w-[78vw] xl:w-[81vw] 2xl:w-full'>
        <div className='flex flex-wrap items-center justify-between py-3'>
          <h5 className='text-[#6571ff]'>Showing {transactions.length} transactions</h5>
          <div className='py-2'>
            <form>
              <label htmlFor='search'><span className='hidden'>Search</span>
                <input
                  type='search'
                  id='search'
                  className='px-3 py-1 border bg-[#f2f9ff] border-slate-300 placeholder-slate-400 rounded-md focus:outline-none focus:border-[#6571ff] focus:ring-[#6571ff] focus:ring-1'
                  required
                  placeholder='Search transaction'
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
              <div className='overflow-x-auto'>
                {transactions.length > 0
                  ? (
                    <table className='w-full text-left table-auto'>
                      <thead>
                        <tr className='border-b border-slate-500'>
                          <th className='p-2'>Account Number</th>
                          <th className='p-2'>Balance Before</th>
                          <th className='p-2'>Balance After</th>
                          <th className='p-2'>Debit</th>
                          <th className='p-2'>Credit</th>
                          <th className='p-2'>Transaction Status</th>
                          <th className='p-2'>Time Created</th>
                          <th className='p-2'>View More</th>
                        </tr>
                      </thead>
                      <tbody>
                        {transactions.map((loan) => (
                          <tr key={loan.id}>
                            <td className='p-2 '>{loan.account_number}</td>
                            <td className='p-2'>{loan.balance_before}</td>
                            <td className='p-2'>{loan.balance_after}</td>
                            <td className='p-2'>{loan.debit}</td>
                            <td className='p-2'>{loan.credit}</td>
                            <td className='p-2'>{loan.transaction_status}</td>
                            <td className='p-2'>{loan.transaction_timestamp}</td>
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

export default Transactions
