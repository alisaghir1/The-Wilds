import React from 'react'

const page = () => {
  return (
    <div className='pt-40 bg-customBg pb-20'>

<section className="container mx-auto mt-16 border border-gray-500 xl:px-20 pt-5 pb-10 px-5 rounded-lg">
      {/* Title */}
      <h2 className="text-2xl font-bold text-yellow-700 mb-8 text-center">Features & Amenities</h2>

      {/* Starting Price */}
      <div className="flex flex-col md:flex-row justify-between items-center border border-white p-4 rounded-lg mb-6">
        <span className="text-lg font-semibold text-white">Starting From</span>
        <span className="text-2xl font-bold text-yellow-700">AED 5.1M</span>
      </div>

      {/* Description */}
      <p className="text-white leading-relaxed text-sm md:text-base mb-6">
        Within The Wilds by Aldar, residents find exceptional facilities that advance their everyday living standards. 
        The community center comprises multiple wellness amenities such as modern fitness centers along with yoga areas and meditation rooms, 
        coupled with jogging paths and cycling paths that wind through greenery areas. The façade positions itself as a sanctuary of mind and 
        body wellness which shapes living patterns promoting complete health for residents.
      </p>

      <p className="text-white leading-relaxed text-sm md:text-base mb-6">
        Family residents will benefit from multiple kid-friendly amenities including designed playgrounds with splash areas and recreation zones. 
        Outdoor sports facilities include diverse courts, exercise areas, and a swimming pool for people who enjoy athletic lifestyles. 
        The community provides its residents with modern social areas including BBQ spaces, community facilities, and local shopping venues 
        that promote neighborly interaction.
      </p>

      {/* Key Facilities */}
      <h3 className="text-lg font-bold text-yellow-700 mb-4">Key Facilities:</h3>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-white text-sm md:text-base">
        <li>Cycling Trails</li>
        <li>Rock Climbing Walls</li>
        <li>Multipurpose Plazas</li>
        <li>Community Halls</li>
        <li>Health Clinics</li>
        <li>Retail Outlets</li>
        <li>Kids Play Area</li>
        <li>F&B Outlets</li>
        <li>Spas & Fitness Centers</li>
      </ul>
    </section>
    </div>
  )
}

export default page