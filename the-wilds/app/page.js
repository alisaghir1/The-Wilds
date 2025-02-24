import {
  FaSwimmer,
  FaBiking,
  FaUtensils,
  FaDumbbell,
  FaHeartbeat,
  FaBroom,
  FaGamepad,
  FaInfinity,
  FaRunning,
  FaChild,
  FaShip,
  FaTree,
  FaConciergeBell,
  FaShoppingCart,
} from "react-icons/fa";
import { MdPool } from "react-icons/md";
import { IoMdFitness } from "react-icons/io";
import { FaPlaneDeparture, FaLandmark, FaUniversity, FaMapMarkedAlt } from "react-icons/fa";

const amenities = [
  {
    title: "Beach Access",
    desc: "Take a stroll on the private beach to relax and unwind.",
    icon: <FaSwimmer className="text-yellow-500 text-3xl" />,
  },
  {
    title: "Cycling Trails",
    desc: "A low-impact sport that gives your cardiovascular system an effective workout.",
    icon: <FaBiking className="text-yellow-500 text-3xl" />,
  },
  {
    title: "Dining Outlets",
    desc: "Where good food is served to people, often in a formal way.",
    icon: <FaUtensils className="text-yellow-500 text-3xl" />,
  },
  {
    title: "Fitness Centre",
    desc: "Routine exercise helps you to change your overall lifestyle.",
    icon: <IoMdFitness className="text-yellow-500 text-3xl" />,
  },
  {
    title: "Gymnasium",
    desc: "For those who want to remain fit and lead a healthy lifestyle.",
    icon: <FaDumbbell className="text-yellow-500 text-3xl" />,
  },
  {
    title: "Health Care Centre",
    desc: "World-class health care centers with top-notch facilities.",
    icon: <FaHeartbeat className="text-yellow-500 text-3xl" />,
  },
  {
    title: "Housekeeping",
    desc: "Experience top-tier housekeeping services for a clean and comfortable home.",
    icon: <FaBroom className="text-yellow-500 text-3xl" />,
  },
  {
    title: "Indoor Games",
    desc: "A very small play area, usually limited to a single tabletop.",
    icon: <FaGamepad className="text-yellow-500 text-3xl" />,
  },
  {
    title: "Infinity Pool",
    desc: "A swimming pool where the water flows over one or more edges.",
    icon: <FaInfinity className="text-yellow-500 text-3xl" />,
  },
  {
    title: "Jogging Trails",
    desc: "It improves your cardiovascular fitness and decreases your risk of heart attack.",
    icon: <FaRunning className="text-yellow-500 text-3xl" />,
  },
  {
    title: "Kids Play Area",
    desc: "An area used for outdoor play or recreation, especially by children.",
    icon: <FaChild className="text-yellow-500 text-3xl" />,
  },
  {
    title: "Marina & Yacht Club",
    desc: "Luxury berthing where you can dock your yacht.",
    icon: <FaShip className="text-yellow-500 text-3xl" />,
  },
  {
    title: "Parks and Leisure Areas",
    desc: "Access to parks & recreation facilities leads to healthy lifestyles.",
    icon: <FaTree className="text-yellow-500 text-3xl" />,
  },
  {
    title: "Restaurants",
    desc: "Treat your inner foodie by serving authentic flavors.",
    icon: <FaConciergeBell className="text-yellow-500 text-3xl" />,
  },
  {
    title: "Supermarket",
    desc: "A self-service shop offering a wide variety of food & household products.",
    icon: <FaShoppingCart className="text-yellow-500 text-3xl" />,
  },
  {
    title: "Swimming Pool",
    desc: "The best place to head when you want to relax and rejuvenate.",
    icon: <MdPool className="text-yellow-500 text-3xl" />,
  },
];

