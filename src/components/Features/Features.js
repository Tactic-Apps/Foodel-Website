import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import { Animated } from "react-animated-css";

import "./Features.css";
import Feature from "./Feature/Feature";

const features = [
  {
    feature: {
      icon: "infinite",
      heading: "Up to 365 days/year",
      content:
        "Never cook again! We really mean that. Our subscription service can cover all your weekday meals with the option of adding individual meals for the weekend. ",
    },
  },
  {
    feature: {
      icon: "fitness",
      heading: "Reach Your Goals",
      content:
        "A healthy diet will not only help you achieve your health and fitness goals but also give you the energy to take on your busy schedule. Let us help you get and stay on track.",
    },
  },
  {
    feature: {
      icon: "nutrition",
      heading: "100% organic",
      content:
        "All our vegetables are fresh, organic and local. Animals are raised without added hormones or antibiotics. Good for your health, the environment, and it also tastes better!",
    },
  },
  {
    feature: {
      icon: "restaurant",
      heading: "Chef inspired",
      content:
        "Eating healthy doesn't have to be bland. Every dish is devised by a professional chef with an exceptional flavor profile. Your taste buds will love our mouth watering meals.",
    },
  },
];

const Features = (props) => {
  return (
    <ScrollableAnchor id={"features"}>
      <section className="section-features">
        <div className="row">
          <h2>Healthy meals &mdash; delivered fresh</h2>
          <p className="long-copy">
            Hey there, we’re Foodel, your new premium food delivery service. We
            know you’re always busy with no time to cook. So let us feed you
            daily, delicious, healthy meals so you can get back to your day!
          </p>
        </div>
        <Animated animationIn="fadeIn" isVisible={props.featureFade}>
          <div className="row">
            {features.map((feat) => (
              <Feature
                key={feat.feature.heading}
                icon={feat.feature.icon}
                heading={feat.feature.heading}
                content={feat.feature.content}
              />
            ))}
          </div>
        </Animated>
      </section>
    </ScrollableAnchor>
  );
};

export default Features;
