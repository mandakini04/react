import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const Team = () => {
  return (
    <section id="team">
      <div className="container">
        <div className="row">

          <div className="col-md-12 col-sm-12">
            <div className="section-title">
              <h2>Teachers <small>Meet Professional Trainers</small></h2>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="team-thumb">
              <div className="team-image">
                <img src="images/teacher1.jpg" className="img-responsive" alt=""/>
              </div>
              <div className="team-info">
                <h3>Sameera</h3>
                <span>I love Teaching</span>
              </div>
              <ul className="social-icon">
                <li><a href="#" className="fa fa-facebook-square" aria-label="Facebook icon"></a></li>
                <li><a href="#" className="fa fa-twitter" aria-label="Twitter icon"></a></li>
                <li><a href="#" className="fa fa-instagram" aria-label="Instagram icon"></a></li>
              </ul>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="team-thumb">
              <div className="team-image">
                <img src="images/male-teacher-avatar.jpg" className="img-responsive" alt=""/>
              </div>
              <div className="team-info">
                <h3>Ganesh</h3>
                <span>Education is the key!</span>
              </div>
              <ul className="social-icon">
                <li><a href="#" className="fa fa-google" aria-label="Google icon"></a></li>
                <li><a href="#" className="fa fa-instagram" aria-label="Instagram icon"></a></li>
              </ul>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="team-thumb">
              <div className="team-image">
                <img src="images/teacher2.jpg" className="img-responsive" alt=""/>
              </div>
              <div className="team-info">
                <h3>Rani</h3>
                <span>I like Online Courses</span>
              </div>
              <ul className="social-icon">
                <li><a href="#" className="fa fa-twitter" aria-label="Twitter icon"></a></li>
                <li><a href="#" className="fa fa-envelope-o" aria-label="Email icon"></a></li>
                <li><a href="#" className="fa fa-linkedin" aria-label="LinkedIn icon"></a></li>
              </ul>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="team-thumb">
              <div className="team-image">
                <img src="images/male-avatar-5.jpg" className="img-responsive" alt=""/>
              </div>
              <div className="team-info">
                <h3>Kumar</h3>
                <span>Learning is fun</span>
              </div>
              <ul className="social-icon">
                <li><a href="#" className="fa fa-twitter" aria-label="Twitter icon"></a></li>
                <li><a href="#" className="fa fa-google" aria-label="Google icon"></a></li>
                <li><a href="#" className="fa fa-behance" aria-label="Behance icon"></a></li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Team;
