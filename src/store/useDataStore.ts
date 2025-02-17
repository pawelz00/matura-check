import { create } from "zustand";
import {appData, Items} from "@/data/data.ts";

export type Status = "inProgress" | "learned" | "review" | "notStarted";

export interface DataStore {
    data: Items;
    filteredData: Record<string, Items> | null;
    filterBy: "author" | "period" | "motive" | null;
    filterByField: (field: "author" | "period" | "motive" | null) => void;
    statuses: Record<string, Status>;
    setStatus: (id: number, status: Status) => void;
    loadStatuses: () => void;
}

export const useDataStore = create<DataStore>((set) => {

    const storedStatuses = JSON.parse(localStorage.getItem("statuses") || "{}");

    return {
        data: appData.sort((a,b) => a.title.localeCompare(b.title)),
        filteredData: null,
        filterBy: null,
        statuses: storedStatuses,
        setStatus: (id, status) => {
            set((state) => {
                const updatedStatuses = { ...state.statuses, [id]: status };
                localStorage.setItem("learningStatuses", JSON.stringify(updatedStatuses));
                return { statuses: updatedStatuses };
            });
        },
        loadStatuses: () => {
            const stored = JSON.parse(localStorage.getItem("learningStatuses") || "{}");
            set({ statuses: stored });
        },
        filterByField: (field) =>
        set((state) => ({
            filterBy: field,
            filteredData: field
                ? state.data.reduce((acc, item) => {
                    let key: string | null = null;

                    if (field === "author") key = item.author;
                    if (field === "period") key = item.period;
                    if (field === "motive")
                        key = item.questions?.map((q) => q.motive).join(", ") || "Unknown";

                    if (key) {
                        acc[key] = acc[key] ? [...acc[key], item] : [item];
                    }
                    return acc;
                }, {} as Record<string, Items>)
                : null,
  }))
  }
});