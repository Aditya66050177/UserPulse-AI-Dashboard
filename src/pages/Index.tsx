import { useState } from 'react';
import { AppAnalyzer } from '@/components/AppAnalyzer';
import { AnalysisResults } from '@/components/AnalysisResults';
import { AnalysisResult } from '@/types/analysis';

const Index = () => {
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);

  const handleAnalysisComplete = (result: AnalysisResult) => {
    setAnalysisResult(result);
  };

  const handleBack = () => {
    setAnalysisResult(null);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      {!analysisResult && (
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              UserPulse
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              AI-powered product intelligence that analyzes user reviews to extract actionable insights for product managers
            </p>
          </div>
          
          <AppAnalyzer onAnalysisComplete={handleAnalysisComplete} />
          
          {/* Features Section */}
          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-destructive/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-destructive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.314 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Pain Point Detection</h3>
              <p className="text-muted-foreground">Automatically identify and categorize user frustrations with severity rankings</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-success/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Feature Love Analysis</h3>
              <p className="text-muted-foreground">Discover what users love most about your product with sentiment scoring</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-warning/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Feature Requests</h3>
              <p className="text-muted-foreground">Extract and prioritize user feature requests to guide your roadmap</p>
            </div>
          </div>
        </div>
      )}

      {/* Results Section */}
      {analysisResult && (
        <div className="container mx-auto px-4 py-8">
          <AnalysisResults result={analysisResult} onBack={handleBack} />
        </div>
      )}
    </div>
  );
};

export default Index;
