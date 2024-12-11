import React from 'react';
import Image from 'next/image'; // Import the Next.js Image component

const Pro = () => {
  return (
    <div>
      <section className="text-gray-400 body-font">
        <div className="container px-5 py-24 mx-auto">
          {/* Heading starts just above the products */}
          <h1 className="text-[32px] font-bold text-black mb-10">
            Top Categories
          </h1>

          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10">
            {/* First Image with Gradient Background */}
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg overflow-hidden relative">
                <Image
                  alt="Wing Chair"
                  className="object-cover object-center w-full h-[424px]"
                  src="/img 4/5.png"
                  width={424} // Set width to 424
                  height={424} // Set height to 424
                />
                {/* Gradient overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/80 to-transparent p-6">
                  <p className="text-white text-xl font-bold">Wing Chair</p>
                  <p className="text-slate-300 text-sm">3,584 Products</p>
                </div>
              </div>
            </div>

            {/* Second Image with Gradient Background */}
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg overflow-hidden relative">
                <Image
                  alt="Wooden Chair"
                  className="object-cover object-center w-full h-[424px]"
                  src="/img 4/Image (1)5.png"
                  width={424} // Set width to 424
                  height={424} // Set height to 424
                />
                {/* Gradient overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/80 to-transparent p-6">
                  <p className="text-white text-xl font-bold">Wooden Chair</p>
                  <p className="text-slate-300 text-sm">157 Products</p>
                </div>
              </div>
            </div>

            {/* Third Image with Gradient Background */}
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg overflow-hidden relative">
                <Image
                  alt="Desk Chair"
                  className="object-cover object-center w-full h-[424px]"
                  src="/img 4/Image (12).png"
                  width={424} // Set width to 424
                  height={424} // Set height to 424
                />
                {/* Gradient overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/80 to-transparent p-6">
                  <p className="text-white text-xl font-bold">Desk Chair</p>
                  <p className="text-slate-300 text-sm">154 Products</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pro;
