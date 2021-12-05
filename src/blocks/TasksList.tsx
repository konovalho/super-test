import React from 'react'
import { TodoType } from 'src/types'
import Todo from './Todo'

interface TasksListProps {
  tasks: TodoType[]
  handleTaskCheck: (taskId: number) => void
}

const TasksList: React.FC<TasksListProps> = ({ tasks, handleTaskCheck }) => {
  return (
    <section>
      <h1>TasksList</h1>
      <ul>
        tasks:
        {tasks &&
          tasks.map((item) => (
            <li key={item.id}>
              <Todo
                title={item.title}
                completed={item.completed}
                handleTaskCheck={() => {
                  handleTaskCheck(item.id)
                }}
              />
            </li>
          ))}
      </ul>
    </section>
  )
}

export default TasksList
