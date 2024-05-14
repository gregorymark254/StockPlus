import React, { useState } from 'react';
import axios from '../../api/api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const CreateProduct = () => {

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
        { name, type, quantity, price, model, size }
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
      <div className='p-4 bg-white rounded-lg w-full'>
        <h3 className='text-xl font-bold text-[#6571ff] my-4'>Add New Product.</h3>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4 mb-5 xl:grid-cols-4">
            <div className='mt-2'>
              <label htmlFor='loantype'>Loan Type
                <select 
                  name="" id=""
                  required
                  className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#6571ff] focus:ring-[#6571ff] w-full rounded-md focus:ring-1'
                  // value={role}
                  // onChange={(e) => setRole(e.target.value)}
                >
                  <option value="">Loan Type</option>
                  <option value="admin">Admin</option>
                  <option value="customer">Customer</option>
                </select>
              </label>
            </div>
            <div className='mt-2'>
              <label htmlFor='Loan Name'>Loan Name
                <input
                  type='text'
                  required
                  placeholder='Loan Name'
                  className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#6571ff] focus:ring-[#6571ff] w-full rounded-md focus:ring-1'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
            </div>
            <div className='mt-2'>
              <label htmlFor='currency'>Currency
                <select 
                  name="" id=""
                  required
                  className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#6571ff] focus:ring-[#6571ff] w-full rounded-md focus:ring-1'
                  // value={role}
                  // onChange={(e) => setRole(e.target.value)}
                >
                  <option value="">Currency</option>
                  <option value="admin">Admin</option>
                  <option value="customer">Customer</option>
                </select>
              </label>
            </div>
            <div className='mt-2'>
              <label htmlFor='loanduration'>Loan Duration
                <select 
                  name="" id=""
                  required
                  className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#6571ff] focus:ring-[#6571ff] w-full rounded-md focus:ring-1'
                  // value={role}
                  // onChange={(e) => setRole(e.target.value)}
                >
                  <option value="">Loan Duration</option>
                  <option value="admin">Admin</option>
                  <option value="customer">Customer</option>
                </select>
              </label>
            </div>
            <div className='mt-2'>
              <label htmlFor='Loan Name'>Maximum Loan Amount
                <input
                  type='number'
                  required
                  placeholder='Amount'
                  className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#6571ff] focus:ring-[#6571ff] w-full rounded-md focus:ring-1'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
            </div>
            <div className='mt-2'>
              <label htmlFor='Loan Name'>Minimum Loan Amount
                <input
                  type='number'
                  required
                  placeholder='Amount'
                  className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#6571ff] focus:ring-[#6571ff] w-full rounded-md focus:ring-1'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
            </div>
            <div className='mt-2'>
              <label htmlFor='loanduration'>Guarontership
                <select 
                  name="" id=""
                  required
                  className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#6571ff] focus:ring-[#6571ff] w-full rounded-md focus:ring-1'
                  // value={role}
                  // onChange={(e) => setRole(e.target.value)}
                >
                  <option value="">Guarontership</option>
                  <option value="admin">Admin</option>
                  <option value="customer">Customer</option>
                </select>
              </label>
            </div>
            <div className='mt-2'>
              <label htmlFor='Minimum Installment'>Minimum Installment
                <input
                  type='number'
                  required
                  placeholder='Amount'
                  className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#6571ff] focus:ring-[#6571ff] w-full rounded-md focus:ring-1'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
            </div>
            <div className='mt-2'>
              <label htmlFor='intrest type'>Intrest Type
                <select 
                  name="" id=""
                  required
                  className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#6571ff] focus:ring-[#6571ff] w-full rounded-md focus:ring-1'
                  // value={role}
                  // onChange={(e) => setRole(e.target.value)}
                >
                  <option value="">Guarontership</option>
                  <option value="admin">Admin</option>
                  <option value="customer">Customer</option>
                </select>
              </label>
            </div>
            <div className='mt-2'>
              <label htmlFor='loanduration'>Loan Interest Frequency
                <select 
                  name="" id=""
                  required
                  className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#6571ff] focus:ring-[#6571ff] w-full rounded-md focus:ring-1'
                  // value={role}
                  // onChange={(e) => setRole(e.target.value)}
                >
                  <option value="">Guarontership</option>
                  <option value="admin">Admin</option>
                  <option value="customer">Customer</option>
                </select>
              </label>
            </div>
            <div className='mt-2'>
              <label htmlFor='Loan Name'>Loan Interest rate
                <input
                  type='number'
                  required
                  placeholder='Loan Interest Rate'
                  className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#6571ff] focus:ring-[#6571ff] w-full rounded-md focus:ring-1'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
            </div>
            <div className='mt-2'>
              <label htmlFor='Loan Name'>Application Fee percentage
                <input
                  type='number'
                  required
                  placeholder='Application Fee percentage'
                  className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#6571ff] focus:ring-[#6571ff] w-full rounded-md focus:ring-1'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
            </div>
          </div>
          <hr className='border-[#6571ff]' />
          <div className="grid grid-cols-2 gap-4 my-5 xl:grid-cols-4">
            <div className='mt-2'>
              <label htmlFor='loantype'>Insurance Fee
                <select 
                  name="" id=""
                  required
                  className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#6571ff] focus:ring-[#6571ff] w-full rounded-md focus:ring-1'
                  // value={role}
                  // onChange={(e) => setRole(e.target.value)}
                >
                  <option value="">Insurance Fee</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </label>
            </div>
            <div className='mt-2'>
              <label htmlFor='upfront'>Upfront
                <select 
                  name="" id=""
                  required
                  className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#6571ff] focus:ring-[#6571ff] w-full rounded-md focus:ring-1'
                  // value={role}
                  // onChange={(e) => setRole(e.target.value)}
                >
                  <option value="">Upfront?</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </label>
            </div>
            <div className='mt-2'>
              <label htmlFor='earlyrepayment'>Early Repayment
                <select 
                  name="" id=""
                  required
                  className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#6571ff] focus:ring-[#6571ff] w-full rounded-md focus:ring-1'
                  // value={role}
                  // onChange={(e) => setRole(e.target.value)}
                >
                  <option value="">Early Repayment</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </label>
            </div>
            <div className='mt-2'>
              <label htmlFor='Early Repaymentplan'>Early Repayment
                <select 
                  name="" id=""
                  required
                  className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#6571ff] focus:ring-[#6571ff] w-full rounded-md focus:ring-1'
                  // value={role}
                  // onChange={(e) => setRole(e.target.value)}
                >
                  <option value="">Early Repayment</option>
                  <option value="days in loan">Days in loan</option>
                  <option value="full loan">Full loan</option>
                </select>
              </label>
            </div>
            <div className='mt-2'>
              <label htmlFor='Notification Frequency'>Notification Frequency
                <select 
                  name="" id=""
                  required
                  className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#6571ff] focus:ring-[#6571ff] w-full rounded-md focus:ring-1'
                  // value={role}
                  // onChange={(e) => setRole(e.target.value)}
                >
                  <option value="">Notification Frequency</option>
                  <option value="hourly">Hourly</option>
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="two weeks">Two weeks</option>
                  <option value="monthly">Monthly</option>
                  <option value="Three Months">Three Months</option>
                  <option value="Six Months">Six Months</option>
                  <option value="Yearly">Yearly</option>
                </select>
              </label>
            </div>
            <div className='mt-2'>
              <label htmlFor='Rollover Days'>Rollover Days
                <input
                  type='number'
                  required
                  placeholder='Rollover Days'
                  className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#6571ff] focus:ring-[#6571ff] w-full rounded-md focus:ring-1'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
            </div>
            <div className='mt-2'>
              <label htmlFor='Rollover frequency'>Rollover Frequency
                <input
                  type='number'
                  required
                  placeholder='Rollover Frequency'
                  className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#6571ff] focus:ring-[#6571ff] w-full rounded-md focus:ring-1'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
            </div>
            <div className='mt-2'>
              <label htmlFor='Rolloverrate'>Rollover Rate
                <input
                  type='number'
                  required
                  placeholder='Rollover Rate'
                  className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#6571ff] focus:ring-[#6571ff] w-full rounded-md focus:ring-1'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
            </div>
            <div className='mt-2'>
              <label htmlFor='Grace Period Interest'>Grace Period Interest
                <input
                  type='number'
                  required
                  placeholder='Grace Period Interest'
                  className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#6571ff] focus:ring-[#6571ff] w-full rounded-md focus:ring-1'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
            </div>
            <div className='mt-2'>
              <label htmlFor='recovery'>Recovery
                <select 
                  name="" id=""
                  required
                  className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#6571ff] focus:ring-[#6571ff] w-full rounded-md focus:ring-1'
                  // value={role}
                  // onChange={(e) => setRole(e.target.value)}
                >
                  <option value="">Recovery</option>
                  <option value="Debt Collection">Debt Collection</option>
                  <option value="Rollover">Rollover</option>
                  <option value="Loan end date">Loan end date</option>
                  <option value="Before loan end date">Before loan end date</option>
                </select>
              </label>
            </div>
            <div className='mt-2'>
              <label htmlFor='Debt Collection'>Debt Collection
                <select 
                  name="" id=""
                  required
                  className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#6571ff] focus:ring-[#6571ff] w-full rounded-md focus:ring-1'
                  // value={role}
                  // onChange={(e) => setRole(e.target.value)}
                >
                  <option value="">Debt Collection</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </label>
            </div>
            <div className='mt-2'>
              <label htmlFor='Priority Rule'>Priority Rule
                <select 
                  name="" id=""
                  required
                  className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#6571ff] focus:ring-[#6571ff] w-full rounded-md focus:ring-1'
                  // value={role}
                  // onChange={(e) => setRole(e.target.value)}
                >
                  <option value="">Priority Rule</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </label>
            </div>
          </div>
          <hr className='border-[#6571ff]' />
          <div className="grid grid-cols-2 gap-4 my-5 xl:grid-cols-4">
            <div className='mt-2'>
              <label htmlFor='loantype'>Insurance Fee
                <select 
                  name="" id=""
                  required
                  className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#6571ff] focus:ring-[#6571ff] w-full rounded-md focus:ring-1'
                  // value={role}
                  // onChange={(e) => setRole(e.target.value)}
                >
                  <option value="">Insurance Fee</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </label>
            </div>
            <div className='mt-2'>
              <label htmlFor='upfront'>Upfront
                <select 
                  name="" id=""
                  required
                  className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#6571ff] focus:ring-[#6571ff] w-full rounded-md focus:ring-1'
                  // value={role}
                  // onChange={(e) => setRole(e.target.value)}
                >
                  <option value="">Upfront?</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </label>
            </div>
            <div className='mt-2'>
              <label htmlFor='earlyrepayment'>Early Repayment
                <select 
                  name="" id=""
                  required
                  className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#6571ff] focus:ring-[#6571ff] w-full rounded-md focus:ring-1'
                  // value={role}
                  // onChange={(e) => setRole(e.target.value)}
                >
                  <option value="">Early Repayment</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </label>
            </div>
            <div className='mt-2'>
              <label htmlFor='Early Repaymentplan'>Early Repayment
                <select 
                  name="" id=""
                  required
                  className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#6571ff] focus:ring-[#6571ff] w-full rounded-md focus:ring-1'
                  // value={role}
                  // onChange={(e) => setRole(e.target.value)}
                >
                  <option value="">Early Repayment</option>
                  <option value="days in loan">Days in loan</option>
                  <option value="full loan">Full loan</option>
                </select>
              </label>
            </div>
            <div className='mt-2'>
              <label htmlFor='Notification Frequency'>Notification Frequency
                <select 
                  name="" id=""
                  required
                  className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#6571ff] focus:ring-[#6571ff] w-full rounded-md focus:ring-1'
                  // value={role}
                  // onChange={(e) => setRole(e.target.value)}
                >
                  <option value="">Notification Frequency</option>
                  <option value="hourly">Hourly</option>
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="two weeks">Two weeks</option>
                  <option value="monthly">Monthly</option>
                  <option value="Three Months">Three Months</option>
                  <option value="Six Months">Six Months</option>
                  <option value="Yearly">Yearly</option>
                </select>
              </label>
            </div>
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
