import React, { useState } from 'react';
import './Register.css'; // Import CSS file for styling
import Footer from './Footer';

function RegistrationForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        address: '',
        licenseNumber: '',
        dob: '',
        password: '',
        confirmPassword: '',
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateForm(formData);
        if (Object.keys(validationErrors).length === 0) {
            const mappedFormData = {
                fullName: formData.fullName,
                email: formData.email,
                phoneNumber: formData.phoneNumber,
                address: formData.address,
                licenseNumber: formData.licenseNumber,
                dob: formData.dob,
                password: formData.password,
                confirmPassword: formData.confirmPassword
            };

            try {
                const response = await fetch('http://localhost:8080/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(mappedFormData)
                });

                if (response.ok) {
                    const data = await response.json();
                    if (data === 'Email already registered') {
                        setErrorMessage('Email is already registered');
                        setSuccessMessage('');
                    } else {
                        setSuccessMessage('Registration successful');
                        setErrorMessage('');
                        setFormData({
                            fullName: '',
                            email: '',
                            phoneNumber: '',
                            address: '',
                            licenseNumber: '',
                            dob: '',
                            password: '',
                            confirmPassword: '',
                        });
                    }
                } else {
                    setErrorMessage('Registration failed');
                    setSuccessMessage('');
                }
            } catch (error) {
                setErrorMessage('Error submitting form: ' + error.message);
                setSuccessMessage('');
            }
        } else {
            setErrors(validationErrors);
        }
    };

    const validateForm = (data) => {
        let errors = {};

        if (!data.fullName.trim()) {
            errors.fullName = 'Full Name is required';
        }

        if (!data.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            errors.email = 'Email address is invalid';
        }

        if (!data.phoneNumber.trim()) {
            errors.phoneNumber = 'Phone Number is required';
        } else if (!/^\d{10}$/.test(data.phoneNumber)) {
            errors.phoneNumber = 'Phone Number must be 10 digits';
        }

        if (!data.address.trim()) {
            errors.address = 'Address is required';
        }

        if (!data.licenseNumber.trim()) {
            errors.licenseNumber = 'Driver\'s License Number is required';
        }

        if (!data.dob.trim()) {
            errors.dob = 'Date of Birth is required';
        }

        if (!data.password.trim()) {
            errors.password = 'Password is required';
        } else if (data.password.length < 6) {
            errors.password = 'Password must be at least 6 characters long';
        }

        if (!data.confirmPassword.trim()) {
            errors.confirmPassword = 'Confirm Password is required';
        } else if (data.confirmPassword !== data.password) {
            errors.confirmPassword = 'Passwords do not match';
        }

        return errors;
    };

    return (
        <div>
            <div className='registration-container'>
                <form className="registration-form" onSubmit={handleSubmit}>
                    <h2>Register</h2>
                    {successMessage && <div className="success-message">{successMessage}</div>}
                    {errorMessage && <div className="error-message">{errorMessage}</div>}
                    <div className="form-group">
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Full Name"
                            value={formData.fullName}
                            onChange={handleChange}
                        />
                        {errors.fullName && <span className="error-message">{errors.fullName}</span>}
                    </div>

                    <div className="form-group">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <span className="error-message">{errors.email}</span>}
                    </div>

                    <div className="form-group">
                        <input
                            type="tel"
                            name="phoneNumber"
                            placeholder="Phone Number"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                        />
                        {errors.phoneNumber && <span className="error-message">{errors.phoneNumber}</span>}
                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            name="address"
                            placeholder="Address"
                            value={formData.address}
                            onChange={handleChange}
                        />
                        {errors.address && <span className="error-message">{errors.address}</span>}
                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            name="licenseNumber"
                            placeholder="Driver's License Number"
                            value={formData.licenseNumber}
                            onChange={handleChange}
                        />
                        {errors.licenseNumber && <span className="error-message">{errors.licenseNumber}</span>}
                    </div>

                    <div className="form-group">
                        <input
                            type="date"
                            name="dob"
                            placeholder="Date of Birth"
                            value={formData.dob}
                            onChange={handleChange}
                        />
                        {errors.dob && <span className="error-message">{errors.dob}</span>}
                    </div>

                    <div className="form-group">
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        {errors.password && <span className="error-message">{errors.password}</span>}
                    </div>

                    <div className="form-group">
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                        {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
                    </div>
                    
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    );
}

export default RegistrationForm;
