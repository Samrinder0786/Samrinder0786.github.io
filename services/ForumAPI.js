const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

const DEVELOPER_NAMES = [
  'Alex Johnson',
  'Sam Wilson',
  'Taylor Smith',
  'Jordan Lee',
  'Casey Brown',
  'Riley Miller',
  'Jamie Garcia',
  'Morgan Taylor',
  'Cameron White',
  'Drew Martinez'
];

const TECH_TOPICS = [
  "React Performance Optimization Techniques",
  "Next.js vs Remix: 2024 Comparison",
  "State Management Solutions Review",
  "CSS Architecture Best Practices",
  "Building Accessible Web Applications",
  "Modern Fullstack Development Patterns",
  "TypeScript Adoption Strategies",
  "Microfrontends Implementation Guide",
  "Web Performance Optimization",
  "Progressive Web App Essentials"
];

const TECH_CONTENT = [
  `When optimizing React applications, focus on:
  - Component memoization with React.memo
  - useCallback for stable handler references
  - Code splitting with React.lazy
  - Virtualization for large lists
  - Avoiding unnecessary re-renders
  Use the React DevTools profiler to identify bottlenecks.`,

  `Key differences in 2024:
  Next.js strengths:
  - Built-in API routes
  - Incremental Static Regeneration
  - Larger ecosystem
  
  Remix advantages:
  - Nested layouts
  - Built-in data loading
  - Enhanced form handling
  Choose based on project requirements.`,

  `Popular state management libraries:
  1. Zustand - Simple and lightweight
  2. Jotai - Atomic state model
  3. Redux Toolkit - Established solution
  4. React Context - Built-in for simple cases
  Consider team familiarity and project scale.`,

  `CSS architecture approaches:
  - CSS Modules: Local scoping by default
  - Tailwind CSS: Utility-first framework
  - Styled Components: CSS-in-JS solution
  - Sass: Feature-rich preprocessor
  Each has tradeoffs in maintainability and performance.`,

  `Accessibility must-haves:
  - Semantic HTML structure
  - Proper ARIA attributes
  - Keyboard navigation support
  - Color contrast compliance
  - Screen reader testing
  Automated tools help but manual testing is essential.`,

  `Modern fullstack patterns:
  - API-first design
  - TypeScript end-to-end
  - Serverless functions
  - Edge computing
  - Monorepo architecture
  These improve collaboration and scalability.`,

  `TypeScript migration tips:
  1. Start with strict: false
  2. Add types incrementally
  3. Use @ts-expect-error temporarily
  4. Enable strict mode gradually
  5. Educate team on best practices
  The investment pays off in maintainability.`,

  `Microfrontend implementation:
  - Module Federation (Webpack 5)
  - Single-spa framework
  - Iframe-based isolation
  - Shared dependency management
  - Unified design system
  Best for large, distributed teams.`,

  `Web performance priorities:
  1. Critical CSS inlining
  2. Image optimization
  3. Code splitting
  4. Preloading key resources
  5. Caching strategies
  Measure with Lighthouse and WebPageTest.`,

  `PWA requirements:
  - Service Worker for offline
  - Web App Manifest
  - Install prompt
  - Push notifications
  - Background sync
  Great for engagement and reliability.`
];

export async function getDiscussions() {
  // Simulate API call with our tech content
  return TECH_TOPICS.map((topic, index) => ({
    id: (index + 1).toString(),
    title: topic,
    author: DEVELOPER_NAMES[index],
    date: new Date().toISOString().split('T')[0],
    content: TECH_CONTENT[index],
    tags: ['react', 'nextjs', 'webdev'],
    replies: Math.floor(Math.random() * 10),
    views: Math.floor(Math.random() * 100),
    comments: []
  }));
}

export async function getDiscussionById(id) {
  const index = parseInt(id) - 1;
  if (index < 0 || index >= TECH_TOPICS.length) {
    throw new Error('Discussion not found');
  }

  return {
    id: id,
    title: TECH_TOPICS[index],
    author: DEVELOPER_NAMES[index],
    date: new Date().toISOString().split('T')[0],
    content: TECH_CONTENT[index],
    tags: ['react', 'nextjs', 'webdev'],
    replies: Math.floor(Math.random() * 10),
    views: Math.floor(Math.random() * 100),
    comments: [
      {
        id: '1',
        author: 'Senior Developer',
        date: new Date().toISOString().split('T')[0],
        content: getRelevantComment(index)
      },
      {
        id: '2',
        author: 'Tech Lead',
        date: new Date().toISOString().split('T')[0],
        content: getAdditionalComment(index)
      }
    ]
  };
}

function getRelevantComment(index) {
  const comments = [
    "Great overview! I'd also recommend looking into React Forget for automatic memoization once it's stable.",
    "We recently migrated from Next.js to Remix and saw significant improvements in our development velocity.",
    "Don't forget about React Query for server state management - it complements client state solutions well.",
    "CSS Nesting (now widely supported) can help reduce specificity issues in larger codebases.",
    "For accessibility testing, we've had great success with Axe Core and Pa11y.",
    "GraphQL with Apollo Client has been a game-changer for our API layer.",
    "The satisfies operator in TypeScript 4.9+ helps with type inference in complex scenarios.",
    "We implemented Module Federation last quarter and it's working well for our distributed teams.",
    "Consider using the Next.js Image component for automatic image optimization.",
    "Workbox is an excellent library for advanced Service Worker configurations."
  ];
  return comments[index];
}

function getAdditionalComment(index) {
  const comments = [
    "Another performance tip: Use the React Profiler API to track component renders programmatically.",
    "Remix's nested error boundaries are particularly useful for handling errors gracefully.",
    "We've standardized on Zustand across all projects due to its simplicity and flexibility.",
    "CSS Container Queries are becoming more important with component-driven development.",
    "Don't forget to test with actual screen readers - automated tools miss many real-world issues.",
    "We're experimenting with tRPC for end-to-end type safety with great results so far.",
    "The new satisfies operator in TypeScript helps with complex type inference scenarios.",
    "Shared component libraries are crucial for maintaining consistency across microfrontends.",
    "Lazy loading non-critical React components can significantly improve TTI.",
    "Consider the App Shell model for your PWA to improve perceived performance."
  ];
  return comments[index];
}

export async function createDiscussion(newDiscussion) {
  return {
    id: (TECH_TOPICS.length + 1).toString(),
    title: newDiscussion.title,
    author: 'CurrentUser',
    date: new Date().toISOString().split('T')[0],
    content: newDiscussion.content,
    tags: newDiscussion.tags || ['general'],
    replies: 0,
    views: 0,
    comments: []
  };
}

export async function addComment(discussionId, newComment) {
  // Simulate API response
  return {
    id: Date.now().toString(),
    author: newComment.author || 'Anonymous',
    date: new Date().toISOString().split('T')[0],
    content: newComment.content
  };
}