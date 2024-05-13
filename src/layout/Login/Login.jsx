import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsEye } from "react-icons/bs";
import { BsEyeSlash } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { TfiLock } from "react-icons/tfi";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import Loader from "../Loader/Loader";


const Login = () => {

    const [showPassword, setShowPassword] = useState(false)
    const { loginUser, googleLogin, setLoading, user, loading } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location);

    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password);
        loginUser(email, password)
            .then(result => {
                console.log(result);
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.log(error);

                if (error.message === 'Firebase: Error (auth/invalid-credential).') {
                    Swal.fire({
                        icon: "error",
                        title: "Invalid email or password",
                        text: "Please make sure your given email and password is valid",
                    })
                }
                if (error.message !== 'Firebase: Error (auth/invalid-credential).') {
                    Swal.fire({
                        icon: "error",
                        title: "Something has wrong",
                        confirmButtonText: "Try Again"
                    })
                }
                setLoading(false)
            })
    }

    const handleGoogleLogin = (e) => {
        e.preventDefault()
        googleLogin()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })
    }

    if (loading) {
        return <Loader></Loader>
    }

    if (user) {
        return navigate('/')
    }

    return (
        <div className=" mx-auto max-w-[500px] mt-40 px-4 md:px-5 ">
            <div className="rounded-xl h-fit w-full  py-5 border border-[#ebebeb]">
                <h4 className="sm:text-5xl text-4xl mb-2 font-inter font-semibold text-center">Welcome</h4>
                <p className="rounded-t-lg mb-2 text-2xl font-mont text-center text-[#36ad68] font-semibold">Please Login</p>
                <div className="md-lg:px-10 px-5">

                    <form onSubmit={handleLogin} className="w-full">
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
                            <button onClick={handleGoogleLogin} className="border-dark-blue px-1 border flex gap-2 items-center justify-center py-[6px] flex-1 rounded-sm font-poppins font-medium"><FcGoogle className="text-3xl"></FcGoogle> Google</button>
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