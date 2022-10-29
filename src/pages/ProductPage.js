import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductsData from "./ProductsData";
import { AnimateSharedLayout, AnimatePresence, motion } from "framer-motion";
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from "../redux/cartSlice";

import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";

import { HeartIcon } from "@heroicons/react/24/outline";

export default function ProductPage() {
  const { productId } = useParams();
  const thisProduct = ProductsData.find((prod) => prod.id === productId);

  const dispatch = useDispatch();

  const id = thisProduct.id;
  const name = thisProduct.name;
  const price = thisProduct.price;
  const image = thisProduct.imageSrc;

  const cart = useSelector((state) => state.cart);

  

  return (
    <motion.div
      className="w-full mt-[200px] mb-20 relative h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.15 } }}
      transition={{ duration: 0.2, delay: 0.15 }}
      style={{ pointerEvents: "auto" }}
    >
      <div className="flex gap-8 w-4/5 mt-6 justify-center mx-auto">
        <div className="w-1/3">
          <AnimatePresence>
            <motion.img
              layoutId="product"
              src={thisProduct.imageSrc}
              alt={thisProduct.imageAlt}
              className="h-auto w-96 object-cover object-center mx-auto"
            />
          </AnimatePresence>
        </div>
        <div className="w-1/3">
          <h1 className="text-3xl">{thisProduct.name}</h1>
          <h2 className="text-xl">${thisProduct.price}</h2>
          <div>
          
            {/* <div className='cartItem__incrDec'>
          <button onClick={() => dispatch(decrementQuantity(id))}>-</button>



          <p> <EachItem /> </p>

          








          <button onClick={() => dispatch(addToCart({
                    id,
                    name,
                    image,
                    price,
                  }), incrementQuantity(id))}>+</button>
        </div> */}
          </div>
          <div className="flex flex-col gap-2 justify-center mt-4">
            <button
              className="bg-zinc-900 hover:bg-zinc-600 text-zinc-200 transition duration-200 rounded-full py-2 px-4"
              onClick={() =>
                dispatch(
                  addToCart({
                    id,
                    name,
                    image,
                    price,
                  })
                )
              }
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}


