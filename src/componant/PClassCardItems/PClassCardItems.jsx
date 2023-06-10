import { Link } from 'react-router-dom';
import './class.css'

const PClassCardItems = ({popularC}) => {
    const { name, image, price, available} = popularC;
    return (
        <div>
            <div className="card mx-auto  w-96 bg-base-100 shadow-xl">
                <figure><img src={image} className='classImage' alt="Shoes" /></figure>
                 <div>
                    <div className='card-body'>
                        <h1>Class-name:-{name}</h1>
                        <h1 >price:- <span className='bg-red-400 p-1 rounded'>${price}</span></h1>
                        <h1>Availabel set:-{available}</h1>
                    </div>
                    <button className='btn btn-success mx-5 mb-5'>Details</button>
                 </div>
            </div>
        </div>
    );
};

export default PClassCardItems;