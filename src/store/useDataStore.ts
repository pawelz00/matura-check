import { create } from "zustand";
import { appData, Items, Questions } from "@/data/data.ts";

export type Status = "inProgress" | "learned" | "review" | "notStarted";
export type QuestionsData = {
  id: number;
  title: string;
  author: string | null;
  period: string;
  questions: Questions | null;
};

export interface DataStore {
  data: Items;
  questionsData: QuestionsData[];
  groupedData: Record<string, Items> | null;
  groupBy: "author" | "period" | "motive" | null;
  groupByField: (field: "author" | "period" | "motive" | null) => void;
  statuses: Record<string, Status>;
  questionsStatuses: Record<string, Status>;
  setStatus: (id: number, status: Status) => void;
  setQuestionsStatus: (
    lectureId: number,
    questionId: number,
    status: Status,
  ) => void;
  loadStatuses: () => void;
}

export const useDataStore = create<DataStore>((set) => {
  const storedStatuses = JSON.parse(localStorage.getItem("statuses") || "{}");
  const storedQuestionStatuses = JSON.parse(
    localStorage.getItem("questionStatuses") || "{}",
  );

  return {
    data: appData.sort((a, b) => a.title.localeCompare(b.title)),

    questionsData: appData
      .filter((el) => el.questions)
      .map((el) => ({
        id: el.id,
        title: el.title,
        author: el.author,
        period: el.period,
        questions: el.questions,
      }))
      .flat(),

    groupedData: null,
    groupBy: null,

    statuses: storedStatuses,
    questionsStatuses: storedQuestionStatuses,

    setStatus: (id, status) => {
      set((state) => {
        const updatedStatuses = { ...state.statuses, [id]: status };
        localStorage.setItem(
          "learningStatuses",
          JSON.stringify(updatedStatuses),
        );
        return { statuses: updatedStatuses };
      });
    },

    setQuestionsStatus: (lectureId, questionId, status) => {
      set((state) => {
        const updatedStatuses = {
          ...state.questionsStatuses,
          [`${lectureId}-${questionId}`]: status,
        };
        localStorage.setItem(
          "questionStatuses",
          JSON.stringify(updatedStatuses),
        );
        return { questionsStatuses: updatedStatuses };
      });
    },

    loadStatuses: () => {
      const stored = JSON.parse(
        localStorage.getItem("learningStatuses") || "{}",
      );
      const storedQuestions = JSON.parse(
        localStorage.getItem("questionStatuses") || "{}",
      );
      set({ statuses: stored, questionsStatuses: storedQuestions });
    },

    groupByField: (field) =>
      set((state) => ({
        groupBy: field,
        groupedData: field
          ? Object.fromEntries(
              Object.entries(
                state.data.reduce(
                  (acc, item) => {
                    let key: string | null = null;

                    if (field === "author") key = item.author;
                    if (field === "period") key = item.period;
                    if (field === "motive")
                      key =
                        item.questions?.map((q) => q.motive).join(", ") ||
                        "Unknown";

                    if (key) {
                      acc[key] = acc[key] ? [...acc[key], item] : [item];
                    }

                    return acc;
                  },
                  {} as Record<string, Items>,
                ),
              ).sort(([keyA], [keyB]) => keyA.localeCompare(keyB)),
            )
          : null,
      })),
  };
});
