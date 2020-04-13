import Todo from '../entities/Todo'

export default interface TodoReadRepositoryInterface {
  getAllTodo(): Todo[]
}
