import React from "react";

import "./Testimonials.css";
import Testimonial from "./Testimonial/Testimonial";
import jermaine from "../../assets/img/customer-1-min.jpg";
import karen from "../../assets/img/customer-2-min.jpg";
import alex from "../../assets/img/customer-3-min.jpg";

const testimonials = {
  Alex: {
    testimonial:
      "Foodel is a life saver! I work 10-12 hours a week and struggle to find time to cook. Foodel's meals are delicious and helps me to live a healthy lifestyle. I really can't live without them!",
    img: alex,
    name: "Alex De Souza",
  },
  Karen: {
    testimonial:
      "Inexpensive, healthy and great-tasting meals, delivered right to my home. This is an incredible time-saver for a busy mom. Foodel has exceeded my expectations and has won a customer for life!",
    img: karen,
    name: "Karen Troup",
  },
  Jermaine: {
    testimonial:
      "I've tried many different food delivery services but Foodel really stands out. The meals are healthy, absolutely delicious but even more importantly, always arrive fresh and on time.",
    img: jermaine,
    name: "Jermaine Griggs",
  },
};

const testimonialList = () => {
  const testimonialArray = [];
  for (let test in testimonials) {
    testimonialArray.push(
      <Testimonial
        key={testimonials[test].name}
        clientName={testimonials[test].name}
        img={testimonials[test].img}
        alt={testimonials[test].name}
        testimonial={testimonials[test].testimonial}
      />
    );
  }
  return testimonialArray;
};

const Testimonials = () => {
  return (
    <section className="section-testimonials">
      <div className="row">
        <h2>Here's what our customers have to say</h2>
      </div>
      <div className="row">{testimonialList()}</div>
    </section>
  );
};

export default Testimonials;
