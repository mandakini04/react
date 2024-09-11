import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="about-info">
              <h2>Start your journey to a better life with online practical courses</h2>

              <figure>
                <span><i className="fa fa-users"></i></span>
                <figcaption>
                  <h3>Professional Trainers</h3>
                  <p>Learn from the best with our team of professional trainers, who bring real-world experience and expert knowledge to every course.</p>
                </figcaption>
              </figure>

              <figure>
                <span><i className="fa fa-certificate"></i></span>
                <figcaption>
                  <h3>International Certifications</h3>
                  <p></p>
                </figcaption>
              </figure>

              <figure>
                <span><i className="fa fa-bar-chart-o"></i></span>
                <figcaption>
                  <h3>Free for 3 months</h3>
                  <p></p>
                </figcaption>
              </figure>
            </div>
          </div>

          <div className="col-md-offset-1 col-md-4 col-sm-12">
            <div className="entry-form">
              <img src="images/journy.jpg" alt="image" /> 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
