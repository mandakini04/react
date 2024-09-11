import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const TestimonialSection = () => {
  return (
    <section id="testimonial">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <div className="section-title">
              <h2>Student Reviews <small>from around the world</small></h2>
            </div>

            <OwlCarousel
              className="owl-theme"
              loop
              margin={10}
              nav
              items={3} // Adjust the number of items based on your design
              responsive={{
                0: {
                  items: 1,
                },
                600: {
                  items: 2,
                },
                1000: {
                  items: 3,
                },
              }}
            >
              <div className="item">
                <div className="tst-image">
                  <img src="images/tst-image1.jpg" className="img-responsive" alt="gopal" />
                </div>
                <div className="tst-author">
                  <h4>gopal</h4>
                  <span>Shopify Developer</span>
                </div>
                <p>You really do help young creative minds to get quality education and professional job search assistance. I’d recommend it to everyone!</p>
                <div className="tst-rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
              </div>

              <div className="item">
                <div className="tst-image">
                  <img src="images/tst-image2.jpg" className="img-responsive" alt="kamal" />
                </div>
                <div className="tst-author">
                  <h4>kamal</h4>
                  <span>Marketing Manager</span>
                </div>
                <p>Trying something new is exciting! Thanks for the amazing law course and the great teacher who was able to make it interesting.</p>
                <div className="tst-rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
              </div>

              <div className="item">
                <div className="tst-image">
                  <img src="images/tst-image3.jpg" className="img-responsive" alt="Vyshnavi" />
                </div>
                <div className="tst-author">
                  <h4>Vyshnavi</h4>
                  <span>Art Director</span>
                </div>
                <p>wonderful</p>
                <div className="tst-rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
              </div>

              <div className="item">
                <div className="tst-image">
                  <img src="images/tst-image4.jpg" className="img-responsive" alt="maya" />
                </div>
                <div className="tst-author">
                  <h4>maya</h4>
                  <span>Web Developer</span>
                </div>
                <p>Its really a great experience to learn in this platform</p>
                <div className="tst-rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
