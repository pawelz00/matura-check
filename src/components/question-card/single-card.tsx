import { Card } from "@/components/ui/card.tsx";
import CardHead from "@/components/question-card/card-header.tsx";
import CardBody from "@/components/question-card/card-body.tsx";
import { QuestionsData } from "@/store/useDataStore.ts";

type SingleCardProps = {
  item: QuestionsData;
};

export default function SingleCard({ item }: SingleCardProps) {
  return (
    <Card className="w-full h-full transition-all hover:shadow-lg">
      <CardHead item={item} />
      <CardBody item={item} />
    </Card>
  );
}
