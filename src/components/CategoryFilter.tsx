
import { Button } from "@/components/ui/button";
import { getCategories } from "@/lib/data/themes";
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  selectedCategory: string | null;
  onChange: (category: string | null) => void;
}

export default function CategoryFilter({ selectedCategory, onChange }: CategoryFilterProps) {
  const categories = ["All", ...getCategories()];

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {categories.map((category) => (
        <Button
          key={category}
          variant="outline"
          size="sm"
          className={cn(
            "rounded-full",
            selectedCategory === (category === "All" ? null : category)
              ? "bg-primary text-primary-foreground hover:bg-primary/90"
              : "bg-secondary hover:bg-secondary/80"
          )}
          onClick={() => onChange(category === "All" ? null : category)}
        >
          {category}
        </Button>
      ))}
    </div>
  );
}
