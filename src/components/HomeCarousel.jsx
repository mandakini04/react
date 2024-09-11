
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

const HomeCarousel = () => {
  const options = {
    items: 1,
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    smartSpeed: 450,
  };

  return (
    <section id="home">
      <div className="row">
        <OwlCarousel className="owl-carousel owl-theme home-slider" {...options}>
          <div className="item item-first">
            <div className="caption">
              <div className="container">
                <div className="col-md-6 col-sm-12">
                  <h1>Distance Learning Education Center</h1>
                  <h3>Our online courses are designed to fit in your industry supporting all-round with latest technologies.</h3>
                  <a href="#feature" className="section-btn btn btn-default smoothScroll">Discover more</a>
                </div>
              </div>
            </div>
          </div>

          <div className="item item-second">
            <div className="caption">
              <div className="container">
                <div className="col-md-6 col-sm-12">
                  <h1>Start your journey with our practical courses</h1>
                  <h3>Our online courses are built in partnership with technology leaders and are designed to meet industry demands.</h3>
                  <a href="#courses" className="section-btn btn btn-default smoothScroll">Take a course</a>
                </div>
              </div>
            </div>
          </div>

          <div className="item item-third">
            <div className="caption">
              <div className="container">
                <div className="col-md-6 col-sm-12">
                  <h1>Efficient Learning Methods</h1>
                  <h3>Efficient learning involves active engagement with the material through techniques like spaced repetition and active recall.</h3>
                  <a href="#contact" className="section-btn btn btn-default smoothScroll">Let's chat</a>
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </section>
  );
};

export default HomeCarousel;
