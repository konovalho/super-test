import React from 'react'
import { UserType } from 'src/types'
import User from './User'
import { css } from '@linaria/core'

interface UsersProps {
  users: UserType[]
  activeUser: number
  setActiveUser: (id: number) => void
}

const root = css`
  border: 1px solid transparent;
`

const Users: React.FC<UsersProps> = ({ users, activeUser, setActiveUser }) => {
  return (
    <section className={root}>
      Users
      <br />
      <ul>
        {users.map((item) => (
          <li key={item.id}>
            <User
              name={item.name}
              isActive={activeUser === item.id}
              handleClick={() => {
                setActiveUser(item.id)
              }}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Users
