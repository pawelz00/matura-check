import {Check, CircleX, Eye, Pickaxe, LucideIcon} from "lucide-react";
import {Status} from "@/store/useDataStore.ts";

type Statuses = {
    [key: string]: {
        status: Status;
        text: string;
        icon: LucideIcon;
        color: string;
        hoverColor: string;
    }
}

export const statusesObj: Statuses = {
    notStarted: {
        status: "notStarted",
        text: "Nie rozpoczęte",
        icon: CircleX,
        color: "bg-red-500",
        hoverColor: "hover:bg-red-500"
    },
    inProgress: {
        status: "inProgress",
        text: "W trakcie",
        icon: Pickaxe,
        color: "bg-yellow-500",
        hoverColor: "hover:bg-yellow-500"
    },
    review: {
        status: "review",
        text: "Do powtórzenia",
        icon: Eye,
        color: "bg-blue-500",
        hoverColor: "hover:bg-blue-500"
    },
    learned: {
        status: "learned",
        text: "Nauczone",
        icon: Check,
        color: "bg-green-500",
        hoverColor: "hover:bg-green-500",
    },
} as const;