import React from "react";
import Banner from "../../components/Banner/Banner";
import LayoutDisclaimer from "../../layouts/LayoutsDisclaimer";

const Disclaimer = () => {
  return (
    <LayoutDisclaimer pageTitle={"Disclaimer Detail"} item={"Disclaimer"}>
        <Banner />
        <Disclaimer />
    </LayoutDisclaimer>
  );
};

export default Disclaimer;
