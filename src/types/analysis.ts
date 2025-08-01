export interface PainPoint {
  title: string;
  frequency: number;
  severity: 'high' | 'medium' | 'low';
  sampleQuotes: string[];
}

export interface LovedFeature {
  title: string;
  mentions: number;
  sentiment: number;
  sampleQuotes: string[];
}

export interface RequestedFeature {
  title: string;
  requests: number;
  priority: 'high' | 'medium' | 'low';
  sampleQuotes: string[];
}

export interface CompetitorMention {
  name: string;
  context: string;
  mentions: number;
}

export interface AnalysisResult {
  appName: string;
  totalReviews: number;
  overallSentiment: number;
  painPoints: PainPoint[];
  lovedFeatures: LovedFeature[];
  requestedFeatures: RequestedFeature[];
  competitorMentions: CompetitorMention[];
  strategyRecommendations: string[];
  generatedAt: string;
}