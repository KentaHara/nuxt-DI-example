import { TodoStatus } from './valueObject/TodoStatus'

export default class Todo {
  title: string
  status: TodoStatus

  constructor (title: string, status: TodoStatus) {
    this.title = title
    this.status = status
  }
}
