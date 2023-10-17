import React from "react";
import Home4 from "./Home4";

function Home3() {
  return (
    <>
      {/* <div className="features"> */}
      <div className="container">
        <div className="row p-4 home3-It">
          <div className="col-12 col-md-6 col-image column">
            <img
              src="https://nowdigitalsignage.com/wp-content/uploads/2023/08/restaurant-bar-display.jpeg"
              alt="Feature1"
              className="Img"
            />
          </div>
          <div className="col-12 col-md-6 col-text column">
            <h1>Now Digital Signage CMS</h1>
            <br />
            <ul>
              <li>No monthly recurring fees</li>
              <li>User friendly solution</li>
              <li>Remote control of screens</li>
              <li>Control 1 or 1000 displays</li>
              <li>Premium support available</li>
            </ul>
          </div>
        </div>
        <div className="row p-4">
          <div className="col-12 col-md-6 col-text column">
            <h1>Why use Now Digital Signage ?</h1>
            <br />
            <ul>
              <li>Communicate with your target audience</li>
              <li>Use videos and animated content</li>
              <li>Improve your customers experience</li>
              <li>Instantly update your content remotely</li>
            </ul>
          </div>
          <div className="col-12 col-md-6 col-image column">
            <img
              src="https://nowdigitalsignage.com/wp-content/uploads/2023/08/RM48D_front.jpg"
              alt="Feature2"
              className="Img"
            />
          </div>
        </div>
        <Home4 />
        <div className="row p-4">
          <div className="col-12 col-md-6 col-image">
            <img
              src="https://nowdigitalsignage.com/wp-content/uploads/2023/08/NOW-Digital-signage-schedule-1-1024x640.jpg"
              alt="Feature3"
              className="Img"
            />
          </div>
          <div className="col-12 col-md-6 col-text">
            <h1>Smart Scheduling</h1>
            <br />
            <ul>
              <li>Schedule date and time of playlists</li>
              <li>Always show up to date content</li>
              <li>Always show up to date content</li>
              <li>Use Dayparting for ultimate ease of Scheduling</li>
            </ul>
          </div>
          <div className="row p-4">
            <div className="col-12 col-md-6 col-text">
              <h1>Easy Layout Creation</h1>
              <br />
              <ul>
                <li>Split the screen however you want</li>
                <li>Use videos images and text</li>
                <li>Use widgets for weather, traffic, twitter</li>
                <li>Quickly build new layouts from templates</li>
              </ul>
            </div>
            <div className="col-12 col-md-6 col-image">
              <img
                src="https://nowdigitalsignage.com/wp-content/uploads/2023/08/NOW-Digital-Signage-layout-1.jpg"
                alt="Feature4"
                className="Img"
              />
            </div>
          </div>
        </div>
        <div className="row p-4">
          <div className="col-12 col-md-6 col-image">
            <img
              src="https://nowdigitalsignage.com/wp-content/uploads/2023/08/NOW-Digital-signage-Dashboard-1-1024x640.jpg"
              alt="Feature5"
              className="Img"
            />
          </div>
          <div className="col-12 col-md-6 col-text">
            <h1>Advanced Monitoring</h1>
            <br />
            <ul>
              <li>See the status of all your devices at a glance</li>
              <li>Check internet connectivity</li>
              <li>Take screenshots of what’s playing</li>
              <li>Monitor all the Displays on your network</li>
            </ul>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default Home3;
