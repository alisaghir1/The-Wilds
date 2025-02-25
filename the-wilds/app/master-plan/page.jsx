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
          Master Plan
        </h2>

        {/* Starting Price */}
        <div className="flex flex-col md:flex-row justify-between items-center border border-white p-4 rounded-lg mb-6">
          <span className="text-lg font-semibold text-white">
            Starting From
          </span>
          <span className="text-2xl font-bold text-yellow-700">AED 5.1M</span>
        </div>
        <div className="flex w-full flex-col md:flex-row items-center gap-8">
          {/* Left Side - Image */}
          <div className="xl:w-1/2">
            <Image
              src="/mm.jpg"
              alt="Location Map"
              className="rounded-lg w-full"
              width={1200}
              height={500}
            />
          </div>

          {/* Right Side - Location Items */}
          <p className="text-white xl:w-1/2 leading-relaxed text-sm md:text-base">
            Aldar Properties developed The Wilds master plan to establish an
            environment which joins high-end residences with architectural
            elements that bring nature together. The Dubailand district features
            this development across an extensive area with a deliberate approach
            that creates ample greenery, integrated pathways and cycling routes
            with peaceful water attractions to provide the community with its
            peaceful character. The developers organized the community zones to
            encourage privacy together with neighbourhood connections. The villa
            arrangements achieve natural ventilation while spacious roads and
            open plazas as well as landscaped parks facilitate social bonding
            between residents. The community includes purpose-designed wellness
            and recreation and leisure division that features swimming pools and
            kids' Districts alongside community alleys and fitness facilities.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Page;
