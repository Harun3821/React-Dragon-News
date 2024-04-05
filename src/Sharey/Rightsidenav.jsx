import { FaGoogle } from "react-icons/fa6";
import {FaGithub}  from "react-icons/fa6"
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Qjone1 from "../assets/qZone1.png"
import Qjone2 from "../assets/qZone2.png"
import Qjone3 from "../assets/qZone3.png"
  




const Rightsidenav = () => {

    return (
        <div>
            
            <div className="space-y-3 p-4 mb-6 border">
                <div className="text-2xl font-bold text-center">Login With</div>
                <button className="btn btn-outline w-full"><FaGoogle />Login With Google</button>
                <button className="btn btn-outline w-full"><FaGithub />Login With Github</button>
            </div>

            <div className="p-4 mb-6">
                <h2 className="text-2xl font-bold mb-3">Find Us On</h2>
                <a className="items-center font-semibold border border-x flex p-4 mb-2" href=""><FaFacebookF  className="mr-2"/>
                <span>Facebook</span>
                </a>
                <a className="items-center font-semibold border rounded-b-lg  flex p-4 mb-2" href=""><BsTwitter className="mr-2" />
                <span>Twitter</span>
                </a>
                <a className="items-center font-semibold border rounded-b-lg flex p-4" href=""><FaInstagram className="mr-2" />
                <span>Instagram</span>
                </a>
            </div>
           {/* Q jon */}

           <div className="space-y-3 mb-6 p-4">
               <h2 className="text-2xl">Q Zone</h2>
               <img src={Qjone1} alt="" />
               <img src={Qjone2} alt="" />
               <img src={Qjone3} alt="" />


           </div>

            
        </div>
    );
};

export default Rightsidenav;