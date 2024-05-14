import React, { useState } from 'react';
import cover from '../components/Images/login-cover.svg';
import axios from '../api/api';
import { Toaster, toast } from 'sonner';
import { Link, useNavigate } from 'react-router-dom';


const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return toast.error('Passwords do not match!')
    }
    setLoading(true);
    try {
      const response = await axios.post('/register',
        { firstName, lastName, email, phoneNumber, password }
      );
      console.log(response)
      toast.success('Registration Sucessful');
      navigate('/login');
    } catch (error) {
      console.log(error);
      toast.error('Registration Failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className='bg-[#e6e6fb]'>
      <Toaster position='top-center' richColors />
      <div className='flex flex-wrap items-center justify-center gap-4 h-full md:h-screen lg:h-[100vh]'>
        <div className='p-4 rounded-lg w-full flex items-center justify-center lg:w-1/3 xl:w-1/4'>
          <img width={400} height={400} src={cover} alt='' />
        </div>
        <div className='p-4 rounded-lg w-full lg:w-1/3 xl:w-1/4'>
          <form onSubmit={handleSubmit}>
            <div className='text-center p-4'>
              <h3><b>Stock <span className='text-[#6571ff]'>Plus</span></b></h3>
              <span className='text-lg font-light'>Please register to create an account.</span>
            </div>
            <div className='my-4'>
              <label htmlFor='firstname'><span>First Name</span>
                <input
                  type='text'
                  required
                  placeholder='First Name'
                  className='px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#6571ff] focus:ring-[#6571ff] block w-full rounded-md sm:text-sm focus:ring-1'
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </label>
            </div>
            <div className='my-4'>
              <label htmlFor='LASTname'><span>Last Name</span>
                <input
                  type='text'
                  required
                  placeholder='Last Name'
                  className='px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#6571ff] focus:ring-[#6571ff] block w-full rounded-md sm:text-sm focus:ring-1'
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </label>
            </div>
            <div className='my-4'>
              <label htmlFor='email'><span>Email Address</span>
                <input
                  type='email'
                  required
                  placeholder='user@exampe.com'
                  className='px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#6571ff] focus:ring-[#6571ff] block w-full rounded-md sm:text-sm focus:ring-1'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
            </div>
            <div className='my-4'>
              <label htmlFor='number'><span>Phone Number</span>
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
            <div className='my-4'>
              <label htmlFor='password'><span>Password</span>
                <input
                  type='password'
                  required
                  placeholder='Password'
                  className='px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#6571ff] focus:ring-[#6571ff] block w-full rounded-md sm:text-sm focus:ring-1'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
            </div>
            <div className='my-4'>
              <label htmlFor='password'><span>Confirm Password</span>
                <input
                  type='password'
                  required
                  placeholder='Confirm Password'
                  className='px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#6571ff] focus:ring-[#6571ff] block w-full rounded-md sm:text-sm focus:ring-1'
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </label>
            </div>
            <div className='my-4'>
              <button disabled={loading} className='bg-[#6571ff] text-white px-5 py-2 rounded-lg text-md w-full hover:bg-[#525cce]'>{loading ? 'Please Wait...' : 'Register'}</button>
            </div>
          </form>
          <div>
            <span>Already have an account? <u className='text-[#6571ff] hover:text-blue-700'><Link to='/login'>Login</Link></u></span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Register;