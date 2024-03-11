import Container from "@/app/components/Container";
import product from "@/utils/product";
import ProductDetails from "./ProductDetails";
import React from "react";

interface Iparams {
  productId?: string;
}

const Product = ({ params }: { params: Iparams }) => {
  console.log("Params", params);
  product;
  return (
    <div className="p-8">
      <Container>
        <ProductDetails product = {product}/>
      </Container>
    </div>
  );
};

export default Product;
