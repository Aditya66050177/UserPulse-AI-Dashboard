import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  AlertTriangle, 
  Heart, 
  Lightbulb, 
  TrendingUp, 
  Download, 
  Users, 
  BarChart3,
  MessageSquare,
  Target,
  ArrowLeft
} from 'lucide-react';
import { AnalysisResult } from '@/types/analysis';

interface AnalysisResultsProps {
  result: AnalysisResult;
  onBack: () => void;
}

export const AnalysisResults = ({ result, onBack }: AnalysisResultsProps) => {
  const [activeTab, setActiveTab] = useState('overview');

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'text-destructive';
      case 'medium': return 'text-warning';
      case 'low': return 'text-success';
      default: return 'text-muted-foreground';
    }
  };

  const getPriorityVariant = (priority: string) => {
    switch (priority) {
      case 'high': return 'destructive';
      case 'medium': return 'secondary';
      case 'low': return 'outline';
      default: return 'outline';
    }
  };

  const sentimentPercentage = Math.round(result.overallSentiment * 100);

  const downloadReport = () => {
    const reportData = {
      ...result,
      generatedAt: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(reportData, null, 2)], { 
      type: 'application/json' 
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${result.appName.toLowerCase()}-analysis-report.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" onClick={onBack} className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
          <div>
            <h1 className="text-3xl font-bold">{result.appName} Analysis</h1>
            <p className="text-muted-foreground">
              Based on {result.totalReviews.toLocaleString()} user reviews
            </p>
          </div>
        </div>
        <Button onClick={downloadReport} className="gap-2">
          <Download className="h-4 w-4" />
          Download Report
        </Button>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-4">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <span className="text-2xl font-bold">{result.totalReviews.toLocaleString()}</span>
            </div>
            <p className="text-sm text-muted-foreground">Total Reviews</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-4">
            <div className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-success" />
              <span className="text-2xl font-bold">{sentimentPercentage}%</span>
            </div>
            <p className="text-sm text-muted-foreground">Positive Sentiment</p>
            <Progress value={sentimentPercentage} className="mt-2" />
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-4">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-destructive" />
              <span className="text-2xl font-bold">{result.painPoints.length}</span>
            </div>
            <p className="text-sm text-muted-foreground">Pain Points</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-4">
            <div className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-warning" />
              <span className="text-2xl font-bold">{result.requestedFeatures.length}</span>
            </div>
            <p className="text-sm text-muted-foreground">Feature Requests</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="pain-points">Pain Points</TabsTrigger>
          <TabsTrigger value="loved-features">Loved Features</TabsTrigger>
          <TabsTrigger value="requests">Requests</TabsTrigger>
          <TabsTrigger value="strategy">Strategy</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Top Pain Points */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-destructive" />
                  Top Pain Points
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {result.painPoints.slice(0, 3).map((pain, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex-1">
                      <p className="font-medium">{pain.title}</p>
                      <p className="text-sm text-muted-foreground">{pain.frequency} mentions</p>
                    </div>
                    <Badge variant="destructive" className={getSeverityColor(pain.severity)}>
                      {pain.severity}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Top Loved Features */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-success" />
                  Most Loved Features
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {result.lovedFeatures.slice(0, 3).map((feature, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex-1">
                      <p className="font-medium">{feature.title}</p>
                      <p className="text-sm text-muted-foreground">{feature.mentions} mentions</p>
                    </div>
                    <Badge variant="secondary" className="text-success">
                      {Math.round(feature.sentiment * 100)}% positive
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Strategy Recommendations */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Key Strategy Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {result.strategyRecommendations.slice(0, 5).map((rec, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pain-points" className="space-y-4">
          {result.painPoints.map((pain, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-destructive" />
                    {pain.title}
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    <Badge variant="destructive">{pain.severity} severity</Badge>
                    <Badge variant="outline">{pain.frequency} mentions</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <h4 className="font-medium flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" />
                    Sample User Quotes:
                  </h4>
                  <div className="space-y-2">
                    {pain.sampleQuotes.map((quote, quoteIndex) => (
                      <blockquote key={quoteIndex} className="border-l-4 border-destructive pl-4 italic text-muted-foreground">
                        "{quote}"
                      </blockquote>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="loved-features" className="space-y-4">
          {result.lovedFeatures.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-success" />
                    {feature.title}
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-success">
                      {Math.round(feature.sentiment * 100)}% positive
                    </Badge>
                    <Badge variant="outline">{feature.mentions} mentions</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <h4 className="font-medium flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" />
                    Sample User Quotes:
                  </h4>
                  <div className="space-y-2">
                    {feature.sampleQuotes.map((quote, quoteIndex) => (
                      <blockquote key={quoteIndex} className="border-l-4 border-success pl-4 italic text-muted-foreground">
                        "{quote}"
                      </blockquote>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="requests" className="space-y-4">
          {result.requestedFeatures.map((request, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-warning" />
                    {request.title}
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    <Badge variant={getPriorityVariant(request.priority)}>
                      {request.priority} priority
                    </Badge>
                    <Badge variant="outline">{request.requests} requests</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <h4 className="font-medium flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" />
                    Sample User Requests:
                  </h4>
                  <div className="space-y-2">
                    {request.sampleQuotes.map((quote, quoteIndex) => (
                      <blockquote key={quoteIndex} className="border-l-4 border-warning pl-4 italic text-muted-foreground">
                        "{quote}"
                      </blockquote>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="strategy" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Strategic Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {result.strategyRecommendations.map((rec, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 border rounded-lg">
                    <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <p>{rec}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {result.competitorMentions.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-info" />
                  Competitor Mentions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {result.competitorMentions.map((competitor, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">{competitor.name}</p>
                        <p className="text-sm text-muted-foreground">{competitor.context}</p>
                      </div>
                      <Badge variant="outline">{competitor.mentions} mentions</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};