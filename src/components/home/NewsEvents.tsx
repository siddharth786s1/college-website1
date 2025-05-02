import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from '../ui/Link';
import { NewsItem, Event } from '../../types';

const newsItems: NewsItem[] = [
  {
    id: '1',
    title: 'ENCT Launches New Quantum Computing Research Center',
    summary: 'The state-of-the-art facility will advance research in quantum algorithms and applications.',
    content: '',
    date: '2025-03-15',
    category: 'Research',
    imageUrl: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '2',
    title: 'Computer Science Program Receives Top Accreditation',
    summary: 'Our CS program has been recognized for excellence in curriculum and student outcomes.',
    content: '',
    date: '2025-03-10',
    category: 'Academics',
    imageUrl: 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '3',
    title: 'ENCT Students Win National Hackathon Competition',
    summary: 'A team of four undergraduate students developed an innovative healthcare application.',
    content: '',
    date: '2025-03-05',
    category: 'Student Achievement',
    imageUrl: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

const events: Event[] = [
  {
    id: '1',
    title: 'Spring Open House',
    description: 'Tour our campus and learn about our programs and admission process.',
    location: 'Main Campus',
    startDate: '2025-04-15',
    time: '10:00 AM - 3:00 PM',
    category: 'Admissions',
    imageUrl: 'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '2',
    title: 'Tech Industry Career Fair',
    description: 'Connect with over 50 employers from the technology sector.',
    location: 'Student Center',
    startDate: '2025-04-20',
    time: '1:00 PM - 5:00 PM',
    category: 'Career',
    imageUrl: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '3',
    title: 'AI and Society Symposium',
    description: 'Explore the ethical implications of artificial intelligence in modern society.',
    location: 'Conference Center',
    startDate: '2025-04-25',
    time: '9:00 AM - 4:00 PM',
    category: 'Academic',
    imageUrl: 'https://images.pexels.com/photos/935979/pexels-photo-935979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

const NewsEvents: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'news' | 'events'>('news');

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">News & Upcoming Events</h2>
          <p className="text-lg text-gray-600">
            Stay updated with the latest happenings at ENCT. From groundbreaking research to exciting campus events.
          </p>
        </div>

        {/* Tabs */}
        <div className="max-w-md mx-auto mb-12 flex rounded-lg overflow-hidden border border-gray-200">
          <button
            className={`flex-1 py-3 px-6 text-center ${
              activeTab === 'news'
                ? 'bg-blue-700 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
            onClick={() => setActiveTab('news')}
          >
            Latest News
          </button>
          <button
            className={`flex-1 py-3 px-6 text-center ${
              activeTab === 'events'
                ? 'bg-blue-700 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
            onClick={() => setActiveTab('events')}
          >
            Upcoming Events
          </button>
        </div>

        {/* News Content */}
        {activeTab === 'news' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsItems.map((news) => (
              <div key={news.id} className="bg-white rounded-lg overflow-hidden shadow-md h-full flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img
                    src={news.imageUrl}
                    alt={news.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-4">
                    {news.category}
                  </span>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">{news.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{news.summary}</p>
                  <div className="flex justify-between items-center mt-auto">
                    <span className="text-sm text-gray-500">{formatDate(news.date)}</span>
                    <Link
                      href={`/news-events/news/${news.id}`}
                      className="text-blue-700 hover:text-blue-800 font-medium"
                    >
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Events Content */}
        {activeTab === 'events' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.map((event) => (
              <div key={event.id} className="bg-white rounded-lg overflow-hidden shadow-md h-full flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img
                    src={event.imageUrl}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-teal-100 text-teal-800 mb-4">
                    {event.category}
                  </span>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{event.description}</p>
                  <div className="space-y-2 mt-auto">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar size={16} className="mr-2" />
                      <span>{formatDate(event.startDate)}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock size={16} className="mr-2" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm text-gray-600">{event.location}</span>
                      <Link
                        href={`/news-events/events/${event.id}`}
                        className="text-blue-700 hover:text-blue-800 font-medium"
                      >
                        Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <Link
            href={activeTab === 'news' ? '/news-events/news' : '/news-events/events'}
            className="inline-flex items-center text-blue-700 hover:text-blue-800 font-medium text-lg"
          >
            View all {activeTab === 'news' ? 'news' : 'events'}
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;