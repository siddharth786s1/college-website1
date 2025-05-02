export interface Course {
  id: string;
  code: string;
  name: string;
  description: string;
  credits: number;
  department: string;
  level: string;
  prerequisites?: string[];
  imageUrl?: string;
}

export interface Faculty {
  id: string;
  name: string;
  title: string;
  department: string;
  email: string;
  phone?: string;
  office?: string;
  bio: string;
  research: string[];
  imageUrl: string;
}

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  content: string;
  date: string;
  category: string;
  author?: string;
  imageUrl: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  location: string;
  startDate: string;
  endDate?: string;
  time: string;
  category: string;
  imageUrl?: string;
}

export interface Department {
  id: string;
  name: string;
  description: string;
  chair: string;
  courses: string[];
  faculty: string[];
  imageUrl?: string;
}

export interface Program {
  id: string;
  name: string;
  degree: string;
  description: string;
  duration: string;
  department: string;
  requirements: string[];
  career: string[];
  imageUrl?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  studentType: string;
}

export interface ApplicationFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  program: string;
  term: string;
  education: {
    highSchool: string;
    gpa: string;
    graduationYear: string;
  };
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'faculty' | 'admin';
  department?: string;
  studentId?: string;
  facultyId?: string;
}