"use client";

import ProductColor from "@/app/components/Products/ProductColor";
import { Rating } from "@mui/material";
import React, { useCallback, useState } from "react";

interface ProductDetailsProps {
  product: any;
}

export type CartProductType = {
  id: string;
  name: string;
  description: string;
  category: string;
  brand: string;
  selectImg: SelectedImgType;
  quantity: number;
  price: number;
};

export type SelectedImgType = {
  color: string;
  colorCode: string;
  image: string;
};

const Horizontal = () => {
  return <hr className="w-[30%] my-2" />;
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const [cartProduct, setCartProduct] = useState<CartProductType>({
    id: product.id,
    name: product.name,
    description: product.description,
    category: product.category,
    brand: product.brand,
    price: product.price,
    selectImg: { ...product.images[0] },
    quantity: 1,
  });

  const productRatings = product.reviews.length
    ? product.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
      product.reviews.length
    : 0;

  const handleColorSelect = useCallback(
    (value: SelectedImgType) => {
      setCartProduct((prevValue) => ({ ...prevValue, selectImg: value }));
    },
    [cartProduct.selectImg]
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>Images</div>
      <div className="flex flex-col gap-1 text-sm">
        <h2 className="text-3xl font-medium">{product.name}</h2>
        <div className="flex items-center gap-2">
          <Rating value={productRatings} readOnly />
          <div>{product.reviews.length} reviews</div>
        </div>
        <Horizontal />
        <div className="text-justify">{product.description}</div>
        <Horizontal />
        <div className="mt-1">
          <span className="font-semibold">CATEGORY:</span> {product.category}
        </div>

        <div className="mt-3 mb-3">
          <span className="font-semibold">BRAND:</span> {product.brand}
        </div>
        <div className={product.inStock ? "text-green-600" : "text-red-600"}>
          {product.inStock ? "In Stock" : "Out of stock"}
        </div>
        <Horizontal />
        <div>
          <ProductColor
            cartProduct={cartProduct}
            images={product.images}
            handleColorSelect={handleColorSelect}
          />
        </div>
        <Horizontal />
        <div>quantity</div>
        <Horizontal />
        <div>add to cart</div>
      </div>
    </div>
  );
};

export default ProductDetails;
