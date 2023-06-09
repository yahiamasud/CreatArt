import React from 'react';
import { Form, Link } from 'react-router-dom';

const ClassAdd = () => {
    const handleAddClass = (event) => {
        event.preventDefault();
        const Form = event.target;
        const ClassName = Form.ClassName.value;
        const name = Form.name.value;
        const Price = Form.Price.value;
        const photo = Form.photo.value;
        const AvailableSeats = Form.AvailableSeats.value;

        const  ClassData = {ClassName,Price,photo,AvailableSeats}
        
        fetch('https://assignment-server-12-yahiamasud.vercel.app/Class', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(ClassData)
        })
        .then(res=>res.json())
        .then(data => {
            if (data.insertedId) {
                Form.reset();
                alert("add ok Class")
            }
        })
    }
    return (
        <div className="container pb-5 bg-base-200">
            <div className='Box mx-auto' >
                <h1 className='text-5xl font-bold text-center m-10 '>Add Class</h1>
                <div className=" card flex-shrink-0 shadow-2xl bg-base-100 m-5">
                    <Form onSubmit={handleAddClass} className="card-body ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Class Name</span>
                            </label>
                            <input type="text" placeholder="name" name='ClassName' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Instructor Name</span>
                            </label>
                            <input type="text" placeholder="InstructorName" name='' defaultValue disabled className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">InstructorGmail</span>
                            </label>
                            <input type="text" placeholder="InstructorGmail"  name=''  defaultValue disabled className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="photo" name='photo' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" placeholder="Price" name='Price' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available seats</span>
                            </label>
                            <input type="text" placeholder="Available seats" name='AvailableSeats' className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Add Class</button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default ClassAdd;