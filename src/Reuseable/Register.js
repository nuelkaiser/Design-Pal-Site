import React from 'react';
import LightSpeed from 'react-reveal/LightSpeed';
import Fade from 'react-reveal/Fade';

function Register() {
    return (
        <section className='register-now'>
            <LightSpeed left>
                <div className='chance-container'>
                    <h1>
                        Register Now Or Join Our Community
                    </h1>

                    <p>
                        Using Lorem ipsum to focus attention on graphic elements in a webpage design
                        proposal In <br /> publishing and graphic design , Lorem ipsum is a placeholder text
                        commonly used to <br /> demonstrate the visual form of a document or a typeface without
                        relying on meaningful <br /> content.
                    </p>
                </div>
            </LightSpeed>

            <Fade right>
                <div className='join-container'>
                    <button className='btn'>
                        Join Design Pal
                    </button>

                    <button className='btn-change'>
                        Join Our Community
                    </button>
                </div>

            </Fade>

            <div className='sqr a-1'></div>
            <div className='sqr a-2'></div>
            <div className='sqr a-3'></div>
            <div className='sqr a-4'></div>
        </section>
    )
}

export default Register
