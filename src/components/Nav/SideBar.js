import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineCancel, MdSpaceDashboard, MdOutlineKeyboardArrowDown, MdAccountBalance, MdReport } from 'react-icons/md';
import { FaUsers, FaShoppingCart, FaMoneyCheck } from 'react-icons/fa';
import { useStateContext } from '../Context/ContextProvider';
import 'tw-elements';

const SideBar = () => {
  const { activeMenu, setActiveMenu } = useStateContext();

  return (
    <main className='bg-[#0c1427] text-white h-screen md:overflow-hidden relative overflow-auto md:hover:overflow-auto pb-10'>
      {activeMenu && (
        <>
          <div className='flex justify-between items-center p-3.5 font-sans font-bold border-b border-b-[#7987a1]'>
            <h3>Mini <span className='text-[#6571ff]'>Loan</span></h3>
            <div className='text-xl rounded-full hover:bg-light-gray block md:hidden'>
              <button onClick={() => setActiveMenu(!activeMenu)}><MdOutlineCancel /></button>
            </div>
          </div>
          <nav>
            <div className='overflow-y-auto'>
              <div id='sidenavSecExample'>
                <ul className='relative px-1'>
                  <li className='relative'>
                    <Link to='/app/dashboard' className='flex items-center text-sm py-4 px-6 h-12 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#6571ff] focus:text-[#6571ff] focus:border-l-2 focus:border-l-[#6571ff] transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>
                      <span className='w-4 h-4 mr-3'><MdSpaceDashboard /></span>
                      <span>DashBoard</span>
                    </Link>
                  </li>
                  <li className='relative' id='sidenavXxEx1'>
                    <span className='flex items-center text-sm py-4 px-6 h-12 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#6571ff] transition duration-300 ease-in-out cursor-pointer' data-mdb-ripple='true' data-mdb-ripple-color='primary' data-bs-toggle='collapse' data-bs-target='#collapseSidenavXxEx1' aria-expanded='false' aria-controls='collapseSidenavXxEx1'>
                      <span className='w-4 h-4 mr-3'><FaUsers /></span>
                      <span>Users</span>
                      <span className='w-4 h-4 ml-auto text-xl'><MdOutlineKeyboardArrowDown /></span>
                    </span>
                    <ul className='relative accordion-collapse collapse' id='collapseSidenavXxEx1' aria-labelledby='sidenavXxEx1' data-bs-parent='#sidenavSecExample'>
                      <li className='relative'>
                        <Link to='/app/users' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#6571ff] focus:text-[#6571ff] focus:border-l-2 focus:border-l-[#6571ff] transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>All Users</Link>
                      </li>
                      <li className='relative'>
                        <Link to='/app/adduser' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#6571ff] focus:text-[#6571ff] focus:border-l-2 focus:border-l-[#6571ff] transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Add User</Link>
                      </li>
                    </ul>
                  </li>
                  <li className='relative' id='sidenavXxEx3'>
                    <span className='flex items-center text-sm py-4 px-6 h-12 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#6571ff] transition duration-300 ease-in-out cursor-pointer' data-mdb-ripple='true' data-mdb-ripple-color='primary' data-bs-toggle='collapse' data-bs-target='#collapseSidenavXxEx3' aria-expanded='false' aria-controls='collapseSidenavXxEx3'>
                      <span className='w-4 h-4 mr-3'><FaShoppingCart /></span>
                      <span>Products</span>
                      <span className='w-4 h-4 ml-auto text-xl'><MdOutlineKeyboardArrowDown /></span>
                    </span>
                    <ul className='relative accordion-collapse collapse' id='collapseSidenavXxEx3' aria-labelledby='sidenavXxEx3' data-bs-parent='#sidenavSecExample'>
                      <li className='relative'>
                        <Link to='/app/products' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#6571ff] focus:text-[#6571ff] focus:border-l-2 focus:border-l-[#6571ff] transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>All Products</Link>
                      </li>
                      <li className='relative'>
                        <Link to='/app/addproduct' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#6571ff] focus:text-[#6571ff] focus:border-l-2 focus:border-l-[#6571ff] transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Create Product</Link>
                      </li>
                      <li className='relative'>
                        <Link to='/app/supply-items' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#6571ff] focus:text-[#6571ff] focus:border-l-2 focus:border-l-[#6571ff] transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Supply Items</Link>
                      </li>
                      <li className='relative'>
                        <Link to='/app/addsupplyitem' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#6571ff] focus:text-[#6571ff] focus:border-l-2 focus:border-l-[#6571ff] transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Add Supply Item</Link>
                      </li>
                    </ul>
                  </li>
                  <li className='relative' id='sidenavXxEx4'>
                    <span className='flex items-center text-sm py-4 px-6 h-12 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#6571ff] transition duration-300 ease-in-out cursor-pointer' data-mdb-ripple='true' data-mdb-ripple-color='primary' data-bs-toggle='collapse' data-bs-target='#collapseSidenavXxEx4' aria-expanded='false' aria-controls='collapseSidenavXxEx4'>
                      <span className='w-4 h-4 mr-3'><FaMoneyCheck /></span>
                      <span>Loans</span>
                      <span className='w-4 h-4 ml-auto text-xl'><MdOutlineKeyboardArrowDown /></span>
                    </span>
                    <ul className='relative accordion-collapse collapse' id='collapseSidenavXxEx4' aria-labelledby='sidenavXxEx4' data-bs-parent='#sidenavSecExample'>
                      <li className='relative'>
                        <Link to='/app/loans' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#6571ff] focus:text-[#6571ff] focus:border-l-2 focus:border-l-[#6571ff] transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Loans</Link>
                      </li>
                      <li className='relative'>
                        <Link to='/app/loan-requests' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#6571ff] focus:text-[#6571ff] focus:border-l-2 focus:border-l-[#6571ff] transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Loan Requests</Link>
                      </li>
                      <li className='relative'>
                        <Link to='/app/request-loan' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#6571ff] focus:text-[#6571ff] focus:border-l-2 focus:border-l-[#6571ff] transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Request Loan</Link>
                      </li>
                      <li className='relative'>
                        <Link to='/app/transactions' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#6571ff] focus:text-[#6571ff] focus:border-l-2 focus:border-l-[#6571ff] transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Transactions</Link>
                      </li>
                    </ul>
                  </li>
                  <li className='relative' id='sidenavXxEx5'>
                    <span className='flex items-center text-sm py-4 px-6 h-12 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#6571ff] transition duration-300 ease-in-out cursor-pointer' data-mdb-ripple='true' data-mdb-ripple-color='primary' data-bs-toggle='collapse' data-bs-target='#collapseSidenavXxEx5' aria-expanded='false' aria-controls='collapseSidenavXxEx5'>
                      <span className='w-4 h-4 mr-3'><MdAccountBalance /></span>
                      <span>Account</span>
                      <span className='w-4 h-4 ml-auto text-xl'><MdOutlineKeyboardArrowDown /></span>
                    </span>
                    <ul className='relative accordion-collapse collapse' id='collapseSidenavXxEx5' aria-labelledby='sidenavXxEx5' data-bs-parent='#sidenavSecExample'>
                      <li className='relative'>
                        <Link to='/app/accounts' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#6571ff] focus:text-[#6571ff] focus:border-l-2 focus:border-l-[#6571ff] transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>All Accounts</Link>
                      </li>
                      <li className='relative'>
                        <Link to='/app/addaccount' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#6571ff] focus:text-[#6571ff] focus:border-l-2 focus:border-l-[#6571ff] transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Add Account</Link>
                      </li>
                    </ul>
                  </li>
                  <li className='relative' id='sidenavXxEx6'>
                    <span className='flex items-center text-sm py-4 px-6 h-12 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#6571ff] transition duration-300 ease-in-out cursor-pointer' data-mdb-ripple='true' data-mdb-ripple-color='primary' data-bs-toggle='collapse' data-bs-target='#collapseSidenavXxEx6' aria-expanded='false' aria-controls='collapseSidenavXxEx6'>
                      <span className='w-4 h-4 mr-3'><MdReport /></span>
                      <span>Reports</span>
                      <span className='w-4 h-4 ml-auto text-xl'><MdOutlineKeyboardArrowDown /></span>
                    </span>
                    <ul className='relative accordion-collapse collapse' id='collapseSidenavXxEx6' aria-labelledby='sidenavXxEx6' data-bs-parent='#sidenavSecExample'>
                      <li className='relative'>
                        <Link to='/app/reports' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#6571ff] focus:text-[#6571ff] focus:border-l-2 focus:border-l-[#6571ff] transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Reports</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </>
      )}
    </main>
  );
};

export default SideBar;
