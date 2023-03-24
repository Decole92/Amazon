import React from "react";

import { getProductData } from "./ProductArray";
import Image from "next/image";
import { StarIcon, PlusIcon, MinusIcon } from "@heroicons/react/24/solid";

import useCart from "../CartContext";

function CheckoutProducts({ id, quantity }) {
  const { addOneToCart, removeOneFromCart, deleteFromCart } = useCart();

  const productData = getProductData(id);

  return (
    <div className="grid grid-cols-5">
      <Image
        alt=""
        src={productData.image}
        height={200}
        width={200}
        objectFit="contain"
      />

      <div className="col-span-3 mx-8">
        <p>{productData.title}</p>

        <p className="text-xs my-2  line-clamp-3">{productData.description}</p>

        <p className="font-bold">{quantity * productData.price * 25} Kč</p>
      </div>
      <div className="flex flex-col space-col space-y-2 my-auto jusitfy-self-end">
        <div className="font-bold mt-auto  text-xs md:text-sm border rounded-sm h-10 mb-2 flex items-center gap-5 ">
          <button
            onClick={() => addOneToCart(id)}
            className="px-auto bg-gradient-to-b from-gray-200 to-gray-400 border-gray-300 h-10 w-full  text-center"
          >
            <h1 className="px-auto h-5 text-green-500">
              <PlusIcon className="mx-auto h-5" />
            </h1>
          </button>
          <h1 className="h-5 text-sm">{quantity}</h1>
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
      </div>
    </div>
  );
}

export default CheckoutProducts;
