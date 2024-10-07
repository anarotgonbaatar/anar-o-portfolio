import React from 'react'
import './styles/Skills.css'

import { FaCss3, FaDatabase, FaGithub, FaHtml5, FaNodeJs, FaPython, FaReact, FaShapes } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { SiArduino, SiBlender, SiUnrealengine, SiVisualstudiocode } from 'react-icons/si'
import { HiMiniUserGroup } from 'react-icons/hi2'
import { TbHexagon3D, TbUsersGroup } from 'react-icons/tb'
import { MdSyncProblem } from 'react-icons/md'
import { RiSpeakFill } from 'react-icons/ri'

function Skills() {
    return (
        <div class="section column" id="skills-section">
        
            {/* Section Title */}
            <span class="section-title">SKILLS</span>
        
            <div id='skills-cards-container'>

                {/* Languages Card */}
                <div className='skill-card card column'>
                    <span className='card-title'>Languages</span>
                    
                    <div className='skills-container'>
                        <div className='skill-container'>
                            <FaHtml5 className='skill-icon'/> 
                            <span>HTML</span>
                        </div>
                        <div className='skill-container'>
                            <FaCss3 className='skill-icon'/> 
                            <span>CSS</span>
                        </div>
                        <div className='skill-container'>
                            <FaPython className='skill-icon'/> 
                            <span>Python</span>
                        </div>
                        <div className='skill-container'>
                            <IoLogoJavascript className='skill-icon'/> 
                            <span>JavaScript</span>
                        </div>
                    </div>
                </div>

                {/* Software Card */}
                <div className='skill-card card column'>
                    <span className='card-title'>Software</span>
                    
                    <div className='skills-container'>
                        
                        <div className='skill-container'>
                            <SiVisualstudiocode className='skill-icon'/> 
                            <span>Visual Studio Code</span>
                        </div>
                        <div className='skill-container'>
                            <SiUnrealengine className='skill-icon'/> 
                            <span>Unreal Engine</span>
                        </div>
                        <div className='skill-container'>
                            <TbHexagon3D className='skill-icon'/> 
                            <span>onshape</span>
                        </div>
                        <div className='skill-container'>
                            <SiBlender className='skill-icon'/> 
                            <span>Blender</span>
                        </div>
                    </div>
                </div>

                {/* Tech/Tools Card */}
                <div className='skill-card card column'>
                    <span className='card-title'>Tech/Tools</span>
                    
                    <div className='skills-container'>
                        <div className='skill-container'>
                            <FaGithub className='skill-icon'/> 
                            <span>GitHub</span>
                        </div>
                        <div className='skill-container'>
                            <FaNodeJs className='skill-icon'/> 
                            <span>Node.js</span>
                        </div>
                        <div className='skill-container'>
                            <FaReact className='skill-icon'/> 
                            <span>React</span>
                        </div>
                        <div className='skill-container'>
                            <FaDatabase className='skill-icon'/> 
                            <span>SQL</span>
                        </div>
                        <div className='skill-container'>
                            <SiArduino className='skill-icon'/> 
                            <span>Arduino</span>
                        </div>
                    </div>
                </div>

                {/* Tools Card */}
                <div className='skill-card card column'>
                    <span className='card-title'>Interpersonal</span>
                    
                    <div className='skills-container'>
                        <div className='skill-container'>
                            <HiMiniUserGroup className='skill-icon'/> 
                            <span>Leadership</span>
                        </div>
                        <div className='skill-container'>
                            <TbUsersGroup className='skill-icon'/> 
                            <span>Teamwork</span>
                        </div>
                        <div className='skill-container'>
                            <FaShapes className='skill-icon'/> 
                            <span>Adaptability</span>
                        </div>
                        <div className='skill-container'>
                            <MdSyncProblem className='skill-icon'/> 
                            <span>Problem-Solving</span>
                        </div>
                        <div className='skill-container'>
                            <RiSpeakFill className='skill-icon'/> 
                            <span>Communication</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Skills