import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Task from 'src/blocks/Task'

const TASK_TEXT = 'Simple task'

test('renders a Task', () => {
  const { container, getByText } = render(
    <Task title={TASK_TEXT} id={1} isCompleted={false} onComplete={() => {}} />,
  )
  expect(getByText(TASK_TEXT)).toBeInTheDocument()

  const input = container.querySelector(`[name="input-${TASK_TEXT}"]`)

  expect(input).toBeInTheDocument()
})
