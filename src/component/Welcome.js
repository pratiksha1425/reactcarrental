import Royalcar from '../assets/images/royal_car.png';
import './Welcome.css';
import Itwork from '../component/Itwork';
import Meet from '../component/Meet';
import Service from '../component/Service';
import Testimonial from '../component/Testimonial';
import Footer from './Footer';
function Welcome(){
    return(
        <div>
            <div className = "welcometext">
                <h1>WELCOME TO <b>ROYAL CARS</b></h1>
                <div className = "welcome_car">
                    <img src = {Royalcar}></img>
                </div>

            </div>
                <div className = "para">
                <p>      At Royal Car Rental, we prioritize your convenience
                 and satisfaction. Our easy-to-navigate booking system 
                 ensures a seamless experience, allowing you to reserve
                  your vehicle in just a few clicks. With flexible rental 
                  terms and competitive pricing, we provide exceptional 
                  value without compromising on quality.Our commitment to
                   excellence is reflected in every aspect of our service.
                    Our meticulously maintained cars are equipped with the 
                    latest technology and safety features, ensuring a smooth
                     and secure drive. Our dedicated team of professionals
                      is always ready to assist you, offering personalized
                       recommendations and 24/7 support to ensure your trip is
                        flawless from start to finish.</p>
                </div>
                <div className = "features">

                    <div className = "features-info">
                        <div className = "fa fa-2x fa-headset text-secondary"></div>
                        <div className = "info"><h1>24/7 CAR RENTAL<br></br> SUPPORT</h1></div> 
                    </div>
                    <div className = "features-info">
                        <div className = "fa fa-2x fa-car text-secondary"></div>
                        <div className = "info"><h1>CAR RESERVATION <br></br>ANYTIME</h1></div>   
                    </div>

                    <div className = "features-info">
                        <div className = "fa fa-2x fa-map-marker-alt text-secondary"></div>
                        <div className =  "info"><h1>LOTS OF PICKUP<br></br> LOCATIONS</h1></div>
                    </div>
                    
                </div>
        </div>
    );
}
export default Welcome;