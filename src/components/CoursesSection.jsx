import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';

const CoursesSection = () => {
  return (
    <section id="courses">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <div className="section-title">
              <h2>
                Popular Courses <small>Upgrade your skills with newest courses</small>
              </h2>
            </div>

            <OwlCarousel
              className="owl-theme owl-courses"
              loop
              margin={10}
              nav
              items={3}
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
              {/* Data Science Course */}
              <div className="item">
                <div className="courses-thumb">
                  <div className="courses-top">
                    <div className="courses-image">
                      <img src="images/datascientist.jpg" className="img-responsive" alt="Data Science" />
                    </div>
                    <div className="courses-date">
                      <span><i className="fa fa-calendar"></i> 12 / 7 / 2024</span>
                      <span><i className="fa fa-clock-o"></i> 7 Hours</span>
                    </div>
                  </div>

                  <div className="courses-detail">
                    <h3><a href="#">Data Science</a></h3>
                    <p>good</p>
                  </div>

                  <div className="courses-info">
                    <div className="courses-author">
                      <img src="images/teacher1.jpg" className="img-responsive" alt="sameera" />
                      <span>Sameera</span>
                    </div>
                    <div className="courses-price">
                      <a href="#"><span>₹699</span></a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Graphic & Web Design Course */}
              <div className="item">
                <div className="courses-thumb">
                  <div className="courses-top">
                    <div className="courses-image">
                      <img src="images/graphicsdesign.jpg" className="img-responsive" alt="Graphic & Web Design" />
                    </div>
                    <div className="courses-date">
                      <span><i className="fa fa-calendar"></i> 20 / 7 / 2024</span>
                      <span><i className="fa fa-clock-o"></i> 4.5 Hours</span>
                    </div>
                  </div>

                  <div className="courses-detail">
                    <h3><a href="#">Graphic & Web Design</a></h3>
                    <p>good</p>
                  </div>

                  <div className="courses-info">
                    <div className="courses-author">
                      <img src="images/male-avatar-5.jpg" className="img-responsive" alt="kumar" />
                      <span>Kumar</span>
                    </div>
                    <div className="courses-price">
                      <a href="#"><span>USD 80</span></a>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI and ML Course */}
              <div className="item">
                <div className="courses-thumb">
                  <div className="courses-top">
                    <div className="courses-image">
                      <img src="images/aiandml.jpg" className="img-responsive" alt="AI and ML" />
                    </div>
                    <div className="courses-date">
                      <span><i className="fa fa-calendar"></i> 15 / 8 / 2024</span>
                      <span><i className="fa fa-clock-o"></i> 6 Hours</span>
                    </div>
                  </div>

                  <div className="courses-detail">
                    <h3><a href="#">AI and ML</a></h3>
                    <p>best</p>
                  </div>

                  <div className="courses-info">
                    <div className="courses-author">
                      <img src="images/teacher2.jpg" className="img-responsive" alt="Rani" />
                      <span>Rani</span>
                    </div>
                    <div className="courses-price free">
                      <a href="#"><span>Free</span></a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Big Data Course */}
              <div className="item">
                <div className="courses-thumb">
                  <div className="courses-top">
                    <div className="courses-image">
                      <img src="images/big-data.jpg" className="img-responsive" alt="Big Data" />
                    </div>
                    <div className="courses-date">
                      <span><i className="fa fa-calendar"></i> 10 / 8 / 2024</span>
                      <span><i className="fa fa-clock-o"></i> 8 Hours</span>
                    </div>
                  </div>

                  <div className="courses-detail">
                    <h3><a href="#">Big Data</a></h3>
                    <p>good</p>
                  </div>

                  <div className="courses-info">
                    <div className="courses-author">
                      <img src="images/male-teacher-avatar.jpg" className="img-responsive" alt="Ganesh" />
                      <span>Ganesh</span>
                    </div>
                    <div className="courses-price">
                      <a href="#"><span>₹738</span></a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cloud Computing Course */}
              <div className="item">
                <div className="courses-thumb">
                  <div className="courses-top">
                    <div className="courses-image">
                      <img src="images/cloud-computing.jpg" className="img-responsive" alt="Cloud Computing" />
                    </div>
                    <div className="courses-date">
                      <span><i className="fa fa-calendar"></i> 5 / 10 / 2024</span>
                      <span><i className="fa fa-clock-o"></i> 10 Hours</span>
                    </div>
                  </div>

                  <div className="courses-detail">
                    <h3><a href="#">Cloud Computing</a></h3>
                    <p>good</p>
                  </div>

                  <div className="courses-info">
                    <div className="courses-author">
                      <img src="images/teacher1.jpg" className="img-responsive" alt="Sameera" />
                      <span>Sameera</span>
                    </div>
                    <div className="courses-price free">
                      <a href="#"><span>Free</span></a>
                    </div>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
