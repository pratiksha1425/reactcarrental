import Royalcar from '../assets/images/royal_car.png';
import Footer from './Footer';
import './Service.css';

function Service() {
    return (
        <div>
            <div className="service-container">
                <div className="servicehead">
                    <h1>Services</h1>
                    <div className='smallhead'>
                          <h2>Home /<p>Services</p></h2>
                    </div>
                </div>
            </div>
            <div className="services">
                <h1>Our Services</h1>
                <div className="serviceboxall">
                    <div className="servicebox">
                        <div className="icon-container">
                            <div className="fa fa-2x fa-taxi text-secondary"></div>
                            <div className="display-number">01</div>
                        </div>
                        <div className="sname"><h1>CAR RENTAL</h1></div>
                        <div className="info">Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit sea sed</div>
                    </div>

                    <div className="servicebox">
                        <div className="icon-container">
                            <div className="fa fa-2x fa-money-check-alt text-secondary"></div>
                            <div className="display-number">02</div>
                        </div>
                        <div className="sname"><h1>CAR FINANCING</h1></div>
                        <div className="info">Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit sea sed</div>
                    </div>

                    <div className="servicebox">
                        <div className="icon-container">
                            <div className="fa fa-2x fa-taxi text-secondary"></div>
                            <div className="display-number">03</div>
                        </div>
                        <div className="sname"><h1>CAR RENTAL</h1></div>
                        <div className="info">Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit sea sed</div>
                    </div>

                    <div className="servicebox">
                        <div className="icon-container">
                            <div className="fa fa-2x fa-cogs text-secondary"></div>
                            <div className="display-number">04</div>
                        </div>
                        <div className="sname"><h1>AUTO REPAIRING</h1></div>
                        <div className="info">Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit sea sed</div>
                    </div>

                    <div className="servicebox">
                        <div className="icon-container">
                            <div className="fa fa-2x fa-spray-can text-secondary"></div>
                            <div className="display-number">05</div>
                        </div>
                        <div className="sname"><h1>AUTO PAINTING</h1></div>
                        <div className="info">Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit sea sed</div>
                    </div>

                    <div className="servicebox">
                        <div className="icon-container">
                            <div className="fa fa-2x fa-pump-soap text-secondary"></div>
                            <div className="display-number">06</div>
                        </div>
                        <div className="sname"><h1>AUTO CLEANING</h1></div>
                        <div className="info">Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit sea sed</div>
                    </div>
                </div>
            </div>
        <div className='backimage'>
            <div className="discount">
                <h1>50% OFF</h1>
                <h2>SPECIAL OFFER FOR NEW MEMBERS</h2>
                <p>Only for Sunday from 1st Jan to 30th Jan 2045</p>
                <a href =""><button>Register Now</button></a>
            </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Service;
