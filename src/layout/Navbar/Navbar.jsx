import { useContext, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { RiMenuFill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import Theme from "../Home/Theme";

const Navbar = () => {

    const { logOut, user, loading } = useContext(AuthContext)
    const [menuOpen, setOpenMenu] = useState(false)
    const location = useLocation()
    const handleOpenMenu = () => {
        setOpenMenu(true)
    }

    const handleCloseMenu = () => {
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

    const handleLogOut = (e) => {
        e.preventDefault()
        logOut()
            .then(() => {
                console.log("Logged Out Successfully");
                toast.success("Logged Out Successfully")
            })
            .catch(error => {
                console.log(error);
                toast.error('Something has wrong')
            })
        handleCloseMenu()
    }

    return (
        <div className={`fixed w-full transition-all duration-500 ease-in-out ${scrollY > 5 ? 'top-0 bg-gradient-to-r from-[#ebf6fe] to-[#a1d8fe] opacity-100' : 'top-6'} left-1/2 -translate-x-1/2 z-30`}>

            <div className={`flex ${scrollY > 5 ? 'top-0 bg-transparent' : 'bg-gradient-to-r from-[#ebf6fe] to-[#a1d8fe]'} rounded-md sm:rounded-[50px] mx-1 sm:mx-auto items-center gap-3 sm:gap-5 max-w-[1200px] justify-between sm:px-14 px-2 py-3 sm:py-5`}>

                <div onClick={handleOpenMenu} className="flex items-center lg:hidden justify-center">
                    <button className="text-2xl font-bold"><RiMenuFill></RiMenuFill></button>
                </div>

                <div>
                    <Link to='/'><h3 className="font-wisdom text-2xl sm:text-4xl font-bold">Wisdom</h3></Link>
                </div>

                {loading && <div className="flex justify-center gap-5">
                    <div className="skeleton lg:block hidden rounded-md w-28 h-9"></div>
                    <div className="skeleton lg:block hidden rounded-md w-28 h-9"></div>
                    <div className="skeleton lg:block hidden rounded-md w-28 h-9"></div>
                    <div className="skeleton rounded-md w-28 h-9"></div>
                </div>}

                {!loading && <div className="flex items-center gap-5">
                    <div className={`flex lg:flex-row flex-col z-10 top-0 absolute lg:static lg:bg-none bg-gradient-to-r lg:p-0 py-5 pl-5 pr-10 from-[#ebf6fe] to-[#a1d8fe] lg:items-center font-inter font-semibold gap-5 transition-all ease-in-out duration-500 ${menuOpen ? 'left-0' : '-left-48'}`}>
                        <button onClick={handleCloseMenu} className="flex lg:hidden justify-end absolute bg-[#00000042] p-2 right-0 top-0 text-xl"><RxCross1></RxCross1></button>

                        <NavLink onClick={handleCloseMenu} to='/'>Home</NavLink>
                        {user && <>
                            <NavLink onClick={handleCloseMenu} to='/all-books'>All Books</NavLink>
                            <NavLink onClick={handleCloseMenu} to='/add-books'>Add Books</NavLink>
                            <NavLink onClick={handleCloseMenu} to='borrowed-books'>Borrowed Books</NavLink>
                            <button data-tip={`${user?.displayName}`} className="tooltip tooltip-bottom"><img className="w-9 h-9 lg:flex hidden object-cover rounded-full border-2 border-[#36ad68]" src={user?.photoURL} /></button>
                        </>}
                        {!user && <Link onClick={handleCloseMenu} to='/login' className="bg-[#36ad68] text-center text-white px-7 py-2 rounded-md">Login</Link>}
                        {user && <button onClick={handleLogOut} className="bg-[#ce643b] text-white text-center px-4 py-2 rounded-md">Logout</button>}
                    </div>
                    <div className="flex gap-4 items-center">
                        {user &&
                            <button data-tip={`${user?.displayName}`} className="tooltip tooltip-bottom"><img className="w-8 h-8 lg:hidden object-cover rounded-full border-2 border-[#36ad68]" src={user?.photoURL} /></button>
                        }
                        {
                            location.pathname === '/' ? <Theme></Theme> : ''
                        }
                    </div>
                </div>}
            </div>
        </div>

    );
};

export default Navbar;