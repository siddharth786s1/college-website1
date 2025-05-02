import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  imageUrl: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: "ENCT provided me with the skills and knowledge that helped me land my dream job at a leading tech company. The faculty's support and mentorship were invaluable.",
    name: 'Alex Johnson',
    role: 'Software Engineer, TechCorp',
    imageUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '2',
    quote: "The hands-on approach to learning at ENCT truly sets it apart. I gained practical experience alongside theoretical knowledge, making me well-prepared for the industry.",
    name: 'Samantha Lee',
    role: 'Data Scientist, Analytics Co.',
    imageUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '3',
    quote: "As an international student, I found ENCT to be a welcoming community. The diverse perspectives enriched my learning experience and broadened my horizons.",
    name: 'Raj Patel',
    role: 'Cybersecurity Analyst, SecureNet',
    imageUrl: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section className="py-20 bg-blue-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -left-10 -top-10 h-64 w-64 rounded-full bg-blue-700"></div>
        <div className="absolute right-0 top-1/4 h-80 w-80 rounded-full bg-blue-600"></div>
        <div className="absolute left-1/3 bottom-0 h-48 w-48 rounded-full bg-blue-800"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Students Say</h2>
          <p className="text-xl text-blue-100">
            Hear from our alumni about their experiences at ENCT and how it shaped their careers.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Carousel */}
          <div className="overflow-hidden">
            <div 
              className={`flex transition-transform duration-500 ease-in-out`}
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 md:p-10 flex flex-col md:flex-row items-center">
                    <div className="mb-6 md:mb-0 md:mr-8 flex-shrink-0">
                      <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-blue-700">
                        <img 
                          src={testimonial.imageUrl} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="mb-4 text-blue-300">
                        <Quote size={36} />
                      </div>
                      <blockquote className="text-lg md:text-xl italic mb-6">
                        "{testimonial.quote}"
                      </blockquote>
                      <div>
                        <p className="font-semibold text-lg">{testimonial.name}</p>
                        <p className="text-blue-200">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-4 md:-ml-6 bg-blue-800 rounded-full p-2 shadow-lg hover:bg-blue-700 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 -mr-4 md:-mr-6 bg-blue-800 rounded-full p-2 shadow-lg hover:bg-blue-700 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (isAnimating) return;
                  setIsAnimating(true);
                  setActiveIndex(index);
                  setTimeout(() => setIsAnimating(false), 500);
                }}
                className={`h-3 w-3 rounded-full transition-colors ${
                  activeIndex === index ? 'bg-white' : 'bg-blue-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;