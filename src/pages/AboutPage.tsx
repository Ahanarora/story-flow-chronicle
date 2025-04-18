
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">About Wait…What?</h1>
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-muted-foreground mb-4">
              In today's fast-paced news cycle, it's easy to lose track of how stories evolve and connect.
              Wait...What? organizes complex news into thematic timelines, allowing you to follow stories
              at your preferred level of detail.
            </p>
            <p className="text-muted-foreground">
              We believe that understanding the context and progression of news events is crucial for staying 
              truly informed in an increasingly complex world.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
            <div className="space-y-6">
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-3">Theme-Based Organization</h3>
                <p className="text-muted-foreground">
                  News is organized by themes (like "Russia-Ukraine War" or "AI Developments") rather than by date,
                  allowing you to follow specific stories over time.
                </p>
              </div>
              
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-3">Detail Level Customization</h3>
                <p className="text-muted-foreground">
                  Use the detail slider (0-5) to control how much information you see:
                </p>
                <ul className="list-disc list-inside mt-2 text-muted-foreground">
                  <li>Level 0: Only the most significant milestones</li>
                  <li>Level 5: A comprehensive timeline with all relevant events</li>
                </ul>
              </div>
              
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-3">Source Transparency</h3>
                <p className="text-muted-foreground">
                  All timeline entries link to their original sources, allowing you to read the full reporting
                  from trusted news organizations.
                </p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-muted-foreground mb-6">
              Have questions, suggestions, or feedback? We'd love to hear from you.
            </p>
            <div>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-3 py-2 border border-input rounded-md"
                    placeholder="Your name" 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-3 py-2 border border-input rounded-md"
                    placeholder="your.email@example.com" 
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full px-3 py-2 border border-input rounded-md"
                    placeholder="Your message" 
                  />
                </div>
                <button 
                  type="submit" 
                  className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
