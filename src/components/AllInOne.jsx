import React from "react";
import { CheckIcon } from "@heroicons/react/outline";

const AllInOne = () => {
  return (
    <div name="platforms" className="w-full my-32">
      <div className="max-w-[1240px] mx-auto px-2">
        <h2 className="text-5xl font-bold text-center">All-In-One Platform</h2>
        <p className="text-2xl py-8 text-gray-500 text-center">
          We provide a comprehensive set of tools and features for businesses to
          manage multiple aspects of their operations.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          <div className="flex">
            <div>
              <CheckIcon className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Web Applications</h3>
              <p className="text-lg pt-2 pb-4">
                Our web development services offer custom design, development,
                and maintenance solutions to create fast, responsive, and
                user-friendly websites for businesses.
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <CheckIcon className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Android Applications</h3>
              <p className="text-lg pt-2 pb-4">
                Our Android application development services offer custom
                design, development, and maintenance solutions to create fast,
                intuitive, and secure apps for businesses.
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <CheckIcon className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg">IOS Applications</h3>
              <p className="text-lg pt-2 pb-4">
                Our iOS app creation services provide specialised design,
                development, and upkeep options to build quick, understandable,
                and secure apps for businesses.
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <CheckIcon className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg">UX/UI Designing</h3>
              <p className="text-lg pt-2 pb-4">
                Our UX/UI design services offer custom design solutions to
                create intuitive, user-friendly interfaces for websites and
                applications, resulting in enhanced user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllInOne;
