import React from 'react';
import { Link, Outlet } from 'react-router-dom';
// import useAdmin from '../hooks/useAdmin';
import { BsFillHouseFill, BsClipboard2PlusFill, BsPersonBoundingBox, BsPeople, BsLayersFill, BsPersonBadge, BsPersonVideo, BsCheckCircleFill, BsPersonFillLock } from "react-icons/bs";
import Reveal from 'react-awesome-reveal';
// import useAdmin from '../hooks/useAdmin';



const Dashboard = () => {

    // const [isAdmin]=useAdmin();
    // todo 
    const isAdmin = true;
    const isStedent = true;
    const isInstor = true;

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
                <ul className="menu p-4 w-50  h-full bg-green-300 text-black text-base-content">

                    {/* show the ul */}
                    {/* {isAdmin ? <>hello admin</>:<>user</>} */}

                    {isAdmin && <> <h1 className='text-1xl flex align-items-center font-bold'> <Reveal effect="Zoom"><BsFillHouseFill></BsFillHouseFill><span>Admin Dashboard</span></Reveal> </h1>
                        <li><Link to="/Dashboard/Manager" className='font-bold hover:bg-success'> <Reveal effect="Slide"><BsClipboard2PlusFill></BsClipboard2PlusFill><span> Manage Classes</span> </Reveal></Link></li>
                        <li><Link to='/Dashboard/AllUser' className='font-bold hover:bg-success'><Reveal effect="Zoom"><BsPersonBoundingBox></BsPersonBoundingBox> <span>Manage Users</span></Reveal></Link></li>
                    </>}
                    <div className="divider bg-black"></div>

                    {isInstor && <><h1 className='text-1xl font-bold flex align-items-center'> <Reveal effect="Zoom"> <BsFillHouseFill></BsFillHouseFill><span>instrueton Dashboard </span></Reveal></h1>
                        <li><Link to='/Dashboard/Instructors' className='font-bold hover:bg-success'><Reveal effect="Zoom"><BsPersonBadge></BsPersonBadge><span>instrueton</span></Reveal></Link></li>
                        <li><Link to='/Dashboard/ClassAdd' className='font-bold hover:bg-success'><Reveal effect="Zoom"><BsLayersFill></BsLayersFill><span>add Classes</span></Reveal></Link></li>
                        <li><Link to='/Dashboard/AllStudent' className='font-bold hover:bg-success'><Reveal effect="Zoom"><BsPeople></BsPeople><span>All Studen</span></Reveal></Link></li></>}
                        <div className="divider bg-black"></div>
                    {isStedent && <> <h1 className='text-1xl font-bold flex align-items-center'><Reveal effect="Zoom"> <BsFillHouseFill></BsFillHouseFill><span> Student Dashboard </span></Reveal></h1>

                        <li><Link to='/Dashboard/Studernts' className='font-bold hover:bg-success'><Reveal effect="Zoom"><BsPersonVideo></BsPersonVideo><span>Student</span></Reveal></Link></li>
                        <li><Link to='' className='font-bold hover:bg-success'><Reveal effect="Zoom"><BsCheckCircleFill></BsCheckCircleFill><span>My Selected Classes</span></Reveal></Link></li>
                        <li><Link to='' className='font-bold hover:bg-success'><Reveal effect="Zoom"><BsPersonFillLock></BsPersonFillLock><span>My Enrolled Classes</span></Reveal></Link></li></>}
                    
                    {/* Sidebar content here */}

                    <div className="divider bg-black"></div>
                    <li><Link to="/" className='font-bold hover:bg-success'><Reveal effect="Zoom"><BsFillHouseFill></BsFillHouseFill><span>Home</span></Reveal></Link></li>

                </ul>
            </div>
        </div>
    );
};

export default Dashboard;