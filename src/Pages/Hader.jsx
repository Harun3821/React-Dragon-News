
import logo from '../assets/logo.png'
import moment from 'moment';

const Hader = () => {

    return (
        <div className='text-center'>
            <img className='mx-auto' src={logo}/>
            <p>Journalism Without Fear or Favour</p>
            <div className="ptext-xl">{moment().format("dddd, MMMM D, YYYY")}</div>
        </div>
    );
};

export default Hader;