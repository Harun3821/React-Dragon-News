import{useLoaderData} from "react-router-dom"
import Navbar from "../Sharey/Navbar";
import Rightsidenav from "../Sharey/Rightsidenav";
import Leftsidenave from "../Sharey/Leftsidenave";
import Breakingnews from "./Breakingnews";
import Hader from "./Hader";
import Newscard from "./Newscard";


const Home = () => {

     const news = useLoaderData()
     console.log(news)

    return (
        <div>
         <Hader></Hader>
         <Breakingnews></Breakingnews>
         <Navbar></Navbar>
        <div className="grid lg:grid-cols-4 gap-6 grid-cols-1">
            <div>
            <Leftsidenave></Leftsidenave>
            </div>
            <div className="md:col-span-2 ">
                {
                    news.map(aNews => <Newscard key={aNews._id} news={aNews}></Newscard>)
                }
            </div>
            <div>
                <Rightsidenav></Rightsidenav>
            </div>
         </div>
        </div>
    );
};

export default Home;