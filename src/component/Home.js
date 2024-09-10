// Home.js
import React, { useState, useEffect } from 'react';
import './Home.css';
import './Itwork.css';
import './Welcome.css';
import './Service.css';
import Royalcar from '../assets/images/royal_car.png';
import './Welcome.css';
import Welcome from './Welcome';
import feature from '../assets/images/feature_01.png'
import './carlist.css';
import './Meet.css';
import './testimonial.css';
import './carlist.css';
import testimonial1 from '../assets/images/testimonial1.jpg';
import testimonial2 from '../assets/images/testimonial2.jpg'; 
import testimonial3 from '../assets/images/testimonial3.jpg'; 
import { Link } from 'react-router-dom'; 

import './carlist.css';
import car1 from '../assets/images/car_1.jpg';
import car2 from '../assets/images/car_2.jpg';
import car3 from '../assets/images/car_3.jpg';
import car4 from '../assets/images/car_4.jpg';
import car5 from '../assets/images/car_5.jpg';
import car6 from '../assets/images/car_6.jpg';
import Testimonial from './Testimonial';
import Footer from './Footer';




const Home = () => {
  const words = ['Drive Unlimited.', 'Luxury Rides.', 'Quality Guaranteed.'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');

  useEffect(() => {
    let timer = setTimeout(() => {
      let currentIndex = currentWordIndex;
      let nextIndex = (currentIndex + 1) % words.length;
      setCurrentWordIndex(nextIndex);
    }, 5000); // Change word every 5 seconds

    return () => {
      clearTimeout(timer); // Cleanup timer on unmount
    };
  }, [currentWordIndex]);

  useEffect(() => {
    const typeText = () => {
      const targetWord = words[currentWordIndex];
      setCurrentText('');
      let index = 0;
      const typing = setInterval(() => {
        setCurrentText(targetWord.substring(0, index + 1));
        index++;
        if (index === targetWord.length) {
          clearInterval(typing);
        }
      }, 100); // Type one character every 100ms
    };

    typeText();
  }, [currentWordIndex]);

  return (

    <div>
    <div className="homepage">
      <div className="hometext">
        {/* <label><b>Rent a car</b> is within<br />your fingertips.</label> */}
        <div className="Register_Now "><Link to='/RegistrationForm'><button>Register Now</button></Link></div>
      </div>

            <div className="search-container">

                    <div className="dropdown">
                    {/* <label>Pickup Location</label> */}
                    <select>
                        <option value="">Select Pickup Location</option>
                        <option value="location1">mumbai</option>
                        <option value="location2">kolkatta</option>
                        <option value="location2">pune</option>
                        <option value="location2">satara</option>
                        <option value="location2">kolhapur</option>
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
                        <option value="location2">kolhapur</option>
                        <option value="location2">satara</option>
                        <option value="location2">pune</option>
                        <option value="location2">kolkatta</option>
                        <option value="location1">mumbai</option>
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
                        <option value="car1">Mitsubishi Pajero</option>
                        <option value="car2">Nissan Moco</option>
                        <option value="car2">Honda Fitta</option>
                        <option value="car2">Skoda Laura</option>
                        <option value="car2">Mazda LaPuta</option>
                        <option value="car2">Buick LaCrosse</option>
                        <option value="car2">balono</option>
                        <option value="car2">honda</option>
                        <option value="car2">Maruti Suzuki</option>
                        <option value="car2">Nano</option>
                    </select>
                    </div>

                    <button className="search-button"><a href="">Search</a></button>
             </div>
            
      <div className="banner-text">
        <div className="banner-cell">
          <h1>Rent a car_<span className="typer">{currentText}</span><span className="cursor">_</span></h1>
        </div>
      </div>  
  
    </div>

    {/* welcome */}

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


                {/* itwork */}


                <div  className = "Itwork">
            <div className="text">
                <h1>How it works?</h1>
                <p>Easy steps to get you started</p>
            </div>
            
            <div className="box">
                <div className="steps">
                    <div className="number">01</div>
                    <div className="step">Select a car</div>
                    <div className="info">Choosing a car involves picking a vehicle from the available options that best suits your needs and preferences.</div>
                </div>
                <div className="num">
                    <h1>1</h1>
                </div>
            </div>

            <div className="box">
                <div className="steps">
                    <div className="number">03</div>
                    <div className="step">Payment</div>
                    <div className="info">Make a payment using your preferred method, such as a credit card or online payment system, to confirm your car rental reservation.</div>
                </div>
                <div className="num">
                    <h1>3</h1>
                </div>
            </div>

            
            <div className = "child2">
            <div className="box">
                <div className="steps">
                    <div className="number">02</div>
                    <div className="step">Fill up form</div>
                    <div className="info">Complete the required information on the provided form, including personal details, rental period, and payment information.</div>
                </div>
                <div className="num">
                    <h1>2</h1>
                </div>
            </div>
            </div>

            <div class="play_button">
              <a href="#" class="d-flex align-items-center play-now mx-auto">
                <span class="icon">
                  <span class="icon-play"></span>
                </span>
                <span class="caption">Video how it works</span>
              </a>
            </div>  
        </div>

        {/* meet */}

        <div className = "meet">
                        <div className= "text">
                            <h1>You can easily avail our <br></br>promo for renting a car.</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing<br></br> elit. Repudiandae, explicabo iste a labore id est <br></br>quas, doloremque veritatis! Provident odit pariatur<br></br> dolorem quisquam, voluptatibus voluptates optio<br></br> accusamus, vel quasi quidem!</p>
                            <button>Meet them Now</button>
                        </div>

                        <div className ="features-img">
                            <img src = {feature}></img>
                        </div>
            </div>
            
        
        
          {/* carlist */}



          <div className="carlist">
                <div className = "carheading">
                    <h1>Find Your Car...</h1>
                    <p>Better Way For Find Your Favourite Cars</p>
                </div>


                <div className = "allcar">
                    {/* //car1 */}
                    <div className = "carbox">
                                <div className = "car-img">
                                    <img src = {car1}></img>
                                </div>


                                <div className = "listing-content">
                                <h3>Mitsubishi Pajero</h3>
                                </div>
                                <div className = "rent-prize"><strong>$389.00 /day</strong></div>


                                <div className = "car-features-box">
                                        <div className = "car-features">
                                        <span className="caption">Luggage:</span>
                                        <span className="number">8</span>
                                        </div>

                                        <div className = "car-features">
                                        <span className="caption">Doors:</span>
                                        <span className="number">4</span>
                                        </div>

                                        <div className = "car-features">
                                        <span className="caption">Passenger:</span>
                                        <span className="number">4</span>
                                        </div>
                                </div>
                            <hr></hr>

                            <div className = "info">
                        
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing <br></br>elit. Quos eos at eum, voluptatem quibusdam.</p>
                                <button className = "rent_now"> Rent now</button>

                            </div>
                     </div>

                    {/* //car2 */}
                     <div className = "carbox">
                                <div className = "car-img">
                                    <img src = {car2}></img>
                                </div>


                                <div className = "listing-content">
                                <h3>Nissan Moco</h3>
                                </div>
                                <div className = "rent-prize"><strong>$538.00 /day</strong></div>


                                <div className = "car-features-box">
                                        <div className = "car-features">
                                        <span className="caption">Luggage:</span>
                                        <span className="number">8</span>
                                        </div>

                                        <div className = "car-features">
                                        <span className="caption">Doors:</span>
                                        <span className="number">4</span>
                                        </div>

                                        <div className = "car-features">
                                        <span className="caption">Passenger:</span>
                                        <span className="number">4</span>
                                        </div>
                                </div>
                            <hr></hr>

                            <div className = "info">
                        
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing <br></br>elit. Quos eos at eum, voluptatem quibusdam.</p>
                                <button> Rent now</button>

                            </div>
                     </div>

                     {/* //car3 */}
                     <div className = "carbox">
                                <div className = "car-img">
                                    <img src = {car3}></img>
                                </div>


                                <div className = "listing-content">
                                <h3>Honda Fitta</h3>
                                </div>
                                <div className = "rent-prize"><strong>$278.00 /day</strong></div>


                                <div className = "car-features-box">
                                        <div className = "car-features">
                                        <span className="caption">Luggage:</span>
                                        <span className="number">8</span>
                                        </div>

                                        <div className = "car-features">
                                        <span className="caption">Doors:</span>
                                        <span className="number">4</span>
                                        </div>

                                        <div className = "car-features">
                                        <span className="caption">Passenger:</span>
                                        <span className="number">6</span>
                                        </div>
                                </div>
                            <hr></hr>

                            <div className = "info">
                        
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing <br></br>elit. Quos eos at eum, voluptatem quibusdam.</p>
                                <button> Rent now</button>

                            </div>
                     </div>


                     {/* //car4 */}
                     <div className = "carbox">
                                <div className = "car-img">
                                    <img src = {car4}></img>
                                </div>


                                <div className = "listing-content">
                                <h3>Skoda Laura</h3>
                                </div>
                                <div className = "rent-prize"><strong>$685.00 /day</strong></div>


                                <div className = "car-features-box">
                                        <div className = "car-features">
                                        <span className="caption">Luggage:</span>
                                        <span className="number">5</span>
                                        </div>

                                        <div className = "car-features">
                                        <span className="caption">Doors:</span>
                                        <span className="number">5</span>
                                        </div>

                                        <div className = "car-features">
                                        <span className="caption">Passenger:</span>
                                        <span className="number">4</span>
                                        </div>
                                </div>
                            <hr></hr>

                            <div className = "info">
                        
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing <br></br>elit. Quos eos at eum, voluptatem quibusdam.</p>
                                <button> Rent now</button>

                            </div>
                     </div>

                     {/* //car5 */}
                     <div className = "carbox">
                                <div className = "car-img">
                                    <img src = {car5}></img>
                                </div>


                                <div className = "listing-content">
                                <h3>Mazda LaPuta</h3>
                                </div>
                                <div className = "rent-prize"><strong>$546.00 /day</strong></div>


                                <div className = "car-features-box">
                                        <div className = "car-features">
                                        <span className="caption">Luggage:</span>
                                        <span className="number">4</span>
                                        </div>

                                        <div className = "car-features">
                                        <span className="caption">Doors:</span>
                                        <span className="number">6</span>
                                        </div>

                                        <div className = "car-features">
                                        <span className="caption">Passenger:</span>
                                        <span className="number">7</span>
                                        </div>
                                </div>
                            <hr></hr>

                            <div className = "info">
                        
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing <br></br>elit. Quos eos at eum, voluptatem quibusdam.</p>
                                <button> Rent now</button>

                            </div>
                     </div>



                     {/* //car6 */}
                     <div className = "carbox">
                                <div className = "car-img">
                                    <img src = {car6}></img>
                                </div>


                                <div className = "listing-content">
                                <h3>Buick LaCrosse</h3>
                                </div>
                                <div className = "rent-prize"><strong>$867.00 /day</strong></div>


                                <div className = "car-features-box">
                                        <div className = "car-features">
                                        <span className="caption">Luggage:</span>
                                        <span className="number">6</span>
                                        </div>

                                        <div className = "car-features">
                                        <span className="caption">Doors:</span>
                                        <span className="number">5</span>
                                        </div>

                                        <div className = "car-features">
                                        <span className="caption">Passenger:</span>
                                        <span className="number">4</span>
                                        </div>
                                </div>
                            <hr></hr>

                            <div className = "info">
                        
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing <br></br>elit. Quos eos at eum, voluptatem quibusdam.</p>
                                <button> Rent now</button>

                            </div>
                     </div>

                     
                    
                </div>
                <div className='carseemore'>
                      <button><Link to='/Carlistall'>See More</Link></button>
               </div>
        </div>
        

        {/* service */}

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

            {/* testimonial */}

            {/* <Testimonial/> */}
            <div className="testi">
            <div className ="title-text">
               
                <h1>TESTIMONIAL</h1>
                <p>What Client Say's</p>
            </div>
            <div className = "testimonial-row">

                <div className = "testimonial-column">
                    <div className = "user">
                    <img src = {testimonial1}></img>
                        <div className = "user-info">
                        <h4>
                            "KEN NORMAN"
                            <i class="fab fa-twitter"></i> <br/>
                            <small>@kennorman</small>
                        </h4>
                        </div>
                         </div>
                         <p>Lorem, ipsum dolor sit amet 
                         consectetur adipisicing elit.
                         Pariatur totam, ut, error blanditiis 
                         reprehenderit adipisci 
                         voluptatum, ducimus fuga quae 
                         consequatur sit! Eaque 
                         voluptates explicabo, nulla ut eius 
                         dignissimos possimus libero 
                         labore quo, necessitatibus totam.</p>
                    
                </div>

                <div className = "testimonial-column">
                    <div className = "user">
                    <img src = {testimonial2}></img>
                        <div className = "user-info">
                        <h4>
                            "ALIS MARTIN"
                            <i class="fab fa-twitter"></i> <br/> 
                            <small>@alismartin</small>
                            </h4>
                         </div>
                         </div>
                         <p>Lorem, ipsum dolor sit amet 
                         consectetur adipisicing elit.
                         Pariatur totam, ut, error blanditiis 
                         reprehenderit adipisci 
                         voluptatum, ducimus fuga quae 
                         consequatur sit! Eaque 
                         voluptates explicabo, nulla ut eius 
                         dignissimos</p>
                    
                </div>

                <div className = "testimonial-column">
                    <div className = "user">
                    <img src = {testimonial3}></img>
                        <div className = "user-info">
                            <h4>
                            "JACK SPARROW "
                            <i class="fab fa-twitter"></i><br/> 
                            <small>@jacksparrow</small>
                            </h4>
                         </div>
                         </div>
                         <p>Lorem, ipsum dolor sit amet 
                         consectetur adipisicing elit.
                         Pariatur totam, ut, error blanditiis 
                         reprehenderit adipisci 
                         voluptatum, ducimus fuga quae 
                         consequatur sit! Eaque 
                         voluptates explicabo, nulla ut eius 
                         dignissimos possimus libero 
                         labore quo, necessitatibus totam.</p>
                    

                </div>
            </div>
            <div className="testbar">
                    <div className="text">
                            <h4>What are you waiting for?</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, laboriosam.</p>
                    </div>
            
                    <div className="textbutton"><button>Rent a car now</button></div>
            
            </div> 
         </div>
    
            <Footer/>
    </div>
  );
};

export default Home;
