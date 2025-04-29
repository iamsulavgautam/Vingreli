import { Users, School, Home, Utensils, Podcast, ChefHat } from 'lucide-react';

function Facilities() {
  const facilities = [
    {
      icon: <Users className="w-12 h-12" />,
      name: "BANQUET HALL",
      description: "Perfect for weddings and large gatherings with capacity up to 500 guests",
      image: "Banquet.jpg"
    },
    {
      icon: <Podcast className="w-12 h-12" />,
      name: "CONFERENCE HALL",
      description: "State-of-the-art conference facilities with modern AV equipment",
      image: "Conference.jpg"
    },
    {
      icon: <School className="w-12 h-12" />,
      name: "SEMINAR HALL",
      description: "Ideal for corporate meetings and educational seminars",
      image: "Seminar.JPG"
    },
    {
      icon: <ChefHat className="w-12 h-12" />,
      name: "RESTURANT",
      description: "Luxury Resturant",
      image: "Resturant.jpg"
    },
    {
      icon: <Home className="w-12 h-12" />,
      name: "BAITHAK HALL",
      description: "Traditional meeting space with authentic décor",
      image: "Baithak.jpg"
    },
    {
      icon: <Utensils className="w-12 h-12" />,
      name: "FOODLAND HALL",
      description: "Multi-cuisine restaurant with live cooking stations",
      image: "Foodland.jpg"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-[40vh] mb-16">
        <div className="absolute inset-0">
          <img 
            src="Swimming.jpg" 
            className="w-full h-full object-cover"
            alt="Facilities"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-white text-5xl md:text-6xl font-serif mb-4">Our Facilities</h1>
          <p className="text-white text-lg md:text-xl max-w-2xl">
            Experience world-class amenities and services at Vingreli Village Resort
          </p>
        </div>
      </div>

      {/* Facilities Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden group">
              <div className="relative h-64">
                <img 
                  src={facility.image} 
                  alt={facility.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0  flex items-center justify-center">
                  <div className="text-white transform group-hover:scale-110 transition duration-500">
                    {facility.icon}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{facility.name}</h3>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Facilities;