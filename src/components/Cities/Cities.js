import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import { Animated } from "react-animated-css";

import City from "./City/City";
import jacksonville from "../../assets/img/jacksonville-min.jpg";
import gainesville from "../../assets/img/gainesville-min.jpg";
import orlando from "../../assets/img/orlando-min.jpg";
import tampa from "../../assets/img/tampa-min.jpg";
import "./Cities.css";

const cities = {
  Jacksonville: {
    cityName: "Jacksonville",
    img: jacksonville,
    customerIcon: "person",
    chefIcon: "star",
    socialMediaIcon: "logo-twitter",
    customers: "1600+ happy eaters",
    chefs: "60+ top chefs",
    twitterHandle: "@foodel_jv",
  },
  Gainesville: {
    cityName: "Gainesville",
    img: gainesville,
    customerIcon: "person",
    chefIcon: "star",
    socialMediaIcon: "logo-twitter",
    customers: "3700+ happy eaters",
    chefs: "160+ top chefs",
    twitterHandle: "@foodel_gv",
  },
  Orlando: {
    cityName: "Orlando",
    img: orlando,
    customerIcon: "person",
    chefIcon: "star",
    socialMediaIcon: "logo-twitter",
    customers: "2300+ happy eaters",
    chefs: "110+ top chefs",
    twitterHandle: "@foodel_orlando",
  },
  Tampa: {
    cityName: "Tampa",
    img: tampa,
    customerIcon: "person",
    chefIcon: "star",
    socialMediaIcon: "logo-twitter",
    customers: "1200+ happy eaters",
    chefs: "50+ top chefs",
    twitterHandle: "@foodel_tampa",
  },
};

const cityDisplay = () => {
  let cityArray = [];
  for (let city in cities) {
    cityArray.push(
      <City
        key={cities[city].cityName}
        img={cities[city].img}
        alt={cities[city].cityName}
        city={cities[city].cityName}
        customerIcon={cities[city].customerIcon}
        customers={cities[city].customers}
        chefIcon={cities[city].chefIcon}
        chefs={cities[city].chefs}
        socialMediaIcon={cities[city].socialMediaIcon}
        twitterHandle={cities[city].twitterHandle}
      />
    );
  }
  return cityArray;
};

const Cities = (props) => {
  return (
    <ScrollableAnchor id={"cities"}>
      <Animated animationIn="fadeIn" isVisible={props.cityFade}>
        <section className="section-cities">
          <div className="row">
            <h2>We're currently in these cities</h2>
          </div>
          <div className="row">{cityDisplay()}</div>
        </section>
      </Animated>
    </ScrollableAnchor>
  );
};

export default Cities;
