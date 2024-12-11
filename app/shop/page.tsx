import React from "react";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const CartPage = () => {
  const products = [
    {
      id: 1,
      image: "/Itam/item-category 1.png", // Replace with your image path
      title: "Library Stool Chair",
      price: 99,
      size: "L",
      quantity: 1,
    },
    {
      id: 2,
      image: "/img 4/5.png", // Replace with your image path
      title: "Library Stool Chair",
      price: 99,
      size: "L",
      quantity: 1,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-2xl font-bold mb-6">Bag</h1>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Products Section */}
          <div className="flex-1">
            {products.map((product) => (
              <div
                key={product.id}
                className="border-b border-gray-300 py-6 flex flex-col lg:flex-row items-center gap-6"
              >
                {/* Product Image */}
                <div className="w-32 h-32">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={128}
                    height={128}
                    className="rounded-lg object-cover"
                  />
                </div>
                {/* Product Details */}
                <div className="flex-1">
                  <h2 className="text-xl  text-black">
                    {product.title}
                  </h2>
                  <p className="text-gray-500">
                    Ashen Slate / Cobalt Bliss
                  </p>
                  <div className="text-gray-500 mt-2 flex gap-6">
                    <p>
                      <strong>Size:</strong> {product.size}
                    </p>
                    <p>
                      <strong>Quantity:</strong> {product.quantity}
                      
                     
                    </p>
                    
                  </div>
                  <div className="flex gap-4  mt-5">
                      <FaRegHeart className="text-gray-500 " />
                      <RiDeleteBin6Line className="text-gray-500 " />
                      </div>
                </div>
                {/* Product Price and Actions */}
                <div className="flex items-center gap-4">
                  <p className="text-lg  text-black">MRP: ${product.price}</p>
                  
                </div>
                
              </div>
            ))}
          </div>

          {/* Summary Section */}
          <div className="w-full lg:w-1/3  p-6 rounded-lg ">
            <h2 className="text-lg font-bold mb-4">Summary</h2>
            <div className="flex justify-between text-gray-700 mb-2">
              <p>Subtotal</p>
              <p>$198.00</p>
            </div>
            <div className="flex justify-between text-gray-700 mb-2">
              <p>Estimated Delivery & Handling</p>
              <p>Free</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between text-black font-bold mb-6">
              <p>Total</p>
              <p>$198.00</p>
            </div>
            <button className="w-full bg-[#029FAE] text-white py-3 rounded-full font-semibold">
              Member Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
