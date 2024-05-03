import Topnav from './components/Nav/TopBar';
import Sidebar from './components/Nav/SideBar';
import { useStateContext } from './components/Context/ContextProvider';
import AuthToken from './components/Context/AuthToken';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';

import Home from './pages/Home';
import Login from './pages/Login';
import Unauthorised from './pages/Unauthorised';
import Missing from './pages/Missing';

const App = () => {
  const { activeMenu } = useStateContext();
  const { accessToken, setAccessToken } = AuthToken();
  if (!accessToken) {
    return <Login setAccessToken={setAccessToken} />;
  }

  return (
    <main>
      <div className='flex relative'>
        {activeMenu
          ? (
            <div className='w-60 fixed'>
              <Sidebar />
            </div>
            )
          : (
            <div>
              <Sidebar />
            </div>
            )}
        <div
          className={
              activeMenu
                ? 'min-h-screen md:ml-60 w-full'
                : 'w-full min-h-screen flex-2'
            }
        >
          <div>
            <Topnav />
          </div>
          <div>
            <Toaster position='top-center' richColors />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/unauthorised' element={<Unauthorised />} />
              <Route path='*' element={<Missing />} />
            </Routes>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
