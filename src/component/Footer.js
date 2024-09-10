
import './footer.css';
import gallery1 from '../assets/images/gallery-1.jpg';
import gallery2 from '../assets/images/gallery-2.jpg';
import gallery3 from '../assets/images/gallery-3.jpg';
import gallery4 from '../assets/images/gallery-4.jpg';
import gallery5 from '../assets/images/gallery-5.jpg';
import gallery6 from '../assets/images/gallery-6.jpg';
function Footer() {
    return (
        <div>
            <div className="footer">

                <div className="footerbox">

                    <div className="headings">
                        <div className= "headtext">
                            <h4>GET IN TOUCH</h4>
                            <p class="mb-2"><i class="fa fa-map-marker-alt text-white mr-3"></i>123 Street, New York, USA</p>
                            <p class="mb-2"><i class="fa fa-phone-alt text-white mr-3"></i>+012 345 67890</p>
                            <p><i class="fa fa-envelope text-white mr-3"></i>pratu@example.com</p>

                            <h6 class="text-uppercase text-white py-2">Follow Us</h6>
                            <div className ="social">
                                    <a class="socialfab" href="#"><i class="fab fa-twitter"></i></a>
                                    <a class="socialfab" href="#"><i class="fab fa-facebook-f"></i></a>
                                    <a class="socialfab" href="#"><i class="fab fa-linkedin-in"></i></a>
                                    <a class="socialfab" href="#"><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                           
                    </div>

                    <div className="headings">
                        <div className= "headtext">
                             <h4>USEFULL LINKS</h4>
                             <div className = "text">
                            <p><i class="fa fa-angle-right text-white mr-2"></i>Private Policy</p>
                            <p><i class="fa fa-angle-right text-white mr-2"></i>Term & Conditions</p>
                            <p><i class="fa fa-angle-right text-white mr-2"></i>New Member Registration</p>
                            <p><i class="fa fa-angle-right text-white mr-2"></i>Affiliate Programme</p>
                            <p><i class="fa fa-angle-right text-white mr-2"></i>Return &amp; Refund</p>
                            <p><i class="fa fa-angle-right text-white mr-2"></i>Help &amp; FQAs</p>
                            
                             </div>
                        </div>

                    </div>

                    <div className="headings">
                        <div className= "headtext">
                            <h4>CAR GALLERY</h4>   
                            <div className ="gallerpic">
                                <div className = "pic"> <img src = {gallery1}></img></div>
                                <div className = "pic"> <img src = {gallery2}></img></div>
                                <div className = "pic"> <img src = {gallery3}></img></div>
                                <div className = "pic"> <img src = {gallery4}></img></div>
                                <div className = "pic"> <img src = {gallery5}></img></div>
                                <div className = "pic"> <img src = {gallery6}></img></div>
                            </div>
                        </div>

                    </div>

                    <div className="headings">
                        <div className= "headtext">
                            <h4>NEWSLETTER</h4>
                            <p>Volup amet magna clita tempor. Tempor sea eos vero ipsum. Lorem lorem sit sed elitr sed kasd et
                            </p>     
                                <div className = "newsletter">
                                    <div class="input">
                                        <input type="text"placeholder="Your Email"/>    
                                    </div>

                                    <div class="sign">
                                        <button >Sign Up</button>
                                    </div>
                                </div>
                           
                             <p>Lorem sit sed elitr sed kasd et</p>
                        </div>
                            

                    </div>

                </div>
                <div className = "bottmfooter">
                    <p><b>Your Site Name </b>. All Rights Reserved .</p>
                    <p>Designed by <b>Pratiksha</b></p>
                </div>
               
            </div>
        
        </div>
    );
}

export default Footer;
