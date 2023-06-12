import React, { useEffect, useState } from 'react';

const AllStudent = () => {
    // All studern data loade
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        fetch('https://assignment-server-12-yahiamasud.vercel.app/users')
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                setDatas(data);
            })
    }, [])
    return (
        <div className="overflow-x-auto">
            <h1 className='text-center text-5xl font-bold underline'>all students</h1>
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>email</th>
                        <th>user</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        datas.map((data,index)=><tr>
                            <th>{index+1}</th>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>User</td>
                        </tr>)
                    }
                   
                </tbody>
            </table>
        </div>
    );
};

export default AllStudent;