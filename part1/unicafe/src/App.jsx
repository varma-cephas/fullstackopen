import {useState} from 'react'

const Button = (props)=>
  <button onClick={props.value}>{props.buttonName}</button>

const Stats = (props)=>
  <p>{props.statName} {props.statValue}</p>

function App() {
  const [good, goodState] = useState(0)
  const [neutral, neutralState] = useState(0)
  const [bad, badState] = useState(0)
  const [total, totalFeedback] = useState(0)

  const onGoodClick = ()=>{
    goodState(good + 1)
    neutralState(neutral)
    badState(bad)
    const updateGoodState = good + 1
    totalFeedback(updateGoodState + neutral + bad)
  }

  const onNeutralClick = ()=>{
    neutralState(neutral + 1)
    badState(bad)
    goodState(good)
    const updateNeutralState = neutral + 1
    totalFeedback(updateNeutralState + good + bad)
  }

  const onBadClick = ()=>{
    badState(bad + 1)
    goodState(good)
    neutralState(neutral)
    const updateBadState = bad + 1
    totalFeedback(updateBadState + good + neutral)
  }

  return (
    <>
      <h2>give feedback</h2>
      <Button buttonName="good" value={onGoodClick}/>
      <Button buttonName="neutral" value={onNeutralClick}/>
      <Button buttonName="bad" value={onBadClick}/>

      <h2>statistics</h2>
      <Stats statName="good" statValue={good}/>
      <Stats statName="neutral" statValue={neutral}/>
      <Stats statName="bad" statValue={bad}/>
      <p>all {total}</p>
      {/* I had some trouble calculating average, math wise */}
      <p>average</p>
      <p>positie {good/total*100} %</p>
    </>
  )
}

export default App
