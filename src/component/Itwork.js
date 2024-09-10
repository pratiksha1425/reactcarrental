import './Itwork.css';
import feature from '../assets/images/feature_01.png';

function Itwork() {
    return (
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
    );
}

export default Itwork;
