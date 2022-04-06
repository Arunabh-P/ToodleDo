import React, { useState } from 'react'
import { Button,Modal,ModalHeader,ModalBody,ModalFooter } from 'reactstrap'

const CreateTask=({modal,toggle,save})=> {
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
  const handleSave = () =>{
    let taskObj = {}
    taskObj['Name'] = taskName
    taskObj['Description'] = description
    save(taskObj)
    setTaskName('')
    SetDescription('')
  }
  return (
      
    <Modal isOpen={modal} toggle={toggle}>
    <ModalHeader toggle={toggle}>
      Create Task
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
        onClick={handleSave}
      >
       create
      </Button>
      {' '}
      <Button onClick={toggle}>
        Cancel
      </Button>
    </ModalFooter>
  </Modal>
  
  )
}

export default CreateTask