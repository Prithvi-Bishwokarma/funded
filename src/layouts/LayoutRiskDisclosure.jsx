import React from "react";
import FooterOne from "../components/Footer/FooterOne";
import HeaderOne from "../components/Header/HeaderOne";
import PageLoader from "../components/PageLoader/PageLoader";
import BlogBreadcrumb from "../components/BlogBreadcrumb/BlogBreadcrumb";
import RiskDisclosure from "../components/RiskDisclosure/RiskDisclosure";
import cn from "classnames";

const LayoutRiskDisclosure = (props) => {
  return (
    <div className={cn("")}>
      <PageLoader />

      <HeaderOne />

      <main>
        <BlogBreadcrumb title={props.pageTitle} item={props.item} />
      </main>

      <RiskDisclosure />

      <FooterOne />
    </div>
  );
};

export default LayoutRiskDisclosure;
