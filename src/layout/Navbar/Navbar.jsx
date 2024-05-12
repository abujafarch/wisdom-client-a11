import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { RiMenuFill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {

    const [menuOpen, setOpenMenu] = useState(false)
    const handleOpenMenu = () => {
        setOpenMenu(true)
    }

    const handleCloseMenu = () =>{
        setOpenMenu(false)
    }

    const [scrollY, setScrollY] = useState(0)
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY
        // console.log(scrollY, e);
        setScrollY(scrollY)
    })
    //better understanding for later
    // window.addEventListener('click', (e) => {
    //     const scrollY = window.scrollY
    //     console.log(scrollY);
    // })

    return (
        <div className={`fixed w-full transition-all duration-500 ease-in-out ${scrollY > 5 ? 'top-0 bg-gradient-to-r from-[#ebf6fe] to-[#a1d8fe] opacity-100' : 'top-6'} left-1/2 -translate-x-1/2 z-30`}>

            <div className={`flex ${scrollY > 5 ? 'top-0 bg-transparent' : 'bg-gradient-to-r from-[#ebf6fe] to-[#a1d8fe]'} rounded-md sm:rounded-[50px] mx-1 sm:mx-auto items-center gap-3 sm:gap-5 max-w-[1200px] lg:justify-between sm:px-14 px-2 py-3 sm:py-5`}>

                <div onClick={handleOpenMenu} className="flex items-center lg:hidden justify-center">
                    <button className="text-2xl font-bold"><RiMenuFill></RiMenuFill></button>
                </div>

                <div>
                    <Link to='/'><h3 className="font-wisdom text-2xl sm:text-4xl font-bold">Wisdom</h3></Link>
                </div>

                <div className={`flex lg:flex-row flex-col top-0 absolute lg:static lg:bg-none bg-gradient-to-r lg:p-0 py-5 pl-5 pr-10 from-[#ebf6fe] to-[#a1d8fe] lg:items-center font-inter font-semibold gap-5 transition-all ease-in-out duration-500 ${menuOpen ? 'left-0' : '-left-48'}`}>
                    <button onClick={handleCloseMenu} className="flex lg:hidden justify-end absolute bg-[#00000042] p-2 right-0 top-0 text-xl"><RxCross1></RxCross1></button>

                    <NavLink onClick={handleCloseMenu} to='/'>Home</NavLink>
                    <NavLink onClick={handleCloseMenu} to='/all-books'>All Books</NavLink>
                    <NavLink onClick={handleCloseMenu} to='/add-books'>Add Books</NavLink>
                    <NavLink onClick={handleCloseMenu} to='borrowed-books'>Borrowed Books</NavLink>
                    <Link onClick={handleCloseMenu} to='/login' className="bg-[#36ad68] text-center text-white px-7 py-2 rounded-md">Login</Link>
                    <Link onClick={handleCloseMenu} className="bg-[#ce643b] text-white text-center px-7 py-2 rounded-md">Logout</Link>
                </div>
            </div>
        </div>

    );
};

export default Navbar;