import React, { useState, useEffect } from 'react';
import aboutData from '../data/about.json';

const About = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(aboutData);
  }, []);

  if (!data) return null;

  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {data.bio}
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="card">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Location</h3>
                <p className="text-gray-600 dark:text-gray-400">{data.location}</p>
              </div>
              <div className="card">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Email</h3>
                <a 
                  href={`mailto:${data.email}`}
                  className="text-primary-600 dark:text-primary-400 hover:underline"
                >
                  {data.email}
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <img
              src={data.profileImage}
              alt={data.name}
              className="w-80 h-80 rounded-lg shadow-xl object-cover"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/320x320/3b82f6/ffffff?text=Profile';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
