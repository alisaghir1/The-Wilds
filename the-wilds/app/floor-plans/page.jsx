"use client";
import React, { useState } from "react";

const floorPlans = [
  {
    id: 1,
    type: "Type 01",
    category: "Cassia Villa",
    unitType: "4 Bedrooms + Maid",
    floorDetails: "Type 01",
    size: "313.00 Sq Mtr",
    propertyType: "Villa",
    image: "/4bd-fp.jpg",
  },
  {
    id: 2,
    type: "Type 01",
    category: "Cassia Villa",
    unitType: "3 Bedrooms + Study + Maid",
    floorDetails: "Type 01",
    size: "276.00 Sq Mtr",
    propertyType: "Villa",
    image: "/3bd-fp.jpg",
  },
  {
    id: 3,
    type: "Type 01",
    category: "Cassia Villa",
    unitType: "5 Bedrooms + Study + Maid",
    floorDetails: "Type 01",
    size: "413.00 Sq Mtr",
    propertyType: "Villa",
    image: "/5bd-fp.jpg",
  },
  {
    id: 4,
    type: "Type 01",
    category: "Ravenna Residences",
    unitType: "5 Bedrooms + Pool + Maid + Study",
    floorDetails: "Type 01",
    size: "505.00 Sq Mtr",
    propertyType: "Villa",
    image: "/5bd-fp-rr.jpg",
  },
  {
    id: 5,
    type: "Type 02",
    category: "Cassia Villa",
    unitType: "5 Bedrooms + Study + Maid",
    floorDetails: "Type 02",
    size: "413.00 Sq Mtr",
    propertyType: "Villa",
    image: "/5bd-fp.jpg",
  },
  {
    id: 6,
    type: "Type 02",
    category: "Ravenna Residences",
    unitType: "5 Bedrooms + Pool + Maid + Study",
    floorDetails: "Type 02",
    size: "620.00 Sq Mtr",
    propertyType: "Villa",
    image: "/5bd-fp-rr.jpg",
  },
  {
    id: 7,
    type: "Type 02",
    category: "Cassia Villa",
    unitType: "4 Bedrooms + Maid",
    floorDetails: "Type 02",
    size: "313.00 Sq Mtr",
    propertyType: "Villa",
    image: "/4bd-fp.jpg",
  },
  {
    id: 8,
    type: "Type 02",
    category: "Cassia Villa",
    unitType: "3 Bedrooms + Study + Maid",
    floorDetails: "Type 02",
    size: "276.00 Sq Mtr",
    propertyType: "Villa",
    image: "/3bd-fp.jpg",
  },
];

const Page = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  return (
    <div className="pt-40 bg-customBg pb-20">
      <section className="container mx-auto mt-16 border border-white xl:px-20 pt-5 pb-10 px-5 rounded-lg">
        {/* Title */}
        <h2 className="text-2xl font-bold text-yellow-700 my-8 border-b border-b-white w-fit">
          Floor Plan
        </h2>

        <p className="text-white leading-relaxed text-sm md:text-base mb-6">
          Aldar Properties provides multiple investor-friendly payment plans
          through The Wilds which allows access to luxury living spaces. Buyers
          will receive appealing options which start with small booking charges
          accompanied by construction-based installment plans and affordable
          payment solutions. The payment structure allows investors to buy this
          property easily for personal living or lucrative investment purposes
          in Dubai's real estate sector.
        </p>

        {/* Grid of Small Images */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
          {floorPlans.map((plan) => (
            <div
              key={plan.id}
              className="cursor-pointer border border-white rounded-lg overflow-hidden hover:shadow-lg transition"
              onClick={() => setSelectedPlan(plan)}
            >
              <img
                src={plan.image}
                alt={plan.unitType}
                className="w-full h-32 object-cover"
              />
            </div>
          ))}
        </div>

        {/* Enlarged Image and Details (if a plan is selected) */}
        {selectedPlan && (
          <div className="p-6 rounded-lg border border-white  relative">
            {/* Close Button */}
            <button
              onClick={() => setSelectedPlan(null)}
              className="absolute top-4 right-4 text-white hover:scale-110 transition ease-out duration-300"
            >
              ✕
            </button>

            <h3 className="text-xl font-semibold text-yellow-700 mb-4 text-center">
              {selectedPlan.category} - {selectedPlan.unitType}
            </h3>

            <img
              src={selectedPlan.image}
              alt={selectedPlan.unitType}
              className="w-full h-auto rounded-lg mb-4"
            />

            {/* Floor Plan Details Table */}
            <div className="grid grid-cols-2 text-white font-medium text-sm md:text-base gap-2">
              <span className="text-gray-400">Floor Plan:</span>
              <span>{selectedPlan.type}</span>

              <span className="text-gray-400">Category:</span>
              <span>{selectedPlan.category}</span>

              <span className="text-gray-400">Unit Type:</span>
              <span>{selectedPlan.unitType}</span>

              <span className="text-gray-400">Floor Details:</span>
              <span>{selectedPlan.floorDetails}</span>

              <span className="text-gray-400">Size:</span>
              <span>{selectedPlan.size}</span>

              <span className="text-gray-400">Type:</span>
              <span>{selectedPlan.propertyType}</span>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Page;
