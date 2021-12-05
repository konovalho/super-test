export type UserType = {
  email: string
  id: number
  name: string
  phone: string
  username: string
  website: string
}

export type TodoType = {
  id: number
  title: string
  completed: false
}

export type TodosType = { [userId: number]: TodoType[] }

export enum ActionTypes {
  SetTodos = 'SET_TODOS_FOR_USER',
  CompleteTask = 'COMPLETE_TASK',
}

type ActionA = {
  type: ActionTypes.SetTodos
  payload: {
    data: TodoType[]
    userId: number
  }
}

type ActionB = {
  type: ActionTypes.CompleteTask
  payload: {
    userId: number
    taskId: number
  }
}

export type TodosAction = ActionA | ActionB
