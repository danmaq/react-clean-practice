import { Task } from './entities';

export interface Tasks {
  readonly addAsync: (task: Task) => Promise<void>;
  readonly getAsync: () => Promise<Iterable<Task>>;
}
