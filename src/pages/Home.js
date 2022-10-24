import React from "react";
import { Link } from "react-router-dom";
import ProductsData from "./ProductsData";
import Scene from "../components/scene";
import { AnimateSharedLayout, AnimatePresence, motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <main>
        <div id="banner-home" className="w-full h-screen">
          <Scene />
        </div>
        {/* <div className="relative mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          {/* Replace with your content 
          <div className="px-4 py-6 sm:px-0">*/}
            {/* <div className="h-96 rounded-lg border-4 border-dashed border-gray-200" /> 
          </div>*/}
          {/* /End replace 
        </div>*/}

        <div className="bg-white object-cover">
          <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            
            {/* Products */}
            {/* <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Customers also purchased
            </h2> */}

            {/* <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"> */}

            <div className="mt-6 mb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {ProductsData.map((product) => (
                <Link to={"/ProductPage/" + product.id} key={product.id}>
                  <div
                    key={product.id}
                    className="group relative p-8 hover:bg-zinc-300"
                  >
                    <h1 className="font-semibold text-2xl">{product.brand}</h1>
                    <h2 className=" font-semibold text-xl text-zinc-400">
                      {product.collection}
                    </h2>
                    <div className="min-h-80 mt-4 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                      <AnimatePresence>
                        <motion.img
                          layoutId="product"
                          animate={{ scale: 1 }}
                          whileHover={{ scale: 1.1 }}
                          src={product.imageSrc}
                          alt={product.imageAlt}
                          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        />
                      </AnimatePresence>
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-sm text-gray-700">
                          {product.name}
                        </h3>
                      </div>
                      <p className="text-sm font-medium text-gray-900">
                        $ {product.price}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            {/* Categories */}
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Popular categories
            </h2>

            <div className="mt-6 mb-6 flex flex-col-2 justify-center">
              <div className="w-1/2"><img src="../../assets/images/bottle_002.jpg" /></div>

              {/* RIGHT COLUMN */}
              <div className="w-1/2">
                
                  <img src="../../assets/images/jersey-category.jpg" className="w-full h-1/2" />
              
                <img src="../../assets/images/bottle_001.jpg" className="w-full h-1/2" />
              </div>
            </div>

            
          </div>
        </div>
      </main>
    </>
  );
}
