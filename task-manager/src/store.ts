// @ts-ignore-- weird zustand problems
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
  removeTask: (title: string) => void;
  draggedTask: string | undefined; // the title of the task being dragged
  setDraggedTask: (title: string | undefined) => void;
  moveTask: (title: string, state: Statuses) => void;
}>()(
  devtools(
    persist(
      (set) => ({
        // Initial state of tasks
        tasks: [],
        // Add a task to existing state
        addTask: (newTitle: string) =>
          set((store) => ({
            tasks: [
              ...store.tasks,
              { title: newTitle, state: Statuses.PLANNED },
            ],
          })),
        // Remove task from existing state
        removeTask: (title: string) =>
          set((store) => ({
            tasks: store.tasks.filter((task) => task.title !== title),
          })),
        // Move tasks and update state
        draggedTask: undefined,
        setDraggedTask: (title: string | undefined) =>
          set({
            draggedTask: title,
          }),
        moveTask: (title: string, state: Statuses) =>
          set((store) => ({
            tasks: store.tasks.map((task) =>
              task.title === title
                ? {
                    title,
                    state,
                  }
                : task
            ),
          })),
      }),
      {
        name: "task-storage",
      }
    )
  )
);
