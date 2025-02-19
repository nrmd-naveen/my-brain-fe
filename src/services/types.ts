export interface Content {
    id: number;
    title: string;
    description: string;
    thumbnail: string;
    link: string;
    type: string;
    createdAt: string;
    userId: number;
    tags: string[];
}

export type AlertState = {
  message: string;
  type: "success" | "error";
  isVisible: boolean;
};