

  //1. Switching Functions
//   const switchNs = (input,push) =>{
//       switch(push){
//           case "b":

//               return isBinary(input)

//       }
//   }


//   let arr,
//   length,
//   flag = false;

  //A Universal Function

//   const universalValidation = (input,s) =>{
//     let arr,length,flag

//     arr = input.split("")
//     length = arr.length;
//     for(let i =0 ; i <length;i++)
//     switch(s){
//         case "b":

//     }
//   }
//1 Binary check
const isBinary = (input) => {
  arr = input.split("");
  length = arr.length;

  for (let i = 0; i < length; i++) {
    if (arr[i] > 1 || isNaN(arr[i])) {
      flag = false;
      break;
    } else {
      flag = true;
    }
  }
  return flag;
};

//2 Decimal Check

const isDecimal = (input) => {
  arr = input.split("");
  length = arr.length;

  for (let i = 0; i < length; i++) {
    if (isNaN(arr[i])) {
      flag = false;
      console.log(arr[i]);
      break;
    } else {
      console.log(arr[i]);
      flag = true;
    }
  }
  return flag;
};

//Octal Check

const isOctal = (input) => {
  arr = input.split("");
  length = arr.length;

  for (let i = 0; i < length; i++) {
    if (arr[i] > 7 || isNaN(arr[i])) {
      flag = false;
      console.log(arr[i]);
      break;
    } else {
      console.log(arr[i]);
      flag = true;
    }
  }
  return flag;
};

//4 HexaDecimal Check

const isHexaDecimal = (input) => {
  arr = input.split("");
  length = arr.length;

  for (let i = 0; i < length; i++) {
    if (!isA2FCheck(arr[i])) {
      console.log("yes");
      if (arr[i] < 0 || isNaN(arr[i])) {
        console.log("yes");
        flag = false;
        break;
      }else{
        flag = true;
      }
    } else {
      flag = true;
    }
  }

  return flag;
};

//5 Alphabet check for HexaDecimal

const isA2FCheck = (alphabet) => {
  switch (alphabet) {
    case "a":
    case "A":
    case "b":
    case "B":
    case "c":
    case "C":
    case "d":
    case "D":
    case "e":
    case "E":
    case "F":
    case "f":
      return true;
      break;
    default:
      return false;
  }
};
module.exports = { isBinary, isDecimal, isOctal, isHexaDecimal };
