import React from 'react';
import './Why.css';
import Nav from '../Reuseable/Nav';
import CurlyArrow from '../First Page/Icons/Curly Arrow.svg';
import Headings from '../Second Page/Headings.js';
import LoveUp from '../Reuseable/LoveUp.svg';
import Attention from '../Second Page/Attention.js'
import Attention2 from '../Second Page/Attention2';
import Attention3 from '../Second Page/Attention3';
import Founder from '../Reuseable/Founder Pen.svg';
import White from '../Second Page/SPE Folder/White Celeb.svg';
import Blue from '../Reuseable/Navy Blue Arrow.svg';
import Gp from '../Second Page/SPE Folder/Girl Power.svg';
import Curly from '../First Page/Icons/Curly Arrow.svg';
import Curl from '../First Page/Icons/Curly Arrow 2.svg';
import Wifey from '../Second Page/Designer Pics/Wifey Material.svg';
import SoftBoy from '../Second Page/Designer Pics/Soft Money.svg';
import Cool from '../Second Page/Designer Pics/Cool Man.svg';
import United from '../Second Page/Flags Folder/Flag of United States.svg';
import France from '../Second Page/Flags Folder/Flag of France.svg';
import Britain from '../Second Page/Flags Folder/Flag of United Kingdom.svg';
import Twitter from '../First Page/Icons/Twitter.svg';
import Linkedin from '../First Page/Icons/Linkedin.svg';
import SoftDark from '../Second Page/Designer Pics/Dark Too Soft.svg';
import BritishMula from '../Second Page/Designer Pics/British Money.svg';
import Nigeria from '../Second Page/Flags Folder/Flag of Nigeria.svg';
import Register from '../Reuseable/Register';
import Footer from '../Reuseable/Footer';
import Insta from '../First Page/Icons/Insta.jpg';
import Message from '../First Page/Icons/Message.jpg';
function Why() {
    return (
        <>
            <main>
                <div className='why'>
                    <Nav />
                    <section className='why-container'>
                        <div className='why-us-container'>
                            <div className='why-us'>
                                <div>
                                    <h1>
                                        <span>Why</span> choose <span>us?</span>
                                    </h1>
                                    <p>
                                        Using Lorem ipsum to focus attention on graphic elements in a webpage design proposal
                                        In publishing and graphic design , Lorem ipsum is a placeholder text
                                    </p>
                                </div>
                                <img src={CurlyArrow} alt='Curly Arrow' />
                            </div>

                            <div className='LoveUp-container'>
                                <Headings src={LoveUp} alt={'Love Up'} />
                                <Headings src={LoveUp} alt={'Love Up'} />
                                <Headings src={LoveUp} alt={'Love Up'} />

                                <img src={Blue} className='blue' alt='Navy Blue Arrow' />
                            </div>
                        </div>

                        <div className='Attention-container'>
                            <Attention src={Founder} alt={'Founder Pen'} />
                            <Attention2 src={Founder} alt={'Founder Pen'} />
                            <Attention3 src={Founder} alt={'Founder Pen'} />

                            <img className='White' src={White} alt='White Celeb' />
                        </div>
                    </section>
                </div>
            </main>
            <section className='tutor'>
                <div className='tutor-intro'>
                    <h1>
                        Meet Our Tutors
                    </h1>
                    <p>
                        Using Lorem ipsum to focus attention on graphic elements in a webpage design proposaL.
                        Using Lorem ipsum to focus attention on graphic elements in a webpage design proposaL.
                    </p>

                    <img src={Gp} alt='Girl Power' />
                </div>

                <div className='pointer'>
                    <img src={Curly} alt='curly arrow' className='curly' />
                    <img src={Curl} alt='curly arrow' />
                </div>

                <div className='new-change'>
                    <section className='tutor-container'>
                        <div className='tech-money'>
                            <img className='image' src={Wifey} alt='wifey material' />
                            <div className='tut'>
                                <h3>OlwaKemi Adeleke</h3>
                                <img src={United} alt='USA' />
                            </div>
                            <p>
                                Senior Product Designer, Popcrn Incoporated. Los Angeles, California.
                            </p>
                            <div className='media'>
                                <img src={Twitter} alt='Twitter' />
                                <img src={Linkedin} alt='Linkedin' />
                            </div>
                        </div>

                        <div className='tech-money middle-man'>
                            <img className='image' src={Cool} alt='wifey material' />
                            <div className='tut'>
                                <h3>Tega Emma Okerhe</h3>
                                <img src={France} alt='France' />
                            </div>
                            <p>
                                Senior Product Designer, Sendcloud. Eindhoven, Netherland.
                            </p>
                            <div className='media'>
                                <img src={Twitter} alt='Twitter' />
                                <img src={Linkedin} alt='Linkedin' />
                            </div>
                        </div>

                        <div className='tech-money'>
                            <img className='image' src={SoftBoy} alt='wifey material' />
                            <div className='tut'>
                                <h3>Adedapo Adeshina</h3>
                                <img src={Britain} alt='UK' />
                            </div>
                            <p>
                                Senior Product Designer, GetWelp. London, UK
                            </p>
                            <div className='media'>
                                <img src={Twitter} alt='Twitter' />
                                <img src={Linkedin} alt='Linkedin' />
                            </div>
                        </div>

                    </section>

                    <section className='tutor-container tut-2'>
                        <div className='tech-money'>
                            <img className='image' src={SoftDark} alt='Dark Designer' />
                            <div className='tut'>
                                <h3>Sammie Akwe</h3>
                                <img src={Nigeria} alt='Nigeria' />
                            </div>
                            <p>
                                Senior Product Designer and Illustrator, Sterling Bank. Lagos, Nigeria.
                            </p>
                            <div className='media'>
                                <img src={Twitter} alt='Twitter' />
                                <img src={Linkedin} alt='Linkedin' />
                            </div>
                        </div>

                        <div className='tech-money middle-man'>
                            <img className='image' src={BritishMula} alt='wifey material' />
                            <div className='tut'>
                                <h3>Parklins Ifeanyichuckwu</h3>
                                <img src={Britain} alt='Britain' />
                            </div>
                            <p>
                                Senior Product Designer, Sendcloud. Eindhoven, Netherland.
                            </p>
                            <div className='media'>
                                <img src={Twitter} alt='Twitter' />
                                <img src={Linkedin} alt='Linkedin' />
                            </div>
                        </div>

                        <div className='tech-money'>
                            <img className='image' src={Wifey} alt='wifey material' />
                            <div className='tut'>
                                <h3>OlwaKemi Adeleke</h3>
                                <img src={United} alt='USA' />
                            </div>
                            <p>
                                Senior Product Designer, Popcrn Incoporated. Los Angeles, California.
                            </p>
                            <div className='media'>
                                <img src={Twitter} alt='Twitter' />
                                <img src={Linkedin} alt='Linkedin' />
                            </div>
                        </div>
                    </section>
                </div>

                <Register />
                <Footer src={Founder}
                    Twitter={Twitter}
                    Linkedin={Linkedin}
                    Insta={Insta}
                    Message={Message} />
            </section>

        </>
    )
}

export default Why
