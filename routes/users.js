const express = require('express');
const router = express.Router();
const app = express();
const {check, validationResult} = require("express-validator");
app.use(express.json());


let users = [
    {
        name: "User 1",
        age: 30
    },
    {
        name: "User 2",
        age: 45
    },
    {
        name: "User 3",
        age: 27
    },
    {
        name: "User 4",
        age: 22
    }
];


router.get("/", (req, res) => {
    res.json(users);
})

router.get("/:id", (req, res) => {
    const id = req.params.id;
    const result = users[id - 1];
    res.json(result);
})

router.post("/", [check("name").not().isEmpty().trim()], (req, res) => {
    const newName = req.body.name;
    const newAge = req.body.age;
const errors = validationResult(req);
if (!errors.isEmpty()) {
    res.json({error: errors.array()});
} else {
    
    users.push({name: newName, age: newAge});
    res.json(users);
}
})

router.put("/:id", (req, res) => {
    const id = req.params.id;
    const updatedName = req.body.name;
    const updatedAge = req.body.age;
    
    
    users[id - 1] = {name: updatedName, age: updatedAge};
    

    res.json(users);
})


router.delete("/:id", (req, res) => {
    const id = req.params.id;
    const result = users.splice(id - 1, 1);

    res.json(result);
})
module.exports = router;