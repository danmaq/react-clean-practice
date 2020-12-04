import { repositories } from '@react-clean-practice/a-entities';

export interface Usecase {
  readonly getTasks: () => Promise<repositories.Tasks>;
}
