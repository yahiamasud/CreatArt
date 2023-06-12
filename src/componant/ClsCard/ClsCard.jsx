import './clscard.css'
import { Link } from 'react-router-dom';
const ClsCard = ({data}) => {
    const {name,image,price,available,seats,_id} = data;

    const saveToDatabase = () =>{
        alert("add")
        fetch('https://assignment-server-12-yahiamasud.vercel.app/ClassSeleted', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data => {
                alert("add ok seleted")
        })
    }
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
                      <Link to=''><button onClick={saveToDatabase} className='btn  btn-success'>AddClass</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClsCard;