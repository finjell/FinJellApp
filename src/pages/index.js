import React from "react";
import Meta from "./../components/Meta";
import HeroSection from "./../components/HeroSection";
import FeaturesSection from "./../components/FeaturesSection";
import FaqSection from "./../components/FaqSection";

function IndexPage(props) {
  return (
    <>
      <Meta />
          <HeroSection
            bgColor="default"
            size="medium"
            bgImage=""
            bgImageOpacity={1}
            title="Enabling financial freedom for all"
            subtitle="Our mission is to enable everyone to reach and manage financial independence in order to live more fulfilling lives"
            image="https://uploads.divjoy.com/undraw-japan_ubgk.svg"
            buttonText="Get Started"
            buttonColor="primary"
            buttonPath="/pricing"
          />
          <FeaturesSection
            bgColor="default"
            size="medium"
            bgImage=""
            bgImageOpacity={1}
            title="Features"
            subtitle="Our product is a work in development but we plan to build the following "
          />
          <FaqSection
            bgColor="default"
            size="medium"
            bgImage=""
            bgImageOpacity={1}
            title="Frequently Asked Questions"
            subtitle=""
          />
    </>
  );
}

export default IndexPage;
