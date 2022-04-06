import React, { useState } from "react";
import EditTask from "../modals/EditTask";
const Card = ({ taskObj, index ,deleteTask,updateListArray}) => {
    const [modal,setModal] = useState(false)

  const colors = [
    {
      secondaryColor: "#ECF3FC",
    },
    {
      secondaryColor: "#FEFAF1",
    },
    {
      secondaryColor: "#F2FAF1",
    },
    {
      secondaryColor: "#FDF1F1",
    },
    {
      secondaryColor: "#F3F0FD",
    },
  ];
  const toggle = () => {
      setModal(!modal)
  }
  const updateTask = (obj) => {
      updateListArray(obj,index)
  }

  const handleDelete=()=>{
      deleteTask(index)

  }
  return (
    <div className="card-wrapper">
      <div className="card-top"></div>
      <div className="task-holder">
        <span
          className="card-header"
          style={{
            "background-color": colors[index % 5].secondaryColor,
            "border-radius": "10px",
          }}
        >
          {taskObj.Name}
        </span>
        <p className="mt-3">{taskObj.Description}</p>

        <div style={{ position: "absolute", right: "20px", bottom: "20px" }}>
          <i
            className="far fa-edit"
            style={{ color: colors[index % 5].primaryColor, cursor: "pointer" }} onClick = {()=>{
                setModal(true)
            }}
          ></i>
          
          <i
            className="fas fa-trash-alt"
            style={{ color: colors[index % 5].primaryColor, cursor: "pointer" , marginLeft : 15}}
          onClick={handleDelete}></i>
        </div>
      </div>
     < EditTask modal ={modal} toggle = {toggle} updateTask = {updateTask} taskObj={taskObj}/>
    </div>
  );
};

export default Card;
