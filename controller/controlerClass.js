
const {v4 : uuidv4} = require('uuid')
let dataArray=[];

let addTask=(req, res) => {
    let taskdata={
      taskid: uuidv4(),
      task: req.body.task,
      completed: false
    }
    dataArray.push(taskdata);
    res.send("Data Received");
   
}

let getTask=(req, res) => {
 
    res.send({"Data Sent": dataArray[req.body.id]});

}

let getTasks=(req, res) => {
  res.send({"Data Sent": dataArray});
}

let deleteTask=(req,res)=>{
  
  for(let i=0;i<dataArray.length;i++){
    if(req.params.id===dataArray[i].taskid){
      dataArray.splice(i,1);
      res.send("Data Deleted Successfully");
    }
  } 
}
let updateTask=(req,res)=>{

  for(let i=0;i<dataArray.length;i++){
    if(req.params.id===dataArray[i].taskid){
      dataArray[i].task=req.body.task;
      res.send("Data Updated Successfully");
    }
  }
}

let taskcompleted=(req,res)=>{
  for(let i=0;i<dataArray.length;i++){
    if(req.params.id===dataArray[i].taskid){
      dataArray[i].completed=!dataArray[i].completed;
      res.send("Task mark has been changed successfully");
    }
  }
}


module.exports = {
  addTask,
  getTask,
  getTasks,
  deleteTask,
  updateTask,
  taskcompleted
}