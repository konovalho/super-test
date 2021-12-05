import { TodosType, TodosAction, ActionTypes } from 'src/types'

export const reducer = (state: TodosType, action: TodosAction) => {
  const { payload, type } = action
  switch (type) {
    case ActionTypes.CompleteTask: {
      const curUserData = state[payload.userId]

      return {
        ...state,
        [payload.userId]: curUserData.map((item) => {
          // @ts-ignore
          if (item.id === payload.taskId) {
            return {
              ...item,
              completed: true,
            }
          }

          return item
        }),
      }
    }

    case ActionTypes.SetTodos: {
      return {
        ...state,
        // @ts-ignore
        [payload.userId]: payload.data,
      }
    }

    default:
      throw new Error()
  }
}
