import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

interface Room {
  id: number;
  title: string;
  description: string;
  price: number;
  image_url: string;
  amenities: string[];
}

function Rooms() {
  const [rooms, setRooms] = useState<Room[]>([]);

  useEffect(() => {
    fetchRooms();
  }, []);

  async function fetchRooms() {
    try {
      const { data, error } = await supabase
        .from('rooms')
        .select('*')
        .order('id', { ascending: true });

      if (error) throw error;
      if (data) setRooms(data);
    } catch (error) {
      console.error('Error fetching rooms:', error);
    }
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-[40vh] mb-16">
        <div className="absolute inset-0">
          <img 
            src="Homepage.jpg" 
            className="w-full h-full object-cover"
            alt="Our Rooms"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-white text-5xl md:text-6xl font-serif mb-4">Our Rooms</h1>
          <p className="text-white text-lg md:text-xl max-w-2xl">
            Experience luxury and comfort in our carefully designed rooms
          </p>
        </div>
      </div>

      {/* Rooms Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div key={room.id} className="bg-white rounded-2xl shadow-lg overflow-hidden group">
              <div className="relative h-64">
                <img 
                  src={room.image_url} 
                  alt={room.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full shadow-lg">
                  <span className="text-lg font-semibold text-emerald-600">रु {room.price}/night</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{room.title}</h3>
                <p className="text-gray-600 mb-4">{room.description}</p>
                <div className="flex flex-wrap gap-2">
                  {room.amenities.map((amenity, index) => (
                    <span key={index} className="bg-emerald-100 text-emerald-800 text-sm px-3 py-1 rounded-full">
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Rooms;