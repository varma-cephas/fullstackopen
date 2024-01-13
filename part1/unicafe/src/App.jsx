import {useState} from 'react'

const Button = (props)=>
  <button onClick={props.value}>{props.buttonName}</button>

const StatisticsLine = props =>
  <div onClick={props.value}>{props.text} {props.valueCount} {props.percentageSign}</div>

const Statistics = (props) =>{
  if(props.goodValueCount !== 0 || props.neutralValueCount !== 0 || props.badValueCount !== 0 ){
    return(
      <>
        <table>
          <tbody>
            <tr>
              <td><StatisticsLine value={props.goodValue} text="good"/></td>
              <td><StatisticsLine  valueCount={props.goodValueCount}/></td>
            </tr>
            <tr>
              <td><StatisticsLine value={props.neutralValue} text="neutral" /></td>
              <td><StatisticsLine valueCount={props.neutralValueCount}/></td>
            </tr>
            <tr>
              <td><StatisticsLine value={props.badValue} text="bad" /></td>
              <td><StatisticsLine valueCount={props.badValueCount}/></td>
            </tr>
            <tr>
              <td><StatisticsLine value={props.allValue} text="all" /></td>
              <td><StatisticsLine valueCount={props.allValueCount}/></td>
            </tr>
            {/* I had some trouble calculating average, math wise */}
            <tr>
              <td><StatisticsLine text="average"/></td>
              <td><StatisticsLine valueCount={props.averagePercentageCount}/></td>
            </tr>
            <tr>
              <td><StatisticsLine text="positive"/></td>
              <td><StatisticsLine valueCount={props.positivePercentageCount} percentageSign={props.percentageSign}/></td>
            </tr>
          </tbody>
        </table>
      </>
    )
  }
  return(
    <p>No feedbackgiven</p>
  )
}


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
      <Statistics goodValue={onGoodClick} goodValueCount={good}
        neutralValue={onNeutralClick} neutralValueCount={neutral}
        badValue={onBadClick} badValueCount={bad}
        allValueCount={total}
        averagePercentageCount={(good-bad)/total}
        positivePercentageCount={good/total*100} percentageSign="%"
      />
    </>
  )
}

export default App
