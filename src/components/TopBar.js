import React, { Fragment, useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import { Popover, Transition } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import clsx from "https://cdn.skypack.dev/clsx@1.1.1";
import SearchBar from "./SearchBar";

import {
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
  ShoppingBagIcon,
  HeartIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import ProductsData from "../pages/ProductsData";

const filter = createFilterOptions();

const products = [
  {
    name: "Energy Drinks",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
    icon: ChartBarIcon,
  },
  {
    name: "Alcoholic Drinks",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Non-alcoholic Drinks",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    icon: ShieldCheckIcon,
  },
  {
    name: "Packs",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
    icon: Squares2X2Icon,
  },
];
const resources = [
  {
    name: "Help Center",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "#",
    icon: LifebuoyIcon,
  },
  {
    name: "Guides",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "#",
    icon: BookmarkSquareIcon,
  },
  {
    name: "Events",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "#",
    icon: CalendarIcon,
  },
  {
    name: "Security",
    description: "Understand how we take your privacy seriously.",
    href: "#",
    icon: ShieldCheckIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function TopBar() {
  const [value, setValue] = React.useState(null);

  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);

  const getTotalQuantity = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };

  // CHANGE BACKGROUND COLOR ON SCROLL
  const [background, setBackground] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setBackground(true);
    } else {
      setBackground(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <Popover
      className={
        background
          ? "bg-zinc-900 px-10 fixed top-0 w-full z-50 transtion-all duration-300 text-zinc-200"
          : "bg-transparent px-10 fixed top-0 w-full z-50 transtion-all duration-300 text-zinc-700"
      }
    >
      <div className="mx-auto w-full px-4 sm:px-6 bg">
        <div className="flex items-center justify-between py-6 md:space-x-10">
          <div className="flex justify-start xl:flex-1">
            <a href="/">
              {/* <span className="sr-only">Your Company</span> */}
              <img
                className="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
          </div>
          <div className="-my-2 -mr-2 lg:hidden">
            <Popover.Button
              className={
                background
                  ? "inline-flex items-center justify-center rounded-md bg-transparent p-2 text-gray-400 hover:text-gray-100 focus:outline-none transition-all duration-200"
                  : "inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none transition-all duration-200"
              }
            >
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-8 w-8" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 lg:flex">
            <Popover className="relative hover:text-gray-500 transition-all duration-200">
              {({ open }) => (
                <>
                  <Popover.Button className="group inline-flex items-center rounded-md text-base font-medium focus:outline-none focus:ring-0 focus:ring-offset-0">
                    <span>Products</span>
                    <ChevronDownIcon
                      className="ml-2 h-5 w-5"
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className={background
                                        ? "relative grid gap-6 bg-zinc-900 text-zinc-200 px-5 py-6 sm:gap-8 sm:p-8"
                                        : "relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"}>
                          {products.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-200/20"
                            >
                              {/* <item.icon
                                className="h-6 w-6 flex-shrink-0 text-indigo-600"
                                aria-hidden="true"
                              /> */}
                              <div className="ml-4">
                                <p className="text-base font-medium">
                                  {item.name}
                                </p>
                                {/* <p className="mt-1 text-sm text-gray-500">
                                  {item.description}
                                </p> */}
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <a href="#" className="text-base font-medium hover:text-gray-500 transition-all duration-200">
              Drinks
            </a>
            <a href="#" className="text-base font-medium hover:text-gray-500 transition-all duration-200">
              News
            </a>

            <a href="#" className="text-base font-medium hover:text-gray-500 transition-all duration-200">
              Events
            </a>
          </Popover.Group>
          <div className="hidden items-center justify-end lg:flex lg:flex-1 lg:w-0">
            <div className="flex items-center gap-4 ml-6">
              {/* SEARCH BAR */}
              <SearchBar />
              <div
                className="shopping-cart cursor-pointer"
                onClick={() => navigate("/cart")}
              >
                <ShoppingBagIcon
                  id="cartIcon"
                  className={
                    background
                      ? "w-8 h-8 text-zinc-400 hover:text-zinc-200 transition-all duration-200"
                      : "w-8 h-8 text-zinc-500 hover:text-zinc-700 transition-all duration-200"
                  }
                />
                <div
                  className={clsx(
                    getTotalQuantity() > "0"
                      ? "transition-all duration-200 block absolute rounded-full w-6 h-6 bg-sky-500 -mt-10 ml-6"
                      : "hidden transition-all duration-200"
                  )}
                >
                  <p className="-mt-0.5 ml-2 mx-auto text-zinc-200 font-semibold">
                    {getTotalQuantity() || 0}
                  </p>
                </div>
              </div>
              <p
                className={
                  background
                    ? "ml-4 text-zinc-400 hover:text-zinc-200 transition-all duration-200 cursor-pointer"
                    : "ml-4 text-zinc-700 hover:text-zinc-500 transition-all duration-200 cursor-pointer"
                }
              >
                Sign In{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition lg:hidden"
        >
          <div className={background
            ? "divide-y-2 divide-zinc-800 text-zinc-200 text-lg rounded-lg bg-zinc-900 shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-200"
            : "divide-y-2 divide-zinc-100 text-zinc-500 text-lg rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-200"}>
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  {/* <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                  /> */}
                </div>
                <div className="-mr-2 px-10">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-8 w-8" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6 px-10">
                <nav className="grid gap-y-8">
                  <Popover className="relative">
                    {({ open }) => (
                      <>
                        <Popover.Button className="group inline-flex items-center rounded-md hover:text-zinc-400/80 transition-all duration-200 focus:outline-none focus:ring-0 focus:ring-offset-0">
                          <span>Products</span>
                          <ChevronDownIcon
                            className="ml-2 h-5 w-5"
                            aria-hidden="true"
                          />
                        </Popover.Button>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                              <div className={background
                                ? "relative grid gap-6 bg-zinc-800 px-5 py-6 sm:gap-8 sm:p-8"
                                : "relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"
                                }>
                                {products.map((item) => (
                                  <a
                                    key={item.name}
                                    href={item.href}
                                    className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-200/20"
                                  >
                                    {/* <item.icon
                                className="h-6 w-6 flex-shrink-0 text-indigo-600"
                                aria-hidden="true"
                              /> */}
                                    <div className="ml-4">
                                      <p className="">
                                        {item.name}
                                      </p>
                                      {/* <p className="mt-1 text-sm text-gray-500">
                                  {item.description}
                                </p> */}
                                    </div>
                                  </a>
                                ))}
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>

                  <a href="#" className="hover:text-zinc-400/80 transition-all duration-200">
                    Drinks
                  </a>
                  <a href="#" className="hover:text-zinc-400/80 transition-all duration-200">
                    News
                  </a>

                  <a href="#" className="hover:text-zinc-400/80 transition-all duration-200">
                    Events
                  </a>
                </nav>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5 flex justify-center gap-4">
              <div
                className="shopping-cart cursor-pointer mx-auto mt-[4%]"
                onClick={() => navigate("/cart")}
              >
                <ShoppingBagIcon
                  id="cartIcon"
                  className={
                    background
                      ? "w-10 h-10 text-zinc-400 hover:text-zinc-200 transition-all duration-200"
                      : "w-10 h-10 text-zinc-500 hover:text-zinc-700 transition-all duration-200"
                  }
                />
                <div
                  className={clsx(
                    getTotalQuantity() > "0"
                      ? "transition-all duration-200 block absolute rounded-full w-6 h-6 bg-sky-500 -mt-12 ml-6"
                      : "hidden transition-all duration-200"
                  )}
                >
                  <p className="-mt-0.5 ml-2 mx-auto text-zinc-200 font-semibold">
                    {getTotalQuantity() || 0}
                  </p>
                </div>
              </div>

              <div className="mx-auto">
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-zinc-800 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-zinc-700 transition-all duration-200"
                >
                  Sign up
                </a>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?{" "}
                  <a href="#" className="text-sky-600 hover:text-sky-500">
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
