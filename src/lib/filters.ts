import { Item, Items } from "@/data/data.ts";
import { DataStore, Status } from "@/store/useDataStore.ts";

export function getCardsStatusFilterData(
  items: Items,
  statuses: DataStore["statuses"],
  status: Status,
): Items {
  return items.filter((item: Item) => statuses[item.id] === status);
}

export function getCardsSearchFilterData(items: Items, search: string): Items {
  return items.filter((item) => {
    return (
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item?.author?.toLowerCase().includes(search.toLowerCase()) ||
      item?.period?.toLowerCase().includes(search.toLowerCase()) ||
      item?.questions?.some((question) =>
        question.motive.toLowerCase().includes(search.toLowerCase()),
      )
    );
  });
}
