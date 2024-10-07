import React from 'react'
import './styles/Projects.css'
import Packify from './images/Packify-cover.png'
import Portrait from './images/portrait.jpg'
import GrabnGo from './images/grabngo-cover.jpg'
import Hungmen from './images/hungmen-cover.jpg'
import Loop1 from './images/ul-cover.mp4'
import Loop2 from './images/ul2-cover.mp4'
import Loop3 from './images/ul3-cover.mp4'

function Projects() {
    return (
        <div class="section column" id="projects-section">
            <span className='section-title'>PROJECTS</span>

            {/* Code Subsection */}
            <div className='subsection'>
                <span className='subsection-title'>Coding Projects</span>

                {/* Coding Projects */}
                <div className='projects-container'>
                    
                    <div className='project-card card column'>
                        <img src={ Packify } className='project-image image' alt='project'/>
                        <div className='project-details'>
                            <a className='project-title' href="https://github.com/anarotgonbaatar/Packify" target="_blank" rel="noopener noreferrer">
                                Packify
                            </a>
                            <p className='project-description'>
                                A webapp that generates a list of items to pack based on chosen activities, days, and weather.
                            </p>
                            <div className='project-skills-container'>
                                <span className='project-skill'>React</span>
                                <span className='project-skill'>Axios</span>
                                <span className='project-skill'>CSS</span>
                                <span className='project-skill'>Node.js</span>
                                <span className='project-skill'>Express.js</span>
                                <span className='project-skill'>MongoDB</span>
                            </div>
                        </div>
                    </div>

                    <div className='project-card card column'>
                        <img src={ Portrait } className='project-image image' alt='project'/>
                        <div className='project-details'>
                            <a className='project-title' href="https://anarotgonbaatar.github.io" target="_blank" rel="noopener noreferrer">
                                Portfolio Website
                            </a>
                            <p className='project-description'>
                                A fully responsive portfolio built with React, showcasing my projects.
                            </p>
                            <div className='project-skills-container'>
                                <span className='project-skill'>React</span>
                                <span className='project-skill'>HTML</span>
                                <span className='project-skill'>CSS</span>
                                <span className='project-skill'>JavaScript</span>
                                <span className='project-skill'>VSCode</span>
                            </div>
                        </div>
                    </div>

                    <div className='project-card card column'>
                        <img src={ GrabnGo } className='project-image image' alt='project'/>
                        <div className='project-details'>
                            <a className='project-title' href="https://anarotgo.itch.io/grab-n-go" target="_blank" rel="noopener noreferrer">
                                Grab'n'Go
                            </a>
                            <p className='project-description'>
                                A shopping simulator game set in a time during the pandemic.
                            </p>
                            <div className='project-skills-container'>
                                <span className='project-skill'>Unreal Engine</span>
                                <span className='project-skill'>Blender</span>
                                <span className='project-skill'>UE Blueprints</span>
                            </div>
                        </div>
                    </div>

                    <div className='project-card card column'>
                        <img src={ Hungmen } className='project-image image' alt='project'/>
                        <div className='project-details'>
                            <a className='project-title' href="https://anarotgo.itch.io/hungmen" target="_blank" rel="noopener noreferrer">
                                HUNGMEN
                            </a>
                            <p className='project-description'>
                                A 3D hangman game.
                            </p>
                            <div className='project-skills-container'>
                                <span className='project-skill'>Unreal Engine</span>
                                <span className='project-skill'>UE Blueprints</span>
                                <span className='project-skill'>Blender</span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            {/* Art Subsection */}
            <div className='subsection'>
                <span className='subsection-title'>Art Projects</span>

                {/* Art Projects */}
                <div className='projects-container'>
                    
                    <div className='project-card card column'>
                        <img src={ Loop1 } className='project-image image' alt='project'/>
                        <div className='project-details'>
                            <a className='project-title' href="https://anarotgonbaatar.github.io" target="_blank" rel="noopener noreferrer">
                                Unsatisfying Loop 1
                            </a>
                            <p className='project-description'>
                                A fully responsive portfolio built with React, showcasing my projects.
                            </p>
                            <div className='project-skills-container'>
                                <span className='project-skill'>Blender</span>
                                <span className='project-skill'>CAD</span>
                                <span className='project-skill'>3D Animation</span>
                                <span className='project-skill'>3D Simulation</span>
                            </div>
                        </div>
                    </div>

                    <div className='project-card card column'>
                        <img src={ Loop2 } className='project-image image' alt='project'/>
                        <div className='project-details'>
                            <a className='project-title' href="https://anarotgonbaatar.github.io" target="_blank" rel="noopener noreferrer">
                                Unsatisfying Loop 2
                            </a>
                            <p className='project-description'>
                                A fully responsive portfolio built with React, showcasing my projects.
                            </p>
                            <div className='project-skills-container'>
                                <span className='project-skill'>Blender</span>
                                <span className='project-skill'>CAD</span>
                                <span className='project-skill'>3D Animation</span>
                                <span className='project-skill'>3D Simulation</span>
                            </div>
                        </div>
                    </div>

                    <div className='project-card card column'>
                        <img src={ Loop3 } className='project-image image' alt='project'/>
                        <div className='project-details'>
                            <a className='project-title' href="https://anarotgonbaatar.github.io" target="_blank" rel="noopener noreferrer">
                                Unsatisfying Loop 3
                            </a>
                            <p className='project-description'>
                                A fully responsive portfolio built with React, showcasing my projects.
                            </p>
                            <div className='project-skills-container'>
                                <span className='project-skill'>Blender</span>
                                <span className='project-skill'>CAD</span>
                                <span className='project-skill'>3D Animation</span>
                                <span className='project-skill'>3D Simulation</span>
                            </div>
                        </div>
                    </div>
                    
                </div>

                
            </div>

        </div>
    )
}

export default Projects