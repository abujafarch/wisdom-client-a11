import { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Footer = () => {
    const { theme } = useContext(AuthContext)
    const location = useLocation()
    //data-theme={`${pathname === '/' && !themeChange ? 'dark' : 'light'}`}
    return (
        <div data-theme={`${location.pathname === '/' && theme ? 'dark' : 'light'}`} className={` pt-16 pb-8`}>
            <footer className="footer p-10 text-base-content">
                <aside>
                    <div >
                        <NavLink to='/'><h1 className='text-[#2a9d8f] font-extrabold mb-3 text-4xl font-kaushan text-left'>Wisdom</h1></NavLink>
                    </div>
                    <p className="font-mont font-medium">Wisdom Library.<br />Helping Students to Explore world since 1992</p>
                </aside>
                <nav>
                    <h6 className="footer-title">Categories</h6>
                    <a className="link link-hover font-mont font-medium">Horror</a>
                    <a className="link link-hover font-mont font-medium">Fiction</a>
                    <a className="link link-hover font-mont font-medium">History</a>
                    <a className="link link-hover font-mont font-medium">Biography</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Contact Us</h6>
                    <a className="link link-hover font-mont font-medium">Mirpur 10 No. Road, Dhaka</a>
                    <a className="link link-hover font-mont font-medium">+111 222 369 45</a>
                    <a className="link link-hover font-mont font-medium">+123 456 789 11</a>
                    <a className="link link-hover font-mont font-medium">wisdom@library.com</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Social Links</h6>
                    <a className="link link-hover font-mont font-medium">Facebook</a>
                    <a className="link link-hover font-mont font-medium">Instragram</a>
                    <a className="link link-hover font-mont font-medium">Twitter</a>
                </nav>
            </footer>
            <p className="px-2 text-center font-macondo font-semibold pb-3"> © 2024 Wisdom Ltd, All Rights Reserved</p>
        </div>
    );
};

export default Footer;