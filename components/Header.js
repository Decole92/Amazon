import Image from "next/image";
import React from "react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ChevronDownIcon,
  ShoppingCartIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import useCart from "../CartContext";

function Header() {
  const { data: session } = useSession();

  const router = useRouter();

  const { items } = useCart();

  const CartCount = items.reduce((sum, product) => sum + product.quantity, 0);

  return (
    <header className="sticky top-0 z-50">
      <div className="flex items-center flex-grow p-1 text-xs bg-amazon_blue">
        <div className="flex-grow pt-3 items-center sm:flex-grow-0">
          <Image
            onClick={() => router.push("/")}
            src="https://links.papareact.com/f90"
            width="150"
            height="40"
            objectFit="contain"
            alt=""
            className="cursor-pointer"
          />
        </div>
        {/* map location */}
        <div className="hidden sm:block cursor-pointer p-1 hover:rounded-sm hover:border mx-2 hover:border-gray-200">
          <p className="text-gray-400 text-[14px] pl-5">Deliver to</p>
          <h4 className="flex text-white justify-center items-center">
            <MapPinIcon height="20" color="white" />
            <p className="font-extrabold">Czech Republic</p>
          </h4>
        </div>

        {/*Search */}
        <div className="hidden sm:flex  items-center flex-grow h-10 rounded-md bg-yellow-400 hover:bg-yellow-500">
          <h2 className="bg-gray-200 hover:bg-gray-300 cursor-pointer text-[12px] h-full text-gray-600 font-semibold flex rounded-l-md justify-center items-center space-x-1 p-2 border-r border-gray-400">
            <p>All</p>
            <ChevronDownIcon className="h-3" />
          </h2>

          <input
            type="text"
            className="focus:outline-none  text-sm font-semibold h-full p-2 w-6 flex-grow flex-shrink"
          />
          <MagnifyingGlassIcon className=" cursor-pointer h-12 p-4 text-bold" />
        </div>

        {/* Right */}
        <div className="flex space-x-6 items-center justify-center text-xs mx-5 text-white hover:bg-transparent">
          <div className=" space-x-3 flex cursor-pointer p-1 md:text-sm hover:border rounded-sm whitespace-nowrap ">
            <Image
              alt=""
              src={require("../public/US.png")}
              height="20"
              width="20"
            />

            <span className="flex ">
              <p className="font-bold">EN</p>
              <ChevronDownIcon className="justify-end h-4" />
            </span>
          </div>

          <div
            onClick={() => (!session ? signIn() : signOut())}
            className="cursor-pointer md:text-sm hover:border p-1 rounded-sm hover:bg-transparent "
          >
            <p>{session ? `Hello, ${session.user.name}` : "Hello, Sign In"}</p>
            <h3 className="flex justify-center items-center">
              <p className="font-bold">Account & Lists </p>
              <ChevronDownIcon className="h-4" />
            </h3>
          </div>

          <div
            onClick={() => router.push("/Orders")}
            className="cursor-pointer md:text-sm hover:border p-1 rounded-sm hover:bg-transparent "
          >
            <p>Returns</p>
            <p className="font-bold">& Orders</p>
          </div>

          <div
            onClick={() => router.push("/Checkout")}
            className="cursor-pointer flex  items-end space-x-1 md:text-sm hover:border p-1 rounded-sm hover:bg-transparent "
          >
            <h2 className="relative">
              <span className="font-bold text-yellow-600 my-1.5 absolute left-4">
                <p className="text-center"> {CartCount} </p>
              </span>
              <ShoppingCartIcon className="h-10" />
            </h2>

            <p className="hidden md:inline font-bold">Cart</p>
          </div>
        </div>
      </div>

      {/* bottom nav */}
      <div className=" h-10 flex  font-semibold pl-4 space-x-5 bg-amazon_blue-light text-sm text-white items-center p-2">
        <p className=" flex items-center hover:bg-transparent w-12 hover:w-12 hover:border rounded-sm border-solid  p-0">
          <Bars3Icon className="h-7 mr-1" />
          All
        </p>
        <p className=" items-center hover:bg-transparent hover:border rounded-sm p-1">
          Today&lsquo;s Deals
        </p>
        <p className=" items-center hover:bg-transparent hover:border rounded-sm p-1">
          Buy Again
        </p>
        <p className=" items-center hover:bg-transparent hover:border rounded-sm p-1">
          Customer Service
        </p>
        <p className=" items-center hover:bg-transparent hover:border rounded-sm p-1">
          Gift Cards
        </p>
        <p className=" items-center hover:bg-transparent hover:border rounded-sm p-1">
          Registry
        </p>
        <p className=" items-center hover:bg-transparent hover:border rounded-sm p-1">
          Sell
        </p>
      </div>
    </header>
  );
}

export default Header;
