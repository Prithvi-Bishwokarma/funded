import React from "react";
import FooterOne from "../components/Footer/FooterOne";
import HeaderOne from "../components/Header/HeaderOne";
import PageLoader from "../components/PageLoader/PageLoader";
import TermsConditions from "../components/TermsConditions/TermsConditions";
import BlogBreadcrumb from "../components/BlogBreadcrumb/BlogBreadcrumb";
import cn from "classnames";

const LayoutTermsConditions = (props) => {
  return (
    <div className={cn("")}>
      <PageLoader />

      <HeaderOne />

      <main>
        <BlogBreadcrumb title={props.pageTitle} item={props.item} />
      </main>

      <TermsConditions />

      <FooterOne />
    </div>
  );
};

export default LayoutTermsConditions;
