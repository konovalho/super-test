import React from 'react'
import { css } from '@linaria/core'
import clsx from 'clsx'

interface UserProps {
  name: string
  isActive?: boolean
  email: string
}

const root = css`
  background-color: transparent;
  border: 1px solid transparent;
  padding: 20px;
  width: 420px;
  border-radius: 12px;
  cursor: pointer;
  display: flex;

  &.active {
    background-color: #fff;
    border-color: #98c1ff;
    box-shadow: 0 16px 40px rgb(170 180 204 / 27%);
  }

  img {
    width: 84px;
    height: 84px;
    border-radius: 12px;
    margin-right: 24px;
  }

  span {
    background-color: lightblue;
    padding: 5px;
    margin-left: 15px;
  }
`

const content = css`
  padding-top: 12px;
  text-align: left;
`

const titleClass = css`
  font-weight: 600;
  font-size: 18px;
  line-height: 20px;
  color: #151d2c;
  margin-bottom: auto;
  text-transform: lowercase;
  margin-bottom: 12px;
`

const emailClass = css`
  text-decoration: underline;
`

const User: React.FC<UserProps> = ({ name, isActive, email }) => {
  return (
    <article className={clsx(root, isActive && 'active')}>
      <img src={`https://picsum.photos/seed/${name}84/84`} alt="user picture" />
      <div className={content}>
        <h1 className={titleClass}>{name}</h1>
        <p className={emailClass}>{email}</p>
      </div>
    </article>
  )
}

export default User
