import React, { useEffect, useState } from 'react'
import { Button,Modal,ModalHeader,ModalBody,ModalFooter } from 'reactstrap'

const EditTask=({modal,toggle,updateTask, taskObj})=> {
  const [taskName, setTaskName] = useState('');
  const [description, SetDescription] = useState('');
  const handleChange = (e)=>{
    const {name, value} = e.target
    if(name==='taskName'){
      setTaskName(value)
    }else{
      SetDescription(value)
    }

  }
  useEffect(()=>{
     setTaskName(taskObj.Name) 
     SetDescription(taskObj.Description)
  },[])

  const handleUpdate = (e) => {
      e.preventDefault();
      let tempObj={}
      tempObj['Name']=taskName
      tempObj['Description']=description
      updateTask(tempObj)
      toggle(false)
  }
  return (
      
    <Modal isOpen={modal} toggle={toggle}>
    <ModalHeader toggle={toggle}>
      Update Task
    </ModalHeader>
    <ModalBody>
     <form>
       <div className='form-group'>
         <label >Task Name</label>
         <input type="text" name="taskName" className='form-control' value={taskName} onChange = {handleChange} />

       </div>
       <div className='form-group pt-2'>
         <label>Description</label>
         <textarea name="description" id="" cols="30" rows="5" className='form-control' value={description} onChange = {handleChange} ></textarea>
       </div>
       
     </form>
    </ModalBody>
    <ModalFooter>
      <Button
        color="primary"
        onClick={handleUpdate}
      >
       Update
      </Button>
      {' '}
      <Button onClick={toggle}>
        Cancel
      </Button>
    </ModalFooter>
  </Modal>
  
  )
}

export default EditTask