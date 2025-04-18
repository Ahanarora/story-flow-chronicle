
import { Slider } from "@/components/ui/slider";

interface DetailLevelSliderProps {
  value: number;
  onChange: (value: number) => void;
}

export default function DetailLevelSlider({ value, onChange }: DetailLevelSliderProps) {
  const detailLevelDescriptions = [
    "Essential milestones only",
    "Major developments",
    "Complete timeline"
  ];

  return (
    <div className="space-y-4 max-w-xl">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">Timeline Detail Level</h3>
        <span className="text-sm font-medium bg-secondary px-2 py-1 rounded-md">
          Level {value}: {detailLevelDescriptions[value]}
        </span>
      </div>
      <Slider 
        min={0} 
        max={2}
        step={1}
        value={[value]}
        onValueChange={(value) => onChange(value[0])} 
        className="py-4"
      />
      <div className="flex justify-between text-xs text-muted-foreground px-1">
        <span>Essential</span>
        <span>Complete</span>
      </div>
    </div>
  );
}
