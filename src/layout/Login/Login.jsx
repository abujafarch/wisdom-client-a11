import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsEye } from "react-icons/bs";
import { BsEyeSlash } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { TfiLock } from "react-icons/tfi";
import { useState } from "react";


const Login = () => {

    const [showPassword, setShowPassword] = useState(false)
    return (
        <div className=" mx-auto max-w-[500px] mt-40 px-4 md:px-5 ">
            <div className="rounded-xl h-fit w-full  py-5 border border-[#ebebeb]">
                <h4 className="sm:text-5xl text-4xl mb-2 font-inter font-semibold text-center">Welcome</h4>
                <p className="rounded-t-lg mb-2 text-2xl font-mont text-center text-[#36ad68] font-semibold">Please Login</p>
                <div className="md-lg:px-10 px-5">
    
                    <form className="w-full">
                        <div className="mt-7 w-full flex items-center border-b rounded-sm">
                            <span className=" p-2 text-2xl text-dark-blue"><TfiEmail></TfiEmail></span>
                            <input className=" outline-none w-full py-2 px-3" type="email" name="email" placeholder="Your Email" required />
                        </div>
    
                        <div className="mt-7 flex w-full items-center border-b rounded-sm">
                            <span className=" p-2 text-2xl text-dark-blue"><TfiLock></TfiLock></span>
                            <input className=" outline-none w-full py-2 px-3" type={showPassword ? 'text' : 'password'} name="password" placeholder="Your Password" required />
    
                            <button onClick={(e) => {
                                e.preventDefault()
                                setShowPassword(!showPassword)
                            }} className="text-xl text-dark-blue pr-2">
    
                                {
                                    showPassword ? <BsEye></BsEye> : <BsEyeSlash></BsEyeSlash>
                                }
    
                            </button>
                        </div>
    
                        <button className="bg-[#36ad68] w-full py-2 rounded-sm mt-7 font-inter text-lg font-medium text-white">Login</button>
                    </form>
    
                    <div>
                        <p className="my-4 text-center font-poppins font-medium">or Login with</p>
    
                        <div className="flex gap-2 sm:gap-4 items-center justify-center">
                            <button className="border-dark-blue px-1 border flex gap-2 items-center justify-center py-[6px] flex-1 rounded-sm font-poppins font-medium"><FcGoogle className="text-3xl"></FcGoogle> Google</button>
    {/* 
                            <button onClick={handleGithubLogin} className="border-dark-blue px-1 border flex gap-2 items-center justify-center py-[6px] rounded-sm font-poppins flex-1 font-medium"><BiLogoGithub className="text-3xl text-[#1F2328]"></BiLogoGithub>GitHub</button> */}
                        </div>
    
                        <p className="py-5 text-center font-medium font-poppins">
                            Not a member? <Link to='/register' className="text-[#36ad68]">Register</Link>
                        </p>
                    </div>
                </div>
    
            </div>
        </div>
    );
};

export default Login;