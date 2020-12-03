import React from 'react'
import Home1 from './Home_Images/home1.jpg'
import Home2 from './Home_Images/home2.jpg'
import Home3 from './Home_Images/home3.jpg'
function Landing() {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img className="d-block w-100 h-50" src={Home1} alt="First slide"/>
                <div className="carousel-caption d-none d-md-block">
                    <h5>First Image Title</h5>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <div className="carousel-item">
            <img className="d-block w-100 h-50" src={Home2} alt="Second slide"/>
                <div className="carousel-caption d-none d-md-block">
                    <h5>Second Image Title</h5>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
            <div className="carousel-item">
            <img className="d-block w-100 h-50" src={Home3} alt="Third slide"/>
                <div className="carousel-caption d-none d-md-block">
                    <h5>Third Image Title</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
            </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
</div>
    )
}
export default Landing