import React from 'react';
import './Regis.css';
import Nav from '../Reuseable/Nav';
import CurlySec from '../First Page/Icons/Curly Arrow.svg';

function Regis() {
    return (
        <>
            <main>
                <div className='regis'>
                    <Nav />

                    <div className='regis-container'>
                        <form>
                            <div>
                                <label for='Full Name'>Full Name</label>
                                <input placeholder='Enter Your Full Name' />
                            </div>

                            <div>
                                <label for='Email address'> Email address</label>
                                <input placeholder='Enter Your email address' />
                            </div>

                            <div>
                                <label form='Phone Number' >Phone Number</label>
                                <input placeholder='Enter your phone number' />
                            </div>

                            <div>
                                <label> Area of Interest</label>
                                <select>
                                    <option selected value={1}> UI </option>
                                    <option value={2}> UX </option>
                                </select>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
            <section className='regis-now'>
                <section className='batch'>
                    <h1>
                        Register now to join the next batch of trainees
                    </h1>
                    <img className='curly-sec1' src={CurlySec} alt='curly-arrow 2'/>
                    <img className='curly-sec2' src={CurlySec} alt='curly-arrow 2'/>
                </section>

                <section className='last-part'>
                    <h1>
                        full name, email, address, phone number, specific area of interest
                        (they can only pick one. either UI or UX) and then reasons why they should be 
                    </h1>
                </section>
            </section>
        </>
    )
}

export default Regis