export default function Home() {
  return (
    <div>
      <div
        className="relative h-screen w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl font-bold text-white">
            The Wilds by Aldar at Dubailand, Dubai
          </h1>
        </div>
      </div>
      <section className="container mx-auto my-16 border border-gray-500 xl:px-20 pt-5 pb-10 px-5 rounded-lg">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              The Wilds by Aldar
            </h2>
            <p className="text-gray-600 text-md mt-2">
              By Aldar Properties | DubaiLand
            </p>
            <p className="inline-flex items-center mt-2">
              <span className="bg-yellow-500 text-white px-3 py-1 rounded-l">
                Status
              </span>
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-r">
                New Launch
              </span>
            </p>
          </div>
          <div className="p-4 border border-gray-300 rounded-lg text-center">
            <p className="text-amber-800 font-medium">Starting From</p>
            <p className="text-black font-bold text-xl">AED 5.1 M</p>
          </div>
        </div>
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {/* Starting Price */}
          <div className="py-6 border-b border-b-yellow-500 flex justify-between items-center">
            <h3 className="text-md font-semibold text-yellow-500">
              Property Type:
            </h3>
            <p className=" text-md font-bold">Villa</p>
          </div>

          {/* Down Payment (Flex Row) */}
          <div className="py-6 border-b border-b-yellow-500 flex justify-between items-center">
            <h3 className="text-md font-semibold text-yellow-500">
              Unit type:
            </h3>
            <p className=" text-md font-bold">3 to 5 Bedroom</p>
          </div>

          {/* Payment Plan */}
          <div className="py-6 border-b border-b-yellow-500 flex justify-between items-center">
            <h3 className="text-md font-semibold text-yellow-500">Size:</h3>
            <p className=" text-md font-bold">2,972 to 4,448 Sq Ft.</p>
          </div>

          {/* Handover */}
          <div className="py-6 border-b border-b-yellow-500 flex justify-between items-center">
            <h3 className="text-md font-semibold text-yellow-500">
              Property Type:
            </h3>
            <p className=" text-md font-bold">Apartment</p>
          </div>

          {/* Villas Info */}
          <div className="py-6 border-b border-b-yellow-500 flex justify-between items-center">
            <h3 className="text-md font-semibold text-yellow-500">
              Unit type:
            </h3>
            <p className=" text-md font-bold">4 & 5 Bedroom</p>
          </div>

          {/* Apartments Info */}
          <div className="py-6 border-b border-b-yellow-500 flex justify-between items-center">
            <h3 className="text-md font-semibold text-yellow-500">Size:</h3>
            <p className=" text-md font-bold">5,434 to 6,678 Sq Ft.</p>
          </div>

          {/* Location */}
          <div className="py-6 border-b border-b-yellow-500 flex justify-between items-center">
            <h3 className="text-md font-semibold text-yellow-500">
              Down Payment:
            </h3>
            <p className=" text-md font-bold">10%</p>
          </div>

          {/* Developer */}
          <div className="py-6 border-b border-b-yellow-500 flex justify-between items-center">
            <h3 className="text-md font-semibold text-yellow-500">
              Payment Plan:
            </h3>
            <p className=" text-md font-bold">65/35</p>
          </div>

          {/* Down Payment (Flex Row) */}
          <div className="py-6 border-b border-b-yellow-500 flex justify-between items-center">
            <h3 className="text-md font-semibold text-yellow-500">Handover:</h3>
            <p className=" text-md font-bold">Q2 - 2029</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto my-16 border border-gray-500 xl:px-20 pt-5 pb-10 px-5 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-900">Overview</h2>

        <p className="text-gray-700 text-md mt-4 leading-relaxed">
          The Wilds by Aldar Properties introduces an exclusive villa-only
          community within Dubailand that will transform luxury living standards
          with 3 to 6 bedroom villas, while delivering peace and refinement into
          its heart. The name and its design inspiration is dedicated to
          developing superior living spaces for discerning homeowners, merging
          modern style with natural ease at every corner. This is a luxurious
          haven beyond comparison that resolves itself into more than simple
          home addresses because it presents an oasis that brings together
          nature and premium living harmoniously.
        </p>

        <p className="text-gray-700 text-md mt-4 leading-relaxed">
          This latest premier development presents an exceptional way of life
          through its concentration on sturdy villa builds featuring modern
          aesthetic blends with everlasting sophistication. The villas feature
          well-planned floor arrangements and wide windows which allow natural
          sunlight to enter into the spaces while premium materials showcase
          elegant preferences. The architectural design dissolves the boundaries
          between indoor spaces and outdoor landscapes so residents can live
          within serene gardens and pool areas and properly appointed shared
          areas. Within the community, residents value privacy alongside
          effortless connections between neighbors.
        </p>

        <p className="text-gray-700 text-md mt-4 leading-relaxed">
          Within the elegant residences, you can discover holistic living in its
          entirety. The community area offers comprehensive wellness facilities,
          including modern fitness gyms paired with both running tracks and
          cycling roads, peaceful wellness centers for residents. The
          development includes areas for children and sports amenities as well
          as swimming pools and diverse lively social areas which propel
          community engagement. Every detail at this location has received
          careful planning because the developers want to create a place that
          maximizes the quality of life for residents.
        </p>
      </section>

      <section className="container mx-auto my-16 border border-gray-500 xl:px-20 pt-5 pb-10 px-5 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-900">
          Feature & Amenities
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {amenities.map((item, index) => (
            <div
              key={index}
              className="p-4 border border-gray-300 rounded-lg flex flex-col items-center text-center justify-center gap-4"
            >
              {item.icon}
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-700 mt-2">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto my-16 border border-gray-500 xl:px-20 pt-5 pb-10 px-5 rounded-lg">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Location Map</h2>
      
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Left Side - Image */}
        <div className="w-full ">
          <img src="/location.jpg" alt="Location Map" className="rounded-lg w-full" />
        </div>

        {/* Right Side - Location Items */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <div className="p-4 border border-gray-300 rounded-lg flex items-center gap-4">
            <FaPlaneDeparture className="text-yellow-500 text-3xl" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Dubai International Airport</h3>
              <p className="text-gray-700 mt-1">25 Minutes</p>
            </div>
          </div>

          <div className="p-4 border border-gray-300 rounded-lg flex items-center gap-4">
            <FaLandmark className="text-yellow-500 text-3xl" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Falconcity of Wonders</h3>
              <p className="text-gray-700 mt-1">15 Minutes</p>
            </div>
          </div>

          <div className="p-4 border border-gray-300 rounded-lg flex items-center gap-4">
            <FaMapMarkedAlt className="text-yellow-500 text-3xl" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">IMG World of Adventure</h3>
              <p className="text-gray-700 mt-1">15 Minutes</p>
            </div>
          </div>

          <div className="p-4 border border-gray-300 rounded-lg flex items-center gap-4">
            <FaUniversity className="text-yellow-500 text-3xl" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Zayed University</h3>
              <p className="text-gray-700 mt-1">15 Minutes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
