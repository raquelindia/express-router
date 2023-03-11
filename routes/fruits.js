const express = require('express');
const router = express.Router();
const app = express();
//app.use(express.json());

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
    },
];


router.get("/", (req, res) =>{
    res.json(fruits);
})

router.get("/:id", (req, res) => {
    const id = req.params.id;
    const result = fruits[id - 1];
    res.json(result);
})

module.exports = router;
