import React, {useState} from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom"
import { FaUserAlt,FaRegCalendarAlt } from "react-icons/fa";
import { LoginState } from '../components/AuthContext/AuthContext'


const Nav = () => {

  const [navIsShown, setnavIsShown] = useState(false);
  const toggleNavIsShown = () => {
    setnavIsShown((navIsShown) => !navIsShown);
  };

  const { state:{ userInfo } , dispatch } = LoginState()
  const signOut = () => {
    dispatch({type:'USER_SIGNOUT', })
    localStorage.removeItem('userInfo')
  }


  return (
    <main className="nav">
      <ToastContainer />
      <div className="container mx-auto">
        <nav className='flex justify-between items-center p-4'>
          {/* Top Nav */}
          <div className="flex items-center space-x-5">
            <div>
              <img src="https://hotel.bdtask-demo.com/xainhotel/assets/img/2021-11-18/h.png" alt="logo" />
            </div>
            <ul className='hidden md:flex pt-3 font-bold'>
              <li>
                <Link to="/" className="hover:text-slate-500 px-3 py-2 ">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-slate-500 px-3 py-2 ">About</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-slate-500 px-3 py-2 ">Contact Us</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-slate-500 px-3 py-2">Gallery</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="md:flex pt-4">
              {userInfo ? (
                <div className="flex justify-center">
                <div>
                  <div className="dropdown relative">
                    <a
                      className="
                        dropdown-toggle
                        px-6
                        py-2.5
                        bg-blue-600
                        text-white
                        font-medium
                        text-xs
                        leading-tight
                        uppercase
                        rounded
                        shadow-md
                        hover:bg-blue-700 hover:shadow-lg
                        focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                        active:bg-blue-800 active:shadow-lg active:text-white
                        transition
                        duration-150
                        ease-in-out
                        flex
                        items-center
                        whitespace-nowrap "
                      href="/#"
                      type="button"
                      id="dropdownMenuButton2"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {userInfo.email}User Info
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="caret-down"
                        className="w-2 ml-2"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                      >
                        <path
                          fill="currentColor"
                          d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                        ></path>
                      </svg>
                    </a>
                    <ul className="dropdown-menu min-w-max absolute  bg-white text-base z-50 float-left  py-2 list-nonetext-left  rounded-lg  shadow-lg  mt-1 hidden m-0 bg-clip-padding border-none" aria-labelledby="dropdownMenuButton2">
                      <li>
                        <a className=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700  hover:bg-gray-100"href="/#" >Something else here</a>
                      </li>
                      <li>
                        <a className=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700  hover:bg-gray-100"href="/#" >Something else here</a>
                      </li>
                      <li>
                        <a onClick={signOut} className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700  hover:bg-gray-100"href="/#" >Sign Out</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              ) 
              : (
                <li>
                  <Link to="/login" className="hover:text-slate-500  px-3 py-2 md:flex items-center"><FaUserAlt/> &nbsp;Sign In</Link>
                </li>
              )}
              <li>
                <Link to="/rooms" className="hover:text-slate-500 px-3 py-2 md:flex items-center "><FaRegCalendarAlt/> &nbsp; Book Now</Link>
              </li>
            </ul>
          </div>
          
              
          
          
          {/* Responsive Nav */}
          {!navIsShown && (
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6 md:hidden' onClick={toggleNavIsShown} >
              <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25' />
            </svg>
          )}
          {navIsShown && (
            <div className='md:hidden fixed z-10 top-0 left-0 w-full bg-gray-100/90 text-black px-4 py-6'>
              <div className='flex justify-between border-b-2 border-b-gray-600'>
                <div className="flex items-center ">
                  <h3>Gregory</h3>
                </div>
                <svg
                  xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6' onClick={toggleNavIsShown} >
                  <path  strokeLinecap='round'  strokeLinejoin='round'  d='M6 18L18 6M6 6l12 12'/>
                </svg>
              </div>
              <ul className=' mb-4'>
                <li>
                  <a href="#home" className="px-3 py-2 text-lg">Home</a>
                </li>
                <li>
                  <a href="#about" className=" px-3 py-2 text-lg">About</a>
                </li>
                <li>
                  <a href="#projects" className=" px-3 py-2 text-lg">Projects</a>
                </li>
                <li>
                  <a href="#skills" className="px-3 py-2 text-lg">Skills</a>
                </li>
                <li>
                  <a href="#contact" className="px-3 py-2 text-lg">Contact</a>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </div>
  </main>
  )
}

export default Nav