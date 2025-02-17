import { create } from "zustand";
import {Status} from "@/store/useDataStore.ts";

export interface FiltersStore {
    view: "grid" | "list";
    setView: (view: "grid" | "list") => void;
    status: Status | null;
    setStatus: (status: Status | null) => void;
}

export const useFiltersStore = create<FiltersStore>((set) => ({
    view: "list",
    setView: (view) => set({ view }),
    status: null,
    setStatus: (status) => set({ status }),
}));