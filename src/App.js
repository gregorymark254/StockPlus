import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import Layout from './Layout';

import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import PasswordReset from './pages/PasswordReset';
import Unauthorised from './pages/Unauthorised';
import Missing from './pages/Missing';
import AuthToken from './components/Context/AuthToken';

const App = () => {
  const { setAccessToken } = AuthToken();

  return (
    <main>
      <Toaster position='top-center' richColors />
      <Routes>
        <Route path='/' element={<Login setAccessToken={setAccessToken} />} />
        <Route path='/login' element={<Login setAccessToken={setAccessToken} />} />
        <Route path='/register' element={<Register />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/password-reset' element={<PasswordReset />} />
        <Route path='/app/*' element={<Layout />} />
        <Route path='/unauthorised' element={<Unauthorised />} />
        <Route path='*' element={<Missing />} />
      </Routes>
    </main>
  );
};

export default App;
