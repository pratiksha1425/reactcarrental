import React, { useState } from 'react';
import './ContactUsForm.css'; // Import CSS file for styling
import Footer from './Footer';

const ContactUsForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ''
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm(formData);
        if (Object.keys(validationErrors).length === 0) {
            console.log('Form is valid:', formData);
            // Add form submission logic here (e.g., send data to a backend server)
        } else {
            setErrors(validationErrors);
        }
    };

    const validateForm = (data) => {
        let errors = {};

        if (!data.name.trim()) {
            errors.name = 'Name is required';
        }

        if (!data.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            errors.email = 'Email address is invalid';
        }

        if (!data.phone.trim()) {
            errors.phone = 'Phone number is required';
        } else if (!/^\d{10}$/.test(data.phone)) {
            errors.phone = 'Phone number must be 10 digits';
        }

        if (!data.subject.trim()) {
            errors.subject = 'Subject is required';
        }

        if (!data.message.trim()) {
            errors.message = 'Message is required';
        }

        return errors;
    };

    return (
        
        <div>
             <div className="contact-container">
                        <div className='contacthead'>
                            <h1>CONTACT</h1>
                            <div className='smallhead'>
                                    <h2>Home /<p>Services</p></h2>
                            </div>
                        </div>

                        <div className='contact-container2'>
                                <form className="contact-form" onSubmit={handleSubmit}>
                                    <h2>Contact Us</h2>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Your Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                        {errors.name && <span className="error-message">{errors.name}</span>}
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Your Email"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                        {errors.email && <span className="error-message">{errors.email}</span>}
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder="Your Phone Number"
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                        {errors.phone && <span className="error-message">{errors.phone}</span>}
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="subject"
                                            placeholder="Subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                        />
                                        {errors.subject && <span className="error-message">{errors.subject}</span>}
                                    </div>
                                        <div className="form-group">
                                            <textarea
                                                name="message"
                                                placeholder="Your Message"
                                                value={formData.message}
                                                onChange={handleChange}
                                            ></textarea>
                                            {errors.message && <span className="error-message">{errors.message}</span>}
                                       </div>
                                    <button type="submit">Submit</button>
                                </form>

                                <div className='branch'>

                                    <div className='branchbox'>

                                        <div className='underbox'>
                                            <div class="icon">
                                                <i class="fa fa-2x fa-map-marker-alt text-primary flex-shrink-0 mr-3"></i>
                                            </div>   

                                                <div class="text">
                                                    <h5 class="text-light">Head Office</h5>
                                                    <p>123 Street, New York, USA</p>
                                                </div>
                                            

                                        </div>

                                        <div className='underbox'>
                                            <div class="icon">
                                                <i class="fa fa-2x fa-map-marker-alt text-primary flex-shrink-0 mr-3"></i>
                                                </div>    
                                                    <div class="text">
                                                        <h5 class="text-light">Branch Office</h5>
                                                        <p>123 Street, New York, USA</p>
                                                    </div>
                                           
                                        </div>


                                        <div className='underbox'>
                                            <div class="icon">
                                                <i class="fa fa-2x fa-envelope-open text-primary flex-shrink-0 mr-3"></i>
                                             </div>

                                            <div class="text">
                                                <h5 class="text-light">Customer Service</h5>
                                                <p>customer@example.com</p>
                                               
                                            </div>
                                        </div>

                                        <div className='underbox'>
                                            <div class="icon">
                                                <i class="fa fa-2x fa-envelope-open text-primary flex-shrink-0 mr-3"></i>
                                            </div>    
                                                <div class="text">
                                                    <h5 class="text-light">Return &amp; Refund</h5>
                                                    <p class="m-0">refund@example.com</p>
                                                </div>
    
                                        </div>
                                    </div>
                                </div>
                        </div>
            </div>
                    <div className='footercar'>
                        <Footer/>
                    </div>
        </div>
         
         
        
    );
};

export default ContactUsForm;
