export const blogPosts = [
    // JavaScript Ecosystem
    {
      id: 1,
      title: 'The Beauty of the JavaScript Ecosystem',
      content: 'JavaScript has become one of the most versatile programming languages in the world. From frontend frameworks like React, Vue, and Angular to backend platforms like Node.js, it powers a massive range of applications...',
      author: 'John Doe',
      date: 'October 18, 2024',
      category: 'JavaScript Ecosystem'
    },
    {
      id: 2,
      title: 'Understanding Asynchronous JavaScript',
      content: 'Asynchronous programming in JavaScript is crucial when dealing with tasks such as fetching data, working with APIs, and performing long-running operations. Promises, async/await, and callbacks are all tools...',
      author: 'Bob Martin',
      date: 'July 21, 2024',
      category: 'JavaScript Ecosystem'
    },
    {
      id: 3,
      title: 'A Guide to ES6+ Features',
      content: 'Since ES6, JavaScript has seen significant improvements with new features like arrow functions, template literals, destructuring, and more...',
      author: 'Alice Johnson',
      date: 'June 15, 2024',
      category: 'JavaScript Ecosystem'
    },
    
    // React
    {
      id: 4,
      title: 'Why React is Dominating Frontend Development',
      content: 'React is fast, modular, and has a massive ecosystem of libraries and tools. The virtual DOM and the component-based architecture make React incredibly efficient and maintainable for large applications...',
      author: 'Jane Smith',
      date: 'September 12, 2024',
      category: 'React'
    },
    {
      id: 5,
      title: 'React Hooks: Revolutionizing State Management',
      content: 'React Hooks, introduced in version 16.8, allow you to manage state and other React features without writing a class. Hooks like useState, useEffect, and custom hooks are game changers...',
      author: 'John Doe',
      date: 'May 22, 2024',
      category: 'React'
    },
    {
      id: 6,
      title: 'Optimizing Performance in React Applications',
      content: 'Performance optimization is crucial for React apps, especially in large-scale applications. Techniques such as memoization, code-splitting, and lazy loading help maintain efficiency...',
      author: 'Bob Martin',
      date: 'April 18, 2024',
      category: 'React'
    },
    
    // CSS & Styling
    {
      id: 7,
      title: 'Getting Started with Tailwind CSS',
      content: 'Tailwind CSS is a utility-first CSS framework that makes styling easy and consistent. Instead of writing custom CSS, you use utility classes that correspond to CSS properties, allowing for rapid development...',
      author: 'Alice Johnson',
      date: 'August 30, 2024',
      category: 'CSS & Styling'
    },
    {
      id: 8,
      title: 'Advanced Tailwind CSS Techniques',
      content: 'Once you are familiar with basic Tailwind CSS, you can explore advanced topics like creating custom utility classes, responsive design, and integrating it with frameworks like React...',
      author: 'Jane Smith',
      date: 'October 10, 2024',
      category: 'CSS & Styling'
    },
    {
      id: 9,
      title: 'CSS Grid vs. Flexbox: Which to Choose?',
      content: 'Both CSS Grid and Flexbox are powerful layout systems in modern web design. Understanding when to use each is essential for creating responsive, dynamic web applications...',
      author: 'John Doe',
      date: 'March 5, 2024',
      category: 'CSS & Styling'
    },
    
    // Backend Development
    {
      id: 10,
      title: 'Node.js: Building Scalable Server-Side Applications',
      content: 'Node.js has become a staple in backend development due to its event-driven architecture, scalability, and large ecosystem of libraries...',
      author: 'Bob Martin',
      date: 'June 12, 2024',
      category: 'Backend Development'
    },
    {
      id: 11,
      title: 'RESTful APIs with Express.js',
      content: 'Express.js is a minimalist web framework for Node.js. It makes building RESTful APIs straightforward with its simple routing and middleware functions...',
      author: 'Alice Johnson',
      date: 'July 10, 2024',
      category: 'Backend Development'
    },
    {
      id: 12,
      title: 'GraphQL vs REST: Understanding the Differences',
      content: 'GraphQL offers a more flexible and efficient way to interact with APIs compared to REST. It allows clients to specify exactly what data they need...',
      author: 'Jane Smith',
      date: 'April 28, 2024',
      category: 'Backend Development'
    },
    
    // Frontend Tools & Libraries
    {
      id: 13,
      title: 'Exploring Next.js for Server-Side Rendering',
      content: 'Next.js offers a hybrid static and server-side rendering solution for React applications, making it an ideal choice for performance and SEO optimization...',
      author: 'John Doe',
      date: 'May 5, 2024',
      category: 'Frontend Tools & Libraries'
    },
    {
      id: 14,
      title: 'State Management with Redux',
      content: 'Redux is a predictable state container for JavaScript applications. When managing complex states in large apps, Redux shines by providing a central store for all state changes...',
      author: 'Bob Martin',
      date: 'June 24, 2024',
      category: 'Frontend Tools & Libraries'
    },
    {
      id: 15,
      title: 'Sass: Writing Maintainable CSS with Ease',
      content: 'Sass extends CSS with features like variables, nesting, and mixins, making it easier to manage large stylesheets and create maintainable, reusable styles...',
      author: 'Alice Johnson',
      date: 'March 10, 2024',
      category: 'Frontend Tools & Libraries'
    },
  
    // General Development
    {
      id: 16,
      title: 'Version Control with Git: Best Practices',
      content: 'Git is an essential tool for modern development. Understanding best practices for branching, committing, and collaboration can greatly improve your workflow...',
      author: 'Jane Smith',
      date: 'April 4, 2024',
      category: 'General Development'
    },
    {
      id: 17,
      title: 'Agile Development: Embracing the Process',
      content: 'Agile development practices like Scrum and Kanban promote flexibility and continuous delivery. Learn how to implement agile methodologies effectively in your team...',
      author: 'John Doe',
      date: 'February 22, 2024',
      category: 'General Development'
    },
    {
      id: 18,
      title: 'Test-Driven Development: The Why and How',
      content: 'TDD is a development approach that emphasizes writing tests before the actual code. It helps prevent bugs and ensures better code quality...',
      author: 'Bob Martin',
      date: 'March 30, 2024',
      category: 'General Development'
    },
  
    // More Categories with Posts
    {
      id: 19,
      title: 'The Future of Web Development in 2024',
      content: 'Web development is evolving rapidly with new tools, frameworks, and practices. Predicting the trends that will dominate in 2024 is both exciting and crucial for developers...',
      author: 'Alice Johnson',
      date: 'January 2, 2024',
      category: 'Web Development Trends'
    },
    {
      id: 20,
      title: 'Web Security Best Practices',
      content: 'Security is critical for web applications. Following best practices like HTTPS, Content Security Policy, and using proper authentication methods helps safeguard your app...',
      author: 'Jane Smith',
      date: 'February 15, 2024',
      category: 'Web Security'
    },
    {
      id: 21,
      title: 'Automating Development Workflows with CI/CD',
      content: 'Continuous Integration and Continuous Deployment (CI/CD) automates the process of testing, building, and deploying code, helping teams deliver faster and more reliably...',
      author: 'John Doe',
      date: 'March 18, 2024',
      category: 'DevOps'
    },
    {
      id: 22,
      title: 'DevOps Culture: Bridging Development and Operations',
      content: 'DevOps is more than just tools—it’s a culture of collaboration between development and operations teams. Learn how to foster a productive DevOps environment...',
      author: 'Bob Martin',
      date: 'April 25, 2024',
      category: 'DevOps'
    },
    {
      id: 23,
      title: 'Exploring Docker for Containerization',
      content: 'Docker has revolutionized the way we develop, ship, and run applications by providing an easy way to containerize them. Learn how to get started with Docker in your development...',
      author: 'Alice Johnson',
      date: 'May 13, 2024',
      category: 'DevOps'
    },
    {
      id: 24,
      title: 'Building Fullstack Applications with MERN Stack',
      content: 'MERN (MongoDB, Express, React, Node) is a popular stack for fullstack development. Learn how to build robust applications using this stack...',
      author: 'Jane Smith',
      date: 'June 8, 2024',
      category: 'Fullstack Development'
    },
    {
      id: 25,
      title: 'Deploying Applications with AWS',
      content: 'Amazon Web Services offers a comprehensive platform for deploying, managing, and scaling applications. Get an introduction to deploying your applications on AWS...',
      author: 'John Doe',
      date: 'July 17, 2024',
      category: 'Cloud Computing'
    },
    {
      id: 26,
      title: 'Serverless Computing with AWS Lambda',
      content: 'Serverless computing removes the need for server management. AWS Lambda offers a powerful, event-driven platform for building scalable applications...',
      author: 'Bob Martin',
      date: 'August 21, 2024',
      category: 'Cloud Computing'
    },
  ];
  