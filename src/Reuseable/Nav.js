import React from 'react';
import Logo from './Logo';
import './Nav.css'
import { Link } from 'react-router-dom'; 
import {useState} from 'react';

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

            <div className={ toggle ? 'clicked': 'mobile-nav'} onClick={isToggle}>

            </div>

            <div className={toggle ? 'mobile nav' : 'mobile' }>
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
