
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Breakingnews = () => {
    return (
        <div className="flex">
           <button className="btn bg-green-500">Breaking news</button>
        <Marquee pauseOnHover={true} speed={100}>
          <Link className="mr-12" to='/'> I can be a React component, multiple React components, or...</Link>
          <Link className="mr-12" to='/'> I can be a React component, multiple React components, or...</Link>
          <Link className="mr-12" to='/'> I can be a React component, multiple React components, or...</Link>
        </Marquee>
        </div>
    );
};

export default Breakingnews;