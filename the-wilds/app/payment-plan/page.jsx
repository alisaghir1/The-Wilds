import React from "react";

const Page = () => {
  return (
    <div className="pt-40 bg-customBg pb-20">
      <section className="container mx-auto mt-16 border border-white xl:px-20 pt-5 pb-10 px-5 rounded-lg">
        {/* Title */}
        <h2 className="text-2xl font-bold text-yellow-700 my-8 border-b border-b-white w-fit">
          Payment Plan
        </h2>

        {/* Starting Price */}
        <div className="flex flex-col md:flex-row justify-between items-center border border-white p-4 rounded-lg mb-6">
          <span className="text-lg font-semibold text-white">Starting From</span>
          <span className="text-2xl font-bold text-yellow-700">AED 5.1M</span>
        </div>

        {/* Description */}
        <p className="text-white leading-relaxed text-sm md:text-base mb-6">
          Aldar Properties provides multiple investor-friendly payment plans
          through The Wilds which allows access to luxury living spaces. Buyers
          will receive appealing options which start with small booking charges
          accompanied by construction-based installment plans and affordable
          payment solutions. The payment structure allows investors to buy this
          property easily for personal living or lucrative investment purposes
          in Dubai's real estate sector.
        </p>

        {/* Payment Plan Table */}
        <div className="p-6 rounded-lg border border-white">
          <h3 className="text-xl font-semibold text-yellow-700 mb-4 text-center">
            Attractive 65/35 Installments Payment Plan
          </h3>
          <div className="grid grid-cols-3 text-white font-medium text-sm md:text-base border-b border-white pb-2 mb-2">
            <span>Installment</span>
            <span className="text-center">Payment (%)</span>
            <span className="text-right">Milestone</span>
          </div>

          {/* Installment Items */}
          {[
            { name: "Down Payment", percent: "10%", milestone: "On Booking Date" },
            { name: "1st Installment", percent: "15%", milestone: "Within 8 months from booking date" },
            { name: "2nd Installment", percent: "10%", milestone: "Within 16 months from booking date" },
            { name: "3rd Installment", percent: "10%", milestone: "Within 24 months from booking date" },
            { name: "4th Installment", percent: "10%", milestone: "Within 32 months from booking date" },
            { name: "5th Installment", percent: "10%", milestone: "Within 40 months from booking date" },
            { name: "Final Installment", percent: "35%", milestone: "On Handover" },
          ].map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-3 text-white text-sm md:text-base py-2 border-b border-gray-700 last:border-b-0"
            >
              <span>{item.name}</span>
              <span className="text-center">{item.percent}</span>
              <span className="text-right">{item.milestone}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Page;
