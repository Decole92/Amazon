import React, { useState } from "react";
import Header from "../components/Header";
import useCart from "../CartContext";
import Image from "next/image";
import { getProductData } from "../components/ProductArray";
import CheckoutProducts from "../components/CheckoutProducts";
import { useSession } from "next-auth/react";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.stripe_public_key);

function Checkout() {
  const { items, getTotalCost } = useCart();
  const { data: session } = useSession();

  const createCheckoutSession = async () => {
    const productData = items.map(({ id, quantity }) => {
      return getProductData(id);
    });

    let a1 = productData;
    let a2 = items;
    let arr3 = a1.map((item, i) => Object.assign({}, item, a2[i]));

    //let dataArray = [{'id':1,'code':'ABC'},{'id':1,'code':'ABC'},{'id':2,'code':'ABC'}]
    const stripe = await stripePromise;

    // call the backend to create a checkout session
    const checkoutSession = await axios.post("/api/create-checkout-session", {
      arr3: arr3,
      email: session.user.email,
    });
    /// Redirect user/customer to Stripe web
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });

    if (result.error) alert(result.error.message);
  };

  return (
    <div className="bg-gray-50">
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://links.papareact.com/ikj"
            height="250"
            width="1020"
            //objectFit="contain"
            alt=""
          />
          <div className="flex flex-col mx-4 p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">
              {items?.length === 0
                ? "Your Shopping Cart is empty."
                : "Shopping Cart"}
            </h1>

            {items?.map((product, index) => (
              <CheckoutProducts
                key={index}
                id={product.id}
                quantity={product.quantity}
              />
            ))}
          </div>
        </div>

        <div
          className={`flex flex-col p-10 ${items?.length > 0 && "shadow-md"}`}
        >
          {items?.length > 0 && (
            <div className="flex flex-col">
              <h2 className="whitespace-nowrap">
                Subtotal ({items.length} items):{" "}
                <span className="font-bold">
                  {" "}
                  {getTotalCost().toFixed(2) * 25} Kč
                </span>
              </h2>
              <button
                onClick={createCheckoutSession}
                disabled={!session}
                className={`mt-auto font-semibold p-2 text-xs md:text-sm bg-gradient-to-b from-yellow-200 to-yellow-400 border-yellow-300 border rounded-sm focus:outline-none focus:ring-1 focus:ring-yellow-500 active:from-yellow-500 ${
                  !session &&
                  "from-gray-300 to-gray-500 broder-gray-200 text-gray-300 cursor-not-allowed"
                }`}
              >
                {!session ? "Sign in to Checkout" : "Proceed to Checkout"}
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default Checkout;
