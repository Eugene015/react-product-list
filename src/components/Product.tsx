import React, { useState } from "react";
import { IProduct } from "../models";

interface ProductProps {
  product: IProduct;
}

export function Product({ product }: ProductProps) {
  const [details, setDetails] = useState(false);

  const btnBgClassName = details ? "bg-gray-200" : "bg-white";
  const btnClasses = ["py-2 px-4 my-3 border", btnBgClassName];

  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2 relative">
      <p className="font-bold py-6">{product.category}</p>
      <img src={product.image} className="w-1/6 py-3" alt={product.title} />
      <p className="py-3">{product.title}</p>
      <p className="absolute right-4 top-1 w-[125px] text-center font-bold border bg-yellow-400 py-2 px-2 my-3">
        {product.price}
      </p>

      <button
        className={btnClasses.join(" ")}
        onClick={() => setDetails((prev) => !prev)}
      >
        {details ? "Hide Details" : "Show Details"}
      </button>

      {details && (
        <div className="my-5 mx-5">
          <p className="my-5">{product.description}</p>
          <p>
            Rate:{" "}
            <span style={{ fontWeight: "bold" }}>{product?.rating?.rate}</span>
          </p>
        </div>
      )}
    </div>
  );
}
