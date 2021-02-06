const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
const router = express.Router();
const convert = require("./convert");
const validation = require("./validation");
const body_parser = require("body-parser");

const port = process.env.PORT || 3000;
const DIST_DIR = path.join(__dirname, "../dist"); // NEW
const HTML_FILE = path.join(DIST_DIR, "index.html"); // NEW

app.use(cors());
app.use(express.static("../public"));
app.use(express.urlencoded({ extended: true }));
app.use(body_parser.json());
app.use(express.static(DIST_DIR));

//Home
app.get("/", (req, res) => {
  res.sendFile(HTML_FILE); // EDIT
});

//Number's Base

const base2 = 2,
  base8 = 8,
  base16 = 16;

//1. Binary to All

app.get("/B2ALL/:binary", (req, res) => {
  let binary = req.params.binary;
  let validateInput = validation.isValidNumber(binary, "b"); //"b":binary
  if (binary && validateInput) {
    res.send({
      resultB2D: convert.BinaryToDecimal(binary, base2),
      resultB2O: convert.BinaryToOctal(binary, base2),
      resultB2HD: convert.DecimalToBinary_Octal_hexaDecimal(
        convert.BinaryToDecimal(binary, base2),
        base16
      ),
    });
  } else {
    res.send({ Error: "Invalid Binary Number" });
  }
});

//2. Decimal to All

app.get("/D2ALL/:decimal", (req, res) => {
  let decimal = req.params.decimal;
  let validateInput = validation.isDecimal(decimal, "d"); //"d":decimal
  if (decimal && validateInput) {
    res.send({
      resultD2B: convert.DecimalToBinary_Octal_hexaDecimal(decimal, base2),
      resultD2O: convert.DecimalToBinary_Octal_hexaDecimal(decimal, base8),
      resultD2HD: convert.DecimalToBinary_Octal_hexaDecimal(decimal, base16),
    });
  } else {
    res.send({ Error: "Invalid Decimal Number" });
  }
});

//3 Octal to All

app.get("/O2ALL/:octal", (req, res, next) => {
  let octal = req.params.octal;
  let validateInput = validation.isOctal(octal, "o"); //"o":octal
  if (octal && validateInput) {
    res.send({
      resultO2B: convert.DecimalToBinary_Octal_hexaDecimal(
        convert.BinaryToDecimal(octal, base8),
        base2
      ),
      resultO2D: convert.BinaryToDecimal(octal, base8),
      resultO2HD: convert.DecimalToBinary_Octal_hexaDecimal(
        convert.BinaryToDecimal(octal, base8),
        base16
      ),
    });
  } else {
    res.send({ Error: "Invalid Octal Number" });
  }
});

//4 HexaDecimal to All

app.get("/HD2ALL/:hexadecimal", (req, res, next) => {
  let hexadecimal = req.params.hexadecimal;
  let validateInput = validation.isHexaDecimal(hexadecimal, "hd"); ////"hd":hexadecimal
  if (hexadecimal && validateInput) {
    res.send({
      resultHD2B: convert.DecimalToBinary_Octal_hexaDecimal(
        convert.hexadecimalToBinary(hexadecimal, base16),
        base2
      ),
      resultHD2D: convert.hexadecimalToBinary(hexadecimal, base16),
      resultHD2O: convert.DecimalToBinary_Octal_hexaDecimal(
        convert.hexadecimalToBinary(hexadecimal, base16),
        base8
      ),
    });
  } else {
    res.send({ Error: "Invalid HexaDecimal Number" });
  }
});

app.listen(port, function () {
  console.log("App listening on port: " + port);
});

module.exports = app;
