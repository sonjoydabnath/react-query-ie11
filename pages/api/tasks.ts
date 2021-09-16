import type { NextApiRequest, NextApiResponse } from "next";

export type Task = {
  id: number;
  title: string;
  isCompleted: boolean;
};

export type TaskData = {
  items: Task[];
  totalCount: number;
};

const data: TaskData = {
  items: [
    {
      id: 1,
      title: "Presentation",
      isCompleted: true,
    },
    {
      id: 2,
      title: "Mockups",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Design",
      isCompleted: false,
    },
    {
      id: 4,
      title: "Demo",
      isCompleted: false,
    },
  ],
  totalCount: 4,
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TaskData>
) {
  res.status(200).json(data);
}
