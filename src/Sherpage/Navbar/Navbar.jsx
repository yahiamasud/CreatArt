import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import './navbar.css'
// import img from '/public/ldp_plugin-wpml.png'

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogout = () => {
        logOut()
            .then()
    }
    return (
        <div className="navbar bg-slate-700 text-white">
            <div className="navbar-start">
                <h2 className='text-2xl font-bold uppercase'>CreactArt</h2>
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu bg-red-600 menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
                        <li><Link to="/" className='font-bold hover:bg-success'>Home</Link></li>
                        <li><Link to="/Instructors" className='font-bold hover:bg-success'>Instructors</Link></li>
                        {
                            user ? <ul>
                                <li><Link to="/Dashboard" className='font-bold hover:bg-success'>Deshboard </Link></li></ul> : <div></div>
                        }

                        <li><Link to="/Class" className='font-bold hover:bg-success'>Class</Link></li>
                    </ul>
                </div>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/" className='font-bold hover:bg-success'>Home</Link></li>
                    <li><Link to="/Instructors" className='font-bold hover:bg-success'>Instructors</Link></li>
                    {
                        user ? <ul className='flex '>
                            <li><Link to="/Dashboard" className='font-bold hover:bg-success'>Deshboard</Link></li></ul> : <div></div>
                    }
                    <li><Link to="/Class" className='font-bold hover:bg-success'>class</Link></li>
                </ul>


            </div>
            <div className="navbar-end">
                <div className='flex px-5'>
                    {
                        user && <span className='mx-3'><img className="imgProfile  " title={user.displayName} src={user.photoURL} alt="" /></span>
                    }
                    {user ?
                        <button onClick={handleLogout} className=' font-bold'> Logout</button>
                        :

                        <Link to="/Login">
                            <div className='text-center flex '> <button className='btn btn-success'>login</button></div>
                        </Link>
                    }
                    <label className="swap swap-rotate pl-5">
                        <input type="checkbox" />
                        <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
                        <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
