import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/home/HeroSection';
import FeaturedPrograms from './components/home/FeaturedPrograms';
import NewsEvents from './components/home/NewsEvents';
import TestimonialsSection from './components/home/TestimonialsSection';
import ContactForm from './components/admissions/ContactForm';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main>
        <HeroSection />
        <FeaturedPrograms />
        <NewsEvents />
        <TestimonialsSection />
        
        {/* Campus Visit Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                  Visit Our Campus
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Experience ENCT firsthand by scheduling a campus tour. Meet faculty, explore our facilities, and see what makes our college unique.
                </p>
                <p className="text-gray-700 mb-8">
                  Our campus tours are available Monday through Friday, and special Saturday tours can be arranged for prospective students and families. 
                </p>
                <ContactForm />
              </div>
              
              <div className="w-full md:w-1/2">
                <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="ENCT Campus" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-blue-900/20"></div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="h-48 rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                      alt="ENCT Library" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="h-48 rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src="https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                      alt="ENCT Computer Lab" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;