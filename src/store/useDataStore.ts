import { create } from "zustand";
import {appData, Items} from "@/data/data.ts";

interface DataStore {
    data: Items;
    filteredData: Items | Record<string, Items>;
    filterBy: "author" | "period" | "motive" | null;
    filterByField: (field: "author" | "period" | "motive" | null) => void;
}

export const useDataStore = create<DataStore>((set) => ({
    data: appData,
    filteredData: appData,
    filterBy: null,
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
                : state.data,
        })),
}));