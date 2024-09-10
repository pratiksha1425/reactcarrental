import './about.css';
import Footer from './Footer';
import Welcome  from './Welcome';
function About(){
    return(
        <div>
            <div className="about">
                    <div className="about-container">
                            <div className="abouthead">
                                    <h1>About</h1>
                                    <div className='smallhead'>
                                        <h2>Home /<p>About</p></h2>
                                    </div>
                            </div>
                    </div>
                    <Welcome/>
            </div>
                <Footer/>
        </div>
    );
}
export default About;