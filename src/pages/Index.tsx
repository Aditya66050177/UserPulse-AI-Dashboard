import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { AppAnalyzer } from '@/components/AppAnalyzer';
import { AnalysisResults } from '@/components/AnalysisResults';
import { CompetitiveIntelligence } from '@/components/CompetitiveIntelligence';
import { AnalysisResult } from '@/types/analysis';
import { BarChart3, Search, TrendingUp } from 'lucide-react';

const Index = () => {
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [currentView, setCurrentView] = useState<'home' | 'analyzer' | 'competitive' | 'results'>('home');

  const handleAnalysisComplete = (result: AnalysisResult) => {
    setAnalysisResult(result);
    setCurrentView('results');
  };

  const handleBack = () => {
    setAnalysisResult(null);
    setCurrentView('home');
  };

  const showAnalyzer = () => setCurrentView('analyzer');
  const showCompetitive = () => setCurrentView('competitive');
  const showHome = () => setCurrentView('home');

  console.log('Index component rendering, currentView:', currentView);
  
  return (
    <div className="min-h-screen bg-background" style={{ backgroundColor: 'hsl(240 10% 3.9%)', color: 'hsl(0 0% 98%)' }}>
      {/* Navigation */}
      {currentView !== 'results' && (
        <nav className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <button 
              onClick={showHome}
              className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"
            >
              UserPulse
            </button>
            
            <div className="flex gap-4">
              <Button 
                variant={currentView === 'analyzer' ? 'default' : 'outline'} 
                onClick={showAnalyzer}
                className="gap-2"
              >
                <Search className="h-4 w-4" />
                Single App Analysis
              </Button>
              <Button 
                variant={currentView === 'competitive' ? 'default' : 'outline'} 
                onClick={showCompetitive}
                className="gap-2"
              >
                <BarChart3 className="h-4 w-4" />
                Competitive Intelligence
              </Button>
            </div>
          </div>
        </nav>
      )}

      {/* Home View */}
      {currentView === 'home' && (
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              UserPulse
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              AI-powered product intelligence that analyzes user reviews to extract actionable insights for product managers across industries
            </p>
            
            <div className="flex justify-center gap-4 mb-16">
              <Button 
                onClick={showAnalyzer} 
                size="lg" 
                className="gap-2"
              >
                <Search className="h-5 w-5" />
                Analyze Single App
              </Button>
              <Button 
                onClick={showCompetitive} 
                size="lg" 
                variant="outline" 
                className="gap-2"
              >
                <BarChart3 className="h-5 w-5" />
                Competitive Intelligence
              </Button>
            </div>
          </div>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 border rounded-lg">
              <div className="w-16 h-16 bg-destructive/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-destructive" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Pain Point Detection</h3>
              <p className="text-muted-foreground">Automatically identify and categorize user frustrations with severity rankings</p>
            </div>
            
            <div className="text-center p-6 border rounded-lg">
              <div className="w-16 h-16 bg-success/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-success" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Feature Love Analysis</h3>
              <p className="text-muted-foreground">Discover what users love most about your product with sentiment scoring</p>
            </div>
            
            <div className="text-center p-6 border rounded-lg">
              <div className="w-16 h-16 bg-warning/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-warning" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Feature Requests</h3>
              <p className="text-muted-foreground">Extract and prioritize user feature requests to guide your roadmap</p>
            </div>
            
            <div className="text-center p-6 border rounded-lg">
              <div className="w-16 h-16 bg-info/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <BarChart3 className="w-8 h-8 text-info" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Competitive Analysis</h3>
              <p className="text-muted-foreground">Compare insights across multiple apps in your category</p>
            </div>
            
            <div className="text-center p-6 border rounded-lg">
              <div className="w-16 h-16 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Strategy Insights</h3>
              <p className="text-muted-foreground">Get AI-generated strategic recommendations for product improvement</p>
            </div>
            
            <div className="text-center p-6 border rounded-lg">
              <div className="w-16 h-16 bg-purple-500/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Export Reports</h3>
              <p className="text-muted-foreground">Download detailed JSON reports for further analysis and sharing</p>
            </div>
          </div>

          {/* Categories Showcase */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-8">Analyze Apps Across Industries</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                { icon: '📚', label: 'Productivity', desc: 'Notion, Evernote, Obsidian' },
                { icon: '🧠', label: 'EdTech', desc: 'Duolingo, Babbel, Memrise' },
                { icon: '📈', label: 'Finance', desc: 'Robinhood, Groww, Zerodha' },
                { icon: '💬', label: 'Communication', desc: 'Slack, Teams, Discord' },
                { icon: '🧘', label: 'Wellness', desc: 'Headspace, Calm, MyFitnessPal' },
                { icon: '🛍️', label: 'Shopping', desc: 'Amazon, Flipkart, Zomato' }
              ].map((category, index) => (
                <div key={index} className="p-4 border rounded-lg text-center hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-2">{category.icon}</div>
                  <h4 className="font-semibold mb-1">{category.label}</h4>
                  <p className="text-xs text-muted-foreground">{category.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Single App Analyzer View */}
      {currentView === 'analyzer' && (
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Single App Analysis</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Enter any app name to get detailed AI-powered insights from user reviews
            </p>
          </div>
          <AppAnalyzer onAnalysisComplete={handleAnalysisComplete} />
        </div>
      )}

      {/* Competitive Intelligence View */}
      {currentView === 'competitive' && (
        <div className="container mx-auto px-4 py-8">
          <CompetitiveIntelligence onSelectApp={handleAnalysisComplete} />
        </div>
      )}

      {/* Results View */}
      {currentView === 'results' && analysisResult && (
        <div className="container mx-auto px-4 py-8">
          <AnalysisResults result={analysisResult} onBack={handleBack} />
        </div>
      )}
    </div>
  );
};

export default Index;
