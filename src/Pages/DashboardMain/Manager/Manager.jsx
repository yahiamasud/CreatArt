import React, { useEffect, useState } from 'react';
import ClassAdmin from '../../../componant/ClassAdmin/ClassAdmin';

const Manager = () => {
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
            <h1 className="text-5xl text-center font-bold pb-5">Manage Class</h1>
            <div className='grid grid-cols-1 md:grid-cols-1 xl:grid-cols-1 gap-10'>
               {
                datas.map((data , index) => <ClassAdmin key={data._id} data={data} ></ClassAdmin>)
               }
            </div>

        </div>
    );
};

export default Manager;