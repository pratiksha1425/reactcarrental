import './testimonial.css';
import testimonial1 from '../assets/images/testimonial1.jpg';
import testimonial2 from '../assets/images/testimonial2.jpg'; 
import testimonial3 from '../assets/images/testimonial3.jpg';  
import Footer from './Footer';
function Testimonial(){
    return(
        <div>

            <div className="testi-container">
                <div className="testihead">
                    <h1>Testimonials</h1>
                    <div className='smallhead'>
                          <h2>Home /<p>Testimonials</p></h2>
                    </div>
                </div>
            </div>
        <div className="testi">
            <div className ="title-text">
                
                <h1>Testimonial</h1>
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
}
export default Testimonial;