import React from 'react'

const List = (props) => {
console.log(props.proj)
            if(props.proj.status==="backlog") {return <h3>{props.proj.name}</h3>}
            else if(props.proj.status==="inprogress"){
                return <h3>{props.proj.status}</h3>
            }
            else{
                return<h3>{props.proj.status}</h3>
            }

}

export default List

