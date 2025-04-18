
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">
              Wait<span className="text-primary">…</span>What<span className="text-primary">?</span>
            </h2>
            <p className="text-muted-foreground text-sm mt-2">
              Making complex news clear through thematic timelines
            </p>
          </div>
          <div className="flex flex-wrap gap-8">
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Navigation</h3>
              <ul className="space-y-1">
                <li>
                  <Link to="/" className="text-muted-foreground hover:text-foreground text-sm">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-muted-foreground hover:text-foreground text-sm">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Legal</h3>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground text-sm">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground text-sm">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Wait...What? — A thematic news platform. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
