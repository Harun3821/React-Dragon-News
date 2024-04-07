import { Link } from "react-router-dom";
import Navbar from "../Sharey/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Provirdes/Authprovider";



const Register = () => {
    
const {createUser} = useContext(AuthContext);



  const handaleRegister = e =>{
        e.preventDefault()
        console.log(e.currentTarget)
        const from = new FormData(e.currentTarget)

        const name = from.get('name');
        const photo = from.get('Photo');
        const email = from.get('email');
       const password = from.get('password');
      console.log(name, email, photo, password)

      createUser(email, password)
      .then(result =>{
        console.log(result.user)
      })
      .catch(error=>{
        console.error(error.message)
      })
        
    
    }


    return (
        <div>
        <Navbar></Navbar>
   <div>
  <h2 className="font-semibold text-3xl my-10 text-center">please Register now!</h2>
    <form onSubmit={handaleRegister} className="md:w-3/4 lg:w-1/2 shadow-2xl bg-base-100 mx-auto">
       <div className="form-control">
         <label className="label">
           <span className="label-text">Name</span>
         </label>
         <input type="text" placeholder="Name" required name="name" className="input input-bordered"  />
       </div>
       <div className="form-control">
         <label className="label">
           <span className="label-text">Photo URL</span>
         </label>
         <input type="text" placeholder="Photo URL" required  name="Photo" className="input input-bordered"  />
         </div>
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
         <button className="btn btn-primary">REGISTER</button>
       </div>
    </form>
     <p className="text-center textarea-md">Allredy have  have an account? <Link className="text-2xl font-bold text-purple-600" to='/login'>Login</Link></p>
  </div>
        </div>
    );
};

export default Register;