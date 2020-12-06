import { repositories } from '@react-clean-practice/a-entities';

export interface Usecase {
  readonly getTasksAsync: () => Promise<repositories.Tasks>;
}
