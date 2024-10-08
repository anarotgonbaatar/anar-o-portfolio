import React from 'react'
import './styles/Experience.css'

function Experience() {
    return (
        // EXPERIENCE SECTION
        <div class="section column" id="exp-section">
            <span class="section-title">EXPERIENCE</span>

            <div className='exp-card card column'>
                <div className='exp-title-container'>
                    <div className='exp-company-container column'>
                        <a className='exp-company' href='none' target="_blank" rel="noopener noreferrer">
                            EZ Construction
                        </a>
                        <span className='exp-position'>Contractor Assistant</span>
                    </div>
                    <div className='exp-detail-container column'>
                        <span className='exp-date'>August 2017 - Present</span>
                        <span className='exp-location'>Fulleton, CA</span>
                    </div>
                </div>
                <ul>
                    <li>Performed a variety of construction tasks, prioritizing safety and efficiency.</li>
                    <li>Improved project completion speed by 50% through operational optimizations.</li>
                    <li>Managed materials handling, contributing to a 25% increase in project profitability.</li>
                </ul>
            </div>

            <div className='exp-card card column'>
                <div className='exp-title-container'>
                    <div className='exp-company-container column'>
                        <a className='exp-company' href='https://www.instagram.com/vgdc_csuf?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' target="_blank" rel="noopener noreferrer">
                            Video Game Development Club at CSUF
                        </a>
                        <span className='exp-position'>Team Leader</span>
                    </div>
                    <div className='exp-detail-container column'>
                        <span className='exp-date'>August 2017 - Present</span>
                        <span className='exp-location'>Fulleton, CA</span>
                    </div>
                </div>
                <ul>
                    <li>Led the development of video games "Grab'n'Go" and "Hungmen."</li>
                    <li>showcasing strong leadership and technical skills in Unreal Engine, Blender 3D, and C++.</li>
                </ul>
            </div>

            <div className='exp-card card column'>
                <div className='exp-title-container'>
                    <div className='exp-company-container column'>
                        <a className='exp-company' href='none' target="_blank" rel="noopener noreferrer">
                            Robotics Club at Fairfax Senior High
                        </a>
                        <span className='exp-position'>Designer, driver, and programmer</span>
                    </div>
                    <div className='exp-detail-container column'>
                        <span className='exp-date'>August 2019 - March 2020</span>
                        <span className='exp-location'>Los Angeles, CA</span>
                    </div>
                </div>
                <ul>
                    <li>Participated in multiple FIRST Robotics competitions</li>
                    <li>Used CAD to design and build the robot</li>
                    <li>Drove the robot in competitions.</li>
                </ul>
            </div>

            <div className='exp-card card column'>
                <div className='exp-title-container'>
                    <div className='exp-company-container column'>
                        <a className='exp-company' href='https://maps.app.goo.gl/XieLn8cGBA9so2vT9' target="_blank" rel="noopener noreferrer">
                            Farm Boy at The Grove
                        </a>
                        <span className='exp-position'>Retail Associate</span>
                    </div>
                    <div className='exp-detail-container column'>
                        <span className='exp-date'>June 2018 - August 2018</span>
                        <span className='exp-location'>Los Angeles, CA</span>
                    </div>
                </div>
                <ul>
                    <li>Engaged in various retail operations, providing exceptional customer service and support.</li>
                </ul>
            </div>

            <div className='exp-card card column'>
                <div className='exp-title-container'>
                    <div className='exp-company-container column'>
                        <a className='exp-company' href='https://www.lapl.org/branches/fairfax' target="_blank" rel="noopener noreferrer">
                            Los Angeles Public Library Fairfax Branch
                        </a>
                        <span className='exp-position'>Volunteer Staff</span>
                    </div>
                    <div className='exp-detail-container column'>
                        <span className='exp-date'>June 2017 - April 2018</span>
                        <span className='exp-location'>Los Angeles, CA</span>
                    </div>
                </div>
                <ul>
                    <li>Contributed to the library's operations and community service efforts, enhancing visitor experience.</li>
                </ul>
            </div>
        </div>
    )
}

export default Experience