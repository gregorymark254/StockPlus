import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineCancel, MdSpaceDashboard, MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { FaHouseUser } from 'react-icons/fa';
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
                    <Link to='/' className='flex items-center text-sm py-4 px-6 h-12 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#6571ff] focus:text-[#6571ff] focus:border-l-2 focus:border-l-[#6571ff] transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>
                      <span className='w-4 h-4 mr-3'><MdSpaceDashboard /></span>
                      <span>DashBoard</span>
                    </Link>
                  </li>
                  <li className='relative' id='sidenavXxEx1'>
                    <span className='flex items-center text-sm py-4 px-6 h-12 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#6571ff] transition duration-300 ease-in-out cursor-pointer' data-mdb-ripple='true' data-mdb-ripple-color='primary' data-bs-toggle='collapse' data-bs-target='#collapseSidenavXxEx1' aria-expanded='false' aria-controls='collapseSidenavXxEx1'>
                      <span className='w-4 h-4 mr-3'><FaHouseUser /></span>
                      <span>Reports</span>
                      <span className='w-4 h-4 ml-auto text-xl'><MdOutlineKeyboardArrowDown /></span>
                    </span>
                    <ul className='relative accordion-collapse collapse' id='collapseSidenavXxEx1' aria-labelledby='sidenavXxEx1' data-bs-parent='#sidenavSecExample'>
                      <li className='relative'>
                        <Link to='/users' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#6571ff] focus:text-[#6571ff] focus:border-l-2 focus:border-l-[#6571ff] transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>View All Users</Link>
                      </li>
                      <li className='relative'>
                        <Link to='/user/add' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#6571ff] focus:text-[#6571ff] focus:border-l-2 focus:border-l-[#6571ff] transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Add User</Link>
                      </li>
                    </ul>
                  </li>
                  <li className='relative'>
                    <Link to='/' className='flex items-center text-sm py-4 px-6 h-12 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#6571ff] focus:text-[#6571ff] focus:border-l-2 focus:border-l-[#6571ff] transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>
                      <span className='w-4 h-4 mr-3'><MdSpaceDashboard /></span>
                      <span>Users</span>
                    </Link>
                  </li>
                  <li className='relative'>
                    <Link to='/' className='flex items-center text-sm py-4 px-6 h-12 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#6571ff] focus:text-[#6571ff] focus:border-l-2 focus:border-l-[#6571ff] transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>
                      <span className='w-4 h-4 mr-3'><MdSpaceDashboard /></span>
                      <span>Agents</span>
                    </Link>
                  </li>
                  <li className='relative'>
                    <Link to='/' className='flex items-center text-sm py-4 px-6 h-12 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#6571ff] focus:text-[#6571ff] focus:border-l-2 focus:border-l-[#6571ff] transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>
                      <span className='w-4 h-4 mr-3'><MdSpaceDashboard /></span>
                      <span>Find Customer</span>
                    </Link>
                  </li>
                  <li className='relative'>
                    <Link to='/' className='flex items-center text-sm py-4 px-6 h-12 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#6571ff] focus:text-[#6571ff] focus:border-l-2 focus:border-l-[#6571ff] transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>
                      <span className='w-4 h-4 mr-3'><MdSpaceDashboard /></span>
                      <span>Find Transaction</span>
                    </Link>
                  </li>
                  <li className='relative'>
                    <Link to='/' className='flex items-center text-sm py-4 px-6 h-12 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#6571ff] focus:text-[#6571ff] focus:border-l-2 focus:border-l-[#6571ff] transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>
                      <span className='w-4 h-4 mr-3'><MdSpaceDashboard /></span>
                      <span>Reconciliation</span>
                    </Link>
                  </li>
                  <li className='relative'>
                    <Link to='/' className='flex items-center text-sm py-4 px-6 h-12 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#6571ff] focus:text-[#6571ff] focus:border-l-2 focus:border-l-[#6571ff] transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>
                      <span className='w-4 h-4 mr-3'><MdSpaceDashboard /></span>
                      <span>Suspense Accounts</span>
                    </Link>
                  </li>
                  <li className='relative'>
                    <Link to='/' className='flex items-center text-sm py-4 px-6 h-12 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#6571ff] focus:text-[#6571ff] focus:border-l-2 focus:border-l-[#6571ff] transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>
                      <span className='w-4 h-4 mr-3'><MdSpaceDashboard /></span>
                      <span>Phone Store</span>
                    </Link>
                  </li>
                  <li className='relative'>
                    <Link to='/' className='flex items-center text-sm py-4 px-6 h-12 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#6571ff] focus:text-[#6571ff] focus:border-l-2 focus:border-l-[#6571ff] transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>
                      <span className='w-4 h-4 mr-3'><MdSpaceDashboard /></span>
                      <span>Inventory</span>
                    </Link>
                  </li>
                  <li className='relative'>
                    <Link to='/' className='flex items-center text-sm py-4 px-6 h-12 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#6571ff] focus:text-[#6571ff] focus:border-l-2 focus:border-l-[#6571ff] transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>
                      <span className='w-4 h-4 mr-3'><MdSpaceDashboard /></span>
                      <span>Regions</span>
                    </Link>
                  </li>
                  <li className='relative'>
                    <Link to='/' className='flex items-center text-sm py-4 px-6 h-12 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#6571ff] focus:text-[#6571ff] focus:border-l-2 focus:border-l-[#6571ff] transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>
                      <span className='w-4 h-4 mr-3'><MdSpaceDashboard /></span>
                      <span>Top-Ups</span>
                    </Link>
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
