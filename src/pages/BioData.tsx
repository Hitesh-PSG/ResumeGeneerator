import React from 'react';
import { Mail, Phone, MapPin, Calendar } from 'lucide-react';

const BioData = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg my-8 rounded-lg">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-indigo-900 mb-4">Bio Data</h1>
        <img 
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop"
          alt="Profile"
          className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Personal Information */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-indigo-900 border-b-2 border-indigo-900 mb-4">Personal Information</h2>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Calendar className="w-5 h-5 text-indigo-600" />
              <div>
                <p className="font-semibold">Date of Birth</p>
                <p className="text-gray-600">24th January 2004</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-indigo-600" />
              <div>
                <p className="font-semibold">Address</p>
                <p className="text-gray-600">Bengaluru, Karnataka</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-indigo-600" />
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-gray-600">hiteshpg24@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-indigo-600" />
              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-gray-600">8088511727</p>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Information */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-indigo-900 border-b-2 border-indigo-900 mb-4">Additional Information</h2>
          
          <div className="space-y-4">
            <div>
              <p className="font-semibold">Languages Known</p>
              <p className="text-gray-600">English, Hindi, Kannada</p>
            </div>

            <div>
              <p className="font-semibold">Interests & Hobbies</p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Competitive Programming</li>
                <li>Open Source Contributing</li>
                <li>Web Development</li>
                <li>Problem Solving</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold">Career Objective</p>
              <p className="text-gray-600">
                Aspiring software engineer with a strong foundation in computer science, 
                seeking opportunities to apply and enhance my skills in developing innovative 
                solutions while contributing to meaningful projects.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BioData;