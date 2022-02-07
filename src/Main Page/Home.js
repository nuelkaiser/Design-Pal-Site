import React from 'react';
import Nav from '../Reuseable/Nav';
import './Home.css';
import Figma from '../Skill Folder/Figma.svg';
import Purple from '../Skill Folder/Purple Logo.svg';
import Xd from '../Skill Folder/Xd.svg';
import Ps from '../Skill Folder/PS.svg';
import Micro from '../Skill Folder/Micro.svg';
import Notion from '../Skill Folder/Notion.svg';
import Window from '../Skill Folder/Window.svg';
import SoftBoy from '../First Page/FPE Folder/Dark Soft Boy.svg';
import SoftGirl from '../First Page/FPE Folder/Dark Techie Girl.svg';
import PinkArrow from '../First Page/FPE Folder/Pink Mini Arrow.svg';
import Curly from '../First Page/Icons/Curly Arrow.svg';
import SmoothTechie from '../First Page/FPE Folder/Smooth Techie.svg';
import DazzlingTechie from '../First Page/FPE Folder/Dazzling Techie.svg';
import Fairmf from '../First Page/FPE Folder/Fair Mind Blower.svg';
import FineGeh from '../First Page/Designers Folder/Fine Geh.svg';
import Dope from '../First Page/Designers Folder/Dope Man.svg';
import Selzy from '../First Page/Designers Folder/Miss Selzy.svg'
import Twitter from '../First Page/Icons/Twitter.svg';
import Linkedin from '../First Page/Icons/Linkedin.svg';
import Insta from '../First Page/Icons/Insta.jpg';
import Message from '../First Page/Icons/Message.jpg';
import Footer from '../Reuseable/Footer';
import Founder from '../Reuseable/Founder Pen.svg';
import Register from '../Reuseable/Register';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';


