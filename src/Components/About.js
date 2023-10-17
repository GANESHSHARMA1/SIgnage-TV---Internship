import React from "react";

const About = () => {
  return (
    <>
      <div className="about-heading">
        <h1>About Us</h1>
      </div>
      <div className="container about-txt">
        <p>
          <b>
            SignageTv, a digital broadcast agency that combines creativity,
            technology and location in order to achieve customer satisfaction
            through relevant information being broadcasted from one central
            point of control with complete control over content and programming.
            <br />
            <br />
            We provide digital signage solutions for corporate, education,
            healthcare and government facilities.
            <br />
            <br />
            We are a leading provider of content-rich digital signage solutions
            that connect brands with people.To better serve our customers,we’ve
            continued to consistently enhance our digital signage platform and
            stay relevant as communication needs evolve. ​
          </b>
        </p>
      </div>
      <div className="about-founder">
        <h1>Here we are 🚀</h1>
        <div className="row">
          <div className="col-12 col-md-6">
            <img
              src="https://signagetv.in/wp-content/uploads/2021/04/kriti.jpg"
              alt="Founder"
              className="about-founder-img"
            />
          </div>
          <div className="col-12 col-md-6">
            <img
              src="https://signagetv.in/wp-content/uploads/2021/04/sumant.jpg"
              alt="Co-Founder"
              className="about-founder-img"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
