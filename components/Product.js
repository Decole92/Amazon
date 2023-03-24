import Image from "next/image";
import React, { useState, useContext } from "react";
import { StarIcon, PlusIcon, MinusIcon } from "@heroicons/react/24/solid";

import useCart from "../CartContext";

function Product({ id, title, price, description, category, image }) {
  const {
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    items,
  } = useCart();

  const ProductQuantity = getProductQuantity(id);

  return (
    <div className="flex flex-col relative bg-white z-30 m-5 p-10">
      <p className=" absolute top-2 right-2 text-sm italic text-gray-400">
        {category}
      </p>
      <Image
        alt=""
        src={image}
        height="200"
        width="200"
        layout="fill"
        style={{ objectFit: "cover" }}
      />

      <h4 className="my-3">{title}</h4>

      <p className="text-xs my-2 line-clamp-2">{description} </p>
      <div className="mb-5 font-bold">{price * 25}Kč</div>

      <div className="mt-auto flex flex-col">
        {ProductQuantity > 0 ? (
          <>
            <div className="font-bold mt-auto  text-xs md:text-sm border rounded-sm h-10 mb-2 flex items-center gap-5 ">
              <button
                onClick={() => addOneToCart(id)}
                className="px-auto bg-gradient-to-b from-gray-200 to-gray-400 border-gray-300 h-10 w-full  text-center"
              >
                <h1 className="px-auto h-5 text-green-500">
                  <PlusIcon className="mx-auto h-5" />
                </h1>
              </button>
              <h1 className="h-5 text-sm">{ProductQuantity}</h1>
              <button
                className="px-auto bg-gradient-to-b from-gray-200 to-gray-400 border-gray-300 h-10 w-full items-center"
                onClick={() => removeOneFromCart(id)}
              >
                <h1 className="px-auto font-extrabold text-2xl text-red-500 h-5">
                  <MinusIcon className="mx-auto h-5" />
                </h1>
              </button>
            </div>

            <button
              onClick={() => deleteFromCart(id)}
              className="mt-auto p-2 text-xs md:text-sm bg-gradient-to-b from-red-200 to-red-400 border-red-300 border rounded-sm focus:outline-none focus:ring-1 focus:ring-red-500 active:from-red-500"
            >
              Remove From Cart
            </button>
          </>
        ) : (
          <button
            onClick={() => addOneToCart(id)}
            className="mt-auto p-2 text-xs md:text-sm bg-gradient-to-b from-yellow-200 to-yellow-400 border-yellow-300 border rounded-sm focus:outline-none focus:ring-1 focus:ring-yellow-500 active:from-yellow-500"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default Product;
