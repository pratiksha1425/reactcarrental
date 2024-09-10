import feature from '../assets/images/feature_01.png'
import Carlist from './Carlist';
import './carlist.css';
import './Meet.css';
function Meet(){
    return(
        <div>
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
            
        </div>
    );

}
export default Meet;