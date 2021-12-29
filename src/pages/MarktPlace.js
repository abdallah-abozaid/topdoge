import React from "react";
import Items from "../components/marketplace/items/Items";
import FilterForm from "./../components/marketplace/filterForm/FilterForm";

const MarktPlace = () => {
  return (
    <div>
      <FilterForm />
      <Items />
    </div>
  );
};

export default MarktPlace;
