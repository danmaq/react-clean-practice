import { nanoid } from 'nanoid';

export type TaskSource = Readonly<Partial<Task> & Pick<Task, 'summary'>>;

export interface Task {
  readonly id: string;
  readonly progress: number;
  readonly summary: string;
}

export const create = ({ id, progress, summary }: TaskSource) => ({
  id: id ?? nanoid(),
  progress: progress ?? 0,
  summary,
});

export const incrementProgress = ({ progress, ...rest }: Task): Task => ({
  progress: progress + 0.1,
  ...rest,
});

export const isDone = ({ progress }: Pick<Task, 'progress'>) => progress >= 1;
