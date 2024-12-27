import Image from "next/image";
import React from "react";

const Shopping = () => {
  return (
    <>
      <section>
        <div className="py-12 mt-12">
          <div className="w-[90%] mx-auto border border-gray-300 rounded-lg p-6 lg:p-10">
            {/* Products Section */}
            <div className="flex flex-col lg:flex-row justify-between gap-6">
              {/* Product List */}
              <div className="w-full lg:w-2/3">
                <h1 className="text-xl font-semibold mb-6">Products</h1>

                {/* Product Item 1 */}
                <div className="flex items-center gap-4 mb-6">
                  <Image
                    src={"/images/mug.png"}
                    width={100}
                    height={100}
                    alt="mug"
                    className="rounded-md"
                  />
                  <div>
                    <h1 className="text-lg font-semibold">Graystone Vase</h1>
                    <p className="text-gray-600 text-sm">
                      A timeless ceramic vase with a tri-color grey glaze.
                    </p>
                    <h1 className="text-sm font-bold">$85</h1>
                  </div>
                </div>

                {/* Product Item 2 */}
                <div className="flex items-center gap-4 mb-6">
                  <Image
                    src={"/images/flower.png"}
                    width={100}
                    height={100}
                    alt="flower vase"
                    className="rounded-md"
                  />
                  <div>
                    <h1 className="text-lg font-semibold">Elegant Vase</h1>
                    <p className="text-gray-600 text-sm">
                      A beautiful flower vase perfect for any decor.
                    </p>
                    <h1 className="text-sm font-bold">$125</h1>
                  </div>
                </div>

                {/* Note */}
                <p className="text-sm text-gray-500">
                  Taxes and shipping are calculated at checkout.
                </p>
              </div>

              {/* Summary Section */}
              <div className="w-full lg:w-1/3 bg-gray-50 rounded-lg p-6">
                <h1 className="text-xl font-semibold mb-6">Order Summary</h1>

                <div className="flex justify-between mb-4">
                  <p className="text-gray-600">Subtotal</p>
                  <p className="font-bold">$210</p>
                </div>

                <div className="flex justify-between mb-4">
                  <p className="text-gray-600">Total</p>
                  <p className="font-bold">$210</p>
                </div>

                {/* Checkout Button */}
                <button className="w-full bg-gray-800 text-white py-3 rounded-lg">
                  Go to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shopping;