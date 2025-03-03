import { CardHeader, CardTitle } from "@/components/ui/card.tsx";
import { QuestionsData } from "@/store/useDataStore.ts";

export default function CardHead({ item }: { item: QuestionsData }) {
  return (
    <CardHeader className="rounded-t-lg bg-card-header">
      <div className="flex items-center justify-between">
        <div className="space-y-0.1">
          <CardTitle className="text-2xl">{item.title}</CardTitle>
          <p className="text-sm text-card-foreground/50">{item.author}</p>
        </div>
      </div>
    </CardHeader>
  );
}
