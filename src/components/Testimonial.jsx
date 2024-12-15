import React, { useState } from "react";

const Testimonial = () => {
  const [testimonial, setTestimonial] = useState(1);
  const data = [
    {
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique vero, culpa ab sequi provident explicabo.",
      name: "Lorem, ipsum.",
      position: "react developer",
    },
    {
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique vero, culpa ab sequi provident explicabo.",
      name: "Lorem, ipsum.",
      position: "node developer",
    },
    {
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique vero, culpa ab sequi provident explicabo.",
      name: "Lorem, ipsum.",
      position: "angular developer",
    },
    {
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique vero, culpa ab sequi provident explicabo.",
      name: "Lorem, ipsum.",
      position: "python developer",
    },
    {
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique vero, culpa ab sequi provident explicabo.",
      name: "Lorem, ipsum.",
      position: "php developer",
    },
  ];
  return (
    <section>
      <div className="container py-20">
        <div className="text-center m-auto mb-20">
          <h4 className="font-bold text-color-secondary mb-4">How It Works</h4>
          <h1 className="title">Grow Up Your Money Saving</h1>
        </div>

        <div>
          <div className="flex items-center justify-center flex-wrap">
            <img
              src="./img/user1.jpg"
              className={`h-20 w-20 p-1 m-3 rounded-full user-pic active ${
                testimonial === 1 ? "active" : ""
              }`}
              alt=""
              onClick={(test) => setTestimonial(1)}
            />
            <img
              src="./img/user2.jpg"
              className={`h-20 w-20 p-1 m-3 rounded-full user-pic active ${
                testimonial === 2 ? "active" : ""
              }`}
              alt=""
              onClick={(test) => setTestimonial(2)}
            />
            <img
              src="./img/user3.jpg"
              className={`h-20 w-20 p-1 m-3 rounded-full user-pic active ${
                testimonial === 3 ? "active" : ""
              }`}
              alt=""
              onClick={(test) => setTestimonial(3)}
            />
            <img
              src="./img/user4.jpg"
              className={`h-20 w-20 p-1 m-3 rounded-full user-pic active ${
                testimonial === 4 ? "active" : ""
              }`}
              alt=""
              onClick={(test) => setTestimonial(4)}
            />
            <img
              src="./img/user5.jpg"
              className={`h-20 w-20 p-1 m-3 rounded-full user-pic active ${
                testimonial === 5 ? "active" : ""
              }`}
              alt=""
              onClick={(test) => setTestimonial(5)}
            />
          </div>

          <div className="grid place-items-center text-center m-auto md:w-4/5 min-h-[40vh]">
            <div className="user-text">
              <p className="md:text-2xl mb-6">{data[testimonial - 1].desc}</p>
              <h4 className="font-bold text-color-secondary mb-1">
                {data[testimonial - 1].name}
              </h4>
              <p>{data[testimonial - 1].position}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
