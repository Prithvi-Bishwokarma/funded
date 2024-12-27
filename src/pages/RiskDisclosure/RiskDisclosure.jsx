import React from "react";
import Banner from "../../components/Banner/Banner";
import LayoutRiskDisclosure from "../../layouts/LayoutRiskDisclosure";

const RiskDisclosure = () => {
  return (
    <LayoutRiskDisclosure pageTitle={"RiskDisclosure Detail"} item={"RiskDisclosure"}>
        <Banner />
        <RiskDisclosure />
    </LayoutRiskDisclosure>
  );
};

export default RiskDisclosure;
