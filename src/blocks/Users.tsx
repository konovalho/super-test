import React from 'react'
import { UserType } from 'src/types'
import User from './User'
import { css } from '@linaria/core'
import { headerHeight } from 'src/styles/var'

interface UsersProps {
  users: UserType[]
  activeUser: number
  setActiveUser: (id: number) => void
}

const root = css`
  border: 1px solid transparent;
  background-color: #f8fafd;
  padding-top: 20px;
  padding-left: 32px;
  width: 488px;
  flex-shrink: 0;
  height: calc(100vh - ${headerHeight});
  overflow-y: scroll;
`

const titleClass = css`
  font-size: 40px;
  color: #151d2c;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  margin-bottom: 36px;
`

const itemClass = css`
  margin-bottom: 15px;
`

const Users: React.FC<UsersProps> = ({ users, activeUser, setActiveUser }) => {
  return (
    <section className={root}>
      <h1 className={titleClass}>Users</h1>
      <ul>
        {users.map((item) => (
          <li key={item.id} className={itemClass}>
            <button
              type="button"
              onClick={() => {
                setActiveUser(item.id)
              }}
            >
              <User
                name={item.name}
                isActive={activeUser === item.id}
                email={item.email}
              />
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Users
