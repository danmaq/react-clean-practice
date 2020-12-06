import { Task, TaskSource } from './entities';

export interface Tasks {
  readonly addAsync: (source: TaskSource) => Promise<void>;
  readonly getAsync: () => Promise<Iterable<Task>>;
  readonly removeAsync: (task: Pick<Task, 'id'>) => Promise<void>;
}
