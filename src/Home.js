import React from 'react'
import './styles/Home.css'
import Portrait from './images/portrait.jpg'
import { FaGithub, FaInstagram, FaItchIo, FaLinkedin } from 'react-icons/fa'
import { IoMail } from 'react-icons/io5'

function Home() {
    return (
        <div class="section column" id="home-section">
            
            <span className='section-title'>ANAR OTGONBAATAR</span>


            <div className='card column' id='home-card'>

                <img className='image' id='portrait' src={ Portrait } alt='AOs Portrait'></img>
                
                <p>
                    I'm Anar, a 5th-year Computer Science student at CSUF with a focus on web development,
                    algorithms, and IoT projects. I'm passionate about creating smart solutions and am
                    actively seeking internship opportunities to apply my skills.
                    Outside of tech, I enjoy fitness and outdoor adventures.
                </p>

                <div className='row icon-container' id='home-icon-container'>
                    <a href="https://github.com/anarotgonbaatar/" target="_blank" rel="noopener noreferrer">
                        <FaGithub className='icon'/>
                    </a>
                    <a href="https://www.linkedin.com/in/anar-otgonbaatar/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className='icon'/>
                    </a>
                    <a href="https://www.instagram.com/haneul.anar/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className='icon'/>
                    </a>
                    <a href="https://anarotgo.itch.io/" target="_blank" rel="noopener noreferrer">
                        <FaItchIo className='icon'/>
                    </a>
                    <a href="mailto:anarotgo@yahoo.com" target="_blank" rel="noopener noreferrer">
                        <IoMail className='icon'/>
                    </a>
                </div>

            </div>
        </div>
    )
}

export default Home