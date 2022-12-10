import React from "react";
import GridView from "./GridView";
import ListView from "./ListView";
import { useFilterContext } from "../context/filter_context";

function ProductList() {
  const { filtered_products: products } = useFilterContext();
  return <GridView products={products}>ProductList</GridView>;
}

export default ProductList;
