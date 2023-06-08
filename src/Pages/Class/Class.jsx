
import ClsCard from '../../componant/clsCard/ClsCard';
import { useEffect, useState } from "react";

const Class = () => {

    const [datas , setDatas] = useState([]);
    useEffect(() => {
        fetch('https://assignment-server-12-tau.vercel.app/class')
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                setDatas(data);
            })
    }, [])
    // console.log(data);
    
    return (
        <div className="mx-auto m-10 ">
            <h1 className="text-5xl text-center font-bold pb-5">All Class</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-10'>
               {
                datas.map(data=> <ClsCard data={data}></ClsCard>)
               }
            </div>

        </div>
    );
};

export default Class;