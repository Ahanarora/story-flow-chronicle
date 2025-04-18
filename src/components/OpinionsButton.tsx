
import { MessagesSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface Opinion {
  title: string;
  author: string;
  publication: string;
  date: string;
  url: string;
}

interface OpinionsButtonProps {
  themeId: string;
}

export default function OpinionsButton({ themeId }: OpinionsButtonProps) {
  // In a real app, these would come from an API based on the themeId
  const opinions: Opinion[] = [
    {
      title: "Why the Ukraine War Is at a Turning Point",
      author: "Thomas L. Friedman",
      publication: "The New York Times",
      date: "2025-04-15",
      url: "https://www.nytimes.com/opinion",
    },
    {
      title: "Putin's Strategic Failure in Ukraine",
      author: "Anne Applebaum",
      publication: "The Atlantic",
      date: "2025-04-12",
      url: "https://www.theatlantic.com/opinion",
    },
    {
      title: "The West's Response to Ukraine",
      author: "David Brooks",
      publication: "The New York Times",
      date: "2025-04-10",
      url: "https://www.nytimes.com/opinion",
    },
  ];

  const formatDate = (dateString: string) => {
    return new Intl.DateTimeFormat('en-US', { 
      month: 'short',
      day: 'numeric'
    }).format(new Date(dateString));
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <MessagesSquare className="h-4 w-4" />
          <span>Opinions</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0" align="end">
        <div className="p-4 pb-2">
          <h4 className="font-medium leading-none mb-1">Top Opinion Pieces</h4>
          <p className="text-sm text-muted-foreground">
            Expert analysis and perspectives
          </p>
        </div>
        <div className="px-4 pb-4">
          {opinions.map((opinion, index) => (
            <a
              key={index}
              href={opinion.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:bg-accent hover:text-accent-foreground rounded-md -mx-1 px-1 py-2"
            >
              <div className="text-sm font-medium">{opinion.title}</div>
              <div className="text-xs text-muted-foreground mt-1">
                {opinion.author} · {opinion.publication} · {formatDate(opinion.date)}
              </div>
            </a>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
