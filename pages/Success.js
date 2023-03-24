import React from "react";
import Header from "../components/Header";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";

export default function Success() {
  const router = useRouter();

  return (
    <div className="bg-gray-100 h-screen">
      <Header />
      <main className="max-w-screen-lg mx-auto">
        <div className="flex flex-col p-10">
          <div className="flex items-center space-x-2 mb-5">
            <CheckCircleIcon className="text-green-500 h-10" />
            <h1 className="text-3xl">
              Thank you, your order has been cofirmed!
            </h1>
          </div>

          <p>
            Thank you for shopping with us. We will send a confirmation on items
            when shipped, if you would like to check on the status of order(s)
            please press the link below.
          </p>

          <button
            onClick={() => router.push("/Orders")}
            className="font-bold mt-8 p-2 text-xs md:text-sm bg-gradient-to-b from-yellow-200 to-yellow-400 border-yellow-300 border rounded-sm focus:outline-none focus:ring-1 focus:ring-yellow-500 active:from-yellow-500"
          >
            Go to my orders
          </button>
        </div>
      </main>
    </div>
  );
}
