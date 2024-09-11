import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Feature = () => {
  return (
    <section id="feature" aria-labelledby="feature-heading">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="feature-thumb">
              <span>01</span>
              <h2 id="feature-heading">Trending Courses</h2>
              <p>
                Discover the most popular AI courses designed to equip you with
                the latest skills and knowledge in the field of artificial
                intelligence. Start your learning journey with śikṣā today.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="feature-thumb">
              <span>02</span>
              <h2>Books & Library</h2>
              <p>
                Access a vast library of AI resources and notes, carefully
                curated to help you master complex topics. Learn from the best
                materials available, all in one place.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="feature-thumb">
              <span>03</span>
              <h2>Certified Teachers</h2>
              <p>
                Learn from the best in the field. śikṣā brings you courses taught
                by industry-leading AI professionals, ensuring you receive
                top-quality education.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
