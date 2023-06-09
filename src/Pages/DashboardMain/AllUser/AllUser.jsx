import React, { useEffect, useState } from 'react';


const AllUser = () => {
    // const { data: users = [], refetch } = useQuery(['users'], async () => {
    //     const res = await fetch(`https://assignment-server-12-tau.vercel.app/users`);
    //     return res.json();
    // })
    const [user , setUser]= useState([]);

    useEffect(()=>{
        fetch(`https://assignment-server-12-tau.vercel.app/users`)
        .then(res => res.json())
        .then(data => setUser(data))
    },[user])

    const handleMakeAdmin = (user)=>{
        fetch (`https://assignment-server-12-tau.vercel.app/users/admin/${user._id}`,{
            method:'PATCH'
        })
        .then (res=>res.json())
        .then(data =>{
            if(data.modifiedCount){
                refetch();
                alert("ok admin")
            }
        })
    }

    return (
        <div>
             <div className='mx-auto m-10'>
            <h1 className='text-center text-5xl font-bold mb-10'>All user</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr  className='border-black text-black font-1xl' >
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Roll</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map((user, index) => <tr key={user._id} className='border-black'>
                                <th>{index+1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role === "admin"?"admin": <button onClick={()=>handleMakeAdmin(user)}>add admin</button> }</td>
                                <td><button>user</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    );
};

export default AllUser;