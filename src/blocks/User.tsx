import React from 'react'
import { css } from '@linaria/core'

interface UserProps {
  name: string
  isActive?: boolean
}

const root = css`
  border: 1px solid lightcoral;
  padding: 20px;
  margin-bottom: 15px;
  cursor: pointer;

  span {
    background-color: lightblue;
    padding: 5px;
    margin-left: 15px;
  }
`

const User: React.FC<UserProps> = ({ name, isActive }) => {
  return (
    <div className={root}>
      {name}
      {isActive && <span>{'>>'}</span>}
    </div>
  )
}

export default User
