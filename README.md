# Jon Hidalgo - Portfolio

A modern, responsive portfolio website built with React and TailwindCSS showcasing my skills, projects, and experience as a Computer Science student.

## Features

- **Responsive Design**: Fully responsive across all device sizes
- **Modern UI**: Clean, professional design with smooth animations
- **Modular Components**: Well-organized, reusable React components
- **TailwindCSS**: Utility-first CSS framework for rapid styling
- **Smooth Navigation**: Smooth scrolling between sections
- **Contact Form**: Functional contact form with validation
- **Project Showcase**: Detailed project cards with technologies and features

## Sections

1. **Hero Section**: Introduction with call-to-action buttons
2. **Skills Section**: Organized technical skills by category
   - Languages: Python, JavaScript, TypeScript, SQL, HTML5, CSS, Bash, Zsh
   - Tools: AWS, Docker, Git, REST & GraphQL APIs, Postman, Tableau, Jira, Trello
   - Libraries & Frameworks: pandas, NumPy, scikit-learn, React.js, Node.js, PostgreSQL, MongoDB
3. **Projects Section**: Featured projects including:
   - fbref-scraper (Python data scraping project)
   - E-commerce business (25,000+ customers)
4. **Experience Section**: Placeholder for professional experience
5. **Contact Section**: Contact form and social links

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Available Scripts

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production
- `npm run eject`: Ejects from Create React App (one-way operation)

## Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation header with mobile menu
│   ├── Hero.js            # Hero section with introduction
│   ├── Skills.js          # Skills section with grouped technologies
│   ├── Projects.js        # Projects showcase with detailed cards
│   ├── Experience.js      # Experience section (placeholder)
│   ├── Contact.js         # Contact form with validation
│   └── Footer.js          # Footer with links and social media
├── App.js                 # Main app component
├── index.js              # React DOM entry point
└── index.css             # Global styles and TailwindCSS imports
```

## Customization

### Personal Information
- Update name and introduction in `src/components/Hero.js`
- Modify contact information in `src/components/Contact.js`
- Update social media links in `src/components/Footer.js`

### Projects
- Edit project data in `src/components/Projects.js`
- Add GitHub and live demo links
- Update project descriptions and technologies

### Skills
- Modify skill groups in `src/components/Skills.js`
- Add or remove technologies from each category

### Styling
- Customize colors in `tailwind.config.js`
- Modify component styles using TailwindCSS classes
- Add custom CSS in `src/index.css`

## Technologies Used

- **React**: JavaScript library for building user interfaces
- **TailwindCSS**: Utility-first CSS framework
- **PostCSS**: CSS processing tool
- **Create React App**: Bootstrap for React applications

## Deployment

To build for production:

```bash
npm run build
```

This creates a `build` folder with optimized files ready for deployment to any static hosting service like Netlify, Vercel, or GitHub Pages.

## Contributing

This is a personal portfolio project. Feel free to fork and customize for your own use.

## License

This project is open source and available under the [MIT License](LICENSE).