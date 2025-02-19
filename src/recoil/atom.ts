import { atom } from "recoil";
import { AlertState, Content } from "../services/types";
import { initialContent } from "../services/TrialData";



export const contentState = atom<Content[]>({
  key: "contentState",
  //@ts-ignore
  default: initialContent,
});

export const LoadingState = atom<boolean>({
  key: "LoadingState",
  default: false,
})

export const authState = atom<boolean>({
  key: "authState",
  default: false,
});



export const alertState = atom<AlertState>({
  key: "alertState",
  default: {
    message: "...",
    type: "success",
    isVisible: false,
  },
});