
import { Link } from "react-router-dom";
import { HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-bold tracking-tight">
            Wait<span className="text-primary">…</span>What<span className="text-primary">?</span>
          </h1>
        </Link>
        <nav className="flex items-center gap-4">
          <Link to="/" className="text-muted-foreground hover:text-foreground">
            Home
          </Link>
          <Link to="/about" className="text-muted-foreground hover:text-foreground">
            About
          </Link>
          <Button size="sm" variant="outline" className="gap-2">
            <HelpCircle className="h-4 w-4" />
            <span>How it works</span>
          </Button>
        </nav>
      </div>
    </header>
  );
}
