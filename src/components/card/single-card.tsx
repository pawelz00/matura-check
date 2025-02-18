import { Item } from "@/data/data.ts";
import { Card } from "@/components/ui/card.tsx";
import CardHead from "@/components/card/card-header.tsx";
import CardBody from "@/components/card/card-body.tsx";

type SingleCardProps = {
  item: Item;
};

export default function SingleCard({ item }: SingleCardProps) {
  return (
    <Card className="w-full transition-all hover:shadow-lg">
      <CardHead item={item} />
      <CardBody item={item} />
    </Card>
  );
}
