const Header = (props)=>{
  return(
    <>
      <h1>{props.name}</h1>
    </>
  )
}

const Part = (props)=>{
  return(
  <>
    <p>{props.partName} {props.exerciseNum}</p>
  </>
  )
}
const Content = (props)=>{
  return(
    <>
      <Part
       partName = {props.partOneName}
       exerciseNum = {props.exerciseOneNum}
      />
      <Part
        partName = {props.partTwoName}
        exerciseNum = {props.exerciseTwoNum}
       />
      <Part 
        partName = {props.partThreeName}
        exerciseNum = {props.exerciseThreeNum}
      />
    </>
  )
}
const Total = (props)=>{
  return(
    <>
      <p>Number of exercises {props.totalExerciseNum}</p>
    </>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Foundamental of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a Component'
  const exercises3 = 14
  return (
    <>
      <div>
      <Header name = {course} />
      
      <Content 
      partOneName = {part1}
      exerciseOneNum = {exercises1} 

      partTwoName = {part2}
      exerciseTwoNum = {exercises2} 

      partThreeName = {part3}
      exerciseThreeNum = {exercises3} 
      />
  
      
      <Total 
      totalExerciseNum = {exercises1 + exercises2 + exercises3} />
    </div>
    </>
  )
}

export default App
