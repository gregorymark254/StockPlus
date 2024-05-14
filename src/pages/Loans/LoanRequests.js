import React, { useState, useEffect, useCallback } from 'react'
import axios from '../../api/api';
import { Link } from 'react-router-dom';
import { MdOutlineBlock } from 'react-icons/md';
import Loader from '../Loader';
import Pagination from '../Pagination';

const LoansRequests = () => {

  const [loanrequest,setLoanrequest] = useState('')
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(20);
  const [total, setTotal] = useState(0);

  // Fetch All loan requests
  const getLoanRequest = useCallback(async () => {
    try {
      const offset = (currentPage - 1) * recordsPerPage;
      const response = await axios.get(`/loan_request?page_size=${recordsPerPage}&page_number=${offset}`);
      setLoanrequest(response.data.Loan);
      setTotal(response.data.Total);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error);
      setLoading(false);
    }
  }, [currentPage,recordsPerPage]);

  useEffect(() => {
    getLoanRequest();
  }, [getLoanRequest]);


  return (
    <div className='mx-auto p-4'>
      <div className='bg-white rounded-lg p-4 lg:w-[78vw] xl:w-[81vw] 2xl:w-full'>
        <div className='flex flex-wrap items-center justify-between py-3'>
          <Link to='/app/request-loan' className='bg-[#6571ff] hover:bg-[#7c86f9] text-white px-5 py-1.5 rounded-lg'>Request Loan</Link>
          <h5 className='text-[#6571ff]'>Showing {loanrequest.length} loans</h5>
          <div className='py-2'>
            <form>
              <label htmlFor='search'><span className='hidden'>Search</span>
                <input
                  type='search'
                  id='search'
                  className='px-3 py-1 border bg-[#f2f9ff] border-slate-300 placeholder-slate-400 rounded-md focus:outline-none focus:border-[#6571ff] focus:ring-[#6571ff] focus:ring-1'
                  required
                  placeholder='Search loan'
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
                {loanrequest.length > 0
                  ? (
                    <table className='w-full text-left table-auto'>
                      <thead>
                        <tr className='border-b border-slate-500'>
                          <th className='p-2'>Loan Start Date</th>
                          <th className='p-2'>Loan End Date</th>
                          <th className='p-2'>Initial Payment</th>
                          <th className='p-2'>Amount Disburse</th>
                          <th className='p-2'>Loan Priniple</th>
                          <th className='p-2'>Max Loan</th>
                          <th className='p-2'>Active Status</th>
                          <th className='p-2'>View More</th>
                        </tr>
                      </thead>
                      <tbody>
                        {loanrequest.map((loan) => (
                          <tr key={loan.id}>
                            <td className='p-2 '>{loan.loan_start_date}</td>
                            <td className='p-2'>{loan.loan_end_date}</td>
                            <td className='p-2'>{loan.initial_payment}</td>
                            <td className='p-2'>{loan.amount_disburse}</td>
                            <td className='p-2'>{loan.loan_principal}</td>
                            <td className='p-2'>{loan.maximum_loan}</td>
                            <td className='p-2'>{loan.active_status}</td>
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

export default LoansRequests
