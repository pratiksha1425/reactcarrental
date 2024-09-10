import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <div className="bar">
                <div className="headfab">
                    <div className="fa fa-phone-alt mr-2">+012 345 6789  |  </div>
                    <div className="fa fa-envelope mr-2">pratu@gmail.com</div>
                </div>

                <div className="fab">
                    <div className="fab fa-facebook-f"></div>
                    <div className="fab fa-twitter"></div>
                    <div className="fab fa-linkedin-in"></div>
                    <div className="fab fa-instagram"></div>
                    <div className="fab fa-youtube"></div>
                </div>
            </div>

            <div className="header">
                <div className="logo">
                    <h1>ROYAL CARS</h1>
                </div>

                <div className="navbar">
                    <ul>
                        <li><Link to='/Home'>Home</Link></li>
                        <li><Link to='/Carlistall'>Listing</Link></li>
                        <li><Link to='/Service'>Services</Link></li>
                        <li><Link to='/Testimonial'>Testimonials</Link></li>
                        <li><Link to='/About'>About</Link></li>
                        <li><Link to='/ContactUsForm'>Contact</Link></li>
                        <li><button><Link to='/Login' style={{ color: 'inherit', textDecoration: 'none' }}>Login</Link></button></li>
                        
                    </ul>
                </div>
            </div>

             <div className="search-container">

                    <div className="dropdown">
                    {/* <label>Pickup Location</label> */}
                    <select>
                        <option value="">Select Pickup Location</option>
                        <option value="location1">Location 1</option>
                        <option value="location2">Location 2</option>
                    </select>
                    </div>

                    <input
                    type="text"
                    className="Pickup"
                    placeholder="Pickup Date"
                    data-target="#date"
                    data-toggle="datetimepicker"
                    />

                    <div className="dropdown">
                    {/* <label>Drop Location</label> */}
                    <select>
                        <option value="">Select Drop Location</option>
                        <option value="location1">Location 1</option>
                        <option value="location2">Location 2</option>
                    </select>
                    </div>

                    <input
                    type="text"
                    className="Pickup"
                    placeholder="Pickup Time"
                    data-target="#time"
                    data-toggle="datetimepicker"
                    />
                    <div className="dropdown">
                    {/* <label>Select A Car</label> */}
                    <select>
                        <option value="">Select A Car</option>
                        <option value="car1">Car 1</option>
                        <option value="car2">Car 2</option>
                    </select>
                    </div>

                    <button className="search-button"><a href="">Search</a></button>
             </div>
        </div>
        
    );
}

export default Header;
