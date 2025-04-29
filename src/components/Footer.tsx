import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { PhoneCall } from "lucide-react";

function Footer() {
  const navigate = useNavigate();

  const currentYear = new Date().getFullYear();

  const handleButtonClick = () => {
    navigate("/contact");
  };

  return (
    <footer className="bg-emerald-950 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center mb-6">
              <img src="/logo.svg" alt="Logo" className="h-6 w-auto mr-2" />
              <h3 className="font-serif">Vingreli Village Resort</h3>
            </div>
            <p className="text-emerald-300 text-sm">
              Vingreli Village Resort
              <br />
              Ghorahi-15, Dang
              <br />
              <a href="tel:+977-82-563749" className="hover:text-white transition flex items-center gap-1">
                <PhoneCall className="w-4 h-4" />
                +977-82-563749
              </a>
              <a href="https://wa.me/9779706051033" className="hover:text-white transition flex items-center gap-1">
                <img src="/WhatsApp.svg" alt="WhatsApp" className="w-4 h-4" />
                +977-9706051033
              </a>
              <br />
              vingreli.village@gmail.com
            </p>
          </div>
          <div>
            <h4 className="font-serif mb-4">Quick Links</h4>
            <ul className="space-y-2 text-emerald-300">
              <li>
                <Link to="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/facilities" className="hover:text-white transition">
                  Facilities
                </Link>
              </li>
              <li>
                <Link to="/rooms" className="hover:text-white transition">
                  Rooms
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              {/* Custom Facebook SVG */}
              <Link
                to="https://www.facebook.com/vingrelivillage"
                target="_blank"
                className="text-emerald-300 hover:text-white transition"
              >
                <img src="fb.svg" alt="Facebook" className="w-5 h-5" />
              </Link>
              <Link
                to="https://www.esewahotels.com/hotel/vingreli-village-resort"
                target="_blank"
                className="text-emerald-300 hover:text-white transition"
              >
                <img src="/esewa.svg" alt="Esewa" className="w-5 h-5" />
              </Link>

              <Link
                to="https://www.tripadvisor.com/Hotel_Review-g8131419-d8120971-Reviews-Vingreli_Village_Resort-Ghorahi_Rapti_Zone_Mid_Western_Region.html"
                target="_blank"
                className="text-emerald-300 hover:text-white transition"
              >
                <img src="ta.svg" alt="TA" className="w-5 h-5" />
              </Link>

              <Link
                to="https://wa.me/9779706051033"
                target="_blank"
                className="text-emerald-300 hover:text-white transition"
              >
                <img src="/WhatsApp.svg" alt="WhatsApp" className="w-5 h-5" />
              </Link>
            </div>
          </div>
          <div>
            <h4 className="font-serif mb-4">Contact Us</h4>
            <p className="text-white-300 text-sm mb-4">
              Contact us for room booking inquiries
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 w-full bg-emerald-900 text-white rounded-l-full focus:outline-none focus:ring-2 focus:ring-emerald-600"
              />
              <button
                onClick={handleButtonClick}
                className="bg-emerald-700 px-6 py-2 rounded-r-full hover:bg-emerald-600 transition"
              >
                Join
              </button>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-emerald-800 text-center text-emerald-300 text-sm">
          © {currentYear} Vingreli Village Resort. All rights reserved.
          <div>
            Made with ❤️ by{" "}
            <a href="https://virza.tech" target="_blank" className="font-bold">
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-[length:200%_200%] bg-clip-text text-transparent animate-[gradientMove_3s_infinite_linear]">
                Virza
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
