import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { useStateContext } from '../Context/ContextProvider';
import { MdOutlineKeyboardArrowDown, MdLogout } from 'react-icons/md';

const Navbar = () => {
  const { activeMenu, setActiveMenu, setScreenSize, screenSize } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [setScreenSize]);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize, setActiveMenu]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  // logout
  const signOut = () => {
    window.localStorage.removeItem('token');
    window.location.reload();
  };

  // getting current user
  const currentUser = window.localStorage.getItem('token');
  const user = JSON.parse(currentUser).data.firstName;

  return (
    <div className='flex justify-between items-center p-1 bg-white shadow-md'>
      <div className='text-xl rounded-full p-3 hover:bg-light-gray'>
        <button onClick={handleActiveMenu}><AiOutlineMenu /></button>
      </div>
      <div>
        <div className='flex items-center space-x-5 px-3'>
          <img className='rounded-full w-8 h-8' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaS_K13w6lMdb6kZEGj2wZ3jnIwap2YTpganfCLWXUr_L-7xvEiTEKFC2iNgRO1XJ184A&usqp=CAU' alt='user-profile' />
          <div className='dropdown'>
            <a className='dropdown-toggle px-4 py-2 bg-slate-100 text-black font-medium shadow-md transition duration-150 ease-in-out flex items-center whitespace-nowrap ' href='/#' type='button' id='dropdownMenuButton2' data-bs-toggle='dropdown' aria-expanded='false'>
              {user}
              <span className='w-4 h-4 ml-auto text-xl'><MdOutlineKeyboardArrowDown /></span>
            </a>
            <ul className='dropdown-menu w-36 absolute  bg-white text-base z-50 float-left  py-2 list-nonetext-left  rounded-lg  shadow-lg  mt-1 hidden m-0 bg-clip-padding border-none' aria-labelledby='dropdownMenuButton2'>
              <li>
                <a onClick={signOut} className='dropdown-item text-sm py-2 px-4 font-normal w-full whitespace-nowrap bg-transparent text-gray-700  hover:bg-gray-100 flex items-center space-x-2' href='/#'><MdLogout />Sign Out</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
