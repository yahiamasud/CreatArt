import { Link } from 'react-router-dom';
import './class.css'

const PClassCardItems = ({popularC}) => {
    const { name, image, price, available} = popularC;
    console.log(name);
    return (
        <div>
            <div className="card mx-auto  w-96 bg-base-100 shadow-xl">
                <figure><img src={image} className='classImage' alt="Shoes" /></figure>
                 <div>
                    <div className='card-body'>
                        <h1>Class-name:-{name}</h1>
                        <h1>price:-${price}</h1>
                    </div>
                 </div>
            </div>
        </div>
    );
};

export default PClassCardItems;