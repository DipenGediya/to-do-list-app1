import React from "react";

const Work = () => {
  return (
    <section className="bg-color-primary-light">
      <div className="container py-20">
        <div className="text-center m-auto mb-20">
          <h4 className="font-bold text-color-secondary mb-4">How It Works</h4>
          <h1 className="title">Grow Up Your Money Saving</h1>
        </div>

        <div className="flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0 md:space-x-6">
          <div className="text-center cursor-pointer">
            <div className="bg-color-primary-dark inline-block px-6 py-3 rounded-lg cursor-pointer hover:bg-color-secondary ease-in duration-200">
              <p className="text-6xl">
                1
              </p>
            </div> 
            <h3 className="text-xl font-bold py-4">Install The App</h3>
            <p className="leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
              quos!
            </p>
          </div>

          <div className="text-center cursor-pointer">
            <div className="bg-color-secondary inline-block px-6 py-3 rounded-lg cursor-pointer ease-in duration-200">
              <p className="text-6xl">
                2
              </p>
            </div> 
            <h3 className="text-xl font-bold py-4">Setup Your Profile</h3>
            <p className="leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
              quos!
            </p>
          </div>

          <div className="text-center cursor-pointer">
            <div className="bg-color-primary-dark inline-block px-6 py-3 rounded-lg cursor-pointer hover:bg-color-secondary ease-in duration-200">
              <p className="text-6xl">
                3
              </p>
            </div> 
            <h3 className="text-xl font-bold py-4">Enjoy The Features</h3>
            <p className="leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
              quos!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
