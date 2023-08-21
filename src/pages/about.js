import React from "react";
import Meta from "./../components/Meta";
import HeroSection2 from "./../components/HeroSection2";
import TeamBiosSection from "./../components/TeamBiosSection";

function AboutPage(props) {
  return (
    <>
      <Meta title="About" description="Learn about our company and team" />
      <HeroSection2
        bgColor="primary"
        size="large"
        bgImage="https://images.unsplash.com/photo-1462206092226-f46025ffe607?auto=format&fit=crop&w=1600&h=800&q=80"
        bgImageOpacity={0.2}
        title="Enabling financial freedom for all"
        subtitle="We are folks in tech who started FinJell to help make sense of money on our path to financial independence (FI). We think people reach FI via many different, varied paths which is amazing. But unfortunately, we think most of the time it is achieved without enough planning or intention. We also believe many people sadly don't reach a stable FI state and we want to change this"
      />
      <TeamBiosSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Meet the Team"
        subtitle=""
      />
    </>
  );
}

export default AboutPage;
