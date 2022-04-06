import React, { useEffect, useState } from 'react'
import CreateTask from '../modals/CreateTask'
import Card from './Card';
// import logo1   from '../logo1.gif'
import todologo   from '../todologo.png'






const ToDoList=() =>{
    const[modal,setModal]=useState(false);
    const [taskList,setTaskList] = useState([])
    useEffect(()=>{
      let arr = localStorage.getItem('taskList')
      if(arr){
        let obj = JSON.parse(arr)
        setTaskList(obj)
      }
    }, [])

  

    
    

    const deleteTask = (index)=>{
      let tempList=taskList
      tempList.splice(index,1)
      localStorage.setItem('taskList',JSON.stringify(tempList))
      setTaskList([...tempList])
    }
    const updateListArray = (obj,index) =>{
      let tempList=taskList
      tempList[index]=obj
      localStorage.setItem('taskList',JSON.stringify(tempList))
      setTaskList([...tempList])

    }

    const toggle=()=>{
        setModal(!modal);
    }
    const saveTask = (taskObj) =>{
      let tempList = taskList
      tempList.push(taskObj)
      localStorage.setItem('taskList', JSON.stringify(tempList))
      setModal(false)
      setTaskList(taskList)

    }
  return (
    <React.Fragment>
    <div className='header text-center'>
      <img src={todologo} className='mt-5' style={{width:"110px"}} alt="" />




        <h3 className='pt-2' style={{color:'#81d2eb'}}>ToodleDo <span style={{color:'#81d2eb'}} ><h5>Remember The Task</h5></span></h3>
        
        <button className='btn btn-outline-info mt-2 mb-2' onClick={()=>setModal(true)}>Create The Task</button>
    </div>
    <div className='task-container mt-5'>
      {taskList && taskList.map((obj,index) => <Card taskObj = {obj} index = {index} deleteTask = {deleteTask}
      updateListArray={updateListArray}/>)}

    </div>
    <CreateTask toggle = {toggle} modal = {modal} save = {saveTask}/>
    </React.Fragment>
  )
}

export default ToDoList