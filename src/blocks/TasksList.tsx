import React from 'react'
import { TodoType } from 'src/types'
import Task from './Task'
import { css } from '@linaria/core'
import { headerHeight } from 'src/styles/var'

interface TasksListProps {
  tasks: TodoType[]
  handleTaskCheck: (taskId: number) => void
}

const root = css`
  background-color: transparent;
  padding-top: 22px;
  padding-right: 32px;
  padding-left: 52px;
  width: 100%;
  height: calc(100vh - ${headerHeight});
  overflow-y: scroll;
`

const titleClass = css`
  font-size: 28px;
  line-height: 36px;
  font-weight: 400;
  margin-bottom: 36px;
`

const TasksList: React.FC<TasksListProps> = ({ tasks, handleTaskCheck }) => {
  return (
    <section className={root}>
      <h1 className={titleClass}>TasksList</h1>
      <ul>
        {tasks &&
          tasks.map((item) => (
            <Task
              key={item.id}
              title={item.title}
              isCompleted={item.completed}
              id={item.id}
              onComplete={() => {
                handleTaskCheck(item.id)
              }}
            />
          ))}
      </ul>
    </section>
  )
}

export default TasksList
