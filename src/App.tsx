import React, { useEffect, useReducer, useState } from 'react'
import { useQuery } from 'react-query'
import Users from 'src/blocks/Users'

import { UserType, ActionTypes } from 'src/types'
import TasksList from 'src/blocks/TasksList'
import { reducer } from 'src/reducers'

import styles from './App.styles'

const initialState = {}

function App() {
  // @ts-ignore
  const [todos, dispatchTodos] = useReducer(reducer, initialState)
  const [activeUser, setActiveUser] = useState<number>(null)

  const { data: users } = useQuery<UserType[]>(
    'users',
    () => fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json()),
    {
      initialData: [],
    },
  )

  useEffect(() => {
    if (!activeUser && users.length > 0) {
      setActiveUser(users[0].id)
    }
  }, [users])

  useEffect(() => {
    if (activeUser && !(activeUser in todos)) {
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then((res) => res.json())
        .then((data) => {
          dispatchTodos({
            type: ActionTypes.SetTodos,
            payload: {
              data: data.slice(0, 10),
              userId: activeUser,
            },
          })
        })
    }
  }, [activeUser])

  const handleTaskCheck = (taskId: number) => {
    dispatchTodos({
      type: ActionTypes.CompleteTask,
      payload: {
        userId: activeUser,
        taskId,
      },
    })
  }

  return (
    <div className={styles.root}>
      <header className={styles.headerClass}>
        <h1 className={styles.titleClass}>Onboarding tracker</h1>
      </header>
      <main className={styles.wrapper}>
        <Users users={users} activeUser={activeUser} setActiveUser={setActiveUser} />
        <TasksList tasks={todos[activeUser]} handleTaskCheck={handleTaskCheck} />
      </main>
    </div>
  )
}

export default App
