
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { NewsEvent } from "@/lib/data/themes";

interface TimelineEventProps {
  event: NewsEvent;
}

export default function TimelineEvent({ event }: TimelineEventProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric'
    }).format(date);
  };

  // Determine importance badge based on detail level
  const importanceBadge = () => {
    if (event.detailLevel === 0) {
      return <Badge className="bg-red-500 hover:bg-red-600">Key Event</Badge>;
    }
    if (event.detailLevel === 1) {
      return <Badge className="bg-amber-500 hover:bg-amber-600">Major</Badge>;
    }
    return null;
  };

  return (
    <div className="relative pl-10 pb-8">
      <div className="timeline-connector" />
      <div className="absolute left-2 top-2 h-4 w-4 rounded-full bg-primary" />
      
      <Card>
        <CardContent className="pt-6">
          <div className="mb-2 flex justify-between items-start">
            <div>
              <div className="text-sm font-medium text-muted-foreground mb-1">
                {formatDate(event.date)}
              </div>
              <h4 className="font-semibold text-lg mb-2">{event.title}</h4>
            </div>
            {importanceBadge()}
          </div>
          <p className="text-muted-foreground">{event.excerpt}</p>
        </CardContent>
        <CardFooter className="pt-0 pb-4">
          <a 
            href={event.sourceUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-xs text-primary hover:underline flex items-center"
          >
            Source: {event.source} ↗
          </a>
        </CardFooter>
      </Card>
    </div>
  );
}
