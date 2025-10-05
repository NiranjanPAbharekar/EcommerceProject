import React, { useState } from "react";
import productList from "./ProductList";
import { GoHeartFill } from "react-icons/go";

const Product = ({ searchTearm ,AddtoCart, AddToWishlist, wishlist,setWishlist}) => {
  const categories = ["All", "Mens", "Womens", "Kids", "New Arrivals", "On Sale"];
  const [activeTab, setActiveTab] = useState("All");
  const toggleWishlist = (product) => {
  const exists = wishlist.find((item) => item.id === product.id);
  if (exists) {
    // remove
    setWishlist((prev) => prev.filter((item) => item.id !== product.id));
  } else {
    // add
    setWishlist((prev) => [...prev, product]);
  }
};


  // Filtering logic
  const filteredProducts = productList.filter((product) => {

    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTearm.toLowerCase());

    if (!matchesSearch) return false;

    if (activeTab === "All") return true;
    if (activeTab === "New Arrivals") return product.newArrival;
    if (activeTab === "On Sale") return product.onSale;

    return product.category === activeTab;
  });

  return (
    <section
      id="Product-Section"
      className="max-w-[1300px] w-full px-4 sm:px-6 md:px-12 py-4 mx-auto"
    >
      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`px-3 sm:px-6 py-2 cursor-pointer rounded-full text-sm sm:text-base font-medium border shadow-sm transition-all duration-300 ease-in-out
              ${
                activeTab === category
                  ? "bg-blue-800 text-white border-blue-800 shadow-md"
                  : "bg-white text-zinc-800 border-zinc-300 hover:bg-zinc-800 hover:text-white hover:shadow-md"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

  
      <div>
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="border p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
              >
                
                <div className="flex justify-between items-center mb-2">
                  <button
  onClick={() => toggleWishlist(product)}
  className={`text-3xl transition-colors ${
    wishlist.some((item) => item.id === product.id)
      ? "text-red-500"   // filled red
      : "text-zinc-300 hover:text-red-400" // grey with hover
  }`}
>
                    <GoHeartFill />
                  </button>
                  {product.onSale ? (
                    <span className="bg-red-600 px-3 py-1 text-white text-xs rounded">
                      Sale
                    </span>
                  ) : product.newArrival ? (
                    <span className="bg-yellow-400 px-3 py-1 text-white text-xs rounded">
                      New
                    </span>
                  ) : null}
                </div>

                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover mb-4 rounded"
                />

                {/* Product Info */}
                <div className="flex flex-col gap-1 items-center">
                  <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-blue-700 tracking-wide">
                      ₹{product.price.toFixed(2)}
                    </span>
                    {product.onSale && product.oldPrice && (
                      <span className="text-lg text-gray-400 line-through">
                        ₹{product.oldPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                  <button 
  onClick={() => AddtoCart(product)} 
  className="mt-4 cursor-pointer w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 active:bg-blue-700 transition-colors"
>
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
         
          <div className="text-center text-gray-500 mt-10 text-4xl">
            No products found.
          </div>
        )}
      </div>
    </section>
  );
};

export default Product;
