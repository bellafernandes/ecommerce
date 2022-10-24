import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductsData from "../pages/ProductsData";

export default function SearchBar() {
  // valor da search bar
  const [name, setName] = useState("");

  // resultado da busca
  const [foundProducts, setFoundProducts] = useState();

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = ProductsData.filter((product) => {
        return product.name.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundProducts(results);
    } else {
      setFoundProducts();
      // if the search bar is empty, products will not be shown
    }

    setName(keyword);
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
    <>
      <div className="pr-4 sm:pr-0 sm:w-56 ml-2 relative flex justify-end">
        {/* <Icon
                path="res-react-dash-search"
                className="w-5 h-5 search-icon left-3 absolute"
              /> */}
        <div class="relative ">
          <input
            type="search"
            value={ProductsData.name}
            onChange={filter}
            id="floating_outlined"
            className={background 
                ? "block px-2.5 pb-2.5 pt-2 text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-600 appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                : "block px-2.5 pb-2.5 pt-2 text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            }
            placeholder=" "
          />
          <label
            for="floating_outlined"
            className={background 
                ? "cursor-text absolute bg-zinc-900 text-md text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                : "cursor-text absolute bg-white text-md text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"}
          >
            Search product
          </label>
        </div>
        {/* <form action="#" method="POST">
          <input
            type="search"
            value={ProductsData.name}
            onChange={filter}
            id="search"
            className="pl-2 py-2 pr-2 block w-full rounded-lg border-gray-300 bg-card shadow-lg active:border-gray-300"
            placeholder="search name"
          />
        </form> */}
      </div>

      <div
        className={
          background
            ? "absolute mt-[580px] ml-12 shadow-lg z-50 bg-zinc-900 transtion-all duration-300"
            : "absolute mt-[580px] ml-12 shadow-lg z-50 bg-white transtion-all duration-300"
        }
      >
        {/* product array with filter */}

        {foundProducts && foundProducts.length > 0 ? (
          foundProducts.map((ProductsData) => (
            <Link to={"/ProductPage/" + ProductsData.id} key={ProductsData.id}>
              <div
                key={ProductsData.id}
                className="rounded-lg mb-4 mx-2 p-4 user hover:bg-zinc-300/50 transition-all duration-200"
              >
                <div className="flex gap-2 items-center">
                  <img
                    className="w-20 h-20 rounded"
                    src={ProductsData.imageSrc}
                    alt="Default avatar"
                  />

                  <h1 className="text-lg font-medium mt-1">
                    {ProductsData.name}
                  </h1>
                </div>
              </div>
            </Link>
          ))
        ) : (
          //   <div className="w-[100%] md:w-[200%] lg:w-[302%] bg-red-500 py-4 rounded-lg">
          //     <div className="mx-auto">
          //       <h1 className="flex justify-center">No results found</h1>
          //     </div>
          //   </div>
          <div />
        )}
      </div>
    </>
  );
}
