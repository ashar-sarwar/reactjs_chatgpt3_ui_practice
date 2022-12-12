import React from "react";
import { Images } from "../../theme";
import "./brand.css";
function Brand(params) {
  return (
    <div className="gpt3__brand section__padding">
      <div>
        {" "}
        <img src={Images.Google} />{" "}
      </div>
      <div>
        <img src={Images.Atlassian} />{" "}
      </div>
      <div>
        {" "}
        <img src={Images.Shopify} />{" "}
      </div>
      <div>
        <img src={Images.Dropbox} />{" "}
      </div>
      <div>
        <img src={Images.Slack} />{" "}
      </div>
    </div>
  );
}

export default Brand;
