import { CardHeader, CardTitle } from "@/components/ui/card.tsx";
import { QuestionsData } from "@/components/question-cards.tsx";

export default function CardHead({ item }: { item: QuestionsData }) {
  return (
    <CardHeader className="rounded-t-lg bg-gradient-to-r from-primary to-secondary">
      <div className="flex items-center justify-between">
        <div className="space-y-0.1">
          <CardTitle className="text-2xl font-serif">{item.title}</CardTitle>
          <p className="text-sm text-secondary-foreground/70">{item.author}</p>
        </div>
      </div>
    </CardHeader>
  );
}
