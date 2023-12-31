import React from "react";
import IndexPage from "./index";
import Navbar from "./../components/Navbar";
import AboutPage from "./about";
import ContactPage from "./contact";
import FaqPage from "./faq";
import PricingPage from "./pricing";
import LegalPage from "./legal";
import { Switch, Route, Router } from "./../util/router";
import NotFoundPage from "./404";
import Footer from "./../components/Footer";
import "./../util/analytics";
import { ThemeProvider } from "./../util/theme";

function App(props) {
  return (
    <ThemeProvider>
      <Router>
        <>

          <Navbar
            color="default"
            logo="https://storage.googleapis.com/bucket-finjell-logo/FinJell-logos_transparent.png"
            logoInverted="https://storage.cloud.google.com/bucket-finjell-logo/FinJell-logos_white.png"
          />
    
          <Switch>
            <Route exact path="/" component={IndexPage} />

            <Route exact path="/about" component={AboutPage} />

            <Route exact path="/faq" component={FaqPage} />

            <Route exact path="/contact" component={ContactPage} />

            //<Route exact path="/pricing" component={PricingPage} />

            <Route exact path="/legal/:section" component={LegalPage} />

            <Route component={NotFoundPage} />
          </Switch>

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
