import React from "react";

const CartModal = ({ cartItems, delFromCart,onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-end z-50">
      <div className="w-full sm:w-[30%] h-full bg-white/90 backdrop-blur-md p-6 shadow-2xl overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Your Cart</h2>
          <button
            className="text-red-600 font-bold text-2xl hover:scale-110 transition"
            onClick={onClose}
          >
            ✖
          </button>
        </div>

        {cartItems.length === 0 ? (
          <p className="text-gray-600 text-center">🛒 Your cart is empty.</p>
        ) : (
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li key={item.id} className="flex items-center gap-4 border-b pb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-contain bg-gray-100 rounded"
                />
                <div className="flex-1 ">
                  <h3 className="font-medium text-gray-800 text-sm line-clamp-2">{item.title}</h3>
                  <div className="flex justify-between">
                  <p className="text-green-600 font-semibold">${item.price}</p>
                  <button className=" bg-red-700 rounded-md p-0.5 px-2 hover:bg-red-800" onClick={()=>delFromCart(item)}>🗑</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CartModal;
