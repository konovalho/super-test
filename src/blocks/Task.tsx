import React from 'react'
import { css } from '@linaria/core'

interface TaskProps {
  title: string
  isCompleted: boolean
  onComplete?: () => void
  id?: number
}

const root = css`
  display: flex;
  border-radius: 12px;
  padding: 16px 24px;
  background-color: #fff;

  &:nth-of-type(2n) {
    background-color: #f8fafd;
  }
`

const labelClass = css`
  display: flex;
  align-items: center;

  span {
    font-size: 24px;
    margin-right: 12px;
  }
`

const textClass = css`
  font-size: 16px;
  line-height: 28px;
`

const checkboxClass = css`
  margin: 0;
  margin-right: 12px;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`

const Task: React.FC<TaskProps> = ({ title, onComplete, isCompleted, id }) => {
  const inputId = `checkbox-${id || title}`
  return (
    <li className={root}>
      <label className={labelClass} htmlFor={inputId}>
        {isCompleted ? (
          <span>✅</span>
        ) : (
          <input
            className={checkboxClass}
            name={`input-${title}`}
            id={inputId}
            checked={isCompleted}
            type="checkbox"
            onChange={onComplete}
          />
        )}
        <p className={textClass}>{title}</p>
      </label>
    </li>
  )
}

export default Task
