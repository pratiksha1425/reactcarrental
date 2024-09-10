import './carlist.css';
import car1 from '../assets/images/car_1.jpg';
import car2 from '../assets/images/car_2.jpg';
import car3 from '../assets/images/car_3.jpg';
import car4 from '../assets/images/car_4.jpg';
import car5 from '../assets/images/car_5.jpg';
import car6 from '../assets/images/car_6.jpg';
function Carlist(){
    return(
        <div className="car">
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
        </div>
    );
}
export default Carlist;