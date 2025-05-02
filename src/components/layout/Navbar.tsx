import React, { useState, useEffect } from 'react';
import { Link } from '../ui/Link';
import { Menu, X, ChevronDown, Search, User } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

const navItems: NavItem[] = [
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'Mission & Vision', href: '/about/mission' },
      { label: 'History', href: '/about/history' },
      { label: 'Leadership', href: '/about/leadership' },
      { label: 'Campus', href: '/about/campus' },
    ],
  },
  {
    label: 'Academics',
    href: '/academics',
    children: [
      { label: 'Programs', href: '/academics/programs' },
      { label: 'Departments', href: '/academics/departments' },
      { label: 'Courses', href: '/academics/courses' },
      { label: 'Calendar', href: '/academics/calendar' },
    ],
  },
  {
    label: 'Admissions',
    href: '/admissions',
    children: [
      { label: 'Apply', href: '/admissions/apply' },
      { label: 'Requirements', href: '/admissions/requirements' },
      { label: 'Financial Aid', href: '/admissions/financial-aid' },
      { label: 'Visit', href: '/admissions/visit' },
    ],
  },
  {
    label: 'Faculty',
    href: '/faculty',
  },
  {
    label: 'Student Life',
    href: '/student-life',
    children: [
      { label: 'Housing', href: '/student-life/housing' },
      { label: 'Clubs', href: '/student-life/clubs' },
      { label: 'Events', href: '/student-life/events' },
      { label: 'Resources', href: '/student-life/resources' },
    ],
  },
  {
    label: 'News & Events',
    href: '/news-events',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (label: string) => {
    if (activeDropdown === label) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(label);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4 md:py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link
              href="/"
              className={`text-2xl font-bold ${
                scrolled ? 'text-blue-900' : 'text-white'
              }`}
            >
              ENCT
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`px-3 py-2 rounded hover:bg-blue-100 transition-colors ${
                    scrolled ? 'text-gray-800' : 'text-white'
                  }`}
                >
                  <span className="flex items-center">
                    {item.label}
                    {item.children && (
                      <ChevronDown size={16} className="ml-1" />
                    )}
                  </span>
                </Link>

                {item.children && activeDropdown === item.label && (
                  <div className="absolute left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button
              className={`p-2 rounded-full ${
                scrolled ? 'text-gray-600 hover:bg-gray-100' : 'text-white hover:bg-white/20'
              }`}
            >
              <Search size={20} />
            </button>
            <Link
              href="/login"
              className={`flex items-center ${
                scrolled
                  ? 'bg-blue-700 text-white'
                  : 'bg-white text-blue-900'
              } px-4 py-2 rounded-md hover:opacity-90 transition-opacity`}
            >
              <User size={18} className="mr-2" />
              <span>Login</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${
                scrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white rounded-lg mt-4 shadow-lg">
            <div className="p-4 space-y-3">
              {navItems.map((item) => (
                <div key={item.label} className="py-1">
                  {item.children ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(item.label)}
                        className="flex justify-between items-center w-full text-left px-3 py-2 rounded text-gray-800 hover:bg-blue-100"
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${
                            activeDropdown === item.label ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {activeDropdown === item.label && (
                        <div className="pl-4 mt-1 space-y-1 border-l-2 border-blue-200">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded"
                              onClick={() => setIsOpen(false)}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-3 py-2 rounded text-gray-800 hover:bg-blue-100"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-gray-200 flex flex-col space-y-3">
                <button className="flex items-center justify-center w-full px-3 py-2 rounded bg-gray-100 text-gray-800 hover:bg-gray-200">
                  <Search size={18} className="mr-2" />
                  <span>Search</span>
                </button>
                <Link
                  href="/login"
                  className="flex items-center justify-center w-full px-3 py-2 rounded bg-blue-700 text-white hover:bg-blue-800"
                  onClick={() => setIsOpen(false)}
                >
                  <User size={18} className="mr-2" />
                  <span>Login</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;