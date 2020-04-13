import Vue from 'vue'

import TodoGetAllUseCaseInterface from '~/packages/todo/v1/useCases/todo/getAll/TodoGetAllUseCaseInterface'
import TodoGetAllInteractor from '~/packages/todo/v1/domains/usecases/TodoGetAllInteractor'
import TodoReadRepository from '~/packages/todo/v1/infrastructures/mocks/TodoReadRepository'
import Todo from '~/packages/todo/v1/domains/entities/Todo'

export class TodoPlugin {
  todoGetAllUseCase: TodoGetAllUseCaseInterface
  constructor () {
    this.todoGetAllUseCase = new TodoGetAllInteractor(
      new TodoReadRepository()
    )
  }

  getTodoAll (): Todo[] {
    return this.todoGetAllUseCase.handle()
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $todo: TodoPlugin
  }
}

Vue.prototype.$todo = new TodoPlugin()
