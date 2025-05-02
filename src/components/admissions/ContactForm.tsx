import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { ContactFormData } from '../../types';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    studentType: 'prospective',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(null);
    
    try {
      // In a real implementation, this would be an API call to your Java backend
      // For now, we'll simulate a successful submission after a delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      console.log('Form submitted:', formData);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        studentType: 'prospective',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitSuccess(false);
      setErrorMessage('There was an error submitting your message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
      <h3 className="text-2xl font-bold text-blue-900 mb-6">Get in Touch</h3>
      
      {submitSuccess === true ? (
        <div className="bg-green-50 border border-green-200 text-green-800 rounded-md p-4 mb-6">
          <p className="font-medium">Thank you for your message!</p>
          <p>We've received your inquiry and will get back to you shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {submitSuccess === false && (
            <div className="bg-red-50 border border-red-200 text-red-800 rounded-md p-4 mb-6">
              <p className="font-medium">Submission Error</p>
              <p>{errorMessage}</p>
            </div>
          )}
          
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your full name"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="your.email@example.com"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="studentType" className="block text-gray-700 font-medium mb-2">
              I am a:
            </label>
            <select
              id="studentType"
              name="studentType"
              value={formData.studentType}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="prospective">Prospective Student</option>
              <option value="current">Current Student</option>
              <option value="parent">Parent/Guardian</option>
              <option value="alumni">Alumni</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div className="mb-4">
            <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
              Subject *
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your inquiry subject"
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Please describe your inquiry in detail..."
            ></textarea>
          </div>
          
          <Button
            type="submit"
            variant="primary"
            fullWidth
            className="py-3"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
          
          <p className="text-sm text-gray-600 mt-4">
            * Indicates required fields. We respect your privacy and will not share your information with third parties.
          </p>
        </form>
      )}
    </div>
  );
};

export default ContactForm;