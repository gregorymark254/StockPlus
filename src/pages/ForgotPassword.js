import React, { useState } from 'react'
import axios from '../api/api';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {

  const [msisdn, setMsisdn] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post('/api/forgot_password',
        { msisdn }
      );
      toast.info('Reset code sent! Check phone.');
      navigate('/password-reset');
    } catch (error) {
      console.log(error);
      toast.error('Failed to send code');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='bg-[#e6e6fb]'>
      <div className="flex items-center justify-center h-full md:h-screen lg:h-[100vh]">
        <div>
          <div className='text-center'>
            <h2><b>Get Otp Code.</b></h2>
            <p>Enter your details below</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className='my-3'>
              <label htmlFor='number'><span>Phone Number</span>
                <input
                  type='number'
                  required
                  placeholder='0700000000'
                  className='px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#6571ff] focus:ring-[#6571ff] block w-full rounded-md sm:text-sm focus:ring-1'
                  value={msisdn}
                  onChange={(e) => setMsisdn(e.target.value)}
                />
              </label>
            </div>
            <div>
              <button disabled={loading} className='bg-[#6571ff] text-white px-5 py-2 rounded-lg text-md w-full hover:bg-[#525cce]'>{loading ? 'Please Wait...' : 'Get Code'}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
