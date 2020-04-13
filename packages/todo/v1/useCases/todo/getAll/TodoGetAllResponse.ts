import Todo from '../../../domains/entities/Todo'

export default class TodoGetAllResponse {
  private todos: Todo[]

  constructor (todos: Todo[]) {
    this.todos = todos
  }

  getTodos ():Todo[] {
    return this.todos
  }
}
