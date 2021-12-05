import React from 'react'
import { render } from '@testing-library/react'
import Task from 'src/blocks/Task'
import '@testing-library/jest-dom'

const TASK_TEXT = 'Simple task'

test('renders a Task', () => {
  const { container, baseElement, getByText } = render(
    <Task title={TASK_TEXT} isCompleted={false} onComplete={() => {}} />,
  )
  expect(getByText(TASK_TEXT)).toBeInTheDocument()

  const input = container.querySelector(`[name="input-${TASK_TEXT}"]`)

  expect(input).toBeInTheDocument()
})
