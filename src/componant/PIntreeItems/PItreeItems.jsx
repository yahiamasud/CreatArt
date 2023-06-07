
import './terc.css'
const PItreeItems = ({popular}) => {
    const {name,image,email }= popular ;
    return (
        <div className='flex mx-auto'>
            <div className='text-center '>
               <img src={image} className='teacehrImage' alt="" />
               <h1>Name:-{name}</h1>
               <p>Email:-{email}</p>
            </div>
        </div>
    );
};

export default PItreeItems;