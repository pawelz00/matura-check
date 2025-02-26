import { Question } from "@/data/data.ts";
import { Card } from "@/components/ui/card.tsx";

type SingleCardProps = {
  item: Question;
};

export default function SingleCard({ item }: SingleCardProps) {
  return (
    <Card className="w-full h-full transition-all hover:shadow-lg">
      {item.question}
    </Card>
  );
}
