import React from "react";
import { Link } from "react-router-dom";

const Home4 = () => {
  return (
    <>
      <div className="home4-Ext">
        <div className="row home4-vt">
          <div className="col-12 col-md-6 col-video">
            <video
              src="https://nowdigitalsignage.com/wp-content/uploads/2023/08/digital-signage-adv-video.mp4"
              controls
              autoPlay
              loop
              muted
              className="Home4-Video"
            ></video>
          </div>
          <div className="col-12 col-md-6 home4-txt">
            <h1>Create your Signage account NOW</h1>
            <p>No monthly fees 💸 One time payment 👍 Expert support 🦸‍♂️</p>
            <div className="btn btn-primary">Create Account</div>
            {/* <Link
              className="nav-link active btn btn-primary btn-sm"
              to="/login"
              style={{ height: "30px", padding: "5px" }}
            >
              Login/Signup
            </Link> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home4;
