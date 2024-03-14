import Container from "@/app/components/Container";
import product from "@/utils/product";
import ProductDetails from "./ProductDetails";
import React from "react";
import ListRatings from "./ListRatings";

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
        <div className="flex flex-col mt-20 gap-4">
          <div>Add rating</div>
          <div><ListRatings product={product}/></div>
        </div>
      </Container>
    </div>
  );
};

export default Product;