function Intro() {
    return (
        <>
            <main>
                <div className='Home'>
                    <Nav />
                    <Slide left>
                        <section className='intro'>
                            <h1>
                                <span className='diff-color'> We help</span> designers <br />
                                <span className='diff-color'>work their way to the</span> <br />
                                stars.
                            </h1>
                            <p className='intro-word'>
                                Design Pal is an ambitious attempt to change the way <br />  of education in Africa.
                                it's the bridge between <br /> learing to design and becoming the best in the world.
                            </p>

                            <div className='trainee'>
                                <p>
                                    Register now to join the next batch of trainees.
                                </p>

                                <button className='btn'>
                                    Register Now
                                </button>
                            </div>

                            <div className='Bg'>

                            </div>
                        </section>
                    </Slide>
                </div>
            </main>
            <div className='remain'>
                
            <Fade effect="fadeInUp">
                <section className='learn'>
                    <h4>
                        Learn important tools and master your software skills
                    </h4>

                
                        <div>
                            <img src={Figma} alt='figma' />
                            <img src={Purple} alt='Purple' />
                            <img src={Xd} className='Xd' alt='Xd' />
                            <img src={Ps} alt='PS' />
                            <img src={Micro} alt='Micro' />
                            <img src={Notion} alt='Notion' />
                            <img src={Window} alt='Window' />
                        </div>
                    
                </section>
               
                    <section className='about'>
                        <h3>About Us</h3>

                        <h6>
                            A team made of experts, to attend to your needs.
                        </h6>

                        <p>
                            Egestas fames, hendrerit ut pellentesque. Sit nunc ultrices pellentesque,
                            quisque <br /> habitant aenean ornare auctor. Ligula ut nulla, eu potenti, praesent
                            nibh cubilia <br /> vivamus aptent. Eget blandit etiam, ultrices tellus, libero quis
                            interdum convallis <br /> purus iaculis sapien. Ante semper, cubilia erat volutpat.
                            Dapibus torquent nisl, <br /> sociosqu nibh, donec dui nam venenatis aliquet imperdiet.
                            Scelerisque metus <br /> euismod, enim ac, sociosqu viverra luctus bibendum vestibulum.
                            Lorem commodo <br /> ultrices, fusce malesuada, cursus erat lobortis tellus porta
                            ullamcorper magna. <br /> Elementum feugiat, netus egestas metus.
                        </p>

                        <div className='sqr one'></div>
                        <div className='sqr two'></div>
                        <div className='sqr three' ></div>
                        <div className='sqr four'></div>

                        <img src={SoftBoy} className='soft-boy ' alt='soft black Boy' />
                        <img src={SoftGirl} className='soft-girl' alt='Soft black Girl' />
                        <img src={PinkArrow} className='pink-arrow' alt='Pink Arrow' />

                        <span className='rod'> </span>
                    </section>

                    <section className='vm' >
                        <div className='vm-inner' >
                            <div className='values'>
                                <div>
                                    <h3>
                                        Our Values
                                    </h3>
                                    <img src={Curly} alt='curly' />
                                </div>
                            </div>

                            <h3 className='value-words'>
                                We take this things to heart and <br />
                                build our company on the core of <br />
                                this values.
                            </h3>
                        </div>
                        <div className='vm-mini'>
                            <div className='vision'>
                                <span className='border-span'></span>
                                <div>
                                    <h6 className='val'>
                                        Value 0.1
                                    </h6>

                                    <div className='vm-container'>
                                        <h3>
                                            Our Vision
                                        </h3>

                                        <img src={SmoothTechie} className='tech' alt='Dark Techie' />
                                    </div>

                                    <p>
                                        Using Lorem ipsum to focus attention on <br />
                                        graphic elements in a webpage design <br />
                                        proposal In publishing and graphic design <br />
                                        , Lorem ipsum is a placeholder text  <br />
                                        commonly used to demonstrate the <br />
                                        visual form of a document or a typeface <br />
                                        without relying on meaningful content.
                                    </p>
                                </div>
                            </div>
                            <div className='mission'>
                                <span className='border-span'></span>
                                <div>
                                    <h6 className='val'>
                                        Value 0.2
                                    </h6>

                                    <div className='vm-container'>
                                        <h3>
                                            Our Mission
                                        </h3>

                                        <img src={DazzlingTechie} className='tech' alt='Dazzling Techie' />
                                    </div>

                                    <p>
                                        Using Lorem ipsum to focus attention on <br />
                                        graphic elements in a webpage design <br />
                                        proposal In publishing and graphic design <br />
                                        , Lorem ipsum is a placeholder text  <br />
                                        commonly used to demonstrate the <br />
                                        visual form of a document or a typeface <br />
                                        without relying on meaningful content.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </Fade>

                <Zoom left>
                    <section className='success-stories'>
                        <div>
                            <h1>
                                Our Success Stories
                            </h1>

                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            </p>
                        </div>

                        <img src={Fairmf} className='tech' alt='Fair Mind Blower' />
                    </section>

                    <section className='designer-container'>
                        <div>
                            <img src={FineGeh} alt='Fine Geh' />

                            <h3>
                                Joyce Eboh
                            </h3>

                            <p>
                                Using Lorem ipsum to focus attention on graphic elements in
                                a webpage design proposal In publishing and graphic design ,
                                Lorem ipsum is a placeholder text commonly used to demonstrate
                                the visual form of a document or a typeface without relying on
                                meaningful content.
                            </p>

                            <section className='socials'>
                                <img src={Twitter} alt='Twitter' />
                                <img src={Linkedin} alt='Linkedin' />
                                <img src={Insta} alt='Insta' />
                            </section>
                        </div>

                        <div>
                            <img src={Dope} alt='Fine Geh' />

                            <h3>
                                Joyce Eboh
                            </h3>

                            <p>
                                Using Lorem ipsum to focus attention on graphic elements in
                                a webpage design proposal In publishing and graphic design ,
                                Lorem ipsum is a placeholder text commonly used to demonstrate
                                the visual form of a document or a typeface without relying on
                                meaningful content.
                            </p>

                            <section className='socials'>
                                <img src={Twitter} alt='Twitter' />
                                <img src={Linkedin} alt='Linkedin' />
                                <img src={Insta} alt='Insta' />
                            </section>
                        </div>

                        <div>
                            <img src={Selzy} alt='Fine Geh' />

                            <h3>
                                Joyce Eboh
                            </h3>

                            <p>
                                Using Lorem ipsum to focus attention on graphic elements in
                                a webpage design proposal In publishing and graphic design ,
                                Lorem ipsum is a placeholder text commonly used to demonstrate
                                the visual form of a document or a typeface without relying on
                                meaningful content.
                            </p>

                            <section className='socials'>
                                <img src={Twitter} alt='Twitter' />
                                <img src={Linkedin} alt='Linkedin' />
                                <img src={Insta} alt='Insta' />
                            </section>
                        </div>
                    </section>
                </Zoom>

                <Register />

                <Footer src={Founder} Twitter={Twitter} Linkedin={Linkedin} Insta={Insta} Message={Message} />
            </div>
        </>
    )
}

export default Intro
