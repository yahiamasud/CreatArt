import React, { useEffect, useState } from 'react';

const MySeleted = () => {
    const [selectClass, setselectClass] = useState([]);
    useEffect(() => {
        fetch('https://assignment-server-12-yahiamasud.vercel.app/ClassSeleted')
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                setselectClass(data)
            })
    }, [])
    return (
        <div>
          <div className=''>
                <h1 className='text-center text-5xl font-bold mb-10'>All Seleted Class</h1>
                <div className="">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className='border-black font-1xl' >
                                <th>#</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>site</th>
                                <th>plymany</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                selectClass.map((user, index) => <tr key={user._id} className='border-black'>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.price}</td>
                                    <td>{user.seats}</td>
                                    <td><button className='btn btn-secondary'>ply</button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default MySeleted;