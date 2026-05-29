const express = require('express');

const router = express.Router();

router.get('/',(req,res)=>{
    res.send("All Posts");
});

router.post('/',(req,res)=>{
    res.send("Post Created");
});

router.put('/:id',(req,res)=>{
    res.send("Post Updated");
});

router.delete('/:id',(req,res)=>{
    res.send("Post Deleted");
});

module.exports = router;
