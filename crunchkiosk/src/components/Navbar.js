import {React, useState, useRef, useEffect} from 'react'

import { Link, useNavigate } from 'react-router-dom';
import {MdClose, MdMenu} from 'react-icons/md';



import '../css/Navbar.css'


const Navbar = () => {  

    

    // setting up variables for window width and height
    const [width, setWidth]   = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    const updateDimensions = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    // setting up listener for window resize
    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    

    const menuLeave = () => {
        document.getElementById("cool-menu").classList.remove("menu-enter");
        document.getElementById("cool-menu").classList.add("menu-leave");

        setTimeout(()=>{
            setMenu(false);
        }, 400);
    };

    

    const [menu, setMenu] = useState(false);

    return (
        <>
            {menu && (
                <div className='menu-container menu-enter' id='cool-menu'>
                    <MdClose className='close-menu' onClick={menuLeave}/>
                    <Link to='/'><p className='menu-btn'>Home</p></Link>
                    {/* <Link to='/blood-drive'><p className='menu-btn red-text-mobile'>Blood Drive</p></Link> */}
                    <Link to='/events'><p className='menu-btn'>Events</p></Link>
                    <Link to='/about'><p className='menu-btn'>About us</p></Link>
                    <Link to='/gallery'><p className='menu-btn'>Gallery</p></Link>
                    <Link to='/contact'><p className='menu-btn'>Contact us</p></Link>
                    <Link to='/competitions'><p className='menu-btn'>Competitions</p></Link>
                    <Link to='signup'><p className='menu-btn'>Sign up</p></Link>

                    <Link to='/my-profile'><p className='menu-btn'>{displayName}</p></Link>
                    {/* <Link to='/shop'><p className='menu-btn'>Shop</p></Link> */}
                    {/* <Link to='/daytime-dager' target="_blank"><p className='menu-btn'>Darty</p></Link> */}

                    {/*<p className='menu-btn menu-highlight' onClick={()=>{
                        menuLeave();
                        
                        setTimeout(()=>{
                            setWaitlist(true);
                        }, 200);
                        
                    }}>Join Waitlist</p>*/}
                </div>
            )}

            

            

            
        
        {width > 900 && (
            <div className='nav' id='nav'>
                <div className='top_logo' id='top_logo'>
                <Link to='/'><div className='toplogo'><img src={require("../assets/logo.png")} alt="logo" className='logo' id="small_topcorner"/ ></div></Link>
                </div>
                <div className='nav-buttons'>
                    <Link to='/'><p className='nav-btn'>Home</p></Link> 
                    <Link to='/about'><p className='nav-btn'>About us</p></Link>
                    <Link to='/events'><p className='nav-btn'>Events</p></Link>

                    {/* <Link to='/blood-drive'><p className='menu-btn red-text'>Blood Drive</p></Link> */}

                    <Link to='/gallery'><p className='nav-btn'>Gallery</p></Link>
                    <Link to='/contact'><p className='nav-btn'>Contact us</p></Link>
                    <Link to='/competitions'><p className='nav-btn'>Competitions</p></Link>


                    {/* <Link to='/signup'><p className='nav-btn'>Sign Up</p></Link> */}
                    {(displayName != null) && (
                        <>
                    <Link to='/my-profile'><p className='nav-btn'>{displayName}</p></Link>

                    <button className='nav-btn' onClick={handleLogout}>Sign out</button>
                    </>
                    )}
                    {(displayName === null) && (<Link to='/signup'><p className='nav-btn'>Sign up</p></Link>)}
                    
                    
                    
                    {/* <Link to='/signup'><p className='nav-btn'>SIGN UP!</p></Link> */}
                    {/*<Link to='/daytime-dager' target="_blank"><p className='nav-btn'>Darty</p></Link>*/}
                    {/* <p className='nav-btn' onClick={comingSoonPop}>Shop</p> */}
                    {/*<p className='nav-highlight' onClick={()=>{setWaitlist(true)}}>Join Waitlist</p>*/}
                </div>
            </div>
        )}
        {width < 900 && (
            <div className='mobile-nav' id='mobile-nav'>
                <div className='top_logo' id='top_logo'>
                <Link to='/'><img src={require("../assets/logo.png")} alt="logo" className='logo' id="small_topcorner"/ ></Link>
                </div>
                {/* <img src={require("../assets/hsslogo.png")} alt="logo" className='logo'/> */}
                <MdMenu className='open-menu' onClick={()=>{setMenu(true)}}/>
            </div>
        )}

        </>
    )
}

export default Navbar;