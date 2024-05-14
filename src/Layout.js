import Topnav from './components/Nav/TopBar';
import Sidebar from './components/Nav/SideBar';
import { useStateContext } from './components/Context/ContextProvider';
import AuthToken from './components/Context/AuthToken';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';


import Login from './pages/Login';
import Unauthorised from './pages/Unauthorised';
import Missing from './pages/Missing';

import Home from './pages/Home';
import Users from './pages/Users/Users'
import AddUser from './pages/Users/AddUser'
import Products from './pages/Products/Products'
import CreateProduct from './pages/Products/CreateProduct';
import SupplyItems from './pages/Products/SupplyItems'
import AddSupplyItem from './pages/Products/AddSupplyItem'
import Loans from './pages/Loans/Loans'
import LoanRequests from './pages/Loans/LoanRequests'
import RequestLoan from './pages/Loans/RequestLoan'
import Transactions from './pages/Loans/Transactions'
import Accounts from './pages/Account/Accounts'
import AddAccount from './pages/Account/AddAccount'
import Report from './pages/Reports/Reports'

const Layout = () => {
  const { activeMenu } = useStateContext();
  const { accessToken, setAccessToken } = AuthToken();
  // if (!accessToken) {
  //   return <Login setAccessToken={setAccessToken} />;
  // }

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
              <Route path='/dashboard' element={<Home />} />
              <Route path='/users' element={<Users />} />
              <Route path='/adduser' element={<AddUser />} />
              <Route path='/products' element={<Products />} />
              <Route path='/addproduct' element={<CreateProduct />} />
              <Route path='/supply-items' element={<SupplyItems />} />
              <Route path='/addsupplyitem' element={<AddSupplyItem />} />
              <Route path='/loans' element={<Loans />} />
              <Route path='/loan-requests' element={<LoanRequests />} />
              <Route path='/request-loan' element={<RequestLoan />} />
              <Route path='/transactions' element={<Transactions />} />
              <Route path='/accounts' element={<Accounts />} />
              <Route path='/addaccount' element={<AddAccount />} />
              <Route path='/reports' element={<Report />} />
              <Route path='/unauthorised' element={<Unauthorised />} />
              <Route path='*' element={<Missing />} />
            </Routes>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Layout;
