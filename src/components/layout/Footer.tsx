import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from '../ui/Link';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">ENCT</h3>
            <p className="mb-4">
              Excellence in National Computing and Technology - Where innovation meets education.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="hover:text-blue-300 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-blue-300 transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/academics/programs" className="hover:text-blue-300 transition-colors">Academic Programs</Link>
              </li>
              <li>
                <Link href="/admissions/apply" className="hover:text-blue-300 transition-colors">Admissions</Link>
              </li>
              <li>
                <Link href="/news-events" className="hover:text-blue-300 transition-colors">News & Events</Link>
              </li>
              <li>
                <Link href="/faculty" className="hover:text-blue-300 transition-colors">Faculty Directory</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-300 transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-blue-300 transition-colors">Student Portal</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-300 transition-colors">Faculty Portal</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-300 transition-colors">Library</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-300 transition-colors">Research</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-300 transition-colors">Career Services</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-300 transition-colors">Alumni Network</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <address className="not-italic">
              <div className="flex items-start mb-2">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span>123 University Avenue, Techcity, TC 12345</span>
              </div>
              <div className="flex items-center mb-2">
                <Phone size={20} className="mr-2 flex-shrink-0" />
                <span>(123) 456-7890</span>
              </div>
              <div className="flex items-center mb-2">
                <Mail size={20} className="mr-2 flex-shrink-0" />
                <a href="mailto:info@enct.edu" className="hover:text-blue-300 transition-colors">
                  info@enct.edu
                </a>
              </div>
            </address>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center md:flex md:justify-between md:text-left">
          <p>&copy; {currentYear} ENCT. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <Link href="/privacy-policy" className="hover:text-blue-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-blue-300 transition-colors">Terms of Service</Link>
            <Link href="/accessibility" className="hover:text-blue-300 transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;