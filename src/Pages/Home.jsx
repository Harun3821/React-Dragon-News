
import Navbar from "../Sharey/Navbar";
import Rightsidenav from "../Sharey/Rightsidenav";
import Leftsidenave from "../Sharey/Leftsidenave";
import Breakingnews from "./Breakingnews";
import Hader from "./Hader";


const Home = () => {
    return (
        <div>
         <Hader></Hader>
         <Breakingnews></Breakingnews>
         <Navbar></Navbar>
         <h2 className="text3xl font-poppins font-bold">My harun</h2>
         <div className="grid lg:grid-cols-4 gap-6 grid-cols-1">
            <div className="border">
            <Leftsidenave></Leftsidenave>
            </div>
            <div className="md:col-span-2 ">
                <h2 className="text-4xl">News coming soon...</h2>
            </div>
            <div className="border-2">
                <Rightsidenav></Rightsidenav>
            </div>
         </div>
        </div>
    );
};

export default Home;