import React from "react";

import HorizontalNav2 from "../components/horizontal-navs/HorizontalNav";
import HowItWorks4 from "../components/how-it-works/HowItWorks";

export default function Index() {
  return (
    <React.Fragment>
      <HorizontalNav2
        content={{
          brand: {
            text: "Local Technician",
            image: "/images/Dhanai_fruits-logo.png",
            width: "75",
          },
          link1: "Home",
          link2: "Services",
          link3: "Blog",
          link4: "Contact",
        }}
      />

      <HowItWorks4
        content={{
          "header-p1": "Your Local HVAC, Electrical & Home Services Company",
        }}
      />
    </React.Fragment>
  );
}
