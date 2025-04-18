
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DetailLevelSlider from "@/components/DetailLevelSlider";
import TimelineEvent from "@/components/TimelineEvent";
import { getThemeById, getFilteredEvents } from "@/lib/data/themes";

export default function ThemePage() {
  const { themeId } = useParams<{ themeId: string }>();
  const [detailLevel, setDetailLevel] = useState(2); // Default to medium detail
  const theme = themeId ? getThemeById(themeId) : null;
  const events = themeId ? getFilteredEvents(themeId, detailLevel) : [];

  if (!theme) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Theme not found</h2>
            <p className="mb-8">The news theme you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/">Return Home</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric'
    }).format(date);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div 
          className="h-64 bg-cover bg-center relative"
          style={{ 
            backgroundImage: `url(${theme.imageUrl || 'https://images.unsplash.com/photo-1504711434969-e33886168f5c'})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
          <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-8 relative z-10">
            <div className="flex items-center mb-2">
              <Button variant="outline" size="sm" className="gap-1 bg-white/10 backdrop-blur-sm mr-4" asChild>
                <Link to="/">
                  <ArrowLeft className="h-4 w-4" />
                  <span>Back</span>
                </Link>
              </Button>
              <span className="text-sm text-white/70">
                Updated {formatDate(theme.updatedAt)}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white">{theme.title}</h1>
            <p className="text-white/80 md:text-lg mt-2 max-w-3xl">{theme.description}</p>
          </div>
        </div>
        
        <section className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <DetailLevelSlider value={detailLevel} onChange={setDetailLevel} />
          </div>
          
          <div className="max-w-3xl mx-auto">
            {events.length > 0 ? (
              events.map((event) => (
                <TimelineEvent key={event.id} event={event} />
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No events found at this detail level.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
