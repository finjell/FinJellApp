import React from "react";
import IndexPage from "./index";
import { Switch, Route, Router } from "./../util/router";
import NotFoundPage from "./404";
import HeroSection from "./../components/HeroSection";
import FeaturesSection from "./../components/FeaturesSection";
import FaqSection from "./../components/FaqSection";
import Footer from "./../components/Footer";
import "./../util/analytics";
import { ThemeProvider } from "./../util/theme";

function App(props) {
  return (
    <ThemeProvider>
      <Router>
        <>
          <Switch>
            <Route exact path="/" component={IndexPage} />

            <Route component={NotFoundPage} />
          </Switch>

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
          <Footer
            bgColor="default"
            size="medium"
            bgImage=""
            bgImageOpacity={1}
            copyright={`© ${new Date().getFullYear()} FinJell`}
            logo="https://storage.googleapis.com/bucket-finjell-logo/FinJell-logos_transparent.png"
            logoInverted="https://storage.googleapis.com/bucket-finjell-logo/FinJell-logos_white.png"
            sticky={true}
          />
        </>
      </Router>
    </ThemeProvider>
  );
}

export default App;
