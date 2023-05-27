import React , {useEffect} from 'react'
import './footer.css'
import video2 from '../../Assets/video2.mp4'
import {BsSend} from 'react-icons/bs'
import {MdTravelExplore} from 'react-icons/md'
import {CiTwitter} from 'react-icons/ci'
import {CiYoutube} from 'react-icons/ci'
import {CiInstagram} from 'react-icons/ci'
import {FaTripadvisor} from 'react-icons/fa'
import {FiChevronRight} from 'react-icons/fi'
import Aos from 'aos'
import 'aos/dist/aos.css'



const Footer=() => {

    useEffect(() => {
        Aos.init({duration:2000})

    }, [])

    return(
        <section className='footer'>
            <div className="videoDiv">
                <video src={video2} loop autoPlay muted type="video/mp4"></video>
            </div>

            <div className="secContent container">
                <div className="contactDiv flex">
                    <div data-aos="fade-up" className="text">
                        <small> KEEP IN TOUCH </small>
                        <h2> Travel with us </h2>
                    </div>

                    <div className="inputDiv flex">
                        <input data-aos="fade-up" type='text' placeholder='Enter Email Address'/>
                        <button data-aos="fade-up" className='btn flex' type='submit'>
                            SEND<BsSend className="icon"/>
                        </button>
                    </div>
                </div>

                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href='#' className='logo flex'>
                                <MdTravelExplore className='icon'/>  Travel.
                            </a>
                        </div>

                        <div data-aos="fade-up" className="footerParagraph">
                            Welcome at our travel site! We are a team of team of passionate travellers who are dedicated to helping you explore
                            the various tourist places to visit at Chhattisgarh. We believe that travel is about more than just ticking off destinations on alist, It's
                            all about immersing yourself in new cultures/
                        </div>

                        <div data-aos="fade-up" className="footerSocials flex">
                            <a href='https://twitter.com/?lang=en-in'>
                            <CiTwitter className='icon'/></a>
                            <a href='https://www.youtube.com'>
                            <CiYoutube className='icon'/></a>
                            <a href='https://www.instagram.com'>
                            <CiInstagram className='icon'/></a>
                            <a href='https://www.tripadvisor.in'>
                            <FaTripadvisor className='icon'/></a>
                        </div>
                    </div>

                    <div className="footerLinks flex">

                        <div data-aos="fade-up" data-aos-duration='3000' className="linkGroup">
                            <span className="groupTitle">
                                OUR AGENCY
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className='icon'/>
                                Services
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon'/>
                                Insurance
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon'/>
                                Agency
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon'/>
                                Tourism
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon'/>
                                Payments
                            </li>
                        </div>


                        <div data-aos="fade-up" data-aos-duration='4000' className="linkGroup">
                            <span className="groupTitle">
                                PARTNERS
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className='icon'/>
                                Bookings
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon'/>
                                RentCars
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon'/>
                                HostelWorld
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon'/>
                                Trivago
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon'/>
                                TripAdvisor
                            </li>
                        </div>

                        <div data-aos="fade-up" data-aos-duration='5000' className="linkGroup">
                            <span className="groupTitle">
                                LAST MINUTE
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className='icon'/>
                                Raipur
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon'/>
                                Jagdalpur
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon'/>
                                Bhilai
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon'/>
                                Dongargarh
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon'/>
                                Korba
                            </li>
                        </div>


                    </div>

                    <div className="footerDiv flex">
                        <small> BEST TRAVEL WEBSITE THEME </small>
                        <small> COPYRIGHTS RESERVED </small>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Footer