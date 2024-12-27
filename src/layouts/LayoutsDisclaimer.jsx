import React from "react";
import FooterOne from "../components/Footer/FooterOne";
import HeaderOne from "../components/Header/HeaderOne";
import PageLoader from "../components/PageLoader/PageLoader";
import Disclaimer from "../components/Disclaimer/Disclaimer";
import BlogBreadcrumb from "../components/BlogBreadcrumb/BlogBreadcrumb";
import cn from "classnames";

const LayoutDisclaimer = (props) => {
  return (
    <div className={cn("")}>
      <PageLoader />

      <HeaderOne />

      <main>
        <BlogBreadcrumb title={props.pageTitle} item={props.item} />
      </main>

      <Disclaimer />

      <FooterOne />
    </div>
  );
};

export default LayoutDisclaimer;
