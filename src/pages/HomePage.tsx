
import { useState } from "react";
import ThemeCard from "@/components/ThemeCard";
import CategoryFilter from "@/components/CategoryFilter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getThemes } from "@/lib/data/themes";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const themes = getThemes();
  const filteredThemes = selectedCategory 
    ? themes.filter(theme => theme.category === selectedCategory)
    : themes;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-secondary to-background py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Complex news, simplified timelines
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Follow major news stories as they evolve, with the level of detail you want.
                No more information overload or context switching.
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6">Explore News Themes</h2>
            <CategoryFilter 
              selectedCategory={selectedCategory}
              onChange={setSelectedCategory}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredThemes.map((theme) => (
              <ThemeCard key={theme.id} theme={theme} />
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <div className="bg-secondary rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Stay in the Loop</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Never miss important updates on the stories that matter to you.
            </p>
            <div className="flex max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 rounded-l-md border border-input"
              />
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-r-md">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
