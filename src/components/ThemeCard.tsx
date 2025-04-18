import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { NewsTheme } from "@/lib/types/news";

interface ThemeCardProps {
  theme: NewsTheme;
}

export default function ThemeCard({ theme }: ThemeCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric'
    }).format(date);
  };
  
  return (
    <Link to={`/themes/${theme.id}`}>
      <Card className="h-full overflow-hidden transition-all hover:shadow-md hover:-translate-y-1">
        <div className="h-40 overflow-hidden">
          <img 
            src={theme.imageUrl || 'https://images.unsplash.com/photo-1504711434969-e33886168f5c'}  
            alt={theme.title} 
            className="w-full h-full object-cover"
          />
        </div>
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center mb-1">
            <Badge variant="outline" className="bg-secondary">
              {theme.category}
            </Badge>
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="h-3 w-3 mr-1" />
              <span>Updated {formatDate(theme.updatedAt)}</span>
            </div>
          </div>
          <h3 className="font-bold text-xl tracking-tight">{theme.title}</h3>
        </CardHeader>
        <CardContent className="pb-4">
          <p className="text-muted-foreground line-clamp-2">{theme.description}</p>
        </CardContent>
        <CardFooter className="pt-0 text-sm">
          <span className="text-primary font-medium">View timeline →</span>
        </CardFooter>
      </Card>
    </Link>
  );
}
