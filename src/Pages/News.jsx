
import { useParams } from "react-router-dom";
import Navbar from "../Sharey/Navbar";
import Rightsidenav from "../Sharey/Rightsidenav";
import Hader from "./Hader";



const News = () => {

     const {id} = useParams()

    return (
        <div>
       <Hader></Hader>
       <Navbar></Navbar>
        <div className="grid md:grid-cols-4">
            <div className="col-span-3">
             <h2 className="text-4xl">News Detiles</h2>
             {id}
            </div>
            <div>
            <Rightsidenav></Rightsidenav>
            </div>
        </div>
          
        </div>
    );
};

export default News;
