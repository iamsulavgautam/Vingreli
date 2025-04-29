import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Utensils,
  Wifi,
  Car,
  Beer,
  Sofa,
  Waves,
} from "lucide-react";

function Home() {
  const seoKeywords =
    "Vingreli Village Resort, best hotel in Ghorahi, hotels in Dang, swimming pool in Ghorahi, luxury resort Dang, conference hall Ghorahi, wedding venue Dang, Tharu culture resort";

  return (
    <>
      <Helmet>
        <title>
          Vingreli Village Resort - Best Luxury Hotel in Ghorahi, Dang
        </title>
        <meta
          name="description"
          content="Experience luxury at Vingreli Village Resort, the finest hotel in Ghorahi, Dang. Featuring swimming pool, traditional rooms, conference halls, and authentic Tharu cuisine."
        />
        <meta name="keywords" content={seoKeywords} />
      </Helmet>
      <div>
        {/* Hero Section */}
        <div className="relative h-screen">
          <div className="absolute inset-0">
            <img
              src="Homepage.jpg"
              className="w-full h-full object-cover"
              alt="Vingreli Village Resort"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          </div>
          <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
            <h2 className="text-white text-2xl md:text-4xl font-light mb-4">
              Welcome to Vingreli Resort
            </h2>
            <h1 className="text-white text-5xl md:text-7xl font-serif mb-6">
              Experience
              <br />
              Tropical Luxury
            </h1>
            <p className="text-white text-lg md:text-xl mb-8 max-w-lg font-light">
              Discover the perfect blend of traditional charm and modern comfort
              at Vingreli Village Resort.
            </p>
            <div className="flex space-x-4">
              <Link
                to="https://www.esewahotels.com/hotel/vingreli-village-resort"
                target="blank_"
                className="bg-emerald-700 text-white px-8 py-3 rounded-full hover:bg-emerald-800 transition shadow-lg"
              >
                Book Your Stay
              </Link>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="py-20 bg-emerald-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif text-emerald-900 mb-4">
                Resort Amenities
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Immerse yourself in luxury with our world-class amenities
                designed for your ultimate comfort and relaxation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Waves className="w-8 h-8" />,
                  title: "Swimming Pool",
                  desc: "Luxury swimming pool",
                },
                {
                  icon: <Utensils className="w-8 h-8" />,
                  title: "Fine Dining",
                  desc: "Traditional and international cuisine",
                },
                {
                  icon: <Sofa className="w-8 h-8" />,
                  title: "Cozy Lounge",
                  desc: "Cozy Lounge in a spacious area",
                },
                {
                  icon: <Wifi className="w-8 h-8" />,
                  title: "Free Wi-Fi",
                  desc: "High-speed internet throughout",
                },
                {
                  icon: <Beer className="w-8 h-8" />,
                  title: "Bar",
                  desc: "Personalized bar for fun parties",
                },
                {
                  icon: <Car className="w-8 h-8" />,
                  title: "Parking",
                  desc: "Big parking area throughout",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition group"
                >
                  <div className="text-emerald-700 mb-4 transform group-hover:scale-110 transition">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Room Showcase */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16">
              <div className="flex flex-col justify-center">
                <h2 className="text-4xl font-serif text-emerald-900 mb-6">
                  Party Palace
                </h2>
                <p className="text-gray-600 mb-8">
                  Our grand Party Palace blends traditional elegance with modern features, offering customizable décor, gourmet catering, and seamless service. Celebrate every occasion in a setting crafted for unforgettable memories.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Spacious banquet hall",
                    "Gourmet catering",
                    "Custom event décor",
                    "Professional event coordination",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="tel:+977-82-563749"
                  className="bg-emerald-700 text-white px-8 py-3 rounded-full hover:bg-emerald-800 transition w-fit"
                >
                  Call Us
                </Link>
              </div>
              <div className="relative">
                <img
                  src="1500.JPG"
                  className="rounded-2xl shadow-2xl"
                  alt="Luxury Villa"
                />
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-emerald-800 to-emerald-600 text-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform">
                  <p className="font-serif text-xl font-bold">Book Now</p>
                  <p className="text-emerald-100">Unforgettable Memories</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-20 bg-emerald-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* MD Image and Info */}
              <div className="space-y-6">
                <div className="relative">
                  <img
                    src="MD.png"
                    alt="Managing Director"
                    className="rounded-2xl shadow-xl w-full"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-emerald-900 text-white p-6 rounded-xl shadow-lg">
                    <p className="font-serif text-xl">Niranjan Rajbhandari</p>
                    <p className="text-emerald-200">Managing Director</p>
                  </div>
                </div>
              </div>

              {/* Message Content */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-4xl font-serif text-emerald-900">
                    Message from MD
                  </h2>

                  <div className="space-y-4 text-gray-600">
                    <p>
                      Namaste! It gives me immense pleasure to welcome you to
                      Vingreli Village Resort, where traditional Nepali
                      hospitality meets modern luxury. Since our establishment,
                      we have strived to create not just a resort, but a
                      sanctuary where our guests can experience the authentic
                      charm of Dang while enjoying world-class amenities.
                    </p>
                    <p>
                      Our resort stands as a testament to the rich cultural
                      heritage of Nepal, specifically designed to offer you a
                      unique blend of comfort, luxury, and cultural immersion.
                      Every detail, from our architecture to our services, has
                      been carefully curated to ensure your stay with us is
                      nothing short of extraordinary.
                    </p>
                    <p>
                      We look forward to welcoming you and providing you with an
                      unforgettable stay at Vingreli Village Resort.
                    </p>
                  </div>
                  <div className="pt-6">
                    <p className="text-emerald-900 font-serif text-xl">
                      Niranjan Rajbhandari
                    </p>
                    <p className="text-gray-600">Managing Director</p>
                    <p className="text-gray-600">Vingreli Village Resort</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="py-20 bg-emerald-900 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif text-center mb-16">
              Guest Experiences
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  text: "An absolute paradise! The hotel rooms exceeded all our expectations. The staff's attention to detail was impeccable.",
                  author: "Abishek Gmimire",
                  rating: 5,
                },
                {
                  text: "The perfect blend of luxury and traditional charm. The swimming pool was incredibly rejuvenating.",
                  author: "Saurav Gautam",
                  rating: 5,
                },
                {
                  text: "Breathtaking services, excellent service, and the most peaceful vacation we've ever had.",
                  author: "Sulav Paudel",
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <div key={index} className="bg-emerald-800 p-8 rounded-2xl">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-lg mb-4 italic">"{testimonial.text}"</p>
                  <p className="text-emerald-300">{testimonial.author}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
