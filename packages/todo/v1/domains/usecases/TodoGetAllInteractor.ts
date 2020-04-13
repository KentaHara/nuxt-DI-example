import TodoGetAllUseCaseInterface from '../../useCases/todo/getAll/TodoGetAllUseCaseInterface'
import TodoReadRepositoryInterface from '../dataAccessInterfaces/TodoReadRepositoryInterface'
import Todo from '../entities/Todo'
import TodoGetAllResponse from '../../useCases/todo/getAll/TodoGetAllResponse'

export default class TodoGetAllInteractor implements TodoGetAllUseCaseInterface {
  repository: TodoReadRepositoryInterface

  constructor (repository: TodoReadRepositoryInterface) {
    this.repository = repository
  }

  handle (): Todo[] {
    const response = new TodoGetAllResponse(this.repository.getAllTodo())
    return response.getTodos()
  }
}
