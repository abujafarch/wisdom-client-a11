import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    const [scrollY, setScrollY] = useState(0)
    window.addEventListener('scroll', (e) => {
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
        <div className={`fixed w-full transition-all duration-500 ease-in-out ${scrollY > 5 ? 'top-0 bg-gradient-to-r opacity-100 from-[#ebf6fe] to-[#a1d8fe]' : 'top-6'} left-1/2 -translate-x-1/2 z-30`}>

            <div className={`flex ${scrollY > 5 ? 'top-0 bg-transparent' : 'bg-gradient-to-r from-[#ebf6fe] to-[#a1d8fe]'} rounded-[50px] mx-auto items-center gap-[150px] w-max justify-between px-20 py-5`}>

                <Link to='/'><h3 className="font-wisdom text-4xl font-bold">Wisdom</h3></Link>
                <div className="flex items-center font-inter font-semibold gap-5">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/all-books'>All Books</NavLink>
                    <NavLink to='/add-books'>Add Books</NavLink>
                    <NavLink to='borrowed-books'>Borrowed Books</NavLink>
                    <Link className="bg-[#36ad68] text-white px-7 py-2 rounded-md">Login</Link>
                    <Link className="bg-[#ce643b] text-white px-7 py-2 rounded-md">Logout</Link>
                </div>
            </div>
        </div>

    );
};

export default Navbar;