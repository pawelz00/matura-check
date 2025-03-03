import { Check, CircleX, Eye, LucideIcon, Pickaxe } from "lucide-react";
import { Status } from "@/store/useDataStore.ts";

type Statuses = {
  [key: string]: {
    status: Status;
    text: string;
    icon: LucideIcon;
    bgColor: string;
    textColor: string;
    hoverColor: string;
  };
};

export const statusesObj: Statuses = {
  notStarted: {
    status: "notStarted",
    text: "Nie rozpoczęte",
    icon: CircleX,
    bgColor: "bg-red-100",
    textColor: "text-red-500",
    hoverColor: "hover:bg-red-100",
  },
  inProgress: {
    status: "inProgress",
    text: "W trakcie",
    icon: Pickaxe,
    bgColor: "bg-yellow-100",
    textColor: "text-yellow-500",
    hoverColor: "hover:bg-yellow-100",
  },
  review: {
    status: "review",
    text: "Do powtórzenia",
    icon: Eye,
    bgColor: "bg-blue-100",
    textColor: "text-blue-500",
    hoverColor: "hover:bg-blue-100",
  },
  learned: {
    status: "learned",
    text: "Nauczone",
    icon: Check,
    bgColor: "bg-green-100",
    textColor: "text-green-500",
    hoverColor: "hover:bg-green-100",
  },
} as const;
