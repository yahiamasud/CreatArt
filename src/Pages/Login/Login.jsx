import React, { useContext, useState } from 'react';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import { BsGoogle } from "react-icons/bs";

const Login = () => {
    const { singIn, singInGoogle } = useContext(AuthContext);
    const [error, setError] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/"

    const [checktype , setChecktype ]= useState("password");
    const [showhidetext, setShowhidetext]= useState("show");

    const handleShowHigh=(e)=>{
        const gettype = e.target.value;
        if( gettype === "password"){
            setChecktype('text');
            setShowhidetext("Hide");
        }
        else{
            setChecktype('password');
            setShowhidetext("Show");
        }
    }

    const handlelogin = (event) => {
        event.preventDefault();
        const Form = event.target;
        const email = Form.email.value;
        const password = Form.password.value;
        console.log(email, password);

        const regularExpression = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        if (password.length < 6) {
            setError("password length not ok ")
            return
        }
        else if (!regularExpression.test(password)) {
            setError("password should contain atleast one number and one special character")
            return
        }


        singIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                Form.reset();
                navigate(from, { replace: true });

            })
            .catch((error) => {
                const errorCode = error.code;
                setError(errorCode)
                // ..
            });
    }
    const handleGoogleSingIn = () => {
        singInGoogle()
            .then(result => {
                const loggedUser = result.user;
                const saveUser = { name: loggedUser.displayName, email: loggedUser.email, }
                fetch('https://assignment-server-12-yahiamasud.vercel.app/Users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            Form.reset();

                        }
                    })
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error)
            })

    }

    return (
        <div className="">
            <h1 className='text-5xl font-bold text-center  p-5'>LOGING</h1>
            <div className='Box flex  grid grid-cols-1 md:grid-cols-2 p-10 mx-auto' >
                <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                    <Form onSubmit={handlelogin} className="card-body  bg-sky-300 rounded">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className='flex align-items-center '>
                            <input  type={ checktype } placeholder="password" name='password' className="input w-full input-bordered" required /> <button value={checktype} onClick = {(e)=>handleShowHigh(e)} className='btn btn-primary' type='button'>{showhidetext}</button>
                            </div>
                            <label className="label">
                                <p className='text-red-500'>{error}</p>
                            </label>
                            
                        </div>
                        <div className="form-control ">
                            <button className="btn btn-success  normal-case mx-12" type="submit">Login</button>
                        </div>
                        <div className="form-control ">
                            <button onClick={handleGoogleSingIn} className="btn btn-success  mx-12 normal-case " type="button" >  <span className='mx-2'><BsGoogle /></span> Google_SingIn</button>
                        </div>
                    </Form>
                    <label className="label">
                        <p className='p-5 mr-5'> No account <Link to="/Regetetion" className=' bg-success rounded p-1'> Regestation page</Link></p>
                    </label>

                </div>
                <div className='text-center'>
                    <div className=''>
                        <h1 className='text-6xl font-bold m-5'>Welcome to OurPlatform!</h1>
                        <p className='text-2xl font-bold'>Please enter your login credentials to access your account:</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

