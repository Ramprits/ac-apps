import React from "react";
import Features from "../components/features/Features3";
import Footer from "../components/footers/Footer";

import HorizontalNav from "../components/horizontal-navs/HorizontalNav";

export default function Service() {
  return (
    <React.Fragment>
      <HorizontalNav
        content={{
          brand: {
            text: "Local Technician",
            image: "/images/logo.png",
            width: "75",
          },
          link1: "Home",
          link2: "Services",
          link3: "Blog",
          link4: "Contact",
        }}
      />

      <Features
        content={{
          "header-p1": "Your Local HVAC,",
          "header-p2": "Electrical & Home Services Company",
          description:
            "We can assist you with any make or model of heating and cooling systems that you may have. With the level of experience and the new and improved methods of performing our duties, you\u2019re sure to receive the quality of service that you deserve. We have worked with major brands and reputable manufacturers. If you\u2019re thinking of having an energy-efficient HVAC system installed then you have come to the right place to receive it, Mount Vernon HVAC Pos. We can assist with every aspect of your heating and cooling system. Contact us for your service needs.",
          "primary-action": "More",
          "col1-header": "Air Conditioning Repair",
          "col1-desc":
            "If you do not want to be uncomfortable in your own home then you must act now by contacting us to make any needed repairs. The chance of the problem getting worse is likely if you don\u2019t do something to address your air conditioning problem now. We have the tools needed to effectively assist with your service needs. Regardless of the extent of your service needs, you can always depend on us to provide you with the repairs that you need.",
          "col2-header": "Furnace Repair",
          "col2-desc":
            "There are a variety of reasons why your furnace may require repairs. One of the biggest problems is that the furnace is working too hard to keep up with the demand. We complete inspection of your furnace to determine what is giving you cause for concern. Chances are that there is no need for you to replace your furnace, as it may simply need some repairs. However, if it is more economical to replace your furnace, we\u2019re happy to do this for you too. Call on us for you Mount Vernon furnace repair needs.",
          "col3-header": "Boiler Replacement",
          "col3-desc":
            "Most people don\u2019t know when they may need to replace his or her boiler. We\u2019ll perform a visual evaluation of your boiler to determine if you need a new boiler or not. If there is deteriorating metal then this is a good reason to replace your boiler. This is one of the problems that is common and is why many rely on us to replace their boiler.",
          "col4-header": "HVAC Installation",
          "col4-desc":
            "If you are looking for a  r HVAC company to help with the installation of your system, give us a call us . We have expert technicians who have installed hundreds of heating and cooling systems and they can also install yours. They will always take the time to ensure that the work is done right. Call for an estimate today.",
        }}
      />
      <Footer
        content={{
          "header-p1": "Your Local HVAC,",
          "header-p2": "Electrical &; Home Services Company",
          description: "Quality Solutions for Heating and Cooling",
          "col3-header": "Air Conditioning Repair",
          "col3-desc":
            "If you do not want to be uncomfortable in your own home then you must act now by contacting us to make any needed repairs. The chance of the problem getting worse is likely if you don\u2019t do something to address your air conditioning problem now. ",
        }}
      />
    </React.Fragment>
  );
}
