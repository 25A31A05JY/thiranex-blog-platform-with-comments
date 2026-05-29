const express = require('express');

const router = express.Router();

router.post('/',(req,res)=>{
    res.send("Comment Added");
});

router.get('/:postId',(req,res)=>{
    res.send("Comments Retrieved");
});

module.exports = router;
