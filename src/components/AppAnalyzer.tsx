import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Loader2, Search, TrendingUp, AlertTriangle, Heart, Lightbulb, Download } from 'lucide-react';
import { mockAnalysisResults } from '@/data/mockData';
import { AnalysisResult } from '@/types/analysis';
import { useToast } from '@/hooks/use-toast';

interface AppAnalyzerProps {
  onAnalysisComplete: (result: AnalysisResult) => void;
}

export const AppAnalyzer = ({ onAnalysisComplete }: AppAnalyzerProps) => {
  const [appQuery, setAppQuery] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  const { toast } = useToast();

  const simulateAIAnalysis = async (appName: string): Promise<AnalysisResult | null> => {
    const normalizedName = appName.toLowerCase().trim();
    
    // Check if we have mock data for this app
    const mockResult = mockAnalysisResults[normalizedName];
    
    if (mockResult) {
      return mockResult;
    }
    
    // For other apps, return null to show no data found
    return null;
  };

  const handleAnalyze = async () => {
    if (!appQuery.trim()) {
      toast({
        title: "Error",
        description: "Please enter an app name to analyze",
        variant: "destructive",
      });
      return;
    }

    setIsAnalyzing(true);
    setProgress(0);

    // Simulate AI processing stages
    const stages = [
      "Fetching app reviews...",
      "Processing with AI...",
      "Extracting pain points...",
      "Identifying loved features...",
      "Finding feature requests...",
      "Generating insights..."
    ];

    for (let i = 0; i < stages.length; i++) {
      setProgress((i + 1) * 16.67);
      await new Promise(resolve => setTimeout(resolve, 800));
    }

    try {
      const result = await simulateAIAnalysis(appQuery);
      
      if (result) {
        onAnalysisComplete(result);
        toast({
          title: "Analysis Complete",
          description: `Successfully analyzed ${result.totalReviews} reviews for ${result.appName}`,
        });
      } else {
        toast({
          title: "No Data Available",
          description: `Sorry, we don't have review data for "${appQuery}". Try "Duolingo" or "Spotify" for demo purposes.`,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Analysis Failed",
        description: "Something went wrong during analysis. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsAnalyzing(false);
      setProgress(0);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2 text-2xl">
          <TrendingUp className="h-6 w-6 text-primary" />
          UserPulse AI Analyzer
        </CardTitle>
        <p className="text-muted-foreground">
          Analyze app reviews with AI to extract product insights
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex gap-2">
          <Input
            placeholder="Enter app name (try 'Duolingo' or 'Spotify')"
            value={appQuery}
            onChange={(e) => setAppQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleAnalyze()}
            disabled={isAnalyzing}
            className="flex-1"
          />
          <Button 
            onClick={handleAnalyze} 
            disabled={isAnalyzing}
            className="px-6"
          >
            {isAnalyzing ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Search className="h-4 w-4" />
            )}
            {isAnalyzing ? 'Analyzing...' : 'Analyze'}
          </Button>
        </div>

        {isAnalyzing && (
          <div className="space-y-3">
            <Progress value={progress} className="w-full" />
            <p className="text-sm text-center text-muted-foreground">
              AI is processing reviews and extracting insights...
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="text-center">
            <CardContent className="pt-4">
              <AlertTriangle className="h-8 w-8 text-destructive mx-auto mb-2" />
              <p className="font-semibold">Pain Points</p>
              <p className="text-sm text-muted-foreground">Issues users face</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-4">
              <Heart className="h-8 w-8 text-success mx-auto mb-2" />
              <p className="font-semibold">Loved Features</p>
              <p className="text-sm text-muted-foreground">What users love</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-4">
              <Lightbulb className="h-8 w-8 text-warning mx-auto mb-2" />
              <p className="font-semibold">Feature Requests</p>
              <p className="text-sm text-muted-foreground">User suggestions</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Badge variant="secondary" className="gap-1">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            Powered by AI
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};