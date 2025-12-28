import { useLayoutEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router';
import { IoMenu } from "react-icons/io5";
import { useNavbar } from '../model/useNavbar';
import ActiveButton from '../../../shared/buttons/ActiveButton';

export const Navbar = () => {
  const {menuOpen , toggleMenu , closeMenu} = useNavbar();
  const navStyle : string = "block py-2 px-3 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700  md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 md:bg-gray-900";
  
  const isMade : boolean = false;
  const navRef  = useRef<HTMLElement>(null);
  useLayoutEffect(()=>{
    if (navRef.current) {
      const height = navRef.current.offsetHeight;
      document.documentElement.style.setProperty("--navbar-height", `${height}px`);
    }
  }, [menuOpen])

  return (
    <nav className='bg-white dark:bg-gray-900 fixed z-20 top-0 start-0 w-full border-b border-gray-200 dark:border-gray-600' ref={navRef}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 text-white"> 
        <Link to="/" className='font-bold text-xl'>Mini Library</Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <ActiveButton path='/auth'>Get Started</ActiveButton>
          <button type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  onClick={toggleMenu}>
            <span className="sr-only">Open main menu</span>
            <IoMenu className='w-5 h-5'/>
          </button>
        </div>
        <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${menuOpen ?  '' : 'hidden'}`}>
        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <NavLink to='/catalog'  className={({isActive})=> isActive ? `${navStyle} bg-blue-700 md:bg-transparent md:text-blue-700  md:dark:text-blue-500` : navStyle }
            onClick={closeMenu}>Catalog</NavLink>
          </li>
          <li>
          <NavLink to='#'  className={ isMade ? `${navStyle} bg-blue-700` : 'block py-2 px-3 text-gray-400 cursor-not-allowed' }>Info</NavLink>
          </li>
          <li>
          <NavLink to='#'  className={ isMade ? `${navStyle} bg-blue-700` : 'block py-2 px-3 text-gray-400 cursor-not-allowed'}>Premium</NavLink>
          </li>
          <li>
          <NavLink to='#'  className={ isMade ? `${navStyle} bg-blue-700` : "block py-2 px-3 text-gray-400 cursor-not-allowed" }>Market Place</NavLink>
          </li>
        </ul>
        </div>
      </div>
    </nav>
  )
}