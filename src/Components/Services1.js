import React from "react";

const Services1 = () => {
  return (
    <div className="Services-Crousel">
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://www.xtreme-media.com/wp-content/uploads/2022/07/Unify-bedroom-solutions-574x442.jpg.webp"
              className="d-block w-100 service-img"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.xtreme-media.com/wp-content/uploads/2022/03/Novel-Tata-1024-768-1-574x442.png"
              className="d-block w-100 service-img"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.xtreme-media.com/wp-content/uploads/2022/06/Tata-Steel-Billboard-497-372.jpg.webp"
              className="d-block w-100 service-img"
              alt="..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services1;
