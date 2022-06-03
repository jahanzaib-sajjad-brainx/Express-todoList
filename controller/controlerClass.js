
let dataArray=[];

let addTask=(req, res) => {
    let taskdata={
      taskid:dataArray.length,
      taskTitle: req.body.taskTitle,
      task: req.body.task,
      completed: false
    }
    dataArray.push(taskdata);
    res.send("Data Received");
}

let getTask=(req, res) => {
  if(req.body.id<dataArray.length){
    res.send({"Data Sent": dataArray[req.body.id]});
  
  }
  else{
    res.send("Data doesn't exist");
  }


}

let getTasks=(req, res) => {
  res.send({"Data Sent": dataArray});
}

let deleteTask=(req,res)=>{
  if(req.body.id<dataArray.length){
    dataArray.splice(req.body.id,1);
    res.send("Data Deleted Successfully");
    } 
    else{
      res.send("Data doesn't exist");
    }
}
let updateTask=(req,res)=>{

  if(req.params.id<dataArray.length){

    dataArray[req.params.id].taskTitle=req.body.taskTitle;
    dataArray[req.params.id].task=req.body.task;
    res.send("Data Updated Successfully");
  }
  else{
    res.send("Data doesn't exist");
  }
}
let taskcompleted=(req,res)=>{
  
  if(req.params.id<dataArray.length){
    dataArray[req.params.id].completed=req.body.completed;
    res.send("Task Marked completed successfully");
  }
  else{
    res.send("Data doesn't exist");
  }
  console.log("comoleted: ",dataArray[req.params.id].completed);
}


module.exports = {
  addTask,
  getTask,
  getTasks,
  deleteTask,
  updateTask,
  taskcompleted
}