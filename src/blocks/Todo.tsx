import React from 'react'
import { css } from '@linaria/core'

interface TodoProps {
  title: string
  handleTaskCheck: () => void
  completed: boolean
}

const root = css`
  border: 1px solid lightGreen;
  padding: 20px;
  margin-bottom: 15px;
  cursor: pointer;
  display: flex;
`

const Todo: React.FC<TodoProps> = ({ title, handleTaskCheck, completed }) => {
  return (
    <div className={root}>
      {completed ? (
        <span>✅</span>
      ) : (
        <input checked={completed} type="checkbox" onChange={handleTaskCheck} />
      )}
      {title}
    </div>
  )
}

export default Todo
