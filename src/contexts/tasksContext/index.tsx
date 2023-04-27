import { CompletedTask, theme, useCompletedTasks } from "@ribon.io/shared";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { TASKS } from "utils/constants/Tasks";
import {
  beginningOfThisMonth,
  beginningOfToday,
  nextDay,
  nextMonth,
} from "lib/dateUtils";
import { useCurrentUser } from "contexts/currentUserContext";
import { showToast } from "lib/Toast";
import { useTranslation } from "react-i18next";

export type TaskStateItem = {
  id: string;
  nextAction: string;
  done: boolean;
  expiresAt: string;
  timesCompleted: number;
};

export interface ITasksContext {
  hasCompletedATask: boolean;
  setHasCompletedATask: (value: boolean) => void;
  tasksState: TaskStateItem[];
  registerAction: (action: string) => void;
  reload: () => void;
}

export const TasksContext = createContext<ITasksContext>({} as ITasksContext);

function TasksProvider({ children }: any) {
  const [tasksState, setTasksState] = useState<any[]>([]);
  const { findCompletedTasks, completeTask } = useCompletedTasks();
  const [hasCompletedATask, setHasCompletedATask] = useState(false);
  const { currentUser, signedIn } = useCurrentUser();

  const { t } = useTranslation("translation", {
    keyPrefix: "contexts.tasksContext",
  });

  function allDone(tasks: any) {
    return tasks.every((task: any) => task.done === true);
  }

  const isDone = (task: CompletedTask | undefined) => {
    if (!task) return false;
    const taskObject = TASKS.find(
      (filterTask) => filterTask.id === task.taskIdentifier,
    );
    const baseDate =
      taskObject?.type === "daily"
        ? beginningOfToday()
        : beginningOfThisMonth();

    const parsedLastCompletedAt = new Date(task.lastCompletedAt.slice(0, 19));
    if (baseDate > parsedLastCompletedAt) return false;

    return true;
  };

  const isExpired = (task: CompletedTask | undefined) => {
    if (!task) return false;

    const taskObject = TASKS.find(
      (filterTask) => filterTask.id === task.taskIdentifier,
    );

    if (isDone(task)) {
      return taskObject?.type === "daily" ? nextDay() : nextMonth();
    } else {
      return null;
    }
  };

  const buildTasksState = () => {
    findCompletedTasks().then((completedTasks) => {
      const state = TASKS.map((task) => {
        const currentTask = completedTasks.find(
          (filterTask) => filterTask.taskIdentifier === task.id,
        );

        return {
          id: task.id,
          nextAction: task.actions[0],
          done: isDone(currentTask),
          timesCompleted: currentTask?.timesCompleted || 0,
          expiresAt: isExpired(currentTask),
          lastCompletedAt: currentTask?.lastCompletedAt,
        };
      });

      setTasksState(state);
    });
  };

  const reload = () => buildTasksState();

  useEffect(() => {
    if (currentUser && signedIn && currentUser.email) buildTasksState();
  }, [currentUser, signedIn]);

  const registerAction = (action: string) => {
    if (!currentUser && !signedIn) return;
    if (tasksState.length === 0) return;

    const newState = tasksState.map((task) => {
      const currentTask = TASKS.find((filterTask) => filterTask.id === task.id);

      if (task.nextAction === action && currentTask) {
        const nextActionIndex = currentTask.actions.indexOf(action) + 1;
        const nextAction = currentTask.actions[nextActionIndex];

        if (nextAction) {
          return {
            ...task,
            nextAction,
          };
        } else {
          completeTask(task.id);
          if (!task.done) setHasCompletedATask(true);
          return {
            ...task,
            done: true,
            timesCompleted: task.timesCompleted + 1,
            expiresAt: currentTask.type === "daily" ? nextDay() : nextMonth(),
          };
        }
      }

      return task;
    });

    setTasksState(newState);
    if (allDone(newState)) {
      showToast({
        type: "custom",
        backgroundColor: theme.colors.feedback.success[50],
        borderColor: theme.colors.brand.primary[500],
        textColor: theme.colors.brand.primary[900],
        icon: "celebration",
        iconColor: theme.colors.brand.primary[500],
        message: t("allTasksCompleted"),
        closeButton: false,
        position: "bottom",
      });
    }
  };

  const tasksObject: ITasksContext = useMemo(
    () => ({
      hasCompletedATask,
      setHasCompletedATask,
      tasksState,
      registerAction,
      reload,
    }),
    [tasksState, hasCompletedATask],
  );

  return (
    <TasksContext.Provider value={tasksObject}>
      {children}
    </TasksContext.Provider>
  );
}

export default TasksProvider;

export function useTasksContext() {
  const context = useContext(TasksContext);

  if (!context) {
    throw new Error("useTasksContext must be used within a TasksProvider");
  }

  return context;
}
