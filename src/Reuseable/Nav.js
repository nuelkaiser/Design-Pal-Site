import React from 'react';
import Logo from './Logo';
import './Nav.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Nav() {

    const [toggle, setToggle] = useState(false);

    function isToggle(params) {
        setToggle(!toggle)
    }


    return (
        <div className='Nav'>
            <Logo />
            <div className='Nav-links'>
                <Link to='/'>
                    Home
                </Link>

                <Link to='/why'>
                    Why us
                </Link>

                <Link to='/'>
                    Our Tutors
                </Link>

                <Link to='/regis'>
                    Registration
                </Link>
            </div>

            <button className='btn'>
                Join Design Pal
            </button>

            <div >
                <svg onClick={isToggle} className={toggle ? 'hide' : 'white'} xmlns="http://www.w3.org/2000/svg" width="24" height="11"><g fill="currentColor" fill-rule="evenodd">
                 <path d="M0 0h24v1H0zM0 5h24v1H0zM0 10h24v1H0z" /></g></svg>

                <svg onClick={isToggle} className={toggle ? 'shown' : 'hidden'} xmlns="http://www.w3.org/2000/svg" width="18" height="19"><g fill="currentColor" fill-rule="evenodd"><path d="M.868.661l16.97 16.97-.706.708L.162 1.369z" />
                <path d="M.161 17.632L17.131.662l.708.706-16.97 16.97z" /></g></svg>
    
            </div>

            <div className={toggle ? 'mobile nav' : 'mobile'}>
                <ul className='mobile-list'>
                    <Link to='/'>
                        <li>Home</li>
                    </Link>

                    <Link to='/why'>
                        <li>Why us</li>
                    </Link>

                    <Link to='/'>
                        <li>Tutors</li>
                    </Link>

                    <Link to='/regis'>
                        <li>Registration</li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Nav
