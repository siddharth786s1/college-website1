import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from '../ui/Link';

interface ProgramCard {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const programs: ProgramCard[] = [
  {
    id: '1',
    title: 'Computer Science',
    description: 'Study algorithms, programming languages, and computational systems to solve complex problems.',
    imageUrl: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: '/academics/programs/computer-science',
  },
  {
    id: '2',
    title: 'Data Science',
    description: 'Learn to analyze complex data sets and extract meaningful insights using statistical methods.',
    imageUrl: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: '/academics/programs/data-science',
  },
  {
    id: '3',
    title: 'Artificial Intelligence',
    description: 'Explore machine learning, neural networks, and AI applications that are reshaping industries.',
    imageUrl: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: '/academics/programs/artificial-intelligence',
  },
  {
    id: '4',
    title: 'Cybersecurity',
    description: 'Develop skills to protect systems and networks from digital attacks and security breaches.',
    imageUrl: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: '/academics/programs/cybersecurity',
  },
];

const FeaturedPrograms: React.FC = () => {
  return (
    <section id="featured-programs" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Featured Academic Programs</h2>
          <p className="text-lg text-gray-600">
            Discover our cutting-edge programs designed to prepare you for success in the rapidly evolving tech landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program) => (
            <div 
              key={program.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:translate-y-[-8px]"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={program.imageUrl} 
                  alt={program.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <Link 
                  href={program.link}
                  className="inline-flex items-center text-blue-700 hover:text-blue-800 font-medium"
                >
                  Learn more
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/academics/programs"
            className="inline-flex items-center text-blue-700 hover:text-blue-800 font-medium text-lg"
          >
            View all programs
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPrograms;