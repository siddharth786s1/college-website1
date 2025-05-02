# ENCT College Website

## Overview
This project is a comprehensive website for ENCT (Engineering and Computing Technology) College. It features detailed information about the institution, academic programs, faculty, student resources, admissions, and campus life.

## Features
- **Responsive Design**: Built with React and Tailwind CSS for a fully responsive experience across all devices
- **Student Portal**: Information for current and prospective students
- **Academic Programs**: Detailed course catalogs and program descriptions
- **Faculty Profiles**: Information about faculty members and their expertise
- **News & Events**: Latest campus news and upcoming events
- **Admissions**: Application process and requirements
- **Contact Forms**: Interactive forms for inquiries and feedback

## Technology Stack
- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Development Tools**: ESLint, TypeScript

## Project Structure
```
src/
  ├── components/
  │   ├── admissions/     # Admissions-related components
  │   ├── home/           # Homepage components
  │   ├── layout/         # Layout components (navbar, footer)
  │   └── ui/             # Reusable UI components
  ├── types/              # TypeScript type definitions
  ├── App.tsx             # Main application component
  ├── index.css           # Global styles
  └── main.tsx            # Application entry point
```

## Getting Started

### Prerequisites
- Node.js (v16.0.0 or later)
- npm (v7.0.0 or later)

### Installation
1. Clone the repository
   ```bash
   git clone https://github.com/your-username/college-website1.git
   cd college-website1
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to http://localhost:5173

### Building for Production
```bash
npm run build
```

## Development Guidelines
- Follow the existing component structure for new features
- Maintain TypeScript type safety throughout the project
- Use Tailwind CSS for styling to maintain consistency
- Follow ESLint guidelines for code quality

## License
[MIT License](LICENSE)

## Contact
For any inquiries, please contact [your-email@example.com](mailto:your-email@example.com)