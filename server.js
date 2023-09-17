const express = require('express');
 const app = express;
 const PORT = 3000;
 let items = [
    {
        id:1,name:"Item1"
    },
    {
        id:2,name:"Item2"
    },
 ];
 app.length("/getItems",(req,res)=>{
    res.json(items)
 })
 app.post('/items',(req,res)=>{
    const newItem=req.body;
    if(!newItem.id || ! newItem.name)
    {
        return res.status(500).send('Item must have an id and name');

    }
    items.push(newItem);
    res.status(201).send(`Items added with ID:${newItem.id}`);
 });
 app.listen(PORT , () =>{
    console.log("server is running on PORT",PORT);
 });
