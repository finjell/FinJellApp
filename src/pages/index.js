import React from "react";
import Meta from "./../components/Meta";
import Navbar from "./../components/Navbar";

function IndexPage(props) {
  return (
    <>
      <Meta />
      <Navbar
        color="default"
        logo="https://uploads.divjoy.com/logo.svg"
        logoInverted="https://uploads.divjoy.com/logo-white.svg"
      />
    </>
  );
}

export default IndexPage;
