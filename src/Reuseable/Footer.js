import React from 'react';
import './Footer.css'
import Logo from './Logo';
import Fade from 'react-reveal/Fade';

function Footer({ src, Twitter, Linkedin, Insta, Message }) {
    return (
        <div className='Founder'>
            <img className='Founder-img1' src={src} alt='Founder Pen' />
            <img className='Founder-img2' src={src} alt='Founder Pen' />

            <section className='Founder-container'>
                <Fade left>
                    <div className='Outro'>
                        <Logo />

                        <p>
                            Design Pal is an ambitious attempt to change the way education is done in Africa.
                            It's the bridge between learning to design and becoming the best in the world.
                        </p>

                    </div>
                </Fade>

                <Fade right>
                    <div className='Outro-links'>
                        <div>
                            <img src={Message} alt='Message' />
                            <img src={Twitter} alt='Twitter' />
                            <img src={Linkedin} alt='Linkedin' />
                            <img src={Insta} alt='Insta' />
                        </div>

                        <p>
                            Copyright &copy; 2022. Design Pally, All rights reserved.
                        </p>
                    </div>
                </Fade>
            </section>

        </div>
    )
}

export default Footer
