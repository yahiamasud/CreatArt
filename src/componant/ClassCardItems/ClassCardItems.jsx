import { Link } from 'react-router-dom';
import img from '../../../public/png-transparent-error-404-404-error-thumbnail.png'
const ClassCardItems = () => {
    // const { name, image, price, availableseats } = Classitems;
    return (
        <div>
            <div className="card mx-auto w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                       className:- Shoes!
                        <div className="badge badge-secondary">Price:-NEW</div>
                    </h2>
                    <p>instretorName:- If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                      <Link to='/Class'><button className='btn btn-success'>Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassCardItems;