import { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { BsEyeFill, BsEyeSlash } from "react-icons/bs";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";
import axios from "axios";


const Login = () => {

    const { signInUser , user, setUser, googleLogIn } = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()

 useEffect(() =>{
    if (user) {
        navigate('/')
    }
 },[navigate, user])
 const from = location.state || '/'

    // login 
    const handleLogIn = async e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        try{
            const result = await signInUser(email, password)
            const {data} = await axios.post(`http://localhost:5000/jwt` ,{
                email: result?.user?.email
            },
            { withCredentials:true }
        )
        console.log(data);
        }catch(err){
            console.log(err);
            toast.error(err?.message)
        
    }
}
    const handeleGoogleLogIng = async () =>{
        try{
            const result = await googleLogIn()
            const {data} = await axios.post(`http://localhost:5000/jwt` ,{
                email: result?.user?.email
            },
            { withCredentials:true }
        )
            console.log(data);
            toast.success('Login Successfully')
            }catch(err){
            console.log(err);
            toast.error(err?.message)
        }
    }

    return (
        <div className="card shrink-0 md:w-[448px] md:mt-28 mx-auto shadow-2xl bg-base-100">
            <h1 className="font-bold text-4xl mt-6 text-center">Log In</h1>
            <p className="text-base text-center mt-3">Don&apos;t have an account?<span className="text-blue-600"> <NavLink to='/register'>Sign up</NavLink> </span></p>
            <form onSubmit={handleLogIn} className="card-body">
                <div className="form-control -mt-5">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type={showPassword ? "text" : "password"} name="password"
                        placeholder="password" className="input input-bordered" required />
                    <label className="label">
                    <div className="relative">
                            <p onClick={() => setShowPassword(!showPassword)} className=" cursor-pointer absolute bottom-8 md:left-[350px] left-[290px]"> {showPassword ? <BsEyeSlash></BsEyeSlash> : <BsEyeFill></BsEyeFill>} </p>
                        </div>
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control">
                    <button className="btn bg-violet-900 text-white text-base font-bold hover:bg-violet-800 hover:scale-105">Login</button>
                </div>
                <div className="flex items-center justify-around">
                    <hr className="w-[120px] border  border-slate-600 mt-1" /> <p className="text-base text-gray-700 text-center">or continue with</p> <hr className="w-[120px] border  border-slate-600 mt-1" />
                </div>
            </form>
            <div className="card-body -mt-12">
                <div className="form-control ">
                    <button onClick={() => handeleGoogleLogIng()}
                     className="btn bg-[#db4437] text-white text-base font-bold hover:bg-[#db4437] hover:scale-105">Login with Google</button>
                </div>
            </div>

        </div>
    );
};


export default Login;