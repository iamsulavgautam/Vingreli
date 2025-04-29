import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';

interface Room {
  id: number;
  title: string;
  description: string;
  price: number;
  image_url: string;
  amenities: string[];
}

function AdminDashboard() {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [amenities, setAmenities] = useState('');
  const [editingRoom, setEditingRoom] = useState<Room | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
    fetchRooms();
  }, []);

  async function checkAuth() {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      navigate('/admin');
    }
  }

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

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const { error } = await supabase
        .from('rooms')
        .insert([
          {
            title,
            description,
            price: parseFloat(price),
            image_url: imageUrl,
            amenities: amenities.split(',').map(item => item.trim())
          }
        ]);

      if (error) throw error;

      // Reset form
      setTitle('');
      setDescription('');
      setPrice('');
      setImageUrl('');
      setAmenities('');

      // Refresh rooms list
      fetchRooms();
    } catch (error) {
      console.error('Error adding room:', error);
    }
  }

  async function handleDelete(id: number) {
    try {
      const { error } = await supabase
        .from('rooms')
        .delete()
        .eq('id', id);

      if (error) throw error;
      fetchRooms();
    } catch (error) {
      console.error('Error deleting room:', error);
    }
  }

  function handleEdit(room: Room) {
    setEditingRoom(room);
    setTitle(room.title);
    setDescription(room.description);
    setPrice(room.price.toString());
    setImageUrl(room.image_url);
    setAmenities(room.amenities.join(', '));
    setIsEditing(true);
  }

  function handleCancelEdit() {
    setEditingRoom(null);
    setTitle('');
    setDescription('');
    setPrice('');
    setImageUrl('');
    setAmenities('');
    setIsEditing(false);
  }

  async function handleUpdate(e: React.FormEvent) {
    e.preventDefault();
    if (!editingRoom) return;

    try {
      const { error } = await supabase
        .from('rooms')
        .update({
          title,
          description,
          price: parseFloat(price),
          image_url: imageUrl,
          amenities: amenities.split(',').map(item => item.trim())
        })
        .eq('id', editingRoom.id);

      if (error) throw error;

      // Reset form and refresh rooms
      handleCancelEdit();
      fetchRooms();
    } catch (error) {
      console.error('Error updating room:', error);
    }
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    navigate('/admin');
  }

  return (
    <div className="min-h-screen bg-gray-100 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Room Management</h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
          >
            Logout
          </button>
        </div>

        {/* Add/Edit Room Form */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold mb-4">
            {isEditing ? 'Edit Room' : 'Add New Room'}
          </h2>
          <form onSubmit={isEditing ? handleUpdate : handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Price per night</label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Image URL</label>
              <input
                type="url"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Amenities (comma-separated)</label>
              <input
                type="text"
                value={amenities}
                onChange={(e) => setAmenities(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                required
              />
            </div>
            <div className="flex gap-2">
              <button
                type="submit"
                className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700"
              >
                {isEditing ? 'Update Room' : 'Add Room'}
              </button>
              {isEditing && (
                <button
                  type="button"
                  onClick={handleCancelEdit}
                  className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Rooms List */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Existing Rooms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rooms.map((room) => (
              <div key={room.id} className="border rounded-lg overflow-hidden">
                <img
                  src={room.image_url}
                  alt={room.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold">{room.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{room.description}</p>
                  <p className="text-emerald-600 font-semibold">रु {room.price}/night</p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {room.amenities.map((amenity, index) => (
                      <span key={index} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                        {amenity}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2 mt-4">
                    <button
                      onClick={() => handleEdit(room)}
                      className="bg-emerald-100 text-emerald-600 px-3 py-1 rounded hover:bg-emerald-200"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(room.id)}
                      className="bg-red-100 text-red-600 px-3 py-1 rounded hover:bg-red-200"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;