import React from 'react'
import { useState } from 'react'

const Form = (props) => {
    const [name,setName]=useState("")
const handleSubmit=e=>{
    e.preventDefault();
    props.fun(name);
    setName('');
}
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={e=>setName(e.target.value)} value={name}/>
        <input type="submit" value="send!"/>
      </form>
    </div>
  )
}

export default Form
