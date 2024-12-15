import React from "react";

const Saving = () => {
  return (
    <section className="relative">
      <div className="blob1"></div>
      <div className="blob2"></div>
      <div className="container py-20 relative">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-12 md:w-1/2">
            <img src="./img/hero3.png" alt="" />
          </div>
          <div className="md:w-1/2 text-center md:text-left md:ml-20">
            <h4 className="font-bold text-color-secondary mb-4">
              Our Features
            </h4>
            <h1 className="title mb-4">
              Easy To Manage Your All Payments By Our App
            </h1>
            <p className="leading-relaxed mb-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              expedita ad, aspernatur consequuntur voluptates saepe!
            </p>
            <button className="btn">Read More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Saving;
