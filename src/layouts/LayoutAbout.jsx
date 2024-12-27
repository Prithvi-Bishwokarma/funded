import React from "react";
import FooterOne from "../components/Footer/FooterOne";
import HeaderOne from "../components/Header/HeaderOne";
import PageLoader from "../components/PageLoader/PageLoader";
import BlogBreadcrumb from "../components/BlogBreadcrumb/BlogBreadcrumb";
import About from "../components/About/About";
import cn from "classnames";

const LayoutAbout = (props) => {
  return (
    <div className={cn("")}>
      <PageLoader />

      <HeaderOne />

      <main>
        <BlogBreadcrumb title={props.pageTitle} item={props.item} />
      </main>

      <About />

      <FooterOne />
    </div>
  );
};

export default LayoutAbout;
