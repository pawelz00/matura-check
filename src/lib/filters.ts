import { Item, Items } from "@/data/data.ts";
import { DataStore, QuestionsData, Status } from "@/store/useDataStore.ts";

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

export function getQuestionsCardsStatusFilterData(
  items: QuestionsData[],
  status: Status,
  questionsStatuses: DataStore["questionsStatuses"],
) {
  return items
    .map((i) => {
      return {
        ...i,
        questions: i.questions.filter((q) => {
          return status
            ? questionsStatuses[`${i.id}-${q.id}`] === status
            : false;
        }),
      };
    })
    .filter((i) => i.questions.length);
}

export function getQuestionsCardsSearchFilterData(
  items: QuestionsData[],
  search: string,
) {
  return items
    .map((i) => {
      const matchesTitleOrAuthor =
        i.title.toLowerCase().includes(search.toLowerCase()) ||
        i?.author?.toLowerCase().includes(search.toLowerCase());

      const filteredQuestions = i.questions.filter((q) => {
        return (
          q.question.toLowerCase().includes(search.toLowerCase()) ||
          q.motive.toLowerCase().includes(search.toLowerCase())
        );
      });

      return {
        ...i,
        questions: matchesTitleOrAuthor ? i.questions : filteredQuestions,
      };
    })
    .filter((i) => i.questions.length);
}
