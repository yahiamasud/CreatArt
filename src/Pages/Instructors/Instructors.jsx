import React from 'react';
import { useEffect, useState } from "react";
import './instructors.css'

const Instructors = () => {

    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/Instructors')
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                setInstructors(data);
            })
    }, [])
    return (
        <div className='mx-auto m-10'>
            <h1 className='text-center text-5xl font-bold mb-10'>All Instructors</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            instructors.map(instructor => <tr>
                                <th></th>
                                <td><img className="img-instor" src={instructor.image} alt="" /></td>
                                <td>{instructor.name}</td>
                                <td>{instructor.email}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Instructors;