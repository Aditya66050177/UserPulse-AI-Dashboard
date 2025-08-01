import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  TrendingUp, 
  AlertTriangle, 
  Heart, 
  Lightbulb, 
  BarChart3,
  ArrowRight,
  Download,
  Users,
  Target
} from 'lucide-react';
import { mockAnalysisResults } from '@/data/mockData';
import { AnalysisResult } from '@/types/analysis';

interface CompetitiveIntelligenceProps {
  onSelectApp: (result: AnalysisResult) => void;
}

export const CompetitiveIntelligence = ({ onSelectApp }: CompetitiveIntelligenceProps) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = {
    all: 'All Apps',
    productivity: 'Productivity',
    edtech: 'EdTech & Learning',
    finance: 'Finance & Investing', 
    communication: 'Communication',
    wellness: 'Wellness & Fitness',
    shopping: 'Shopping & Delivery',
    music: 'Entertainment'
  };

  const categoryMappings: Record<string, string[]> = {
    productivity: ['notion'],
    edtech: ['duolingo'],
    finance: ['robinhood'],
    communication: ['slack'],
    wellness: ['headspace'],
    shopping: ['zomato'],
    music: ['spotify']
  };

  const getAppsForCategory = (category: string): AnalysisResult[] => {
    if (category === 'all') {
      return Object.values(mockAnalysisResults);
    }
    
    const appKeys = categoryMappings[category] || [];
    return appKeys.map(key => mockAnalysisResults[key]).filter(Boolean);
  };

  const getSentimentColor = (sentiment: number) => {
    if (sentiment >= 0.8) return 'text-success';
    if (sentiment >= 0.6) return 'text-warning';
    return 'text-destructive';
  };

  const getSentimentLabel = (sentiment: number) => {
    if (sentiment >= 0.8) return 'Positive';
    if (sentiment >= 0.6) return 'Mixed';
    return 'Negative';
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'productivity': return '📚';
      case 'edtech': return '🧠';
      case 'finance': return '📈';
      case 'communication': return '💬';
      case 'wellness': return '🧘';
      case 'shopping': return '🛍️';
      case 'music': return '🎵';
      default: return '📱';
    }
  };

  const apps = getAppsForCategory(selectedCategory);

  const downloadCompetitiveReport = () => {
    const report = {
      generatedAt: new Date().toISOString(),
      category: selectedCategory,
      apps: apps.map(app => ({
        name: app.appName,
        sentiment: app.overallSentiment,
        totalReviews: app.totalReviews,
        topPainPoint: app.painPoints[0]?.title,
        topLovedFeature: app.lovedFeatures[0]?.title,
        topRequest: app.requestedFeatures[0]?.title
      })),
      summary: {
        totalAppsAnalyzed: apps.length,
        averageSentiment: apps.reduce((sum, app) => sum + app.overallSentiment, 0) / apps.length,
        totalReviewsAnalyzed: apps.reduce((sum, app) => sum + app.totalReviews, 0)
      }
    };

    const blob = new Blob([JSON.stringify(report, null, 2)], { 
      type: 'application/json' 
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `competitive-intelligence-${selectedCategory}-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <BarChart3 className="h-8 w-8 text-primary" />
            Competitive Intelligence Dashboard
          </h1>
          <p className="text-muted-foreground mt-2">
            AI-powered analysis across {apps.length} apps • {apps.reduce((sum, app) => sum + app.totalReviews, 0).toLocaleString()} total reviews analyzed
          </p>
        </div>
        <Button onClick={downloadCompetitiveReport} className="gap-2">
          <Download className="h-4 w-4" />
          Download Report
        </Button>
      </div>

      {/* Category Filter */}
      <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
        <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8">
          {Object.entries(categories).map(([key, label]) => (
            <TabsTrigger key={key} value={key} className="text-xs">
              {getCategoryIcon(key)} {label}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value={selectedCategory} className="space-y-6">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="pt-4">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="text-2xl font-bold">{apps.length}</span>
                </div>
                <p className="text-sm text-muted-foreground">Apps Analyzed</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-4">
                <div className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-success" />
                  <span className="text-2xl font-bold">
                    {Math.round((apps.reduce((sum, app) => sum + app.overallSentiment, 0) / apps.length) * 100)}%
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">Avg Sentiment</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-4">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-destructive" />
                  <span className="text-2xl font-bold">
                    {apps.reduce((sum, app) => sum + app.painPoints.length, 0)}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">Total Pain Points</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-4">
                <div className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-warning" />
                  <span className="text-2xl font-bold">
                    {apps.reduce((sum, app) => sum + app.requestedFeatures.length, 0)}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">Feature Requests</p>
              </CardContent>
            </Card>
          </div>

          {/* App Comparison Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {apps.map((app, index) => (
              <Card key={index} className="cursor-pointer hover:shadow-lg transition-all duration-200 group">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <span className="text-2xl">{getCategoryIcon(selectedCategory)}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{app.appName}</h3>
                        <p className="text-sm text-muted-foreground">
                          {app.totalReviews.toLocaleString()} reviews
                        </p>
                      </div>
                    </CardTitle>
                    <div className="text-right">
                      <Badge 
                        variant="secondary" 
                        className={getSentimentColor(app.overallSentiment)}
                      >
                        {getSentimentLabel(app.overallSentiment)}
                      </Badge>
                      <p className="text-sm text-muted-foreground mt-1">
                        {Math.round(app.overallSentiment * 100)}% positive
                      </p>
                    </div>
                  </div>
                  <Progress value={app.overallSentiment * 100} className="mt-2" />
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Top Pain Point */}
                  {app.painPoints[0] && (
                    <div className="flex items-start gap-3 p-3 bg-destructive/5 rounded-lg border border-destructive/20">
                      <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <p className="font-medium text-sm">{app.painPoints[0].title}</p>
                        <p className="text-xs text-muted-foreground">
                          {app.painPoints[0].frequency} mentions • {app.painPoints[0].severity} severity
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Top Loved Feature */}
                  {app.lovedFeatures[0] && (
                    <div className="flex items-start gap-3 p-3 bg-success/5 rounded-lg border border-success/20">
                      <Heart className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <p className="font-medium text-sm">{app.lovedFeatures[0].title}</p>
                        <p className="text-xs text-muted-foreground">
                          {app.lovedFeatures[0].mentions} mentions • {Math.round(app.lovedFeatures[0].sentiment * 100)}% positive
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Top Feature Request */}
                  {app.requestedFeatures[0] && (
                    <div className="flex items-start gap-3 p-3 bg-warning/5 rounded-lg border border-warning/20">
                      <Lightbulb className="h-5 w-5 text-warning flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <p className="font-medium text-sm">{app.requestedFeatures[0].title}</p>
                        <p className="text-xs text-muted-foreground">
                          {app.requestedFeatures[0].requests} requests • {app.requestedFeatures[0].priority} priority
                        </p>
                      </div>
                    </div>
                  )}

                  <Button 
                    variant="ghost" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    onClick={() => onSelectApp(app)}
                  >
                    View Detailed Analysis
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Cross-App Insights */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Cross-App Insights for {categories[selectedCategory]}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-destructive" />
                    Common Pain Points
                  </h4>
                  <ul className="space-y-2">
                    {Array.from(new Set(apps.flatMap(app => app.painPoints.slice(0, 2).map(p => p.title))))
                      .slice(0, 5)
                      .map((pain, index) => (
                        <li key={index} className="text-sm flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-destructive rounded-full"></div>
                          {pain}
                        </li>
                      ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Lightbulb className="h-4 w-4 text-warning" />
                    Trending Requests
                  </h4>
                  <ul className="space-y-2">
                    {Array.from(new Set(apps.flatMap(app => app.requestedFeatures.slice(0, 2).map(r => r.title))))
                      .slice(0, 5)
                      .map((request, index) => (
                        <li key={index} className="text-sm flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-warning rounded-full"></div>
                          {request}
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};