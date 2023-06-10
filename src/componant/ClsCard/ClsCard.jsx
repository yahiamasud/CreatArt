import './clscard.css'
import { Link } from 'react-router-dom';
const ClsCard = ({data}) => {
    const {name,image,price,available,seats,_id} = data
    return (
        <div>
             <div className="card mx-auto w-96 bg-base-100 shadow-xl">
                <figure><img className='clardimg' src={image} alt="Shoes" /></figure>
                <div className="card-body ">
                    <h2 className="card-title">
                       className:- {name}
                        <div className="badge badge-secondary">Price:{price}</div>
                    </h2>
                    <p>instretorName:-kamal and jamal</p>
                    <div className="card-actions justify-end">
                      <Link to=''><button onClick={()=>handeladdClass('${._id}')} className='btn  btn-success'>AddClass</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClsCard;