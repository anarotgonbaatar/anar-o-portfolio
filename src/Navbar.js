import React, { useState, useEffect } from 'react'
import './styles/Navbar.css'
import { FaHome } from 'react-icons/fa'

function Navbar() {
    // Scroll to section with an offset:
    const scrollToSection = ( sectionId, offset = 55 ) => {
        const section = document.getElementById( sectionId );
        if ( section ) {
            const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = sectionPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            })
        }
    };

    const [ theme, setTheme ] = useState( 'light' );

    useEffect( () => {
        const savedTheme = localStorage.getItem( 'theme' );
        if ( savedTheme ) {
            setTheme( savedTheme );
            document.documentElement.setAttribute( 'data-theme', savedTheme );
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme( newTheme );
        document.documentElement.setAttribute( 'data-theme', newTheme );
        localStorage.setItem( 'theme', newTheme );
    }

    return (
        <div className='' id="navbar">
            <button className='btn nav-btn' onClick={() => scrollToSection( 'home-section' )} type='button'><FaHome/></button>
            <button class="btn nav-btn" onClick={() => scrollToSection('skills-section')} type="button">SKILLS</button>
            <button class="btn nav-btn" onClick={() => scrollToSection('projects-section')} type="button">PROJECTS</button>
            <button class="btn nav-btn" onClick={() => scrollToSection('exp-section')} type="button">EXPERIENCE</button>
            <button class="btn nav-btn" onClick={() => scrollToSection('contact-section')} type="button">CONTACT</button>
            <button class="nav-btn btn" id="theme-btn" type="button" onClick={ toggleTheme }>
                { theme === 'light' ? '🌙' : '☀️' }
            </button>
        </div>
    )
}

export default Navbar