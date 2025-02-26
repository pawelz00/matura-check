import { useDataStore } from "@/store/useDataStore";
import { useFiltersStore } from "@/store/useFiltersStore";
import { cn } from "@/lib/utils.ts";
import SingleCard from "@/components/question-card/single-card.tsx";

export default function QuestionCards() {
  const { questionsData } = useDataStore();
  const { view } = useFiltersStore();

  const classNames = {
    grid: "grid grid-cols-2 gap-6",
    list: "flex flex-col gap-6",
  };

  return (
    <main className={cn("w-full mt-6 items-center", classNames[view])}>
      {questionsData?.map((item) => <SingleCard key={item.id} item={item} />)}
    </main>
  );
}
