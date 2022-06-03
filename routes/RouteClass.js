// const { addtask } = require('../controller/controlerClass');
const router = require('express').Router()
const controlerclass=require('../controller/controlerClass')

router.post('/add-task', controlerclass.addTask);
router.get('/get-tasks',controlerclass.getTasks );
router.get('/get-task',controlerclass.getTask);
router.delete('/delete-task',controlerclass.deleteTask);
router.post('/update-task/:id',controlerclass.updateTask);
router.post('/task-completed/:id',controlerclass.taskcompleted);



module.exports = router
