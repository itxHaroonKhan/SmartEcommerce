import React from "react";
import Image from "next/image";

const StyleShowcase = () => {
  const products = [
    { id: 1, image: "/img 4/3.png" },
    { id: 2, image: "/img 4/4.png" },
    { id: 3, image: "/img 4/1.png" },
    { id: 4, image: "/img 4/6.png" },
    { id: 5, image: "/img 4/1.png" },
  ];

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {/* Left side: Image with vertical text */}
            <div className="p-4 w-full md:w-1/2 lg:w-1/2 relative flex">
              {/* Vertical Text */}
              <span className="text-gray-900 font-bold text-[37px] tracking-wide transform -rotate-90 whitespace-nowrap absolute top-1/2 -left-0 origin-bottom-left md:mt-56 sm:mt-4">
                Explore new and popular styles
              </span>
              <div className="relative w-full h-[400px] md:h-[648px]">
              <Image
                alt="ecommerce"
                src={products[0].image}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            </div>

            {/* Right side: 4 images in a grid */}
            <div className="w-full md:w-1/2 lg:w-1/2">
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 ">
                {products.slice(1).map((product) => (
                  <div key={product.id} className="p-4">
                    <a className="block relative lg:w-[312px] lg:h-[312px]">
                      <Image
                        alt="ecommerce"
                        className="object-cover object-center w-full h-full block"
                        src={product.image}
                        width={312}
                        height={312}
                      />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StyleShowcase;
