import React, { useState } from 'react'
import './styles/Contact.css'
import { FaGithub, FaInstagram, FaItchIo, FaLinkedin } from 'react-icons/fa'

const Contact = () => {
    // Initialize state for form fields
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
        ...formData,
        [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page refresh
        const form = e.target;
        
        // Submit form data to Formspree
        fetch('https://formspree.io/f/xleqozzk', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
        })
        .then((response) => {
        if (response.ok) {
            alert('Message sent successfully!');
            form.reset(); // Optionally reset the form
        } else {
            alert('Error sending message.');
        }
        })
        .catch((error) => {
        alert('Error sending message.');
        console.error('Error:', error);
        });
    };

    return (
        // <!-- CONTACT SECTION -->
        <div class="section column" id="contact-section">
            <span className='section-title'>CONTACT ME</span>

                {/* Contact Icons */}
                <div className='row icon-container' id='home-icon-container'>
                    <a href="https://github.com/anarotgonbaatar/" target="_blank" rel="noopener noreferrer">
                        <FaGithub className='icon'/>
                    </a>
                    <a href="https://github.com/anarotgonbaatar/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className='icon'/>
                    </a>
                    <a href="https://github.com/anarotgonbaatar/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className='icon'/>
                    </a>
                    <a href="https://github.com/anarotgonbaatar/" target="_blank" rel="noopener noreferrer">
                        <FaItchIo className='icon'/>
                    </a>
                </div>

                <span>or</span>

                {/* Contact Form */}
                <form id="contact-form" onSubmit={handleSubmit}>
                    <div className="column">
                        <label className="form-label" htmlFor="name">Name:</label>
                        <input
                            className="form-input"
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="column">
                        <label className="form-label" htmlFor="email">Email:</label>
                        <input
                            className="form-input"
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="column">
                        <label className="form-label" htmlFor="phone">Phone Number:</label>
                        <input
                            className="form-input"
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="column">
                        <label className="form-label" htmlFor="subject">Subject:</label>
                        <input
                            className="form-input"
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="column">
                        <label className="form-label" htmlFor="message">Message:</label>
                        <textarea
                            className="form-input"
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                
                <button className="btn" id='contact-btn' type="submit" form='contact-form'>Send Message</button>
                
                </form>
            
        </div>
    )
}

export default Contact