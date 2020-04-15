import Todo from '../../../domains/entities/Todo'
import { Todo as TodoOutput } from '../../../../types/Todo'

export default class TodoGetAllResponse {
  private todos: Todo[]

  constructor (todos: Todo[]) {
    this.todos = todos
  }

  getTodos ():TodoOutput[] {
    const res: TodoOutput[] = []
    this.todos.forEach((v) => {
      res.push({
        title: v.title,
        status: v.status
      })
    })
    return res
  }
}
