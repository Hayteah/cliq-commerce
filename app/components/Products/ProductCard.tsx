"use client";

import Truncate from "@/utils/Truncate";
import formatPrice from "@/utils/formatPrice";
import { Rating } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  data: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const productRatings =
    data.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
    data.reviews.length;

  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/product/${data.id}`)}
      className="col-span-1 cursor-pointer pointer-1 border-slate-200 bg-slate-50 rounded-xl p-2 tansition hover:scale text-center text-sm"
    >
      <div className="flex flex-col w-full items-center gap-1">
        <div className="aspect-square overflow-hidden relative w-full">
          <Image
            src={data.images[0].image}
            fill
            alt={data.name}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="mt-4">{Truncate(data.name)}</div>
        <div>
          <Rating value={productRatings} readOnly />
        </div>
        <div>{data.reviews.length} reviews </div>
        <div className="font-semibold">{formatPrice(data.price)}</div>
      </div>
    </div>
  );
};

export default ProductCard;
