import React, { useEffect, useState } from 'react'
import List from '../components/List';
import axios from 'axios'
import Form from '../components/Form';
const Main = () => {
    const [students,setStudents]=useState([]);
    const [loaded,setLoaded]=useState(false);
    const st="todo"
    const st2="todo"


    useEffect(()=>{
        axios.get("http://localhost:8000/api/getAllStudents")
        .then(res=>{setStudents(res.data);setLoaded(true)})
        .catch(err=>console.log(err))
    },[])

    const createStudent=(stu)=>{
        axios.post("http://localhost:8000/api/createNewStudent",{
            name:stu,
          status:st  
        })
        .then(res=>setStudents([...students,res.data]))
        .catch(err=>console.log(err))

    }

    const deleteStudent=(id)=>{
        axios.delete("http://localhost:8000/api/students/"+id)
        .then(res=>{
            setStudents(students.filter(stu=>stu._id!=id))
        })
    }
        const updateStudent=(id,st1)=>{
          
       
      
        axios.put("http://localhost:8000/api/students/"+id,{status:st1} )
        .then(res=>{
            const objIndex = students.findIndex((obj => obj._id == id));
        const students1 = [ ...students.slice(0, objIndex), { ...students[objIndex], "status": st1 } ,...students.slice(objIndex+1)];
        setStudents(students1);
        
})
    }
const todo=[]
const doing=[]
const done=[]

students.map((st,i)=>{
  if(st.status=="todo"){
    todo.push(st);
  }
else if(st.status=="doing"){
doing.push(st);
}else if(st.status=="done"){
  done.push(st);
  }
})

    
  return (
    <div>
      <Form fun={createStudent}/>

      <div style={{display:"flex"}}>
        <div style={{flex:1}}>
      {loaded && <List students={todo} delete={deleteStudent} updateit={updateStudent}/>}
      </div>
      <div style={{flex:1}}>
      {loaded && <List students={doing} delete={deleteStudent} updateit={updateStudent}/>}
      </div>
      <div style={{flex:1}}>
      {loaded && <List students={done} delete={deleteStudent} updateit={updateStudent}/>}
      </div>
      </div>
    </div>
  )
}

export default Main
