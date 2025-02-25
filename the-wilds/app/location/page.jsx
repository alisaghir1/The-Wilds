import React from "react";
import Image from "next/image";
import {
  FaPlaneDeparture,
  FaLandmark,
  FaMapMarkedAlt,
  FaUniversity,
} from "react-icons/fa";
const Page = () => {
  return (
    <div className="pt-40 bg-customBg pb-20">
      <section className="container mx-auto mt-16 border border-white xl:px-20 pt-5 pb-10 px-5 rounded-lg">
        {/* Title */}
        <h2 className="text-2xl font-bold text-yellow-700 my-8 border-b border-b-white w-fit">
          Location Map
        </h2>

        {/* Starting Price */}
        <div className="flex flex-col md:flex-row justify-between items-center border border-white p-4 rounded-lg mb-6">
          <span className="text-lg font-semibold text-white">
            Starting From
          </span>
          <span className="text-2xl font-bold text-yellow-700">AED 5.1M</span>
        </div>
        <p className="text-white leading-relaxed text-sm md:text-base mb-6">
          Within the active Dubailand precinct, The Wilds by Aldar finds its
          home in a site which brings together peaceful serenity with excellent
          ease of access. The façade maintains a thriving community thanks to
          its efficient connection to major Dubai roads like Sheikh Zayed Road,
          Emirates Road and Al Ain Road which ensure easy access to all city
          landmarks. The luxury of accessing Dubai Mall and witnessing
          entertainment at Global Village and visiting IMG Worlds of Adventure
          and shopping at Dubai Outlet Mall, allows residents to enhance their
          everyday experiences. The façade stands as an upscale suburban living
          environment which easily connects residents to urban amenities since
          it borders established neighbourhoods including Arabian Ranches, Al
          Barari, and Villanova.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left Side - Image */}
          <div className="w-full ">
            <Image
              src="/location.jpg"
              alt="Location Map"
              className="rounded-lg w-full"
              width={500}
              height={500}
            />
          </div>

          {/* Right Side - Location Items */}
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <div className="p-4 border border-gray-300 rounded-lg flex items-center gap-4">
              <FaPlaneDeparture className="text-yellow-700 text-3xl" />
              <div>
                <h3 className="text-lg font-semibold text-yellow-700">
                  Dubai International Airport
                </h3>
                <p className="text-white mt-1">25 Minutes</p>
              </div>
            </div>

            <div className="p-4 border border-gray-300 rounded-lg flex items-center gap-4">
              <FaLandmark className="text-yellow-700 text-3xl" />
              <div>
                <h3 className="text-lg font-semibold text-yellow-700">
                  Falconcity of Wonders
                </h3>
                <p className="text-white mt-1">15 Minutes</p>
              </div>
            </div>

            <div className="p-4 border border-gray-300 rounded-lg flex items-center gap-4">
              <FaMapMarkedAlt className="text-yellow-700 text-3xl" />
              <div>
                <h3 className="text-lg font-semibold text-yellow-700">
                  IMG World of Adventure
                </h3>
                <p className="text-white mt-1">15 Minutes</p>
              </div>
            </div>

            <div className="p-4 border border-gray-300 rounded-lg flex items-center gap-4">
              <FaUniversity className="text-yellow-700 text-3xl" />
              <div>
                <h3 className="text-lg font-semibold text-yellow-700">
                  Zayed University
                </h3>
                <p className="text-white mt-1">15 Minutes</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
