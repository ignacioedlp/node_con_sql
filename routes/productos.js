var express = require("express");
var router = express.Router();
var connection = require("../conexion/conexion");

router.get("/", function (req, res, next) {
  connection.query(
    "SELECT * FROM productos",
    function (error, results, fields) {
      if (error) throw error;
      res.render("productos", { productos: results });
    }
  );

  //res.render("index", { title: "Express" });
});

module.exports = router;
