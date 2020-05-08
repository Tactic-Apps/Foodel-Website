import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";

import Plan from "./Plan/Plan";
import "./Pricing.css";

const pricingDetails = {
  Complete: {
    totalPrice: "$659 ",
    term: "/month",
    mealPrice: "That’s only $10.98 per meal",
    feature1: {
      description: "3 meals 20 days/month",
      icon: "checkmark",
    },
    feature2: {
      description: "Breakfast, Lunch, and Dinner",
      icon: "checkmark",
    },
    feature3: {
      description: "Schedule Delivery Time",
      icon: "checkmark",
    },
    feature4: {
      description: "Free delivery",
      icon: "checkmark",
    },
    buttonClass: "btn btn-full",
  },
  Starter: {
    totalPrice: "$249 ",
    term: "/month",
    mealPrice: "That’s only $12.45 per meal",
    feature1: {
      description: "1 meal 20 days/month",
      icon: "checkmark",
    },
    feature2: {
      description: "Breakfast, Lunch, or Dinner",
      icon: "checkmark",
    },
    feature3: {
      description: "Schedule Delivery Time",
      icon: "checkmark",
    },
    feature4: {
      description: "Free delivery",
      icon: "checkmark",
    },
    buttonClass: "btn btn-ghost",
  },
  Individual: {
    totalPrice: "$12+ ",
    term: "/meal",
    mealPrice: "Starting at $12 per meal",
    feature1: {
      description: "1 or more meals",
      icon: "checkmark",
    },
    feature2: {
      description: "Lunch and Dinner Options",
      icon: "checkmark",
    },
    feature3: {
      description: "Delivered in 30 mins",
      icon: "checkmark",
    },
    feature4: {
      description: "Free delivery",
      icon: "close",
    },
    buttonClass: "btn btn-ghost",
  },
};

const planList = (pricePulse) => {
  let planArray = [];
  for (let plan in pricingDetails) {
    planArray.push(
      <Plan
        key={plan}
        plan={plan}
        pricePulse={pricePulse}
        totalPrice={pricingDetails[plan].totalPrice}
        term={pricingDetails[plan].term}
        mealPrice={pricingDetails[plan].mealPrice}
        feature1={pricingDetails[plan].feature1.description}
        feature2={pricingDetails[plan].feature2.description}
        feature3={pricingDetails[plan].feature3.description}
        feature4={pricingDetails[plan].feature4.description}
        feature1Icon={pricingDetails[plan].feature1.icon}
        feature2Icon={pricingDetails[plan].feature2.icon}
        feature3Icon={pricingDetails[plan].feature3.icon}
        feature4Icon={pricingDetails[plan].feature4.icon}
        btnClass={pricingDetails[plan].buttonClass}
      />
    );
  }
  return planArray;
};

const Pricing = (props) => (
  <ScrollableAnchor id={"pricing"}>
    <section className="section-pricing">
      <div className="row">
        <h2>Start eating healthy today</h2>
      </div>
      <div className="row">{planList(props.pricePulse)}</div>
    </section>
  </ScrollableAnchor>
);

export default Pricing;
