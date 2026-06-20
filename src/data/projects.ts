import type { Project } from '../types/project';

export const projects: Project[] = [
  // Hero Projects (first 4)
  {
    name: 'Ngobrol',
    category: 'Systems',
    shortDescription: 'Real-time chat application built with Rust',
    fullDescription: 'High-performance chat application demonstrating mastery of systems programming.',
    problem: 'Users needed lightweight messaging without heavy framework dependencies.',
    solution: 'Built with Rust using Tokio async runtime for non-blocking I/O operations.',
    techStack: ['Rust', 'Tokio', 'WebSocket', 'async-std'],
    features: [
      'Fast message delivery with sub-second latency',
      'Low memory footprint suitable for embedded systems',
      'Cross-platform support across major operating systems',
      'Clean architecture with separation of concerns'
    ],
    impact: 'Demonstrates expertise in modern systems programming with Rust and concurrency patterns.',
    githubUrl: 'https://github.com/inihikam/ngobrol',
    stars: 0,
    forks: 0
  },
  {
    name: 'FinTrack',
    category: 'Web Apps',
    shortDescription: 'Full-stack financial management application',
    fullDescription: 'Comprehensive finance tracking platform with Go backend and TypeScript frontend.',
    problem: 'Personal finance apps were either too simple or overly complex for daily use.',
    solution: 'Modern stack combining Go backend performance with React-based UI responsiveness.',
    techStack: ['Go', 'TypeScript', 'React', 'PostgreSQL', 'REST API'],
    features: [
      'Real-time expense tracking and categorization',
      'Visual spending analytics with chart integration',
      'Budget planning and goal setting',
      'Export reports in multiple formats'
    ],
    impact: 'Showcases full-stack capability with both robust backend and polished frontend.',
    githubUrl: 'https://github.com/inihikam/fintrack-go-backend',
    liveDemoUrl: '',
    stars: 0,
    forks: 0
  },
  {
    name: 'ERP',
    category: 'Systems',
    shortDescription: 'Enterprise Resource Planning system',
    fullDescription: 'Complete ERP solution demonstrating ability to build complex business software.',
    problem: 'Small businesses lacked affordable enterprise-grade management tools.',
    solution: 'Modular architecture with separate handling for inventory, sales, HR, and accounting.',
    techStack: ['Go', 'PostgreSQL', 'Redis', 'gRPC', 'Docker'],
    features: [
      'Multi-module design for scalability',
      'Role-based access control and permissions',
      'Audit logging for compliance requirements',
      'API-first design for integration capabilities'
    ],
    impact: 'Proves ability to architect and implement large-scale enterprise applications.',
    githubUrl: 'https://github.com/inihikam/erp',
    stars: 0,
    forks: 0
  },
  {
    name: 'Fraud Guard API',
    category: 'APIs',
    shortDescription: 'Fraud detection REST API service',
    fullDescription: 'Machine learning-powered fraud detection microservice for e-commerce platforms.',
    problem: 'E-commerce platforms struggled to detect fraudulent transactions in real-time.',
    solution: 'Lightweight API that returns fraud risk scores based on transaction pattern analysis.',
    techStack: ['Go', 'REST API', 'scikit-learn', 'JSON-LD', 'CORS'],
    features: [
      'Sub-100ms response time for fraud scoring',
      'Configurable risk threshold per merchant',
      'Detailed reason codes for flagged transactions',
      'Easy integration via standard REST endpoints'
    ],
    impact: 'Combines backend API expertise with practical ML deployment experience.',
    githubUrl: 'https://github.com/inihikam/fraud-guard-api',
    stars: 0,
    forks: 0
  },
  {
    name: 'asr-javanese-api',
    category: 'AI/ML',
    shortDescription: 'Javanese language speech recognition API',
    fullDescription: 'Automatic speech recognition system trained on Javanese language data.',
    problem: 'No ASR models existed for Javanese, limiting accessibility for native speakers.',
    solution: 'Fine-tuned wav2vec2 model on Javanese audio corpus with Flask API wrapper.',
    techStack: ['Python', 'Flask', 'PyTorch', 'wav2vec2', 'Hugging Face'],
    features: [
      'Accurate transcription of colloquial Javanese',
      'Streaming inference support',
      'Confidence scoring for each prediction',
      'REST API with audio file upload'
    ],
    impact: 'Unique contribution to NLP for underrepresented languages.',
    githubUrl: 'https://github.com/inihikam/asr-javanese-api',
    stars: 2,
    forks: 2
  },
  {
    name: 'finance-management',
    category: 'Web Apps',
    shortDescription: 'Personal finance management dashboard',
    fullDescription: 'Comprehensive budget tracking and expense management tool.',
    problem: 'Existing finance apps had poor UX and lack customization.',
    solution: 'Simple focused UI with customizable categories and goals.',
    techStack: ['JavaScript', 'Chart.js', 'LocalStorage', 'CSS Grid'],
    features: [
      'Quick-add expense entry',
      'Monthly spending summaries',
      'Customizable budget limits',
      'Data export functionality'
    ],
    impact: 'Practical tool that demonstrates clean UI design skills.',
    githubUrl: 'https://github.com/inihikam/finance-management',
    stars: 0,
    forks: 0
  },
  {
    name: 'web-sti-api',
    category: 'APIs',
    shortDescription: 'Educational institution REST API',
    fullDescription: 'Backend API supporting student information systems for educational institutions.',
    problem: 'Legacy school systems lacked modern RESTful interfaces.',
    solution: 'Clean API design with proper authentication and documentation.',
    techStack: ['Node.js', 'Express', 'PostgreSQL', 'JWT', 'Swagger'],
    features: [
      'Student and course CRUD operations',
      'Grade management endpoints',
      'Authentication via JWT tokens',
      'Auto-generated API documentation'
    ],
    impact: 'Real-world API used by actual educational organization.',
    githubUrl: 'https://github.com/inihikam/web-sti-api',
    stars: 0,
    forks: 0
  },
  {
    name: 'inventory-app',
    category: 'Web Apps',
    shortDescription: 'Inventory management web application',
    fullDescription: 'Full-featured inventory tracking system with barcode scanning support.',
    problem: 'Small retailers needed simple yet powerful inventory management.',
    solution: 'Web-based solution with barcode scanner integration and real-time stock updates.',
    techStack: ['PHP', 'Laravel', 'MySQL', 'Vue.js', 'Barcode.js'],
    features: [
      'Real-time stock tracking',
      'Barcode scanning support',
      'Low stock alerts',
      'Purchase order management'
    ],
    impact: 'Simplified inventory processes for multiple small businesses.',
    githubUrl: 'https://github.com/inihikam/inventory-app',
    stars: 0,
    forks: 0
  },
  {
    name: 'weather-dashboard',
    category: 'Web Apps',
    shortDescription: 'Weather forecasting dashboard',
    fullDescription: 'Beautiful weather dashboard with multi-city support and forecasts.',
    problem: 'Users wanted a single view for weather across multiple locations.',
    solution: 'Integrated multiple weather APIs into a unified responsive dashboard.',
    techStack: ['TypeScript', 'OpenWeather API', 'Chart.js', 'Tailwind CSS'],
    features: [
      '5-day forecast display',
      'Hourly temperature trends',
      'Saved location favorites',
      'Dark mode support'
    ],
    impact: 'Daily utility used for trip planning and weather monitoring.',
    githubUrl: 'https://github.com/inihikam/weather-dashboard',
    stars: 0,
    forks: 0
  },
  {
    name: 'notes-api',
    category: 'APIs',
    shortDescription: 'RESTful notes taking API',
    fullDescription: 'Simple REST API for creating, reading, updating and deleting notes.',
    problem: 'Needed a quick way to prototype frontend with backend data.',
    solution: 'Lightweight Express.js API with MongoDB backend.',
    techStack: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'JWT'],
    features: [
      'CRUD operations for notes',
      'User authentication',
      'Category/tagging support',
      'Markdown rendering'
    ],
    impact: 'Foundation for several personal productivity tools.',
    githubUrl: 'https://github.com/inihikam/notes-api',
    stars: 0,
    forks: 0
  },
  {
    name: 'task-manager-mobile',
    category: 'Systems',
    shortDescription: 'Android task manager application',
    fullDescription: 'Native Android app for managing daily tasks and reminders.',
    problem: 'Needed mobile-friendly task management without subscription costs.',
    solution: 'Kotlin-based Android app with local SQLite storage.',
    techStack: ['Kotlin', 'Android SDK', 'Room Database', 'Material Design'],
    features: [
      'Offline-first architecture',
      'Push notifications for reminders',
      'Recurring tasks support',
      'Priority-based sorting'
    ],
    impact: 'Helped manage daily tasks efficiently across projects.',
    githubUrl: 'https://github.com/inihikam/task-manager-mobile',
    stars: 0,
    forks: 0
  },
  {
    name: 'blog-jekyll',
    category: 'Web Apps',
    shortDescription: 'Personal blog with Jekyll',
    fullDescription: 'Minimalist blog template with dark mode support.',
    problem: 'Wanted a simple, fast blog without CMS overhead.',
    solution: 'Static site generated with Jekyll, hosted on GitHub Pages.',
    techStack: ['Jekyll', 'Liquid', 'GitHub Pages', 'CSS3'],
    features: [
      'Auto-generated archives',
      'Related posts suggestions',
      'Disqus comment integration',
      'RSS feed generation'
    ],
    impact: 'Published technical articles and tutorials.',
    githubUrl: 'https://github.com/inihikam/blog-jekyll',
    stars: 0,
    forks: 0
  },
  {
    name: 'data-analyzer-py',
    category: 'AI/ML',
    shortDescription: 'Python data analysis toolkit',
    fullDescription: 'Collection of pandas utilities for common data science tasks.',
    problem: 'Repeated data cleaning patterns across projects.',
    solution: 'Reusable functions for data profiling, outlier detection, and visualization.',
    techStack: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    features: [
      'Automated data profiling',
      'Outlier detection algorithms',
      'Missing value imputation',
      'Correlation heatmaps'
    ],
    impact: 'Streamlined data preparation for multiple analysis projects.',
    githubUrl: 'https://github.com/inihikam/data-analyzer-py',
    stars: 0,
    forks: 0
  },
  {
    name: 'url-shortener',
    category: 'APIs',
    shortDescription: 'URL shortening service API',
    fullDescription: 'Mini URL shortener with click tracking and analytics.',
    problem: 'Needed URL shortening for social media posts with analytics.',
    solution: 'Go-based API with Redis for caching shortened URLs.',
    techStack: ['Go', 'Redis', 'PostgreSQL', 'golang.org/x/oauth2'],
    features: [
      'Custom alias support',
      'Click count tracking',
      'QR code generation',
      'Expiry dates for links'
    ],
    impact: 'Used internally for marketing campaign tracking.',
    githubUrl: 'https://github.com/inihikam/url-shortener',
    stars: 0,
    forks: 0
  },
  {
    name: 'cli-tools-go',
    category: 'Systems',
    shortDescription: 'Command line utility toolbox',
    fullDescription: 'Collection of Go CLIs for developer productivity.',
    problem: 'Repetitive CLI tasks could be automated.',
    solution: 'Small focused CLIs with single-responsibility design.',
    techStack: ['Go', 'Cobra', 'Viper', 'color'],
    features: [
      'Batch file rename utility',
      'Directory size analyzer',
      'Environment variable exporter',
      'Git commit helper'
    ],
    impact: 'Improved personal development workflow efficiency.',
    githubUrl: 'https://github.com/inihikam/cli-tools-go',
    stars: 0,
    forks: 0
  },
  {
    name: 'ebook-reader-web',
    category: 'Web Apps',
    shortDescription: 'Browser-based eBook reader',
    fullDescription: 'Lightweight EPUB reader that runs entirely in browser.',
    problem: 'Wanted offline-capable eBook reading without app installation.',
    solution: 'Vanilla JavaScript reader using ebookjs library.',
    techStack: ['JavaScript', 'ePub.js', 'IndexedDB', 'CSS3'],
    features: [
      'Progressive web app support',
      'Bookmarks and notes',
      'Font size adjustment',
      'Reading progress sync'
    ],
    impact: 'Enabled reading on any device with a browser.',
    githubUrl: 'https://github.com/inihikam/ebook-reader-web',
    stars: 0,
    forks: 0
  },
  {
    name: 'api-gateway-demo',
    category: 'APIs',
    shortDescription: 'Microservices API gateway demo',
    fullDescription: 'Example API gateway routing requests to multiple microservices.',
    problem: 'Needed to demonstrate API gateway patterns for learning.',
    solution: 'Node.js gateway with rate limiting, authentication, and request aggregation.',
    techStack: ['Node.js', 'Express', 'Redis', 'JWT', 'Helmet'],
    features: [
      'Rate limiting middleware',
      'Request/response logging',
      'Service health checks',
      'API versioning support'
    ],
    impact: 'Educational example for microservices architecture.',
    githubUrl: 'https://github.com/inihikam/api-gateway-demo',
    stars: 0,
    forks: 0
  },
  {
    name: 'recipe-tracker',
    category: 'Web Apps',
    shortDescription: 'Recipe collection tracker',
    fullDescription: 'Web app for saving and organizing favorite recipes.',
    problem: 'Digital cookbook collection was scattered across websites.',
    solution: 'Bookmark-style recipe collector with ingredient lists and ratings.',
    techStack: ['PHP', 'MySQL', 'Bootstrap', 'jQuery'],
    features: [
      'Save recipe metadata',
      'Ingredient shopping list',
      'Star rating system',
      'Search by keyword'
    ],
    impact: 'Kept favorite recipes organized in one place.',
    githubUrl: 'https://github.com/inihikam/recipe-tracker',
    stars: 0,
    forks: 0
  },
  {
    name: 'voice-message-bot',
    category: 'AI/ML',
    shortDescription: 'Telegram voice message bot',
    fullDescription: 'Telegram bot that transcribes voice messages to text.',
    problem: 'Wanted to convert voice notes to text quickly.',
    solution: 'Telegram bot using Google Speech-to-Text API.',
    techStack: ['Python', 'Telethon', 'Google Cloud Speech', 'asyncio'],
    features: [
      'Voice message transcription',
      'Multiple language support',
      'Timestamp annotations',
      'Export to plain text'
    ],
    impact: 'Convenient way to transcribe meeting notes and voice memos.',
    githubUrl: 'https://github.com/inihikam/voice-message-bot',
    stars: 0,
    forks: 0
  },
  {
    name: 'system-health-checker',
    category: 'Systems',
    shortDescription: 'Server health monitoring script',
    fullDescription: 'Shell script for checking server health metrics.',
    problem: 'Needed quick server diagnostics without installing agents.',
    solution: 'Bash script aggregating CPU, memory, disk, and network stats.',
    techStack: ['Bash', 'awk', 'grep', 'cron'],
    features: [
      'CPU usage reporting',
      'Memory utilization check',
      'Disk space alerts',
      'Network interface stats'
    ],
    impact: 'Basic monitoring for personal servers and VPS instances.',
    githubUrl: 'https://github.com/inihikam/system-health-checker',
    stars: 0,
    forks: 0
  },
  {
    name: 'portfolio-template-react',
    category: 'Web Apps',
    shortDescription: 'React portfolio website template',
    fullDescription: 'Clean, customizable React template for personal portfolios.',
    problem: 'Wanted reusable portfolio starter for future projects.',
    solution: 'Component-based React app with Tailwind CSS styling.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    features: [
      'Project showcase grid',
      'Skills section',
      'Contact form layout',
      'Responsive design'
    ],
    impact: 'Starting point for multiple personal portfolio sites.',
    githubUrl: 'https://github.com/inihikam/portfolio-template-react',
    stars: 0,
    forks: 0
  }
];
