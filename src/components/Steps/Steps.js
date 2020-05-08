import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import { Animated } from "react-animated-css";

import "./Steps.css";
import phoneImg from "../../assets/img/app-iPhone-min.png";
import appStore from "../../assets/img/download-app.svg";
import playStore from "../../assets/img/download-app-android-min.png";

const Steps = (props) => {
  return (
    <ScrollableAnchor id={"steps"}>
      <section className="section-steps">
        <div className="row">
          <h2>How it works &mdash; Easy as 1, 2, 3</h2>
        </div>
        <div className="row">
          <div className="col span-1-of-2 steps-box">
            <Animated animationIn="fadeInUp" isVisible={props.phoneFade}>
              <img
                src={phoneImg}
                alt="Omnifood app on iPhone"
                className="app-screen"
              />
            </Animated>
          </div>
          <div className="col span-1-of-2 steps-box">
            <div className="works-step clearfix">
              <div>1</div>
              <p>
                Download the app and sign up for the subscription plan that
                suites your needs.
              </p>
            </div>
            <div className="works-step clearfix">
              <div>2</div>
              <p>
                Choose your meals along with the delivery times and dates you
                prefer.
              </p>
            </div>
            <div className="works-step clearfix">
              <div>3</div>
              <p>
                Enjoy fresh and healthy meals delivered straight to your door.
              </p>
            </div>
            <a href="#" className="btn-app">
              <img src={appStore} alt="App Store Button" />
            </a>
            <a href="#" className="btn-app">
              <img src={playStore} alt="Play Store Button" />
            </a>
          </div>
        </div>
      </section>
    </ScrollableAnchor>
  );
};

export default Steps;
