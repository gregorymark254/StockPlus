import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineCancel, MdSpaceDashboard, MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { FaUsers, FaShoppingCart,FaMoneyCheck,FaUserMinus,FaCartPlus } from 'react-icons/fa';
import { useStateContext } from '../Context/ContextProvider';
import 'tw-elements';

const SideBar = () => {
  const { activeMenu, setActiveMenu } = useStateContext();

    // getting current user
    const currentUser = window.localStorage.getItem('token');
    const user = JSON.parse(currentUser).data;

  return (
    <main className='bg-[#0c1427] text-white h-screen md:overflow-hidden relative overflow-auto md:hover:overflow-auto pb-10'>
      {activeMenu && (
        <>
          <div className='flex justify-between items-center p-3.5 font-sans font-bold border-b border-b-[#7987a1]'>
            <h3>Stock <span className='text-[#6571ff]'>Plus</span></h3>
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
                  {user.role === 'admin' && (
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
                  )}
                  {(user.role === 'admin' || user.role === 'supplier') && (
                    <li className='relative' id='sidenavXxEx2'>
                      <span className='flex items-center text-sm py-4 px-6 h-12 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#6571ff] transition duration-300 ease-in-out cursor-pointer' data-mdb-ripple='true' data-mdb-ripple-color='primary' data-bs-toggle='collapse' data-bs-target='#collapseSidenavXxEx2' aria-expanded='false' aria-controls='collapseSidenavXxEx2'>
                        <span className='w-4 h-4 mr-3'><FaUserMinus /></span>
                        <span>Suppliers</span>
                        <span className='w-4 h-4 ml-auto text-xl'><MdOutlineKeyboardArrowDown /></span>
                      </span>
                      <ul className='relative accordion-collapse collapse' id='collapseSidenavXxEx2' aria-labelledby='sidenavXxEx2' data-bs-parent='#sidenavSecExample'>
                        <li className='relative'>
                          <Link to='/app/suppliers' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#6571ff] focus:text-[#6571ff] focus:border-l-2 focus:border-l-[#6571ff] transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Suppliers</Link>
                        </li>
                        <li className='relative'>
                          <Link to='/app/createsupplier' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#6571ff] focus:text-[#6571ff] focus:border-l-2 focus:border-l-[#6571ff] transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Add Supplier</Link>
                        </li>
                      </ul>
                    </li>
                  )}
                  <li className='relative' id='sidenavXxEx4'>
                    <span className='flex items-center text-sm py-4 px-6 h-12 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#6571ff] transition duration-300 ease-in-out cursor-pointer' data-mdb-ripple='true' data-mdb-ripple-color='primary' data-bs-toggle='collapse' data-bs-target='#collapseSidenavXxEx4' aria-expanded='false' aria-controls='collapseSidenavXxEx4'>
                      <span className='w-4 h-4 mr-3'><FaCartPlus /></span>
                      <span>Orders</span>
                      <span className='w-4 h-4 ml-auto text-xl'><MdOutlineKeyboardArrowDown /></span>
                    </span>
                    <ul className='relative accordion-collapse collapse' id='collapseSidenavXxEx4' aria-labelledby='sidenavXxEx4' data-bs-parent='#sidenavSecExample'>
                      {(user.role === 'admin' || user.role === 'supplier') && (
                        <li className='relative'>
                          <Link to='/app/orders' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#6571ff] focus:text-[#6571ff] focus:border-l-2 focus:border-l-[#6571ff] transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>All Orders</Link>
                        </li>
                      )}
                      <li className='relative'>
                        <Link to='/app/myorders' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#6571ff] focus:text-[#6571ff] focus:border-l-2 focus:border-l-[#6571ff] transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>My Orders</Link>
                      </li>
                      <li className='relative'>
                        <Link to='/app/createorder' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#6571ff] focus:text-[#6571ff] focus:border-l-2 focus:border-l-[#6571ff] transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Create Order</Link>
                      </li>
                    </ul>
                  </li>
                  <li className='relative'>
                    <Link to='/app/products' className='flex items-center text-sm py-4 px-6 h-12 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#6571ff] focus:text-[#6571ff] focus:border-l-2 focus:border-l-[#6571ff] transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>
                      <span className='w-4 h-4 mr-3'><FaShoppingCart /></span>
                      <span>products</span>
                    </Link>
                  </li>
                  {(user.role === 'admin' || user.role === 'supplier') && (
                    <li className='relative'>
                      <Link to='/app/payments' className='flex items-center text-sm py-4 px-6 h-12 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#6571ff] focus:text-[#6571ff] focus:border-l-2 focus:border-l-[#6571ff] transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>
                        <span className='w-4 h-4 mr-3'><FaMoneyCheck /></span>
                        <span>Payments</span>
                      </Link>
                    </li>
                  )}
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
