import React from 'react'

const Total = ({ course }) => {
  const total = course.parts
    .map((part) => part.exercises)
    .reduce((sum, current) => sum + current, 0)

  return <p>Total of {total} exercises</p>
}

export default Total
