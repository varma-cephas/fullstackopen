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
  console.log(props)
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
  const part1 = {
    name: 'Foundamental of React',
    exercises:10
  }

  const part2 = {
    name: 'Using props to pass data',
    exercises:7
  }

  const part3 = {
    name: 'State of a Component',
    exercises:14
  }

  return (
    <>
      <div>
      <Header name = {course} />

      <Content 
      partOneName = {part1.name}
      exerciseOneNum = {part1.exercises} 

      partTwoName = {part2.name}
      exerciseTwoNum = {part2.exercises} 

      partThreeName = {part3.name}
      exerciseThreeNum = {part3.exercises} 
      />
  
      
      <Total 
      totalExerciseNum = {part1.exercises+ part2.exercises+ part3.exercises} />
    </div>
    </>
  )
}

export default App
