import React from "react";

const Banner = () => {
  return (
    <section className="relative">
      <div className="blob1"></div>
      <div className="blob2"></div>
      <div className="container py-20">
        <div className="flex flex-col items-center z-20 md:flex-row">
          <div className="text-center mb-12 md:text-left md:w-1/2">
            <h1 className="title">Awesome App for Your Financial.</h1>
            <p className="leading-relaxed mb-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              alias magni similique exercitationem, perspiciatis sed!
            </p>
            <button className="btn">Download App</button>
          </div>
          <div className="md:w-1/2">
            <img src="./img/hero4.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
