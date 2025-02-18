import { create } from "zustand";
import { appData, Items } from "@/data/data.ts";

export type Status = "inProgress" | "learned" | "review" | "notStarted";

export interface DataStore {
  data: Items;
  groupedData: Record<string, Items> | null;
  groupBy: "author" | "period" | "motive" | null;
  groupByField: (field: "author" | "period" | "motive" | null) => void;
  statuses: Record<string, Status>;
  setStatus: (id: number, status: Status) => void;
  loadStatuses: () => void;
}

export const useDataStore = create<DataStore>((set) => {
  const storedStatuses = JSON.parse(localStorage.getItem("statuses") || "{}");

  return {
    data: appData.sort((a, b) => a.title.localeCompare(b.title)),
    groupedData: null,
    groupBy: null,
    statuses: storedStatuses,
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
    loadStatuses: () => {
      const stored = JSON.parse(
        localStorage.getItem("learningStatuses") || "{}",
      );
      set({ statuses: stored });
    },
    groupByField: (field) =>
      set((state) => ({
        groupBy: field,
        groupedData: field
          ? state.data.reduce(
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
            )
          : null,
      })),
  };
});
