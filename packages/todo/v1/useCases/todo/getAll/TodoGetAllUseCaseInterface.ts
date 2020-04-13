import Todo from '../../../domains/entities/Todo'

export default interface TodoGetAllUseCaseInterface {
  handle():Todo[]
}
