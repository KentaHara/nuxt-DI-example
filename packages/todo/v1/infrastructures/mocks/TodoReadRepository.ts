import TodoReadRepositoryInterface from '../../domains/dataAccessInterfaces/TodoReadRepositoryInterface'
import Todo from '../../domains/entities/Todo'
import { TodoStatus } from '../../../types/Todo'

export default class TodoReadRepository implements TodoReadRepositoryInterface {
  getAllTodo (): Todo[] {
    return [
      new Todo('Title 1', TodoStatus.NotReady),
      new Todo('Title 2', TodoStatus.Ready),
      new Todo('Title 3', TodoStatus.Doing),
      new Todo('Title 4', TodoStatus.Done)
    ]
  }
}
