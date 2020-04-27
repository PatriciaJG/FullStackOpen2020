import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
  return (
    <div>
      <button onClick={props.handleClick}>{props.text}</button>
    </div>
  )
}

const App = ({ anecdotes }) => {
  const title1 = 'Anecdote of the day'
  const title2 = 'Anecdote with the most votes'
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(
    Array.apply(null, new Array(6)).map(Number.prototype.valueOf, 0)
  )
  const [mostVotedIndex, setMostVotedIndex] = useState(0)

  const randomAnecdote = () => {
    console.log('Cliicked')
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const votesUpdate = () => {
    const copyOfPoints = [...points]
    copyOfPoints[selected] += 1
    setPoints(copyOfPoints)

    const mostVoted = Math.max(...copyOfPoints)
    setMostVotedIndex(mostVotedIndex + copyOfPoints.indexOf(mostVoted))
  }

  const text = 'Next adecdote'
  const voteText = 'Vote'

  return (
    <div>
      <h1>{title1}</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes </p>
      <Button handleClick={votesUpdate} text={voteText} />
      <Button handleClick={randomAnecdote} text={text} />
      <h1>{title2}</h1>
      {anecdotes[mostVotedIndex]}
      <p>has {points[mostVotedIndex]} votes</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
]

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'))
