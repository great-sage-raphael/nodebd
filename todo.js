const express=require('express')
const app=express();
const port=3000;
const bodyparser=require('body-parser')
let todolist=[]

app.use(bodyparser.json())

app.get('/todos',(req,res)=>{
    res.json(todolist)

});
app.post('/todos',(req,res)=>{
    const todos={id: todolist.length+1,task: req.body.task}
    todolist.push(todos);
    res.status(201).json(todolist);
});
app.delete('/todos/:id',(req,res)=>{
    const id=parseInt(req.params.id)
   
    todolist = todolist.filter(todo=> todo.id !== id);
    res.status(200).send("Todo deleted successfully");
});

app.listen(port)

