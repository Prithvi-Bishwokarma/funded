import React from "react";
import Banner from "../../components/Banner/Banner";
import LayoutAddOns from "../../layouts/LayoutAddOns";

const AddOns = () => {
  return (
    <LayoutAddOns pageTitle={"AddOns Detail"} item={"AddOns"}>
        <Banner />
        <AddOns />
    </LayoutAddOns>
  );
};

export default AddOns;
