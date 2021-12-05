import React from 'react'
import { css } from '@linaria/core'

interface TaskProps {
  title: string
  isCompleted: boolean
  onComplete?: () => void
}

const root = css`
  border: 1px solid lightGreen;
  padding: 20px;
  margin-bottom: 15px;
  cursor: pointer;
  display: flex;
`

const Task: React.FC<TaskProps> = ({ title, onComplete, isCompleted }) => {
  return (
    <div className={root}>
      {isCompleted ? (
        <span>✅</span>
      ) : (
        <input
          name={`input-${title}`}
          checked={isCompleted}
          type="checkbox"
          onChange={onComplete}
        />
      )}
      {title}
    </div>
  )
}

export default Task
