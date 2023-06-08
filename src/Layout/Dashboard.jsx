import React from 'react';
import { Link, Outlet } from 'react-router-dom';


const Dashboard = () => {

    // todo 
    const isAdmin = true;
    return (
        <div className="drawer  lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80  h-full bg-green-300 text-base-content">

                    {/* show the ul */}
                    {/* {
                        isAdmin ? <> hoile dekhabe</> : <>na hoile ai gulo dekhabe</>
                    } */}

                    {/* Sidebar content here */}
                    <li><Link to='/Dashboard/Studernts' className='font-bold hover:bg-success'>Studernts </Link></li>
                    <li><Link to='/'className='font-bold hover:bg-success'>My Class</Link></li>
                    <li><Link to='/Dashboard/Instructors'className='font-bold hover:bg-success'>instrueton</Link></li>
                    <li><Link to='/' className='font-bold hover:bg-success'>class add</Link></li>
                    <li><Link to='/' className='font-bold hover:bg-success'>My class</Link></li>
                    <li><Link to='/Dashboard/Manager' className='font-bold hover:bg-success'>manager</Link></li>
                    <li><Link to='/' className='font-bold hover:bg-success'>Show all class</Link></li>
                    <li><Link to='/' className='font-bold hover:bg-success'>all restion user</Link></li>
                    <div className="divider"></div>
                    <li><Link to="/" className='font-bold hover:bg-success'>Home</Link></li>
                    <li><Link to="/Instructors" className='font-bold hover:bg-success'>Instructors</Link></li>
                    <li><Link to="/Class" className='font-bold hover:bg-success'>class</Link></li>
                    
                </ul>
                
            </div>
        </div>
    );
};

export default Dashboard;