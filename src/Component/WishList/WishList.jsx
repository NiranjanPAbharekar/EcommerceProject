import React from "react";
import { FaTrash } from "react-icons/fa";

const WishList = ({ ActivePanel, setActivePanel, wishlist, setWishlist, clearWishlist,AddtoCart  }) => {
    
  return (
    <div
      className={`bg-zinc-100 fixed z-50 top-0 right-0 bottom-0 left-auto py-5 max-h-[100vh] w-[350px] border-l border-zinc-300 shadow-lg transform transition-transform duration-300 ease-in-out ${
        ActivePanel === "wishlist" ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="h-full flex flex-col justify-between gap-5">
        <div>
          <h3 className="text-3xl font-bold text-zinc-800 text-center">Your Wishlist</h3>
        </div>

        {/* Wishlist Items */}
        <div className="flex-1 overflow-y-auto">
          {wishlist.length === 0 ? (
            <p className="text-center text-zinc-500 mt-10">Your wishlist is empty</p>
          ) : (
            wishlist.map((product) => (
              <div key={product.id} className="flex items-center gap-3 px-5 py-2 border-b border-zinc-300 bg-white">
                <div className="w-20 h-20">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h4 className="font-semibold text-zinc-800 text-lg">{product.name}</h4>
                    <button
                      onClick={() => setWishlist((prev) => prev.filter((item) => item.id !== product.id))}
                      className="text-white w-6 h-6 bg-red-600 flex items-center justify-center rounded-full hover:bg-red-400"
                    >
                      <FaTrash />
                    </button>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>₹{product.price.toFixed(2)}</span>
                  <button
  onClick={() => {
    AddtoCart(product); 
    setWishlist((prev) => prev.filter((item) => item.id !== product.id)); // ✅ remove from wishlist
  }}
  className="bg-blue-600 text-white text-sm px-3 py-[5px] rounded-full cursor-pointer active:bg-blue-700"
>Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Buttons */}
        <div className="flex gap-x-5 px-4">
          <button
            className="bg-blue-600 text-white flex-1 h-[7vh] cursor-pointer active:bg-blue-700"
            onClick={() => setActivePanel(null)}
          >
            Close
          </button>
          <button
            className="bg-blue-600 text-white flex-1 h-[7vh] cursor-pointer active:bg-blue-700"
            onClick={clearWishlist}
          >
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishList;
