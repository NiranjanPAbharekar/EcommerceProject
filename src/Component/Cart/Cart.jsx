import React from "react";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";

function Cart({ ActivePanel, setActivePanel, cart, setCart }) {
  // Increase quantity
  const increaseQty = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease quantity
  const decreaseQty = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0) // remove if qty = 0
    );
  };

  // Delete item
  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Subtotal (price × quantity)
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // Flat handling charge
  const handlingCharge = cart.length > 0 ? 50 : 0;

  // Total
  const total = subtotal + handlingCharge;

  return (
    <div
      className={`bg-zinc-100 fixed z-50 top-0 right-0 bottom-0 left-auto py-5 max-h-[100vh] w-[350px] border-l border-zinc-300 shadow-lg transform transition-transform duration-300 ease-in-out ${
        ActivePanel === "cart" ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="h-full flex flex-col justify-between gap-5">
        {/* Header */}
        <div>
          <h3 className="text-3xl font-bold text-zinc-800 text-center">
            Your Cart
          </h3>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto">
          {cart.length === 0 ? (
            <p className="text-center text-zinc-500 mt-10">
              Your cart is empty
            </p>
          ) : (
            cart.map((product) => (
              <div
                key={product.id}
                className="flex items-center gap-3 px-5 py-2 border-b border-zinc-300"
              >
                <div className="w-20 h-20">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 gap-2">
                  <div className="flex justify-between items-center">
                    <h4 className="font-semibold text-zinc-800 text-lg">
                      {product.name}
                    </h4>
                    <button
                      onClick={() => removeItem(product.id)}
                      className='text-white w-6 bg-red-600 text-[14px] mr-[25px] cursor-pointer h-6 flex items-center justify-center rounded-full hover:bg-red-400 '
                    >
                      <FaTrash />
                    </button>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>
                      ₹{(product.price * product.quantity).toFixed(2)}
                    </span>
                    <div className="flex items-center gap-x-2">
                      <button
                        onClick={() => decreaseQty(product.id)}
                        className="w-6 h-6 text-white bg-blue-600 flex items-center justify-center rounded-full hover:bg-blue-500 active:bg-blue-700"
                      >
                        <FaMinus />
                      </button>
                      <span>{product.quantity}</span>
                      <button
                        onClick={() => increaseQty(product.id)}
                        className="w-6 h-6 text-white bg-blue-600 flex items-center justify-center rounded-full hover:bg-blue-500 active:bg-blue-700"
                      >
                        <FaPlus />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Cart Totals */}
        <div className="border-t px-4 border-zinc-300">
          <div className="flex justify-between items-center pt-2">
            <span className="text-zinc-800 font-semibold">Subtotal:</span>
            <span className="text-zinc-800 font-bold">
              ₹{subtotal.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span className="text-zinc-800 font-semibold">
              Shipping & Handling:
            </span>
            <span className="text-zinc-800 font-bold">
              ₹{handlingCharge.toFixed(2)}
            </span>
          </div>
          <div className="flex border-t border-zinc-300 justify-between items-center py-2">
            <span className="text-blue-600 font-semibold text-lg">Total:</span>
            <span className="text-blue-600 font-semibold text-lg">
              ₹{total.toFixed(2)}
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-x-5 px-4">
          <button
            className="bg-blue-600 text-white flex-1 h-[7vh] cursor-pointer active:bg-blue-700"
            onClick={() => setActivePanel(null)}
          >
            Close
          </button>
          <button className="bg-blue-600 text-white flex-1 h-[7vh] cursor-pointer active:bg-blue-700">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
