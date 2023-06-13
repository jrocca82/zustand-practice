import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { Statuses } from "./constants/statuses";

interface TaskState {
  title: string;
  state: Statuses;
}

export const useTaskStore = create<{ tasks: TaskState[] }>()(
  devtools(
    persist(
      (set) => ({
        tasks: [
          {
            title: "Test test 123",
            state: Statuses.PLANNED,
          },
          {
            title: "Test test 456",
            state: Statuses.ONGOING,
          },
          {
            title: "Test test 678",
            state: Statuses.DONE,
          },
        ],
      }),
      {
        name: "task-storage",
      }
    )
  )
);
