import React from 'react';
import { Link, Outlet } from 'react-router-dom';
// import useAdmin from '../hook/userAdmin';


const Dashboard = () => {

    // todo 
    //    const [admin] = useAdmin();
    const isAdmin = true;
    const isStedent = false;
    const isInstor = false;
  
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
                <ul className="menu p-4 w-50  h-full bg-green-300 text-base-content">

                    {/* show the ul */}

                    {isAdmin&&<> <h1 className='text-1xl font-bold'>Admin Dashboard</h1>
                                <div className="divider"></div>
                                <li><Link to='/Dashboard/Manager' className='font-bold hover:bg-success'>manager</Link></li>
                                <li><Link to='/Dashboard/ClassAdd' className='font-bold hover:bg-success'>Manage Classes</Link></li>
                                <li><Link to='/Dashboard/AllUser' className='font-bold hover:bg-success'>Manage Users</Link></li>
</>}
                    {isStedent&&<> <h1 className='text-1xl font-bold'>Student Dashboard</h1>
                                <div className="divider"></div>
                                <li><Link to='/Dashboard/Studernts' className='font-bold hover:bg-success'>Studernts </Link></li>
                                <li><Link to='/' className='font-bold hover:bg-success'>My Selected Classes</Link></li>
                                <li><Link to='/' className='font-bold hover:bg-success'>My Enrolled Classes</Link></li></>}


                    {isInstor&&<> <li><Link to='/Dashboard/Instructors' className='font-bold hover:bg-success'>instrueton</Link></li></>}
                    
                    {/* Sidebar content here */}

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