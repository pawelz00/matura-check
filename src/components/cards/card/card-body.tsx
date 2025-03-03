import { Badge } from "@/components/ui/badge.tsx";
import { Item } from "@/data/data.ts";
import { Separator } from "@/components/ui/separator.tsx";
import { CardContent } from "@/components/ui/card.tsx";
import { ListIcon, VideoIcon } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";

export default function CardBody({ item }: { item: Item }) {
  return (
    <CardContent className="mt-6 space-y-6">
      <div className="space-y-2">
        <h3 className="text-md font-medium text-card-foreground">
          Krótki opis dzieła
        </h3>
        <p className="text-sm text-card-foreground/65">{item.description}</p>
      </div>

      {(item?.questions?.length ?? 0) > 0 && (
        <div className="space-y-2">
          <h3 className="text-md font-medium text-card-foreground">Motywy</h3>
          <div className="flex flex-wrap gap-2.5">
            {item?.questions?.map((item) => {
              return (
                <Badge
                  variant={"accent"}
                  key={item.question}
                  className={"whitespace-pre-wrap"}
                >
                  {item.motive}
                </Badge>
              );
            })}
          </div>
        </div>
      )}

      <Separator />

      <div className="space-y-2">
        <h3 className="text-md font-medium text-card-foreground">Źródła</h3>
        <div className="text-sm ">
          <div className={"flex flex-col gap-1 w-fit"}>
            {item?.externalResources
              ?.sort((a) => {
                return a.type === "video" ? -1 : 1;
              })
              .map((item) => {
                return (
                  <a
                    href={item.url}
                    target={"_blank"}
                    rel={"noreferrer"}
                    key={item.url}
                    className={
                      "flex gap-x-2 items-center text-md hover:underline"
                    }
                  >
                    <Button
                      size={"icon"}
                      variant={"outline"}
                      className={"rounded-full border size-7"}
                    >
                      {item.type === "video" ? (
                        <VideoIcon />
                      ) : (
                        <ListIcon className={"size-4"} />
                      )}
                    </Button>
                    <span className={"text-sm"}>{item.title}</span>
                  </a>
                );
              })}
          </div>
        </div>
      </div>
    </CardContent>
  );
}
