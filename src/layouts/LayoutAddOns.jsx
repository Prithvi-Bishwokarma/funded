import React from "react";
import FooterOne from "../components/Footer/FooterOne";
import HeaderOne from "../components/Header/HeaderOne";
import PageLoader from "../components/PageLoader/PageLoader";
import AddOns from "../components/AddOns/AddOns";
import cn from "classnames";

const LayoutAddOns = (props) => {
  return (
    <div className={cn("")}>
      <PageLoader />

      <HeaderOne />

      <AddOns />

      <FooterOne />
    </div>
  );
};

export default LayoutAddOns;
