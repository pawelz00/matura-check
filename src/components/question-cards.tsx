import { useDataStore } from "@/store/useDataStore";
import { useFiltersStore } from "@/store/useFiltersStore";
import { cn } from "@/lib/utils.ts";
import SingleCard from "@/components/question-card/single-card.tsx";
import { Questions } from "@/data/data.ts";

export type QuestionsData = {
  id: number;
  title: string;
  author: string | null;
  questions: Questions;
};

export default function QuestionCards() {
  const { data } = useDataStore();
  const { view } = useFiltersStore();

  const questionsData: QuestionsData[] = data
    .filter((el) => el.questions)
    .map((el) => ({
      id: el.id,
      title: el.title,
      author: el.author,
      questions: el.questions,
    }))
    .flat();

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
