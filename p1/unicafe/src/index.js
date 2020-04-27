import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Heading = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}

const Button = ({ handleClick, text }) => {
  return (
    <div>
      <button onClick={handleClick}>{text}</button>
    </div>
  )
}

const Statistic = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  if (props.allClicks === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <table>
      <tbody>
        <Statistic text="good" value={props.good} />
        <Statistic text="neutral" value={props.neutral} />
        <Statistic text="bad" value={props.bad} />
        <Statistic text="all" value={props.all} />
        <Statistic text="average" value={props.average} />
        <Statistic text="positive" value={props.positive} />
      </tbody>
    </table>
  )
}

const App = () => {
  const title1 = 'give feedback'
  const title2 = 'statistics'
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [allClicks, setClicks] = useState(0)
  let average = good - bad / all
  let positive = (good / all) * 100 + '%'

  const handleGoodClick = () => {
    setClicks(allClicks + 1)
    setGood(good + 1)
    setAll(all + 1)
  }

  const handleNeutralClick = () => {
    setClicks(allClicks + 1)
    setNeutral(neutral + 1)
    setAll(all + 1)
  }
  const handleBadClick = () => {
    setClicks(allClicks + 1)
    setBad(bad + 1)
    setAll(all + 1)
  }

  return (
    <div>
      <Heading title={title1} />
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
      <Heading title={title2} />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
        allClicks={allClicks}
      />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
