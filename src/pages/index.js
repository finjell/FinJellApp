import React from "react";
import Meta from "./../components/Meta";
import Navbar from "./../components/Navbar";

function IndexPage(props) {
  return (
    <>
      <Meta />
      <Navbar
        color="default"
        logo="https://storage.googleapis.com/bucket-finjell-logo/FinJell-logos_transparent.png"
        logoInverted="https://storage.cloud.google.com/bucket-finjell-logo/FinJell-logos_white.png"
      />
    </>
  );
}

export default IndexPage;
