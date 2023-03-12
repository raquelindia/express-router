const express = require('express');
const router = express.Router();
const app = express();
const {check, validationResult} = require("express-validator");
app.use(express.json());


let fruits = [
    {
        name: "Apple",
        color: "Red"
    },
    {
        name: "Banana",
        color: "Yellow"
    },
    {
        name: "Kiwi",
        color: "Green"
    },
    {
        name: "Grape",
        color: "Purple"
    }
];


router.get("/", (req, res) =>{
    res.json(fruits);
})

router.get("/:id", (req, res) => {
    const id = req.params.id;
    const result = fruits[id - 1];
    res.json(result);
})

router.post("/", [check("color").not().isEmpty().trim()], (req, res) => {
    const newName = req.body.name;
    const newColor = req.body.color;
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        res.json({error: errors.array()});
    } else {
    fruits.push({name: newName, color: newColor});
    res.json(fruits);
    }
})




router.put("/:id", (req, res) => {
    const id = req.params.id;
    const updatedName = req.body.name;
    const updatedColor = req.body.color;
   

    fruits[id - 1] = { name: updatedName, color: updatedColor};;

    const updatedFruit = fruits[id - 1];

    res.json(updatedFruit);

})

router.delete("/:id", (req, res) => {
    const id = req.params.id
    const deletedFruit = fruits.splice(id -1, 1);

    res.json(deletedFruit);
})




module.exports = router;
