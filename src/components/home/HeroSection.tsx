import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { Link } from '../ui/Link';

const HeroSection: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-blue-900 to-blue-700 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center opacity-20"></div>
      
      {/* Content Container */}
      <div className="relative container mx-auto px-4 py-32 md:py-40 flex flex-col items-center justify-center min-h-screen">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
            Excellence in National Computing and Technology
          </h1>
          <p className="text-xl text-blue-100 mb-8 animate-fade-in-delay">
            Shaping the future through innovation, education, and technology.
            Join our community of learners and leaders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
            <Button
              variant="accent"
              size="lg"
              className="group"
            >
              Apply Now
              <ChevronRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-white border-white hover:bg-white/10"
            >
              Explore Programs
            </Button>
          </div>
        </div>
        
        {/* Stats/Quick Info */}
        <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl mx-auto animate-fade-up">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center text-white">
            <h3 className="text-5xl font-bold mb-2">25+</h3>
            <p className="text-blue-100">Degree Programs</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center text-white">
            <h3 className="text-5xl font-bold mb-2">94%</h3>
            <p className="text-blue-100">Graduate Employment</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center text-white">
            <h3 className="text-5xl font-bold mb-2">12:1</h3>
            <p className="text-blue-100">Student-Faculty Ratio</p>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
          <Link href="#featured-programs" className="text-white">
            <div className="h-10 w-6 border-2 border-white rounded-full flex justify-center">
              <div className="h-2 w-2 bg-white rounded-full mt-2 animate-scroll-indicator"></div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;