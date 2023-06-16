import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { Statuses } from "./constants/statuses";

export interface TaskState {
  title: string;
  state: Statuses;
}

export const useTaskStore = create<{
  tasks: TaskState[];
  addTask: (title: string) => void;
  removeTask: (index: number) => void;
}>()(
  devtools(
    persist(
      (set) => ({
        // Initial state of tasks
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
        // Add a task to existing state
        addTask: (newTitle: string) =>
          set((store) => ({
            tasks: [
              ...store.tasks,
              { title: newTitle, state: Statuses.PLANNED },
            ],
          })),
        // TODO: Remove a task from existing state
        removeTask: (index: number) =>
          set((store) => ({
            tasks: [...store.tasks].splice(index, 1),
          })),
      }),
      {
        name: "task-storage",
      }
    )
  )
);
