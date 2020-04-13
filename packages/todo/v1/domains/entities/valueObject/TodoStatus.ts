export const TodoStatus = {
  NotReady: 3,
  Ready: 5,
  Doing: 7,
  Done: 11
} as const

export type TodoStatus = typeof TodoStatus[keyof typeof TodoStatus]
