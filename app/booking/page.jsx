'use client';
import { useState } from 'react';

const servicesList = [
  'Injection at Home',
  'Infusion & Drips',
  'Wound Dressing',
  'NG Tube Feeding',
  'Foley Catheterization',
  'ECG at Home',
  'X-Ray & Ultrasound',
  'Physiotherapy',
  'Doctor Visit at Home',
  'Home Nursing Care',
  'Medicine Delivery',
  'Lab Test Sampling',
  'Counselling & Rehab',
];

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    date: '',
    time: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking Submitted:', formData);
    alert('Your booking has been submitted!');
    setFormData({ name: '', email: '', service: '', date: '', time: '' });
  };

  return (
    <div className="min-h-screen bg-emerald-50 py-16 px-4">
      <div className="max-w-xl mx-auto bg-white shadow-md rounded-xl p-8">
        <h2 className="text-3xl font-bold text-emerald-700 mb-6 text-center">
          Book a Home Healthcare Service
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              required
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              required
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Service</label>
            <select
              name="service"
              value={formData.service}
              required
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="">-- Select a Service --</option>
              {servicesList.map((service, index) => (
                <option key={index} value={service}>{service}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                required
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700">Time</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                required
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-md transition duration-300"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
}