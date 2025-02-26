import { CardContent } from "@/components/ui/card.tsx";
import { QuestionsData } from "@/store/useDataStore.ts";

export default function CardBody({ item }: { item: QuestionsData }) {
  return item.questions.map((q) => (
    <CardContent className="mt-6 space-y-6">
      <div>
        <h3 className="text-md font-medium text-card-foreground">{q.motive}</h3>
        <p className="text-sm text-card-foreground/65">{q.question}</p>
      </div>
    </CardContent>
  ));
}
