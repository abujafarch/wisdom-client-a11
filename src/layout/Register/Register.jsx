import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { BsEye } from "react-icons/bs";
import { BsEyeSlash } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { TfiLock } from "react-icons/tfi";
import { CiUser } from "react-icons/ci";
import { HiOutlinePhoto } from "react-icons/hi2";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";



const Register = () => {
    const [showPassword, setShowPassword] = useState(false)
    const { createUser, auth, setUpdateProfile } = useContext(AuthContext)
    const pattern = /^(?=.*[A-Z])(?=.*[\W_]).+$/;

    const handleCreateUser = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const photo = form.photo.value
        const password = form.password.value


        if (!pattern.test(password) || password.length < 6) {
            return Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Maybe you have missed at least 6 character or at least one uppercase letter or one special character"
            });
        }
        console.log(name, email, photo, password);
        createUser(email, password)
            .then(() => {
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: photo
                })
                    .then(() => {
                        setUpdateProfile(true)
                    })
                    .catch(error => {
                        console.log(error);
                    })
            })
            .catch(error => {
                console.log(error);
            })

    }

    return (
        <div className=" mx-auto max-w-[500px] mt-40 px-4 md:px-5 ">
            <div className="rounded-xl h-fit w-full  py-5 border border-[#ebebeb]">
                <h4 className="sm:text-5xl text-4xl mb-2 font-inter font-semibold text-center">Welcome</h4>
                <p className="rounded-t-lg mb-2 text-2xl font-mont text-center text-[#36ad68] font-semibold">Please Register</p>
                <div className="md-lg:px-10 px-5">

                    <form onSubmit={handleCreateUser} className="w-full">
                        <div className="mt-7 w-full flex items-center border-b rounded-sm">
                            <span className=" p-2 text-2xl text-dark-blue"><CiUser></CiUser></span>
                            <input className=" outline-none w-full py-2 px-3" type="text" name="name" placeholder="Your Name" required />
                        </div>

                        <div className="mt-7 w-full flex items-center border-b rounded-sm">
                            <span className=" p-2 text-2xl text-dark-blue"><TfiEmail></TfiEmail></span>
                            <input className=" outline-none w-full py-2 px-3" type="email" name="email" placeholder="Your Email" required />
                        </div>

                        <div className="mt-7 w-full flex items-center border-b rounded-sm">
                            <span className=" p-2 text-2xl text-dark-blue"><HiOutlinePhoto></HiOutlinePhoto></span>
                            <input className=" outline-none w-full py-2 px-3" type="text" name="photo" placeholder="Your Photo URL" required />
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

                        <button className="bg-[#36ad68] w-full py-2 rounded-sm mt-7 font-inter text-lg font-medium text-white">Register</button>
                    </form>

                    <div>
                        <p className="py-5 text-center font-medium font-poppins">
                            Already have an account? <Link to='/login' className="text-[#36ad68]">Login</Link>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Register;