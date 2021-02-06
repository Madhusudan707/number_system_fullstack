import React, { useState } from "react";
import Navbar from "../Navbar/Navbar.jsx";
import InputBox from "../InputBox/InputBox.jsx";
import ContainedButtons from "../ContainedButtons/ContainedButtons.jsx";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import "./landing.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Landing = () => {
  const classes = useStyles();
  const [inputData, setInputData] = useState("");
  let input, id, inputBox;

  function clickHandler() {
    inputBox = document.querySelectorAll(".MuiInputBase-input");
    for (let i = 0; i < inputBox.length; i++) {
      let textBoxValue = 0;
      textBoxValue = document.getElementById(inputBox[i].id).value;
      if (i === 0 && textBoxValue !== " ") {
        //Binary to All
        //API is using in the same domain so absolute path is not necessary
        axios.get(`/B2ALL/${textBoxValue}`).then((res) => {
          document.getElementById("decimal").value = res.data.resultB2D;
          document.getElementById("octal").value = res.data.resultB2O;
          document.getElementById("hexadecimal").value = res.data.resultB2HD;

          document.getElementById("decimal-label").innerHTML = "Decimal";
          document.getElementById("octal-label").innerHTML = "Octal";
          document.getElementById("hexadecimal-label").innerHTML =
            "HexaDecimal";
        });
      } else if (i === 1 && textBoxValue !== " ") {
        //Decimal to All
        axios.get(`/D2ALL/${textBoxValue}`).then((res) => {
          document.getElementById("binary").value = res.data.resultD2B;
          document.getElementById("octal").value = res.data.resultD2O;
          document.getElementById("hexadecimal").value = res.data.resultD2HD;

          document.getElementById("binary-label").innerHTML = "Binary";
          document.getElementById("octal-label").innerHTML = "Octal";
          document.getElementById("hexadecimal-label").innerHTML =
            "HexaDecimal";
        });
      } else if (i === 2 && textBoxValue !== " ") {
        //Octal to All
        axios.get(`/O2ALL/${textBoxValue}`).then((res) => {
          document.getElementById("binary").value = res.data.resultO2B;
          document.getElementById("decimal").value = res.data.resultO2D;
          document.getElementById("hexadecimal").value = res.data.resultO2HD;

          document.getElementById("binary-label").innerHTML = "Binary";
          document.getElementById("decimal-label").innerHTML = "Decimal";
          document.getElementById("hexadecimal-label").innerHTML =
            "HexaDecimal";
        });
      } else if (i === 3 && textBoxValue !== " ") {
        //HexaDecimal to All
        axios.get(`/HD2ALL/${textBoxValue}`).then((res) => {
          document.getElementById("binary").value = res.data.resultHD2B;
          document.getElementById("decimal").value = res.data.resultHD2D;
          document.getElementById("octal").value = res.data.resultHD2O;

          document.getElementById("binary-label").innerHTML = "Binary";
          document.getElementById("decimal-label").innerHTML = "Decimal";
          document.getElementById("octal-label").innerHTML = "Octal";
        });
      }
    }
  }
  function resetHandler(e) {
    document.getElementById("binary").value = " ";
    document.getElementById("decimal").value = " ";
    document.getElementById("octal").value = " ";
    document.getElementById("hexadecimal").value = " ";

    document.getElementById("binary-label").innerHTML = "Enter Binary";
    document.getElementById("decimal-label").innerHTML = "Enter Decimal";
    document.getElementById("octal-label").innerHTML = "Enter Octal";
    document.getElementById("hexadecimal-label").innerHTML =
      "Enter HexaDecimal";
  }

  function inputHandler(event) {
    input = event.target.value;
    id = event.target.id;
  }
  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Navbar />
        </Grid>
        <Grid item xs={12}>
          <br /> <br />
          <div className="InputBoxParent">
            <InputBox
              value=" "
              id="binary"
              className="nsBox"
              inputHandler={inputHandler}
              label="Enter Binary"
            />
            <InputBox
              value=" "
              id="decimal"
              className="nsBox"
              inputHandler={inputHandler}
              label="Enter Decimal"
            />

            <InputBox
              value=" "
              id="octal"
              className="nsBox"
              inputHandler={inputHandler}
              label="Enter Octal"
            />
            <InputBox
              value=" "
              id="hexadecimal"
              className="nsBox"
              inputHandler={inputHandler}
              label="Enter HexaDecimal"
            />
          </div>
        </Grid>
        <p>{inputData}</p>
        <ContainedButtons name="SUBMIT" Handler={clickHandler} />
        <ContainedButtons name="RESET" Handler={resetHandler} />
      </Grid>
    </div>
  );
};

export default Landing;
