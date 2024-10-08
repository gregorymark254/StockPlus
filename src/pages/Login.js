import React, { useState } from 'react';
import cover from '../components/Images/login-cover.svg';
import axios from '../api/api';
import { Toaster, toast } from 'sonner';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const Login = ({ setAccessToken }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const token = await axios.post('/api/login',
        { email, password }
      );
      setAccessToken(token);
      toast.success('Login Sucessful');
      navigate('/app/dashboard');
    } catch (error) {
      console.log(error);
      toast.error('Login Failed');
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
            <div className='text-center p-3'>
              <h3><b>Stock <span className='text-[#6571ff]'>Plus</span></b></h3>
              <span className='text-lg font-light'>Please login to your account.</span>
            </div>
            <div className='my-3'>
              <label htmlFor='email'><span>Email Address</span>
                <input
                  type='text'
                  required
                  id='email'
                  placeholder='user@example.com'
                  className='px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#6571ff] focus:ring-[#6571ff] block w-full rounded-md sm:text-sm focus:ring-1'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
            </div>
            <div className='my-3'>
              <label htmlFor='password'><span>Password</span>
                <input
                  type='password'
                  required
                  id='password'
                  placeholder='********'
                  className='px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#6571ff] focus:ring-[#6571ff] block w-full rounded-md sm:text-sm focus:ring-1'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
            </div>
            <div className='my-3'>
              <button type="submit" disabled={loading} className='bg-[#6571ff] text-white px-5 py-2 rounded-lg text-md w-full hover:bg-[#525cce]'>{loading ? 'Please Wait...' : 'Login'}</button>
            </div>
          </form>
          <div className="flex items-center justify-between">
            <span>Dont have an account? <u className='text-[#6571ff] hover:text-blue-700'><Link to='/register'>Register</Link></u></span>
            <Link to='/forgot-password' className='text-[#6571ff] hover:underline'>Forgot Password?</Link>
          </div>
          <div className='mt-4'>
            <span>Admin:  greg@gmail.com</span>
            <p>password:  qwerty123</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;

Login.propTypes = {
  setAccessToken: PropTypes.func
};
