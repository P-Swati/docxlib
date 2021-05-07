const express = require("express");
let router = express.Router();
const gdrive = require('./sources/gdrive');
const digimocker = require('./sources/digimocker');

router.use(express.json());


//routes for different sources
router.use("/gdrive",gdrive);
router.use("/digimocker",digimocker);

router.get("/",(req, res) => {
    res.status(200).json({message : "sources route"});
});




module.exports = router;