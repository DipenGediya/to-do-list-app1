import React from "react";

const Pricing = () => {
  return (
    <section className="bg-color-primary-light">
      <div className="container py-20">
        <div className="text-center m-auto mb-20 md:w-1/2">
          <h4 className="font-bold text-color-secondary mb-4">Pricing</h4>
          <h1 className="title">Get In Reasonable Price</h1>

          <div className="mt-5 flex items-center justify-center gap-4">
            <p>Bill Monthly</p>
            <label className="relative inline-block w-20 h-8 rounded-full">
              <input
                type="checkbox"
                id="toggleBtn"
                className="peer opacity-0 w-0 h-0"
              />
              <span className="absolute top-0 left-0 bottom-0 bg-color-primary-light border border-solid border-color-gray rounded-full duration-300  before:content-[''] before:absolute before:w-6 before:h-6 before:bottom-1 before:left-1 before:rounded-full before:bg-color-white before:duration-300 peer-checked:before:translate-x-12 peer-checked:bg-color-secondary"></span>
            </label>
            <p>Bill Anually</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
