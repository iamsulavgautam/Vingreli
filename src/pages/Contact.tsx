"use client";
import { Phone, Mail, MapPin, PhoneCall } from "lucide-react";

function Contact() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-[40vh] mb-16">
        <div className="absolute inset-0">
          <img
            src="Contact-Banner.JPG"
            className="w-full h-full object-cover"
            alt="Contact Us"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-white text-5xl md:text-6xl font-serif mb-4">
            Contact Us
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl">
            Get in touch with us for bookings and inquiries
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-serif text-emerald-900 mb-8">
              Send us a message
            </h2>
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="space-y-6"
            >
              <input
                type="hidden"
                name="access_key"
                value="4e21afdd-2744-471d-a213-27cf17cf8792"
              />

              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-2 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  name="message"
                  required
                  className="w-full px-4 py-2 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 h-32"
                  placeholder="Your message"
                ></textarea>
              </div>

              {/* Honeypot Spam Protection */}
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                style={{ display: "none" }}
              />

              <button
                type="submit"
                className="bg-emerald-700 text-white px-8 py-3 rounded-lg hover:bg-emerald-800 transition"
              >
                Submit Form
              </button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div>
            <h2 className="text-3xl font-serif text-emerald-900 mb-8">
              Contact Information
            </h2>
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-emerald-700 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <div className="space-y-1">
                    <a
                      href="tel:+977-82-563749"
                      className="text-gray-600 hover:text-emerald-700 transition flex items-center gap-1"
                    >
                      <PhoneCall className="w-4 h-4" />
                      +977-82-563749
                    </a>
                    <a
                      href="https://wa.me/9779706051033"
                      className="text-gray-600 hover:text-emerald-700 transition flex items-center gap-1"
                    >
                      <img
                        src="/WhatsApp.svg"
                        alt="WhatsApp"
                        className="w-4 h-4"
                      />
                      +977-9706051033
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-emerald-700 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">vingreli.village@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-emerald-700 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-gray-600">
                    Vingreli Village Resort
                    <br />
                    Ghorahi-15, Dang
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-lg overflow-hidden shadow-lg h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3370.533268828758!2d82.48957127518202!3d28.02865261124747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3997946bf0999073%3A0xc17a316f918f7908!2sVingreli%20Village%20Resort!5e1!3m2!1sen!2snp!4v1743350615613!5m2!1sen!2snp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
