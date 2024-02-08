import { useState } from 'react'


const Title = ({text}) => {
  return (
    <h1>{text}</h1>
  )
}

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Result = ({text, result}) => {
  return (
    <>
      <td>{text} </td><td>{result}</td>
    </>
  )
}

const Average = ({good, neutral, bad}) => {
  const sum = good - bad
  const totalFeedback = good + neutral + bad
  const average = sum / totalFeedback
  return (
    <>
      <td>average </td><td>{average}</td>
    </>
  )

}

const All = ({good, neutral, bad}) => {
  const sum = good + neutral + bad
  return (
    <>
      <td>all </td><td>{sum}</td>
    </>
  )
}

const Positive = ({good, neutral, bad}) => {
  const sum = good + neutral + bad
  const percentage = good / sum * 100
  return (
    <>
      <td>positive </td><td>{percentage} %</td>
    </>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const sum = good + neutral + bad

  if (good == 0 && neutral == 0 && bad == 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  } else {
    return (
      <div>
        <table>
          <tbody>
            <tr><Result text="good" result={good}/></tr>
            <tr><Result text="neutral" result={neutral}/></tr>
            <tr><Result text="bad" result={bad}/></tr>
            <tr><All good={good} neutral={neutral} bad={bad}/></tr>
            <tr><Average good={good} neutral={neutral} bad={bad}/></tr>
            <tr><Positive good={good} neutral={neutral} bad={bad}/></tr>
          </tbody>
        </table>
      </div>
    )
  }
}

const App = () => {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = () => {
    setGood(good + 1)
  }

  const setToNeutral = () => {
    setNeutral(neutral + 1)
  }

  const setToBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Title text="give feedback"/>
      <Button handleClick={() => setToGood()} text="good"/>
      <Button handleClick={() => setToNeutral()} text="neutral"/>
      <Button handleClick={() => setToBad()} text="bad"/>
      <Title text="statistics"/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
