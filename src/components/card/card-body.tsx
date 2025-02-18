import { Badge } from "@/components/ui/badge.tsx";
import { VideoIcon } from "lucide-react";
import { Item } from "@/data/data.ts";
import { Separator } from "@/components/ui/separator.tsx";
import { CardContent } from "@/components/ui/card.tsx";

export default function CardBody({ item }: { item: Item }) {
  return (
    <CardContent className="mt-6 space-y-6">
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-card-foreground/70">
          Krótki opis dzieła
        </h3>
        <p className="text-sm text-slate-600">{item.description}</p>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium text-card-foreground/70">Motywy</h3>
        <div className="flex flex-wrap gap-2">
          {item?.questions?.map((item) => {
            return (
              <Badge
                variant={"default"}
                className={"transition-colors hover:bg-secondary"}
                key={item.question}
              >
                {item.motive}
              </Badge>
            );
          })}
        </div>
      </div>
      <Separator />
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-card-foreground/70">Źródła</h3>
        <div className="text-sm ">
          <div>
            {item?.externalResources?.map((item) => {
              return (
                <a
                  href={item.url}
                  target={"_blank"}
                  rel={"noreferrer"}
                  key={item.url}
                  className={
                    "flex gap-x-1.5 items-center text-md hover:underline"
                  }
                >
                  <span>{item.title}</span>
                  <VideoIcon className={"size-5 text-card-foreground/50"} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </CardContent>
  );
}
