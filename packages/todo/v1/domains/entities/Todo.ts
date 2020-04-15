import { TodoTitle, TodoStatus } from '../../../types/Todo'

export default class Todo {
  title: TodoTitle
  status: TodoStatus

  constructor (title: TodoTitle, status: TodoStatus) {
    this.title = title
    this.status = status
  }
}
