import React, { useState, useEffect } from 'react';
import aboutData from '../data/about.json';

const Hero = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(aboutData);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!data) return null;

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 section-padding">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <div className="mb-8">
          <img
            src={data.profileImage}
            alt={data.name}
            className="w-32 h-32 rounded-full mx-auto mb-6 shadow-lg border-4 border-white dark:border-gray-700"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/128x128/3b82f6/ffffff?text=JD';
            }}
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4">
          {data.name}
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-primary-600 dark:text-primary-400 font-semibold mb-6">
          {data.title}
        </h2>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-4 max-w-2xl mx-auto">
          {data.tagline}
        </p>
        
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
          {data.bio}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={scrollToProjects}
            className="btn-primary animate-slide-up"
          >
            View My Work
          </button>
          <a
            href={`mailto:${data.email}`}
            className="btn-secondary animate-slide-up"
          >
            Get In Touch
          </a>
        </div>
        
        <div className="mt-12 animate-bounce">
          <button
            onClick={scrollToProjects}
            className="text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            aria-label="Scroll down"
          >
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
