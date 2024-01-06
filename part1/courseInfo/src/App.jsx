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
  const course = {
    name : 'Half Stack application development',
    parts : [
      {
        name: 'Foundamental of React',
        exercises:10
      }
      ,
      {
        name: 'Using props to pass data',
        exercises:7
      }
      ,
      {
        name: 'State of a Component',
        exercises:14
      }
    ]
  }

  return (
    <>
      <div>
      <Header name = {course.name} />

      <Content 
      partOneName = {course.parts[0].name}
      exerciseOneNum = {course.parts[0].exercises} 

      partTwoName = {course.parts[1].name}
      exerciseTwoNum = {course.parts[1].exercises} 

      partThreeName = {course.parts[2].name}
      exerciseThreeNum = {course.parts[2].exercises} 
      />
  
      
      <Total 
      totalExerciseNum = {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
    </div>
    </>
  )
}

export default App
