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