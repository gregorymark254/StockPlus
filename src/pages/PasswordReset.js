import React, { useState } from 'react'
import axios from '../api/api';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {

  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPin, setConfirmPin] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (password !== confirmPin) {
      toast.error('Passwords do not match');
      return;
    }
    try {
      await axios.post('/api/resetpassword',
        { phoneNumber, otp, password }
      );
      toast.success('Password reset sucessful');
      navigate('/login');
    } catch (error) {
      console.log(error);
      toast.error('Failed to reset password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='bg-[#e6e6fb]'>
      <div className="flex items-center justify-center h-full md:h-screen lg:h-[100vh]">
        <div>
          <div className='text-center'>
            <h2><b>Reset Your Password.</b></h2>
            <p>Enter otp code and new Password</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className='my-3'>
              <label htmlFor='otp'><span>Phone Number</span>
                <input
                  type='number'
                  required
                  placeholder='0700000000'
                  className='px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#6571ff] focus:ring-[#6571ff] block w-full rounded-md sm:text-sm focus:ring-1'
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </label>
            </div>
            <div className='my-3'>
              <label htmlFor='otp'><span>Otp Code</span>
                <input
                  type='number'
                  required
                  placeholder='otp'
                  className='px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#6571ff] focus:ring-[#6571ff] block w-full rounded-md sm:text-sm focus:ring-1'
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </label>
            </div>
            <div className='my-3'>
              <label htmlFor='password'><span>Password</span>
                <input
                  type='otp'
                  required
                  placeholder='New Password'
                  className='px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#6571ff] focus:ring-[#6571ff] block w-full rounded-md sm:text-sm focus:ring-1'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
            </div>
            <div className='my-3'>
              <label htmlFor='password'><span>Confirm Password</span>
                <input
                  type='otp'
                  required
                  placeholder='Confirm Password'
                  className='px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#6571ff] focus:ring-[#6571ff] block w-full rounded-md sm:text-sm focus:ring-1'
                  value={confirmPin}
                  onChange={(e) => setConfirmPin(e.target.value)}
                />
              </label>
            </div>
            <div>
              <button disabled={loading} className='bg-[#6571ff] text-white px-5 py-2 rounded-lg text-md w-full hover:bg-[#525cce]'>{loading ? 'Please Wait...' : 'Reset Password'}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
