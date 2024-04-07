import { Link, useLocation, useNavigate} from "react-router-dom";
import Navbar from "../Sharey/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Provirdes/Authprovider";





const Login = () => {

   const {singIn} = useContext(AuthContext)
   const location =useLocation();
   const navigate = useNavigate()
   console.log('loction is veary goode', location);

    const handaleLogin = e =>{
        e.preventDefault()
        console.log(e.currentTarget)
        const from = new FormData(e.currentTarget)
        const email = from.get('email');
        const password = from.get('password')
        console.log(email, password)
        singIn(email, password)
        .then(result =>{
          console.log(result.user)
         
          navigate(location?.state ? location.state : '/')

        })
        .catch(error =>{
          console.error(error)
        })
    }

    return (
        <div>
        <Navbar></Navbar>
   <div>
  <h2 className="font-semibold text-3xl my-10 text-center">please Login now!</h2>
    <form onSubmit={handaleLogin} className="md:w-3/4 lg:w-1/2 shadow-2xl bg-base-100 mx-auto">
       <div className="form-control">
         <label className="label">
           <span className="label-text">Email</span>
         </label>
         <input type="email" placeholder="email" required name="email" className="input input-bordered"  />
       </div>
       <div className="form-control">
         <label className="label">
           <span className="label-text">Password</span>
         </label>
         <input type="password" placeholder="password" required name="password" className="input input-bordered"/>
         <label className="label">
           <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
         </label>
       </div>
       <div className="form-control mt-6">
         <button className="btn btn-primary">LOGIN</button>
       </div>
    </form>
     <p className="text-center textarea-md">Do not have a account? <Link className="text-2xl font-bold text-purple-600" to='/register'>Register</Link></p>
  </div>

        </div>
    );
};

export default Login;