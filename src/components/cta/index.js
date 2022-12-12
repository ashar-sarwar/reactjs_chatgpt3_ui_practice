import React from "react";
import "./cta.css";

function CTA(params) {
  return (
    <div className={"gpt3__cta section__margin"}>
      <div className="gpt3__cta-content">
        <div className="gpt3__cta-content-text">
          <p>Register Early Access To Get Started</p>
          <h1>Register Today & Start Endless Possibilities</h1>
        </div>
        <div className="gpt3__cta-button">
          <button type="button">Get Started</button>
        </div>
      </div>
    </div>
  );
}
export default CTA;
