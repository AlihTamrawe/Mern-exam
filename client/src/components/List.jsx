import React from 'react'

const List = (props) => {
  return (
    <div>
      {props.students.map((stu,i)=>
      <div>{stu.name} 
      
      {stu.status=="todo"? <button style={{backgroundColor:"yellow"} } onClick={(e)=>props.updateit(stu._id,"doing") }>{"move to todo"}</button>:
            stu.status=="doing"? <button style={{backgroundColor:"green"} } onClick={(e)=>props.updateit(stu._id,"done")}>{"Doing"}</button>:

        <button style={{backgroundColor:"red"} } onClick={ (e)=>props.delete(stu._id)}>{"delete me"}</button> }
            </div>

)}
    </div>
  )
}

export default List
