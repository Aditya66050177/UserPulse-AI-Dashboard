import { AnalysisResult } from '@/types/analysis';

export const mockAnalysisResults: Record<string, AnalysisResult> = {
  'duolingo': {
    appName: 'Duolingo',
    totalReviews: 2847,
    overallSentiment: 0.73,
    painPoints: [
      {
        title: 'Aggressive Streak System',
        frequency: 342,
        severity: 'high',
        sampleQuotes: [
          "The streak pressure is too much, I feel anxious if I miss a day",
          "Losing my 200-day streak because of one missed lesson made me delete the app",
          "The guilt from breaking streaks actually makes learning less enjoyable"
        ]
      },
      {
        title: 'Limited Free Content',
        frequency: 298,
        severity: 'high',
        sampleQuotes: [
          "Too many lessons are locked behind the paywall",
          "The hearts system is frustrating, I run out too quickly",
          "Free version feels like a demo, not a real learning experience"
        ]
      },
      {
        title: 'Repetitive Exercises',
        frequency: 187,
        severity: 'medium',
        sampleQuotes: [
          "Same sentences over and over, gets boring quickly",
          "Need more variety in exercise types",
          "Feels like I'm doing the same lessons repeatedly"
        ]
      },
      {
        title: 'Poor Audio Quality',
        frequency: 156,
        severity: 'medium',
        sampleQuotes: [
          "Can't understand the pronunciation sometimes",
          "Audio is robotic and unclear",
          "Need native speaker audio, not computer generated"
        ]
      },
      {
        title: 'Grammar Explanations Missing',
        frequency: 134,
        severity: 'low',
        sampleQuotes: [
          "No explanation why this answer is correct",
          "Would love to understand the grammar rules",
          "Just memorizing without understanding the patterns"
        ]
      }
    ],
    lovedFeatures: [
      {
        title: 'Gamification & Achievements',
        mentions: 456,
        sentiment: 0.89,
        sampleQuotes: [
          "Love earning XP and competing with friends!",
          "The badges and achievements keep me motivated",
          "Feels like playing a game while learning"
        ]
      },
      {
        title: 'Bite-sized Lessons',
        mentions: 398,
        sentiment: 0.87,
        sampleQuotes: [
          "Perfect for my busy schedule, just 5 minutes a day",
          "Lessons are the perfect length - not overwhelming",
          "Easy to fit into my commute"
        ]
      },
      {
        title: 'Progress Tracking',
        mentions: 289,
        sentiment: 0.84,
        sampleQuotes: [
          "Love seeing my progress visually",
          "The stats and charts motivate me to continue",
          "Great to see how far I've come"
        ]
      },
      {
        title: 'Stories Feature',
        mentions: 234,
        sentiment: 0.91,
        sampleQuotes: [
          "Stories are engaging and fun to follow",
          "Love the narrative aspect of learning",
          "Stories help with comprehension and context"
        ]
      },
      {
        title: 'User Interface',
        mentions: 198,
        sentiment: 0.82,
        sampleQuotes: [
          "Beautiful, clean design that's easy to navigate",
          "Love the colorful and friendly interface",
          "App is intuitive and well-designed"
        ]
      }
    ],
    requestedFeatures: [
      {
        title: 'More Speaking Practice',
        requests: 289,
        priority: 'high',
        sampleQuotes: [
          "Need more conversation practice with real scenarios",
          "Would love speaking exercises with feedback",
          "More pronunciation and speaking drills please"
        ]
      },
      {
        title: 'Offline Mode',
        requests: 234,
        priority: 'high',
        sampleQuotes: [
          "Please let us download lessons for offline use",
          "Need to practice during flights and commutes",
          "Offline access would be a game changer"
        ]
      },
      {
        title: 'Grammar Explanations',
        requests: 198,
        priority: 'medium',
        sampleQuotes: [
          "Please explain why answers are correct",
          "Need detailed grammar rules and explanations",
          "Add a grammar reference section"
        ]
      },
      {
        title: 'Advanced Courses',
        requests: 167,
        priority: 'medium',
        sampleQuotes: [
          "Need more advanced content for intermediate learners",
          "Courses feel too basic after completing the tree",
          "Want business/professional language courses"
        ]
      },
      {
        title: 'Native Speaker Audio',
        requests: 145,
        priority: 'low',
        sampleQuotes: [
          "Replace computer voice with real native speakers",
          "Audio quality needs improvement",
          "Want to hear different accents and voices"
        ]
      }
    ],
    competitorMentions: [
      {
        name: 'Babbel',
        context: 'Users compare grammar explanations',
        mentions: 67
      },
      {
        name: 'Rosetta Stone',
        context: 'Mentioned for immersive learning approach',
        mentions: 43
      },
      {
        name: 'Memrise',
        context: 'Compared for video-based learning',
        mentions: 29
      }
    ],
    strategyRecommendations: [
      "Introduce flexible streak options to reduce anxiety while maintaining engagement",
      "Expand free content or introduce more generous freemium model",
      "Develop advanced conversation practice features with AI tutors",
      "Add comprehensive grammar explanations and reference materials",
      "Implement offline learning capabilities for key lessons",
      "Diversify exercise types to combat repetitiveness",
      "Partner with native speakers for authentic audio content"
    ],
    generatedAt: new Date().toISOString()
  },
  'spotify': {
    appName: 'Spotify',
    totalReviews: 4521,
    overallSentiment: 0.68,
    painPoints: [
      {
        title: 'Limited Free Tier',
        frequency: 789,
        severity: 'high',
        sampleQuotes: [
          "Too many ads, can't enjoy music properly",
          "Shuffle-only mode is frustrating",
          "Free version is basically unusable"
        ]
      },
      {
        title: 'Music Discovery Issues',
        frequency: 456,
        severity: 'medium',
        sampleQuotes: [
          "Algorithm keeps suggesting the same songs",
          "Discover Weekly is hit or miss",
          "Hard to find new music I actually like"
        ]
      }
    ],
    lovedFeatures: [
      {
        title: 'Playlist Creation',
        mentions: 892,
        sentiment: 0.91,
        sampleQuotes: [
          "Love creating and sharing playlists",
          "Playlist features are incredibly powerful",
          "Best playlist management of any music app"
        ]
      }
    ],
    requestedFeatures: [
      {
        title: 'Lossless Audio',
        requests: 234,
        priority: 'high',
        sampleQuotes: [
          "Please add HiFi/lossless audio quality",
          "Need better audio quality for premium users",
          "When is Spotify HiFi coming?"
        ]
      }
    ],
    competitorMentions: [
      {
        name: 'Apple Music',
        context: 'Audio quality comparisons',
        mentions: 123
      }
    ],
    strategyRecommendations: [
      "Improve free tier experience with fewer ads",
      "Enhance music discovery algorithm",
      "Launch promised HiFi audio service"
    ],
    generatedAt: new Date().toISOString()
  },
  'notion': {
    appName: 'Notion',
    totalReviews: 3421,
    overallSentiment: 0.71,
    painPoints: [
      {
        title: 'Performance Issues',
        frequency: 567,
        severity: 'high',
        sampleQuotes: [
          "App is extremely slow to load, especially with large databases",
          "Constant lag when typing, makes it unusable for quick notes",
          "Performance has gotten worse with recent updates"
        ]
      },
      {
        title: 'Complex Learning Curve',
        frequency: 423,
        severity: 'medium',
        sampleQuotes: [
          "Too complicated for simple note-taking, overwhelming interface",
          "Steep learning curve, takes weeks to understand all features",
          "Wish there was a simpler mode for basic users"
        ]
      },
      {
        title: 'Offline Limitations',
        frequency: 298,
        severity: 'high',
        sampleQuotes: [
          "Barely works offline, need constant internet connection",
          "Can't access my notes when traveling without wifi",
          "Offline sync is unreliable and often fails"
        ]
      }
    ],
    lovedFeatures: [
      {
        title: 'All-in-One Workspace',
        mentions: 789,
        sentiment: 0.92,
        sampleQuotes: [
          "Love having notes, tasks, and databases all in one place",
          "Perfect for organizing entire projects and workflows",
          "The versatility is unmatched - can build anything"
        ]
      },
      {
        title: 'Database Functionality',
        mentions: 645,
        sentiment: 0.89,
        sampleQuotes: [
          "Database views and filtering are incredibly powerful",
          "Can create complex project management systems",
          "The relational database features are game-changing"
        ]
      },
      {
        title: 'Customization Options',
        mentions: 456,
        sentiment: 0.87,
        sampleQuotes: [
          "Love how customizable everything is",
          "Can tailor the workspace exactly to my needs",
          "Templates save so much time for common workflows"
        ]
      }
    ],
    requestedFeatures: [
      {
        title: 'Better Mobile Experience',
        requests: 432,
        priority: 'high',
        sampleQuotes: [
          "Mobile app needs major improvements for editing",
          "Want full feature parity with desktop version",
          "Mobile interface is clunky and hard to navigate"
        ]
      },
      {
        title: 'Improved Performance',
        requests: 398,
        priority: 'high',
        sampleQuotes: [
          "Please optimize loading times and responsiveness",
          "Need better caching for offline access",
          "Performance is the biggest barrier to adoption"
        ]
      }
    ],
    competitorMentions: [
      {
        name: 'Obsidian',
        context: 'Faster performance and offline capabilities',
        mentions: 89
      },
      {
        name: 'Roam Research',
        context: 'Better for networked thought and linking',
        mentions: 67
      }
    ],
    strategyRecommendations: [
      "Prioritize performance optimization as top engineering goal",
      "Simplify onboarding with guided tutorials and templates",
      "Improve mobile app functionality to match desktop experience",
      "Enhance offline capabilities and sync reliability",
      "Consider a 'Simple Mode' for basic note-taking users"
    ],
    generatedAt: new Date().toISOString()
  },
  'slack': {
    appName: 'Slack',
    totalReviews: 5234,
    overallSentiment: 0.65,
    painPoints: [
      {
        title: 'Notification Overwhelm',
        frequency: 892,
        severity: 'high',
        sampleQuotes: [
          "Too many notifications, can't focus on actual work",
          "Notification settings are confusing and don't stick",
          "Constant pings are destroying my productivity"
        ]
      },
      {
        title: 'Thread Management',
        frequency: 678,
        severity: 'medium',
        sampleQuotes: [
          "Threads are confusing and hard to follow",
          "Messages get lost in thread replies",
          "Thread notifications don't work properly"
        ]
      },
      {
        title: 'Search Functionality',
        frequency: 456,
        severity: 'medium',
        sampleQuotes: [
          "Search doesn't find messages I know exist",
          "Can't search within specific time ranges effectively",
          "Search results are poorly organized"
        ]
      }
    ],
    lovedFeatures: [
      {
        title: 'Real-time Messaging',
        mentions: 1023,
        sentiment: 0.88,
        sampleQuotes: [
          "Instant communication keeps our team connected",
          "Love the real-time collaboration features",
          "Perfect for quick questions and updates"
        ]
      },
      {
        title: 'Integration Ecosystem',
        mentions: 789,
        sentiment: 0.85,
        sampleQuotes: [
          "Integrations with all our tools save tons of time",
          "Love getting GitHub/Jira notifications in Slack",
          "App ecosystem is incredibly rich and useful"
        ]
      }
    ],
    requestedFeatures: [
      {
        title: 'Better Focus Modes',
        requests: 567,
        priority: 'high',
        sampleQuotes: [
          "Need a proper 'Do Not Disturb' mode that actually works",
          "Want scheduled quiet hours for deep work",
          "Should pause all non-urgent notifications during focus time"
        ]
      }
    ],
    competitorMentions: [
      {
        name: 'Microsoft Teams',
        context: 'Better video calling and Office integration',
        mentions: 234
      },
      {
        name: 'Discord',
        context: 'Cleaner interface and better voice chat',
        mentions: 156
      }
    ],
    strategyRecommendations: [
      "Redesign notification system with intelligent priority filtering",
      "Improve thread UX to reduce message confusion",
      "Add advanced focus modes for deep work periods",
      "Enhance search with better filtering and organization"
    ],
    generatedAt: new Date().toISOString()
  },
  'headspace': {
    appName: 'Headspace',
    totalReviews: 2876,
    overallSentiment: 0.79,
    painPoints: [
      {
        title: 'Expensive Subscription',
        frequency: 523,
        severity: 'high',
        sampleQuotes: [
          "Way too expensive for what you get",
          "Free content is very limited, forces you to pay",
          "Subscription price keeps increasing every year"
        ]
      },
      {
        title: 'Limited Free Content',
        frequency: 412,
        severity: 'medium',
        sampleQuotes: [
          "Only a few free sessions, then paywall hits",
          "Can't really try the app properly without paying",
          "Free trial is too short to see real benefits"
        ]
      }
    ],
    lovedFeatures: [
      {
        title: 'Guided Meditations',
        mentions: 789,
        sentiment: 0.91,
        sampleQuotes: [
          "Andy's voice is so calming and guidance is perfect",
          "Love the variety of meditation topics and lengths",
          "Best guided meditations I've found anywhere"
        ]
      },
      {
        title: 'Sleep Stories',
        mentions: 567,
        sentiment: 0.89,
        sampleQuotes: [
          "Sleep stories help me fall asleep so much faster",
          "Matthew McConaughey's voice is incredibly soothing",
          "Perfect for insomnia and restless nights"
        ]
      }
    ],
    requestedFeatures: [
      {
        title: 'More Free Content',
        requests: 445,
        priority: 'high',
        sampleQuotes: [
          "Please offer more free meditations",
          "Need longer free trial period",
          "At least basic meditations should be free"
        ]
      }
    ],
    competitorMentions: [
      {
        name: 'Calm',
        context: 'More free content and better pricing',
        mentions: 178
      },
      {
        name: 'Insight Timer',
        context: 'Completely free with huge library',
        mentions: 134
      }
    ],
    strategyRecommendations: [
      "Expand free content offering to improve conversion",
      "Consider tiered pricing with more affordable options",
      "Add more celebrity narrators for sleep content",
      "Improve onboarding to show immediate value"
    ],
    generatedAt: new Date().toISOString()
  },
  'zomato': {
    appName: 'Zomato',
    totalReviews: 4567,
    overallSentiment: 0.58,
    painPoints: [
      {
        title: 'Delivery Time Issues',
        frequency: 1234,
        severity: 'high',
        sampleQuotes: [
          "Food always arrives cold and much later than promised",
          "Delivery estimates are completely unrealistic",
          "Waited 2 hours for food that was supposed to take 30 minutes"
        ]
      },
      {
        title: 'Hidden Charges',
        frequency: 987,
        severity: 'high',
        sampleQuotes: [
          "Too many hidden fees - delivery, platform, taxes",
          "Final amount is always much higher than menu price",
          "Surge pricing during peak hours is ridiculous"
        ]
      },
      {
        title: 'Poor Customer Service',
        frequency: 678,
        severity: 'medium',
        sampleQuotes: [
          "Customer support is non-existent when orders go wrong",
          "Chat support gives generic responses and doesn't help",
          "Refund process is complicated and takes forever"
        ]
      }
    ],
    lovedFeatures: [
      {
        title: 'Restaurant Discovery',
        mentions: 892,
        sentiment: 0.84,
        sampleQuotes: [
          "Great for finding new restaurants and reading reviews",
          "Photos and menu previews are really helpful",
          "Love the restaurant recommendations based on cuisine"
        ]
      },
      {
        title: 'Wide Restaurant Network',
        mentions: 756,
        sentiment: 0.81,
        sampleQuotes: [
          "Huge selection of restaurants and cuisines",
          "Can find almost any type of food I'm craving",
          "Good coverage even in smaller cities"
        ]
      }
    ],
    requestedFeatures: [
      {
        title: 'Better Delivery Tracking',
        requests: 567,
        priority: 'high',
        sampleQuotes: [
          "Need real-time tracking like Uber Eats",
          "Want to see exactly where my delivery person is",
          "More accurate delivery time estimates please"
        ]
      },
      {
        title: 'Transparent Pricing',
        requests: 445,
        priority: 'high',
        sampleQuotes: [
          "Show all charges upfront before ordering",
          "Need breakdown of all fees and taxes",
          "Stop adding surprise charges at checkout"
        ]
      }
    ],
    competitorMentions: [
      {
        name: 'Swiggy',
        context: 'Better delivery times and customer service',
        mentions: 345
      },
      {
        name: 'Uber Eats',
        context: 'Superior tracking and transparency',
        mentions: 234
      }
    ],
    strategyRecommendations: [
      "Improve delivery time accuracy and communication",
      "Implement transparent pricing with upfront fee disclosure",
      "Enhance customer service with better training and tools",
      "Add real-time delivery tracking similar to ride-sharing apps",
      "Reduce number of additional fees or bundle them transparently"
    ],
    generatedAt: new Date().toISOString()
  },
  'robinhood': {
    appName: 'Robinhood',
    totalReviews: 3892,
    overallSentiment: 0.62,
    painPoints: [
      {
        title: 'App Crashes During Market Hours',
        frequency: 678,
        severity: 'high',
        sampleQuotes: [
          "App crashes every time there's market volatility",
          "Can't place trades when I need to most - during big moves",
          "Lost money because app was down during market open"
        ]
      },
      {
        title: 'Limited Research Tools',
        frequency: 567,
        severity: 'medium',
        sampleQuotes: [
          "No real research or analysis tools for stock evaluation",
          "Need better charts and technical indicators",
          "Feels like gambling without proper research data"
        ]
      },
      {
        title: 'Customer Support Issues',
        frequency: 445,
        severity: 'high',
        sampleQuotes: [
          "Customer support is impossible to reach",
          "Takes weeks to get responses to urgent account issues",
          "No phone support for trading problems"
        ]
      }
    ],
    lovedFeatures: [
      {
        title: 'Commission-Free Trading',
        mentions: 1234,
        sentiment: 0.89,
        sampleQuotes: [
          "Love that I can trade without paying fees",
          "Commission-free trading changed everything for small investors",
          "Perfect for frequent trading without eating into profits"
        ]
      },
      {
        title: 'Simple Interface',
        mentions: 892,
        sentiment: 0.86,
        sampleQuotes: [
          "Clean, simple interface that's easy to understand",
          "Great for beginners who find other platforms overwhelming",
          "Love the minimalist design and ease of use"
        ]
      }
    ],
    requestedFeatures: [
      {
        title: 'Better Research Tools',
        requests: 567,
        priority: 'high',
        sampleQuotes: [
          "Please add fundamental analysis and research data",
          "Need better charting tools and technical indicators",
          "Want analyst ratings and company financial data"
        ]
      },
      {
        title: 'Improved Reliability',
        requests: 445,
        priority: 'high',
        sampleQuotes: [
          "Fix the app crashes during market volatility",
          "Need 99.9% uptime during trading hours",
          "Server stability is crucial for trading app"
        ]
      }
    ],
    competitorMentions: [
      {
        name: 'TD Ameritrade',
        context: 'Better research tools and reliability',
        mentions: 234
      },
      {
        name: 'E*TRADE',
        context: 'More professional features and support',
        mentions: 156
      }
    ],
    strategyRecommendations: [
      "Invest heavily in infrastructure to prevent crashes during high volume",
      "Add comprehensive research and analysis tools",
      "Improve customer support with phone and live chat options",
      "Enhance charting capabilities for technical analysis",
      "Maintain competitive edge with commission-free model while adding value"
    ],
    generatedAt: new Date().toISOString()
  }
};

export const sampleReviews = {
  'duolingo': [
    "I love Duolingo but the streak pressure is getting to me. I've been using it for 6 months and while the gamification is great, I feel anxious about missing days.",
    "Great app for learning languages! The bite-sized lessons fit perfectly into my schedule. However, I wish there were more speaking exercises.",
    "The free version is too limited. Too many lessons are locked behind the paywall. The hearts system is frustrating.",
    "Duolingo's interface is beautiful and intuitive. The stories feature is engaging and helps with comprehension. Would love offline mode though.",
    "Been using this app for over a year. Love the progress tracking and achievements, but the exercises get repetitive after a while."
  ]
};